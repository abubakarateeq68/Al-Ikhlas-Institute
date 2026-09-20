import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Unlock, 
  Users, 
  User,
  Image as ImageIcon, 
  Upload, 
  Search, 
  Filter, 
  Phone, 
  Clock, 
  Calendar, 
  Trash2, 
  CheckCircle, 
  AlertCircle, 
  RefreshCw, 
  Eye, 
  EyeOff,
  X, 
  Plus, 
  ArrowLeft, 
  LogOut, 
  Sparkles,
  ExternalLink,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { PageView, Language, AdmissionRecord } from '../types.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { 
  fetchAdmissions, 
  updateAdmissionStatus, 
  deleteAdmission, 
  uploadCoursePoster, 
  createCourseWithPoster, 
  fetchLiveCourseUpdates, 
  deleteCourse, 
  toggleCourseActive,
  verifyAdminLogin,
  LiveCourseUpdate 
} from '../lib/supabase.ts';

interface AdminPortalProps {
  setCurrentPage: (page: PageView) => void;
  lang: Language;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ setCurrentPage, lang }) => {
  // Authentication State (Username & Password)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('ikhlas_admin_auth') === 'true';
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Active Tab: 'admissions' | 'posters'
  const [activeTab, setActiveTab] = useState<'admissions' | 'posters'>('admissions');

  // Admissions Data State
  const [admissions, setAdmissions] = useState<AdmissionRecord[]>([]);
  const [loadingAdmissions, setLoadingAdmissions] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [programFilter, setProgramFilter] = useState('all');
  const [selectedAdmission, setSelectedAdmission] = useState<AdmissionRecord | null>(null);

  // Poster Upload & Management State
  const [posters, setPosters] = useState<LiveCourseUpdate[]>([]);
  const [loadingPosters, setLoadingPosters] = useState(false);
  const [posterFile, setPosterFile] = useState<File | null>(null);
  const [posterPreview, setPosterPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState('');
  const [uploadError, setUploadError] = useState('');

  // New Poster Form Data
  const [newPosterData, setNewPosterData] = useState({
    title: '',
    title_ur: '',
    badge_ur: 'نیا کورس',
    category: 'new',
    description_ur: '',
    start_date: '',
    deadline: '',
    timing: '',
    duration: ''
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Authentication Handler with Username & Password (verified via Supabase admin_users table or fallback)
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setAuthError(lang === 'ur' ? 'براہ کرم یوزر نیم اور پاس ورڈ درج کریں۔' : 'Please enter both username and password.');
      return;
    }

    setIsLoggingIn(true);
    setAuthError('');

    try {
      const res = await verifyAdminLogin(username, password);
      if (res.success) {
        setIsAuthenticated(true);
        sessionStorage.setItem('ikhlas_admin_auth', 'true');
        if (res.user?.username) {
          sessionStorage.setItem('ikhlas_admin_user', res.user.username);
        }
        setAuthError('');
      } else {
        setAuthError(res.error || (lang === 'ur' ? 'غلط یوزر نیم یا پاس ورڈ! دوبارہ کوشش کریں۔' : 'Invalid username or password! Please try again.'));
      }
    } catch (err: any) {
      setAuthError(err?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('ikhlas_admin_auth');
    setCurrentPage('home');
    window.location.hash = '';
  };

  // Load Admissions
  const loadAdmissions = async () => {
    setLoadingAdmissions(true);
    const data = await fetchAdmissions();
    setAdmissions(data);
    setLoadingAdmissions(false);
  };

  // Load Published Posters
  const loadPosters = async () => {
    setLoadingPosters(true);
    const data = await fetchLiveCourseUpdates();
    // Filter items with posters or show all updates
    setPosters(data);
    setLoadingPosters(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadAdmissions();
      loadPosters();
    }
  }, [isAuthenticated]);

  // Handle Admission Status Change
  const handleStatusUpdate = async (id: string, newStatus: string) => {
    const res = await updateAdmissionStatus(id, newStatus);
    if (res.success) {
      setAdmissions(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
      if (selectedAdmission && selectedAdmission.id === id) {
        setSelectedAdmission(prev => prev ? { ...prev, status: newStatus } : null);
      }
    }
  };

  // Handle Admission Delete
  const handleDeleteAdmission = async (id: string, studentName: string) => {
    if (!window.confirm(lang === 'ur' ? `کیا آپ واقعی ${studentName} کا ریکارڈ ڈیلیٹ کرنا چاہتے ہیں؟` : `Are you sure you want to delete ${studentName}'s record?`)) {
      return;
    }
    const res = await deleteAdmission(id);
    if (res.success) {
      setAdmissions(prev => prev.filter(a => a.id !== id));
      if (selectedAdmission?.id === id) setSelectedAdmission(null);
    }
  };

  // Handle Poster File Selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPosterFile(file);
      const previewUrl = URL.createObjectURL(file);
      setPosterPreview(previewUrl);
      setUploadError('');
    }
  };

  // Handle Poster Upload & Publish
  const handlePublishPoster = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!posterFile) {
      setUploadError(lang === 'ur' ? 'براہِ کرم پہلے پوسٹر کی تصویر منتخب کریں۔' : 'Please select a poster image first.');
      return;
    }
    if (!newPosterData.title.trim() && !newPosterData.title_ur.trim()) {
      setUploadError(lang === 'ur' ? 'براہِ کرم کورس کا نام درج کریں۔' : 'Please enter the course title.');
      return;
    }

    setIsUploading(true);
    setUploadError('');
    setUploadSuccess('');

    try {
      // 1. Upload image to Supabase Storage
      const uploadRes = await uploadCoursePoster(posterFile);
      if (!uploadRes.success || !uploadRes.url) {
        setUploadError(uploadRes.error || 'Failed to upload image file');
        setIsUploading(false);
        return;
      }

      // 2. Insert record into course_updates table
      const createRes = await createCourseWithPoster({
        title: newPosterData.title.trim() || newPosterData.title_ur.trim(),
        title_ur: newPosterData.title_ur.trim() || newPosterData.title.trim(),
        poster_url: uploadRes.url,
        badge_ur: newPosterData.badge_ur,
        category: newPosterData.category,
        description_ur: newPosterData.description_ur,
        start_date: newPosterData.start_date,
        deadline: newPosterData.deadline,
        timing: newPosterData.timing,
        duration: newPosterData.duration
      });

      if (!createRes.success) {
        setUploadError(createRes.error || 'Failed to save course record');
        setIsUploading(false);
        return;
      }

      // Success
      setUploadSuccess(lang === 'ur' ? 'پوسٹر کامیابی سے اپلوڈ ہو گیا ہے اور ویب سائٹ پر لائیو نظر آ رہا ہے!' : 'Poster uploaded and published live on website!');
      setPosterFile(null);
      setPosterPreview(null);
      setNewPosterData({
        title: '',
        title_ur: '',
        badge_ur: 'نیا کورس',
        category: 'new',
        description_ur: '',
        start_date: '',
        deadline: '',
        timing: '',
        duration: ''
      });
      if (fileInputRef.current) fileInputRef.current.value = '';
      loadPosters();
    } catch (err: any) {
      setUploadError(err?.message || 'An unexpected error occurred during upload');
    } finally {
      setIsUploading(false);
    }
  };

  // Handle Poster Delete
  const handleDeletePoster = async (id: string, title: string) => {
    if (!window.confirm(lang === 'ur' ? `کیا آپ واقعی "${title}" کا پوسٹر ڈیلیٹ کرنا چاہتے ہیں؟` : `Delete poster for "${title}"?`)) {
      return;
    }
    const res = await deleteCourse(id);
    if (res.success) {
      setPosters(prev => prev.filter(p => p.id !== id));
    }
  };

  // Filtered Admissions List
  const filteredAdmissions = admissions.filter(item => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      item.full_name?.toLowerCase().includes(query) ||
      item.father_or_guardian_name?.toLowerCase().includes(query) ||
      item.phone?.includes(query) ||
      item.ref_number?.toLowerCase().includes(query) ||
      item.city_area?.toLowerCase().includes(query);

    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchesProgram = programFilter === 'all' || item.program === programFilter;

    return matchesSearch && matchesStatus && matchesProgram;
  });

  // Render Login Lock Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#041A10] via-[#072B1B] to-[#041A10] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border-2 border-[#ECC876]/60 shadow-2xl space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center mx-auto border border-[#ECC876]/40 shadow-lg">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-[#072B1B] font-display">
              الْإِخْلَاص ایڈمن پورٹل
            </h2>
            <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase">
              Admin Access Only • Restricted Area
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-start">
            {/* Username Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                <span>یوزر نیم (Username)</span>
                <span className="text-[10px] text-slate-400 font-normal">Default: admin</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  autoComplete="username"
                  className="w-full ps-10 pe-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#0D5C3A] focus:ring-2 focus:ring-[#0D5C3A]/20 outline-none text-sm transition-all"
                  autoFocus
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                <span>پاس ورڈ (Password)</span>
                <span className="text-[10px] text-slate-400 font-normal">Default: ikhlas2026</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="w-full ps-10 pe-11 py-3 rounded-xl border-2 border-slate-200 focus:border-[#0D5C3A] focus:ring-2 focus:ring-[#0D5C3A]/20 outline-none text-sm transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 end-0 pe-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  tabIndex={-1}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {authError && (
              <p className="text-xs text-red-600 font-bold bg-red-50 p-2.5 rounded-xl border border-red-200 text-center flex items-center justify-center gap-1.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{authError}</span>
              </p>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#041A10] via-[#072B1B] to-[#0D5C3A] hover:brightness-110 disabled:opacity-60 text-[#F5E1A4] font-extrabold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              {isLoggingIn ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-[#ECC876]" />
                  <span>تصدیق ہو رہی ہے... (Verifying...)</span>
                </>
              ) : (
                <>
                  <Unlock className="w-4 h-4 text-[#ECC876]" />
                  <span>لاگ ان کریں (Sign In)</span>
                </>
              )}
            </button>
          </form>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setCurrentPage('home');
                window.location.hash = '';
              }}
              className="text-xs text-slate-500 hover:text-[#072B1B] font-semibold flex items-center justify-center gap-1 mx-auto cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>واپس ویب سائٹ پر جائیں (Back to Website)</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-slate-800">
      
      {/* 1. TOP ADMIN BAR */}
      <header className="bg-gradient-to-r from-[#041A10] via-[#072B1B] to-[#041A10] text-white py-3.5 px-4 sm:px-8 border-b border-[#ECC876]/30 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0D5C3A] text-[#ECC876] flex items-center justify-center border border-[#ECC876]/40 shadow-sm shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-white text-base sm:text-lg">
                  الْإِخْلَاص ایڈمن پورٹل (Admin Portal)
                </h1>
                <span className="text-[10px] bg-[#ECC876] text-[#041A10] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Secret View
                </span>
              </div>
              <p className="text-[11px] text-emerald-200/80">
                داخلہ فارم مینجمنٹ و کورس پوسٹرز اپلوڈر
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                loadAdmissions();
                loadPosters();
              }}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#ECC876] border border-[#ECC876]/30 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              title="Refresh Data"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loadingAdmissions || loadingPosters ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">ریفریش</span>
            </button>

            <button
              onClick={() => {
                setCurrentPage('home');
                window.location.hash = '';
              }}
              className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 border border-white/20 transition-all cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#ECC876]" />
              <span>ویب سائٹ دیکھیں</span>
            </button>

            <button
              onClick={handleLogout}
              className="py-2 px-3 rounded-xl bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>لاگ آؤٹ</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. TAB CONTROLS & STATS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <button
              onClick={() => setActiveTab('admissions')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'admissions'
                  ? 'bg-gradient-to-r from-[#041A10] to-[#0D5C3A] text-[#F5E1A4] shadow-md'
                  : 'text-slate-600 hover:text-[#072B1B] hover:bg-slate-100'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>داخلہ فارم کی تفصیلات ({admissions.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('posters')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'posters'
                  ? 'bg-gradient-to-r from-[#041A10] to-[#0D5C3A] text-[#F5E1A4] shadow-md'
                  : 'text-slate-600 hover:text-[#072B1B] hover:bg-slate-100'
              }`}
            >
              <Upload className="w-4 h-4 text-[#ECC876]" />
              <span>نیا پوسٹر اپلوڈ کریں ({posters.length})</span>
            </button>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-2 text-xs">
            <span className="px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-xl font-bold border border-emerald-200">
              کل داخلے: {admissions.length}
            </span>
            <span className="px-3 py-1.5 bg-amber-100 text-amber-800 rounded-xl font-bold border border-amber-200">
              زیرِ غور: {admissions.filter(a => a.status === 'pending').length}
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: ADMISSIONS LIST                                                    */}
        {/* ========================================================================= */}
        {activeTab === 'admissions' && (
          <div className="py-6 space-y-6">
            
            {/* Search & Filter Bar */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="نام، فون، یا ریفرنس نمبر سے تلاش کریں..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0D5C3A] focus:ring-2 focus:ring-[#0D5C3A]/10 text-xs outline-none"
                />
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-700 font-medium outline-none cursor-pointer"
                >
                  <option value="all">تمام اسٹیٹس</option>
                  <option value="pending">زیرِ غور (Pending)</option>
                  <option value="contacted">رابطہ مکمل (Contacted)</option>
                  <option value="approved">داخلہ کنفرم (Approved)</option>
                </select>

                <select
                  value={programFilter}
                  onChange={(e) => setProgramFilter(e.target.value)}
                  className="px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-700 font-medium outline-none cursor-pointer"
                >
                  <option value="all">تمام کورسز</option>
                  <option value="tajweed">تجوید القرآن</option>
                  <option value="tafseer">فہم القرآن و تفسیر</option>
                  <option value="hifz">حفظ القرآن</option>
                  <option value="shortDarsNizami">مختصر درسِ نظامی</option>
                </select>
              </div>
            </div>

            {/* Admissions Table / Cards */}
            {loadingAdmissions ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-10 h-10 border-4 border-[#072B1B]/20 border-t-[#072B1B] rounded-full animate-spin mx-auto" />
                <p className="text-xs text-slate-500 font-bold">داخلہ فارمز لوڈ ہو رہے ہیں...</p>
              </div>
            ) : filteredAdmissions.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-2">
                <Users className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="font-bold text-slate-700 text-sm">کوئی داخلہ فارم نہیں ملا</h3>
                <p className="text-xs text-slate-500">فلٹر تبدیل کر کے یا سرچ ختم کر کے دوبارہ دیکھیں۔</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {filteredAdmissions.map((item) => {
                  const statusColors: Record<string, string> = {
                    pending: 'bg-amber-100 text-amber-900 border-amber-300',
                    reviewed: 'bg-blue-100 text-blue-900 border-blue-300',
                    contacted: 'bg-purple-100 text-purple-900 border-purple-300',
                    approved: 'bg-emerald-100 text-emerald-900 border-emerald-300',
                    rejected: 'bg-red-100 text-red-900 border-red-300'
                  };
                  const currentStatusClass = statusColors[item.status] || statusColors.pending;

                  const whatsappLink = `https://wa.me/${item.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `السلام علیکم ${item.full_name}! الْإِخْلَاص اسلامک انسٹیٹیوٹ میں آپ کے داخلہ فارم (Ref: ${item.ref_number}) کے حوالے سے رابطہ کیا جا رہا ہے۔`
                  )}`;

                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#ECC876] shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                    >
                      {/* Left Details */}
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                            {item.ref_number}
                          </span>
                          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${currentStatusClass}`}>
                            {item.status === 'pending' && 'زیرِ غور (Pending)'}
                            {item.status === 'contacted' && 'رابطہ ہو گیا (Contacted)'}
                            {item.status === 'approved' && 'منظور شدہ (Approved)'}
                            {!['pending', 'contacted', 'approved'].includes(item.status) && item.status}
                          </span>
                          <span className="text-[11px] text-slate-400">
                            {new Date(item.created_at).toLocaleDateString('ur-PK', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <h4 className="font-bold text-[#072B1B] text-base sm:text-lg">
                            {item.full_name}
                          </h4>
                          <span className="text-xs text-slate-500">
                            ولدیت / سرپرست: <strong className="text-slate-700">{item.father_or_guardian_name}</strong>
                          </span>
                          <span className="text-xs text-slate-500">
                            عمر: <strong className="text-slate-700">{item.age} سال</strong> ({item.gender === 'male' ? 'طالب علم' : 'طالبہ'})
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-1">
                          <span className="bg-[#FAF7F2] px-2.5 py-1 rounded-md border border-[#C99738]/20 font-semibold text-[#072B1B]">
                            کورس: {item.program}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#C99738]" />
                            وقت: {item.preferred_timing}
                          </span>
                          <span>شہر: {item.city_area}</span>
                        </div>
                      </div>

                      {/* Right Action Buttons */}
                      <div className="flex items-center gap-2 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
                        {/* Status Change Selector */}
                        <select
                          value={item.status}
                          onChange={(e) => handleStatusUpdate(item.id, e.target.value)}
                          className="px-2.5 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50 font-bold text-slate-700 outline-none cursor-pointer"
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="approved">Approved</option>
                        </select>

                        {/* WhatsApp Direct */}
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#072B1B] border border-[#25D366]/30 transition-colors cursor-pointer"
                          title="WhatsApp Student"
                        >
                          <WhatsAppIcon size={16} className="text-[#25D366]" />
                        </a>

                        {/* Call Direct */}
                        <a
                          href={`tel:${item.phone}`}
                          className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
                          title="Call Phone"
                        >
                          <Phone className="w-4 h-4 text-emerald-700" />
                        </a>

                        {/* View Full Modal */}
                        <button
                          onClick={() => setSelectedAdmission(item)}
                          className="px-3 py-2 rounded-xl bg-[#072B1B] hover:bg-[#0D5C3A] text-white text-xs font-bold transition-colors cursor-pointer"
                        >
                          تفصیلات
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDeleteAdmission(item.id, item.full_name)}
                          className="p-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition-colors cursor-pointer"
                          title="Delete Record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: POSTER UPLOADER & COURSES MANAGEMENT                                */}
        {/* ========================================================================= */}
        {activeTab === 'posters' && (
          <div className="py-6 space-y-10">
            
            {/* Upload Form Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#ECC876]/60 shadow-lg space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#041A10] to-[#0D5C3A] text-[#ECC876] flex items-center justify-center border border-[#ECC876]/40 shadow-xs">
                    <Upload className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#072B1B]">
                      نیا کورس پوسٹر اپلوڈ کریں (Upload & Publish Poster)
                    </h3>
                    <p className="text-xs text-slate-500">
                      یہاں اپلوڈ کیا گیا پوسٹر فوری طور پر ویب سائٹ کے "Our Courses" سیکشن میں نظر آئے گا۔
                    </p>
                  </div>
                </div>

                <Sparkles className="w-5 h-5 text-[#ECC876]" />
              </div>

              {uploadSuccess && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-2.5 text-emerald-800 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{uploadSuccess}</span>
                </div>
              )}

              {uploadError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-2.5 text-red-800 text-xs font-bold">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{uploadError}</span>
                </div>
              )}

              <form onSubmit={handlePublishPoster} className="space-y-6">
                
                {/* Image Upload Area */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    پوسٹر کی تصویر (Poster Image - JPG/PNG): *
                  </label>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* File Picker Box */}
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="flex-1 w-full p-6 border-2 border-dashed border-[#C99738]/50 hover:border-[#072B1B] rounded-2xl bg-[#FAF7F2] hover:bg-slate-50 transition-all cursor-pointer text-center space-y-2 flex flex-col items-center justify-center"
                    >
                      <ImageIcon className="w-8 h-8 text-[#C99738]" />
                      <p className="text-xs font-bold text-[#072B1B]">
                        تصویر منتخب کرنے کے لیے یہاں کلک کریں
                      </p>
                      <p className="text-[11px] text-slate-500">
                        PNG, JPG, یا WEBP تصویر منتخب کریں
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>

                    {/* Image Preview Box */}
                    {posterPreview && (
                      <div className="relative w-36 h-48 rounded-2xl overflow-hidden border-2 border-[#ECC876] shadow-md shrink-0 bg-slate-900">
                        <img 
                          src={posterPreview} 
                          alt="Poster Preview" 
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setPosterFile(null);
                            setPosterPreview(null);
                            if (fileInputRef.current) fileInputRef.current.value = '';
                          }}
                          className="absolute top-1.5 right-1.5 p-1 rounded-full bg-red-600 text-white shadow-md hover:bg-red-700"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      کورس کا نام (اردو میں): *
                    </label>
                    <input
                      type="text"
                      value={newPosterData.title_ur}
                      onChange={(e) => setNewPosterData({ ...newPosterData, title_ur: e.target.value })}
                      placeholder="مثلاً: خصوصی تجوید و ترتیل رمضان انٹینسیو"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0D5C3A] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Course Title (in English):
                    </label>
                    <input
                      type="text"
                      value={newPosterData.title}
                      onChange={(e) => setNewPosterData({ ...newPosterData, title: e.target.value })}
                      placeholder="e.g. Ramadan Tajweed & Tarteel Intensive"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0D5C3A] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      بیج / ٹیگ (Badge):
                    </label>
                    <input
                      type="text"
                      value={newPosterData.badge_ur}
                      onChange={(e) => setNewPosterData({ ...newPosterData, badge_ur: e.target.value })}
                      placeholder="مثلاً: نیا کورس / نیا بیج / داخلے جاری ہیں"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0D5C3A] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      کلاسز کا آغاز (Start Date):
                    </label>
                    <input
                      type="text"
                      value={newPosterData.start_date}
                      onChange={(e) => setNewPosterData({ ...newPosterData, start_date: e.target.value })}
                      placeholder="مثلاً: یکم رمضان المبارک / 15 تاریخ"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0D5C3A] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      داخلے کی آخری تاریخ (Deadline):
                    </label>
                    <input
                      type="text"
                      value={newPosterData.deadline}
                      onChange={(e) => setNewPosterData({ ...newPosterData, deadline: e.target.value })}
                      placeholder="مثلاً: 25 شعبان / محدود نشستیں"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0D5C3A] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      اوقات کار (Schedule / Timing):
                    </label>
                    <input
                      type="text"
                      value={newPosterData.timing}
                      onChange={(e) => setNewPosterData({ ...newPosterData, timing: e.target.value })}
                      placeholder="مثلاً: ہفتہ اور اتوار (بعد نمازِ عصر)"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0D5C3A] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    مختصر تفصیل (Description / Highlights):
                  </label>
                  <textarea
                    rows={2}
                    value={newPosterData.description_ur}
                    onChange={(e) => setNewPosterData({ ...newPosterData, description_ur: e.target.value })}
                    placeholder="کورس کی مختصر تفصیل یا اہم نکات..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0D5C3A] outline-none text-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isUploading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#041A10] via-[#072B1B] to-[#0D5C3A] text-[#F5E1A4] font-extrabold text-sm shadow-md hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Upload className={`w-4 h-4 text-[#ECC876] ${isUploading ? 'animate-bounce' : ''}`} />
                  <span>
                    {isUploading ? 'پوسٹر اپلوڈ ہو رہا ہے...' : 'پوسٹر اپلوڈ اور پبلش کریں (Upload & Publish)'}
                  </span>
                </button>
              </form>
            </div>

            {/* Published Posters List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#072B1B] text-lg">
                  موجودہ پبلش شدہ پوسٹرز ({posters.filter(p => p.poster_url).length})
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  کسی بھی پوسٹر کو ڈیلیٹ کرنے کے لیے نیچے ڈیلیٹ بٹن دبائیں
                </span>
              </div>

              {posters.filter(p => p.poster_url).length === 0 ? (
                <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500 text-xs font-bold">
                  فی الحال کوئی پوسٹر موجود نہیں ہے۔ اوپر دیے گئے فارم سے نیا پوسٹر اپلوڈ کریں۔
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posters.filter(p => p.poster_url).map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#ECC876] shadow-xs flex flex-col justify-between"
                    >
                      <div className="relative aspect-[4/5] bg-slate-900 overflow-hidden">
                        <img
                          src={item.poster_url}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#ECC876] text-[#041A10]">
                            {item.badge_ur || item.badge}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md text-white ${item.is_active ? 'bg-emerald-600' : 'bg-slate-600'}`}>
                            {item.is_active ? 'Live' : 'Hidden'}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 space-y-2">
                        <h4 className="font-bold text-[#072B1B] text-sm line-clamp-1">
                          {item.title_ur || item.title}
                        </h4>
                        {item.start_date && (
                          <p className="text-xs text-slate-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#C99738]" />
                            <span>آغاز: {item.start_date}</span>
                          </p>
                        )}

                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                          <button
                            onClick={() => toggleCourseActive(item.id, !item.is_active).then(() => loadPosters())}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                              item.is_active 
                                ? 'bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100'
                                : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                            }`}
                          >
                            {item.is_active ? 'چھپائیں (Hide)' : 'شو کریں (Show)'}
                          </button>

                          <button
                            onClick={() => handleDeletePoster(item.id, item.title_ur || item.title)}
                            className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 cursor-pointer"
                            title="Delete Poster"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 3. ADMISSION DETAIL MODAL */}
      {selectedAdmission && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          onClick={() => setSelectedAdmission(null)}
        >
          <div 
            className="max-w-2xl w-full bg-white rounded-3xl p-6 sm:p-8 border border-[#C99738]/40 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[#072B1B] border border-[#C99738]/30">
                  {selectedAdmission.ref_number}
                </span>
                <h3 className="text-xl font-bold text-[#072B1B] mt-1">
                  {selectedAdmission.full_name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedAdmission(null)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <span className="text-slate-500 font-semibold">والد یا سرپرست کا نام:</span>
                <p className="font-bold text-slate-800 text-sm">{selectedAdmission.father_or_guardian_name}</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <span className="text-slate-500 font-semibold">عمر اور جنس:</span>
                <p className="font-bold text-slate-800 text-sm">
                  {selectedAdmission.age} سال • {selectedAdmission.gender === 'male' ? 'مرد (Male)' : 'خاتون (Female)'}
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <span className="text-slate-500 font-semibold">فون نمبر:</span>
                <p className="font-bold text-slate-800 text-sm">{selectedAdmission.phone}</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <span className="text-slate-500 font-semibold">واٹس ایپ نمبر:</span>
                <p className="font-bold text-slate-800 text-sm">{selectedAdmission.whatsapp}</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <span className="text-slate-500 font-semibold">شہر / علاقہ:</span>
                <p className="font-bold text-slate-800 text-sm">{selectedAdmission.city_area}</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <span className="text-slate-500 font-semibold">منتخب کورس:</span>
                <p className="font-bold text-[#0D5C3A] text-sm">{selectedAdmission.program}</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <span className="text-slate-500 font-semibold">اوقات کار:</span>
                <p className="font-bold text-slate-800 text-sm">{selectedAdmission.preferred_timing}</p>
              </div>

              {selectedAdmission.hifz_session && (
                <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                  <span className="text-slate-500 font-semibold">حفظ سیشن:</span>
                  <p className="font-bold text-slate-800 text-sm">{selectedAdmission.hifz_session}</p>
                </div>
              )}
            </div>

            {/* Additional Info */}
            {selectedAdmission.education_background && (
              <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#C99738]/20 text-xs space-y-1">
                <span className="font-bold text-[#072B1B]">عصری تعلیمی قابلیت:</span>
                <p className="text-slate-700">{selectedAdmission.education_background}</p>
              </div>
            )}

            {selectedAdmission.previous_islamic_study && (
              <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#C99738]/20 text-xs space-y-1">
                <span className="font-bold text-[#072B1B]">سابقہ دینی تعلیم:</span>
                <p className="text-slate-700">{selectedAdmission.previous_islamic_study}</p>
              </div>
            )}

            {selectedAdmission.additional_notes && (
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                <span className="font-bold text-slate-700">اضافی نوٹس یا سوالات:</span>
                <p className="text-slate-700">{selectedAdmission.additional_notes}</p>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-bold">اسٹیٹس بدلیں:</span>
                <select
                  value={selectedAdmission.status}
                  onChange={(e) => handleStatusUpdate(selectedAdmission.id, e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs bg-white font-bold"
                >
                  <option value="pending">Pending</option>
                  <option value="contacted">Contacted</option>
                  <option value="approved">Approved</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${selectedAdmission.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
                >
                  <WhatsAppIcon size={16} />
                  <span>واٹس ایپ چیٹ</span>
                </a>
                <a
                  href={`tel:${selectedAdmission.phone}`}
                  className="px-4 py-2 rounded-xl bg-[#072B1B] text-white font-bold text-xs flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ECC876]" />
                  <span>کال کریں</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
