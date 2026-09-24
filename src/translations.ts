import { Language } from './types.ts';

export interface Translations {
  // Top bar & Brand
  instituteName: string;
  instituteCategory: string;
  instituteLocation: string;
  instituteCityCountry: string;
  phone: string;
  bismillah: string;
  motto: string;

  // Nav
  nav: {
    home: string;
    about: string;
    courses: string;
    learning: string;
    admission: string;
    contact: string;
    callInstitute: string;
    contactUs: string;
    switchLang: string;
    applyNow: string;
  };

  // Home Page
  home: {
    badge: string;
    heroHeadline: string;
    heroHeadlinePart1: string;
    heroHeadlinePart2: string;
    heroSubtext: string;
    heroBtnContact: string;
    heroBtnAdmission: string;
    heroBtnLearnMore: string;
    quickPointers: {
      sincere: string;
      values: string;
      welcoming: string;
    };
    heroImageCaptionTitle: string;
    heroImageCaptionSub: string;

    // Welcome Section & Official Introduction
    welcomeBadge: string;
    welcomeTitle: string;
    welcomeFoundation: string;
    welcomeIntroP1: string;
    welcomeProgramsTitle: string;
    welcomeProgramsList: Array<{
      title: string;
      desc: string;
      badge?: string;
    }>;
    welcomeIntroP2: string;
    welcomeMotto: string;
    welcomeText: string;
    welcomeReadMore: string;

    // Why Choose Us
    whyBadge: string;
    whyTitle: string;
    whySubtitle: string;
    whyCards: Array<{
      title: string;
      description: string;
    }>;

    // Learning Section
    learningBadge: string;
    learningTitle: string;
    learningText1: string;
    learningText2: string;
    learningBtn: string;

    // CTA
    ctaTitle: string;
    ctaSubtext: string;
    ctaBtn: string;
    ctaAdmissionBtn: string;

    // Contact Preview
    contactPreviewLocation: string;
    callNow: string;
    sendMessage: string;
  };

  // About Page
  about: {
    pageBadge: string;
    pageTitle: string;
    pageSubtitle: string;
    purposeBadge: string;
    purposeTitle: string;
    purposeText1: string;
    purposeText2: string;
    purposeHighlight: string;
    libraryCaptionTitle: string;
    libraryCaptionSub: string;

    missionTitle: string;
    missionText: string;
    missionCards: {
      knowledgeTitle: string;
      knowledgeDesc: string;
      characterTitle: string;
      characterDesc: string;
      growthTitle: string;
      growthDesc: string;
    };

    valuesBadge: string;
    valuesTitle: string;
    valuesSubtitle: string;
    valuesList: Array<{
      title: string;
      description: string;
    }>;

    commitmentTitle: string;
    commitmentText: string;
    exploreProgramsBtn: string;
    admissionBtn: string;
    callBtnText: string;
  };

  // Learning Page
  learning: {
    pageBadge: string;
    pageTitle: string;
    pageSubtitle: string;
    mainBadge: string;
    mainTitle: string;
    mainText1: string;
    infoBoxTitle: string;
    infoBoxText: string;
    askProgramsBtn: string;
    admissionBtn: string;
    callBtnText: string;
    spaceTitle: string;
    spaceDesc: string;

    coursesBadge: string;
    coursesTitle: string;
    coursesSubtitle: string;
    coursesEnrollBtn: string;
    coursesWhatsappBtn: string;
    courses: Array<{
      id: string;
      title: string;
      subtitle: string;
      description: string;
      duration: string;
      mode: string;
      badge: string;
      features: Array<string>;
    }>;

    approachBadge: string;
    approachTitle: string;
    approachSubtitle: string;
    pillars: Array<{
      title: string;
      description: string;
    }>;

    stepsTitle: string;
    stepsSubtitle: string;
    steps: Array<{
      number: string;
      title: string;
      desc: string;
    }>;
  };

  // Admission Page
  admission: {
    pageBadge: string;
    pageTitle: string;
    pageSubtitle: string;
    formNoticeTitle: string;
    formNoticeDesc: string;
    
    sectionStudent: string;
    sectionGuardian: string;
    sectionProgram: string;
    sectionEducation: string;
    sectionDeclaration: string;

    fullNameLabel: string;
    fullNamePlaceholder: string;
    fatherNameLabel: string;
    fatherNamePlaceholder: string;
    genderLabel: string;
    genderMale: string;
    genderFemale: string;
    genderSelectPlaceholder: string;
    ageLabel: string;
    agePlaceholder: string;
    
    phoneLabel: string;
    phonePlaceholder: string;
    whatsappLabel: string;
    whatsappPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    cityAreaLabel: string;
    cityAreaPlaceholder: string;

    programLabel: string;
    programSelectPlaceholder: string;
    programs: {
      tajweed: string;
      tafseer: string;
      hifz: string;
      shortDarsNizami: string;
      fahmDeen: string;
      shortCourses: string;
      weeklyDarsQuran: string;
      general: string;
    };

    timingLabel: string;
    timingOptions: {
      morning: string;
      afternoon: string;
      evening: string;
      weekend: string;
      flexible: string;
    };

    educationBackgroundLabel: string;
    educationBackgroundPlaceholder: string;
    previousIslamicStudyLabel: string;
    previousIslamicStudyPlaceholder: string;
    additionalNotesLabel: string;
    additionalNotesPlaceholder: string;

    termsDeclaration: string;
    submitBtn: string;
    submittingBtn: string;
    resetBtn: string;

    // Validation
    validationRequired: string;
    validationName: string;
    validationFather: string;
    validationGender: string;
    validationAge: string;
    validationPhone: string;
    validationCity: string;
    validationProgram: string;
    validationTerms: string;

    // Success Slip
    successBadge: string;
    successTitle: string;
    successDesc: string;
    refNoLabel: string;
    dateLabel: string;
    statusLabel: string;
    statusValue: string;
    applicantSummaryTitle: string;
    nextStepsTitle: string;
    nextSteps: Array<string>;
    printBtn: string;
    newApplicationBtn: string;
    instituteCallBanner: string;
  };

  // Contact Page
  contact: {
    pageBadge: string;
    pageTitle: string;
    pageSubtitle: string;
    hearFromYouBadge: string;
    hearFromYouTitle: string;
    hearFromYouText: string;
    phoneLabel: string;
    locationLabel: string;
    noteTitle: string;
    noteText: string;

    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneEmailLabel: string;
    phoneEmailPlaceholder: string;
    subjectLabel: string;
    subjectOptions: {
      general: string;
      programs: string;
      family: string;
      other: string;
    };
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    sendAnotherBtn: string;
    validationName: string;
    validationContact: string;
    validationMsg: string;

    mapTitle: string;
    mapSubtitle: string;
    mapBadge: string;
  };

  // Courses Page
  coursesPage: {
    badge: string;
    title: string;
    subtitle: string;
    updatesBadge: string;
    updatesTitle: string;
    updatesSubtitle: string;
    filterAll: string;
    filterNew: string;
    filterRegular: string;
    filterShort: string;
    applyNow: string;
    inquireWhatsApp: string;
    durationLabel: string;
    scheduleLabel: string;
    modeLabel: string;
    keyFeatures: string;
    newBadge: string;
    upcomingBadge: string;
    admissionsOpenBadge: string;
    deadlineLabel: string;
    startDateLabel: string;
    noCoursesFound: string;
  };

  // Footer
  footer: {
    motto: string;
    desc: string;
    navTitle: string;
    contactTitle: string;
    reachOutBtn: string;
    applyAdmissionBtn: string;
    copyright: string;
    backToTop: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    instituteName: "Al-Ikhlas Islamic Institute",
    instituteCategory: "Islamic Educational Institute",
    instituteLocation: "Lahore, Pakistan",
    instituteCityCountry: "Lahore, Pakistan",
    phone: "+92 309 4884183",
    bismillah: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    motto: "“Learning. Character. Faith.”",

    nav: {
      home: "Home",
      about: "About",
      courses: "Our Courses",
      learning: "Learning",
      admission: "Admission Form",
      contact: "Contact",
      callInstitute: "Call Institute",
      contactUs: "Contact Us",
      switchLang: "اردو",
      applyNow: "Apply Now",
    },

    home: {
      badge: "Lahore, Pakistan • Islamic Educational Institute",
      heroHeadline: "Nurturing Hearts Through Islamic Knowledge",
      heroHeadlinePart1: "Nurturing Hearts Through",
      heroHeadlinePart2: "Islamic Knowledge",
      heroSubtext: "Welcome to Al-Ikhlas Islamic Institute — a place dedicated to learning, understanding, and living the teachings of Islam in Lahore, Pakistan.",
      heroBtnContact: "Contact Us",
      heroBtnAdmission: "Online Admission Form",
      heroBtnLearnMore: "Learn More",
      quickPointers: {
        sincere: "Sincere Learning",
        values: "Values & Character",
        welcoming: "Welcoming Setting",
      },
      heroImageCaptionTitle: "Al-Ikhlas Islamic Institute",
      heroImageCaptionSub: "Lahore, Pakistan • Admissions Open",

      welcomeBadge: "About The Institute",
      welcomeTitle: "Introduction to Al-Ikhlas Islamic Institute",
      welcomeFoundation: "Established: Thursday, June 27, 2024",
      welcomeIntroP1: "Al-Ikhlas Islamic Institute is an Islamic educational and training institution, established on Thursday, June 27, 2024. The institute's mission is to disseminate the teachings of the Holy Quran, Islamic understanding, and sacred sciences, while nurturing the moral and spiritual character of male and female students.",
      welcomeProgramsTitle: "Featured Educational & Training Programs",
      welcomeProgramsList: [
        { title: "Tajweed-ul-Quran", desc: "Mastering accurate Quranic pronunciation, phonetics and melodious recitation.", badge: "Foundational" },
        { title: "18-Month Quran Hifz", desc: "Structured, accelerated Quran memorization with dedicated supervision.", badge: "18 Months" },
        { title: "2-Year Quran Translation & Tafseer", desc: "Comprehensive study and in-depth commentary of the entire Holy Quran.", badge: "2 Years" },
        { title: "2-Year Short Dars-e-Nizami", desc: "Foundational Arabic grammar, Fiqh, Hadith, and Islamic jurisprudence.", badge: "2 Years" },
        { title: "40-Day Fahm-e-Deen Course", desc: "Essential beliefs, daily practical rulings, and spiritual life skills.", badge: "40 Days" },
        { title: "Summer Course", desc: "Special seasonal enrichment for youth and children during school breaks.", badge: "Seasonal" },
        { title: "Weekly Dars-e-Quran", desc: "Open community Quran study sessions to deepen connection with Quran & Sunnah.", badge: "Weekly" },
      ],
      welcomeIntroP2: "Through the cultivation of knowledge, righteous action, and noble character, Al-Ikhlas Islamic Institute is actively dedicated to shaping a righteous, morally upright, and faith-centered society.",
      welcomeMotto: "“Let us illuminate the lamp of knowledge with sincerity.”",
      welcomeText: "Al-Ikhlas Islamic Institute is dedicated to providing a welcoming environment for Islamic learning and personal growth. Our aim is to encourage the pursuit of beneficial knowledge and help learners develop a stronger connection with their faith and Islamic values.",
      welcomeReadMore: "Read more about our mission & values",

      whyBadge: "Core Principles",
      whyTitle: "Why Choose Al-Ikhlas Islamic Institute",
      whySubtitle: "Rooted in sincerity, respectful guidance, and a welcoming learning environment.",
      whyCards: [
        {
          title: "Islamic Knowledge",
          description: "Encouraging meaningful learning and understanding of Islamic teachings."
        },
        {
          title: "Values & Character",
          description: "Promoting good character, sincerity, respect, and responsible living."
        },
        {
          title: "Welcoming Environment",
          description: "A respectful and supportive environment for learners."
        },
        {
          title: "Community & Growth",
          description: "Encouraging continuous learning and spiritual development."
        }
      ],

      learningBadge: "Educational Opportunities",
      learningTitle: "Begin Your Journey of Islamic Learning",
      learningText1: "Whether you are seeking foundational understanding, personal spiritual growth, or want to explore learning opportunities in Lahore, we invite you to reach out to Al-Ikhlas Islamic Institute.",
      learningText2: "Please submit your admission application or contact the institute to learn about currently available educational opportunities and schedules.",
      learningBtn: "Online Admission Form",

      ctaTitle: "Take the Next Step in Your Learning Journey",
      ctaSubtext: "Ready to join or have questions about learning opportunities at Al-Ikhlas Islamic Institute? Submit your admission form or get in touch with us today.",
      ctaBtn: "Contact Us",
      ctaAdmissionBtn: "Submit Admission Form",

      contactPreviewLocation: "Lahore, Pakistan",
      callNow: "Call Now",
      sendMessage: "Send a Message",
    },

    about: {
      pageBadge: "About The Institute",
      pageTitle: "About Al-Ikhlas Islamic Institute",
      pageSubtitle: "A sanctuary for Islamic education, personal reflection, and moral excellence based in Lahore, Pakistan.",
      purposeBadge: "Our Purpose",
      purposeTitle: "Dedicated to Sincere Learning & Authentic Understanding",
      purposeText1: "Al-Ikhlas Islamic Institute was established in Lahore, Pakistan, to serve as a beacon of Islamic learning and personal development. We believe that authentic Islamic education touches both the intellect and the heart, guiding individuals toward sincere worship, high moral character, and constructive community life.",
      purposeText2: "Our institute welcomes individuals and families who desire to deepen their relationship with Allah (SWT) and build a firm foundation in Islamic principles through respectful and supportive study.",
      purposeHighlight: "Located in the historic city of Lahore, fostering knowledge and spiritual growth.",
      libraryCaptionTitle: "Al-Ikhlas Islamic Institute",
      libraryCaptionSub: "“Seeking beneficial knowledge with sincerity and dedication.”",

      missionTitle: "Our Mission",
      missionText: "“To encourage the pursuit of beneficial Islamic knowledge, foster noble character, and help learners cultivate a deeper, more sincere connection with their faith and Islamic values in everyday life.”",
      missionCards: {
        knowledgeTitle: "Knowledge",
        knowledgeDesc: "Encouraging understanding rooted in timeless Islamic wisdom.",
        characterTitle: "Character",
        characterDesc: "Promoting integrity, sincerity, humility, and good conduct.",
        growthTitle: "Growth",
        growthDesc: "Inspiring continuous personal and spiritual betterment.",
      },

      valuesBadge: "Foundational Pillars",
      valuesTitle: "Our Guiding Values",
      valuesSubtitle: "Principles that direct our educational efforts and community atmosphere.",
      valuesList: [
        {
          title: "Sincerity (Al-Ikhlas)",
          description: "Approaching all learning and teaching with pure intention, seeking beneficial understanding and spiritual betterment."
        },
        {
          title: "Beneficial Knowledge ('Ilm Nafi')",
          description: "Prioritizing knowledge that enriches the intellect, purifies the heart, and translates into righteous actions."
        },
        {
          title: "Noble Character (Akhlaq)",
          description: "Instilling humility, respect, honesty, patience, and compassion in all aspects of personal and communal life."
        },
        {
          title: "Welcoming & Respectful",
          description: "Fostering an inclusive and supportive environment where learners of all backgrounds feel encouraged to grow."
        }
      ],

      commitmentTitle: "Our Commitment to Islamic Learning",
      commitmentText: "We are dedicated to providing clear, accessible, and respectful learning opportunities for our community in Lahore and beyond.",
      exploreProgramsBtn: "Explore Learning Opportunities",
      admissionBtn: "Apply for Admission",
      callBtnText: "Call +92 309 4884183",
    },

    learning: {
      pageBadge: "Educational Inquiries",
      pageTitle: "Learning at Al-Ikhlas Islamic Institute",
      pageSubtitle: "Discover opportunities for beneficial Islamic education in a supportive and welcoming environment in Lahore, Pakistan.",
      mainBadge: "Educational Opportunities",
      mainTitle: "Inquire About Current & Upcoming Learning Opportunities",
      mainText1: "At Al-Ikhlas Islamic Institute, we are committed to facilitating beneficial knowledge and spiritual development for our learners. We believe in providing an environment that fosters genuine understanding, reflection, and good character.",
      infoBoxTitle: "Program Availability & Registration",
      infoBoxText: "For detailed information regarding current learning opportunities, upcoming sessions, registration details, or tailored educational inquiries, please fill out our admission form or contact our institute directly.",
      askProgramsBtn: "Fill Admission Form",
      admissionBtn: "Online Admission",
      callBtnText: "Call +92 309 4884183",
      spaceTitle: "A Welcoming Space in Lahore",
      spaceDesc: "Submit an admission form or contact us to learn more about how to join our learning community and participate in our educational activities.",

      coursesBadge: "Offered Programs & Courses",
      coursesTitle: "Comprehensive Islamic Learning Curriculum",
      coursesSubtitle: "Explore our specialized courses in Quranic studies, Islamic sciences, character building, and weekly circles in Lahore.",
      coursesEnrollBtn: "Apply / Online Admission",
      coursesWhatsappBtn: "WhatsApp Inquiries",
      courses: [
        {
          id: "tajweed",
          title: "تجوید القرآن",
          subtitle: "Tajweed-ul-Quran (Phonetics & Articulation)",
          description: "Comprehensive training in accurate Quranic recitation, Makhaarij (articulation points), and Sifaat (characteristics of letters) with individual attention.",
          duration: "3 to 6 Months",
          mode: "Online & On-Campus | Morning / Evening",
          badge: "Beginner to Advanced",
          features: ["Rules of Tajweed", "Makharij & Articulation", "Melodious Recitation", "Daily 1-on-1 Practice"]
        },
        {
          id: "tafseer",
          title: "تفسیر القرآن",
          subtitle: "Tafseer-ul-Quran (Translation & Exegesis)",
          description: "Word-by-word and contextual translation, profound explanation of Quranic meanings, historical context (Asbab an-Nuzul), and life-application guidance.",
          duration: "1 to 2 Years",
          mode: "Online & On-Campus | Regular & Weekend",
          badge: "Quranic Wisdom",
          features: ["Word-by-Word Translation", "Authentic Classical Tafseer", "Contemporary Reflections", "Tadabbur & Application"]
        },
        {
          id: "hifz",
          title: "حفظ القرآن",
          subtitle: "Hifz-ul-Quran (Full Quran Memorization)",
          description: "Structured memorization program focusing on precision, strong retention (Manzil revision), Tajweed discipline, and continuous spiritual monitoring.",
          duration: "2 to 3 Years",
          mode: "Full-Time & Flexible Shifts",
          badge: "Memorization Track",
          features: ["Daily Lesson & Retention Tracking", "Tajweed-Accurate Hifz", "Dedicated Teacher Supervision", "Monthly Progress Reviews"]
        },
        {
          id: "shortDarsNizami",
          title: "شارٹ درس نظامی",
          subtitle: "Short Dars-e-Nizami (Foundational Islamic Studies)",
          description: "Condensed, high-yield traditional curriculum covering Arabic Grammar (Nahw & Sarf), Islamic Jurisprudence (Fiqh), Usul, Hadith terminology, and Aqeedah.",
          duration: "1 to 2 Years",
          mode: "Online & Weekend / Evening Classes",
          badge: "Scholarly Foundations",
          features: ["Arabic Grammar (Nahw & Sarf)", "Islamic Law & Fiqh", "Hadith & Prophetic Sunnah", "Tailored for Students & Professionals"]
        },
        {
          id: "fahmDeen",
          title: "فہم دین کورس",
          subtitle: "Fahm-e-Deen Course (Essential Islam for Everyone)",
          description: "Essential knowledge course designed for daily living: correct beliefs (Aqeedah), ritual purity (Taharah), prayer (Salah), Seerah, ethics, and halal/haram guidelines.",
          duration: "3 to 6 Months",
          mode: "Flexible Evening & Weekend Batches",
          badge: "Core Practical Knowledge",
          features: ["Sound Islamic Beliefs", "Taharah & Prayer Rules", "Seerah of Prophet Muhammad ﷺ", "Ethical & Social Conduct"]
        },
        {
          id: "shortCourses",
          title: "شارٹس کورسز",
          subtitle: "Short Modular Courses & Topical Workshops",
          description: "Focused short-term workshops on topics such as Business Ethics (Fiqh al-Mu'amalat), Parenting in Islam, Family Life, and Spoken Quranic Arabic.",
          duration: "2 to 4 Weeks",
          mode: "Interactive Webinars & Workshops",
          badge: "Specialized Workshops",
          features: ["Topical Fiqh Masterclasses", "Spoken Arabic Basics", "Islamic Family & Parenting", "Certificate of Completion"]
        },
        {
          id: "weeklyDarsQuran",
          title: "ہفتہ وار درسِ قرآن",
          subtitle: "Weekly Dars-e-Quran (Community Study Circle)",
          description: "Accessible, heart-touching weekly Quranic lecture and interactive study gathering for community members, youth, and families in Lahore.",
          duration: "Ongoing Weekly Circle",
          mode: "Weekly Session (Weekend / Post-Maghrib)",
          badge: "Open Community Circle",
          features: ["Open to Public & Families", "Interactive Q&A Session", "Spiritual & Ethical Upliftment", "No Prior Prerequisites"]
        }
      ],

      approachBadge: "Our Educational Approach",
      approachTitle: "How We Approach Islamic Education",
      approachSubtitle: "Guided by sincerity, authenticity, and practical implementation in life.",
      pillars: [
        {
          title: "Foundational & Beneficial Knowledge",
          description: "Structured to nurture genuine comprehension of Islamic principles, ethics, and practices."
        },
        {
          title: "Personal & Spiritual Enrichment",
          description: "Encouraging reflection, spiritual purification, and applying values in daily interactions."
        },
        {
          title: "Respectful & Welcoming Atmosphere",
          description: "A supportive environment where every question is treated with care, patience, and dignity."
        }
      ],

      stepsTitle: "How to Enroll & Begin Learning",
      stepsSubtitle: "We make it simple and convenient for prospective learners and families in Lahore to get started.",
      steps: [
        {
          number: "1",
          title: "Fill Admission Form",
          desc: "Complete the online admission form with your personal details and learning preferences."
        },
        {
          number: "2",
          title: "Review & Discussion",
          desc: "Our institute reviews your application and reaches out via telephone or WhatsApp to discuss timings and study plan."
        },
        {
          number: "3",
          title: "Commence Studies",
          desc: "Join your designated learning group and begin your journey of authentic Islamic knowledge."
        }
      ]
    },

    admission: {
      pageBadge: "Admissions Open",
      pageTitle: "Online Admission & Enrollment Form",
      pageSubtitle: "Begin your journey of authentic Islamic learning with Al-Ikhlas Islamic Institute, Lahore. Please fill out the registration form below.",
      formNoticeTitle: "Important Registration Notice",
      formNoticeDesc: "Please provide accurate contact details so our administration team in Lahore can reach out to confirm your enrollment, schedule, and study arrangements.",
      
      sectionStudent: "1. Student Information",
      sectionGuardian: "2. Guardian & Contact Details",
      sectionProgram: "3. Course Selection & Preferred Schedule",
      sectionEducation: "4. Educational Background",
      sectionDeclaration: "5. Sincerity & Commitment Declaration",

      fullNameLabel: "Full Name of Student",
      fullNamePlaceholder: "e.g. Muhammad Ahmad",
      fatherNameLabel: "Father's / Guardian's Name",
      fatherNamePlaceholder: "e.g. Tariq Mehmood",
      genderLabel: "Gender",
      genderMale: "Male (مرد)",
      genderFemale: "Female (خاتون)",
      genderSelectPlaceholder: "Select Gender",
      ageLabel: "Age (Years)",
      agePlaceholder: "e.g. 18",
      
      phoneLabel: "Primary Phone Number",
      phonePlaceholder: "e.g. 0309 4884183",
      whatsappLabel: "WhatsApp Number (if different)",
      whatsappPlaceholder: "e.g. 0300 1234567",
      emailLabel: "Email Address (Optional)",
      emailPlaceholder: "e.g. applicant@example.com",
      cityAreaLabel: "Area / Residential Address in Lahore",
      cityAreaPlaceholder: "e.g. Gulberg / Model Town / Johar Town, Lahore",

      programLabel: "Desired Learning Program / Field of Study",
      programSelectPlaceholder: "-- Select Desired Program --",
      programs: {
        tajweed: "Tajweed-ul-Quran (تجوید القرآن)",
        tafseer: "Tafseer-ul-Quran (تفسیر القرآن)",
        hifz: "Hifz-ul-Quran (حفظ القرآن الکریم)",
        shortDarsNizami: "Short Dars-e-Nizami (شارٹ درس نظامی)",
        fahmDeen: "Fahm-e-Deen Course (فہم دین کورس)",
        shortCourses: "Short Modular Courses (شارٹس کورسز)",
        weeklyDarsQuran: "Weekly Dars-e-Quran Circle (ہفتہ وار درسِ قرآن)",
        general: "General Islamic Inquiry & Guidance (عمومی اسلامی رہنمائی)"
      },

      timingLabel: "Preferred Timing / Shift",
      timingOptions: {
        morning: "Morning Shift (صبح کے اوقات)",
        afternoon: "Afternoon Shift (دوپہر کے اوقات)",
        evening: "Evening Shift (شام کے اوقات)",
        weekend: "Weekend Only (ہفتہ و اتوار)",
        flexible: "Flexible / Any Suitable Timing (کوئی بھی مناسب وقت)"
      },

      educationBackgroundLabel: "Current Academic Qualification",
      educationBackgroundPlaceholder: "e.g. Matric / FSc / Bachelor's / Master's / School Student",
      previousIslamicStudyLabel: "Previous Islamic Education / Knowledge (if any)",
      previousIslamicStudyPlaceholder: "e.g. Completed Nazra Quran, basic Urdu/Arabic reading, beginner, etc.",
      additionalNotesLabel: "Special Notes, Goals or Questions",
      additionalNotesPlaceholder: "Share any particular goals, timings preferences, or family member enrollment details...",

      termsDeclaration: "I sincerely declare that the information provided is correct, and I intend to pursue Islamic learning with dedication, respect, and sincerity (Al-Ikhlas).",
      submitBtn: "Submit Admission Form",
      submittingBtn: "Submitting Application...",
      resetBtn: "Clear Form",

      // Validation
      validationRequired: "This field is required.",
      validationName: "Please enter the student's full name.",
      validationFather: "Please enter father or guardian name.",
      validationGender: "Please select gender.",
      validationAge: "Please enter student age.",
      validationPhone: "Please enter a valid phone number.",
      validationCity: "Please enter your area or city address.",
      validationProgram: "Please select a desired learning program.",
      validationTerms: "Please accept the sincerity and commitment declaration to proceed.",

      // Success Slip
      successBadge: "Application Submitted Successfully",
      successTitle: "Admission Registration Received",
      successDesc: "Jazakumullahu Khairan. Your admission form has been received by Al-Ikhlas Islamic Institute, Lahore.",
      refNoLabel: "Application Reference ID",
      dateLabel: "Submission Date",
      statusLabel: "Status",
      statusValue: "Pending Review & Verification",
      applicantSummaryTitle: "Applicant Summary",
      nextStepsTitle: "Next Steps for Enrollment:",
      nextSteps: [
        "Our academic coordinator in Lahore will review your selected program and schedule preferences.",
        "You will receive a call or WhatsApp message on your provided number (+92 309 4884183 / administration) within 24–48 hours.",
        "A brief introductory assessment/orientation session will be scheduled to finalize your timing and learning track.",
        "For immediate inquiries, feel free to call +92 309 4884183 directly."
      ],
      printBtn: "Print Application Slip",
      newApplicationBtn: "Submit Another Admission Form",
      instituteCallBanner: "Need help with your application? Call our Lahore office directly:"
    },

    contact: {
      pageBadge: "Get In Touch",
      pageTitle: "Contact Al-Ikhlas Islamic Institute",
      pageSubtitle: "We are here to answer your questions and assist you on your journey of Islamic learning.",
      hearFromYouBadge: "Open Communication",
      hearFromYouTitle: "We’d Love to Hear From You",
      hearFromYouText: "Whether you have questions about Islamic learning, want to know more about current opportunities, or need assistance, please feel free to reach out. We look forward to connecting with you.",
      phoneLabel: "Telephone",
      locationLabel: "Location",
      noteTitle: "Visiting & Program Inquiries",
      noteText: "To inquire about learning opportunities, program schedules, or visiting arrangements in Lahore, please call us directly or submit your query via the contact form.",

      formTitle: "Send Us a Message",
      formSubtitle: "Fill out the form below and we will get back to you promptly regarding your inquiry.",
      nameLabel: "Your Full Name",
      namePlaceholder: "e.g. Muhammad Ahmad",
      phoneEmailLabel: "Phone Number or Email",
      phoneEmailPlaceholder: "e.g. +92 300 1234567 or yourname@example.com",
      subjectLabel: "Inquiry Subject",
      subjectOptions: {
        general: "General Inquiry",
        programs: "Available Learning Opportunities",
        family: "Student & Family Inquiries",
        other: "Other Questions"
      },
      messageLabel: "Your Message or Question",
      messagePlaceholder: "Please share your questions or what you would like to learn about...",
      submitBtn: "Submit Inquiry",
      submittingBtn: "Sending Message...",
      successTitle: "Message Received",
      successDesc: "Thank you for contacting Al-Ikhlas Islamic Institute. We appreciate your interest in Islamic learning and will respond to your inquiry shortly.",
      sendAnotherBtn: "Send Another Message",
      validationName: "Please enter your full name.",
      validationContact: "Please enter your phone number or email address.",
      validationMsg: "Please enter your message or question.",

      mapTitle: "Location: Lahore, Pakistan",
      mapSubtitle: "Al-Ikhlas Islamic Institute • Serving learners and families across Lahore",
      mapBadge: "Lahore, Punjab, Pakistan",
    },

    coursesPage: {
      badge: "Curriculum & Programs",
      title: "Our Courses & Academic Programs",
      subtitle: "Explore our comprehensive Islamic learning programs, newly launched batches, and timely course announcements.",
      updatesBadge: "Latest Announcements",
      updatesTitle: "New Courses & Live Updates",
      updatesSubtitle: "Stay informed about newly announced batches, special workshops, and registration deadlines.",
      filterAll: "All Courses",
      filterNew: "New & Upcoming",
      filterRegular: "Regular Programs",
      filterShort: "Short Courses",
      applyNow: "Apply For Admission",
      inquireWhatsApp: "Inquire on WhatsApp",
      durationLabel: "Duration",
      scheduleLabel: "Schedule",
      modeLabel: "Format",
      keyFeatures: "Key Highlights",
      newBadge: "New Course",
      upcomingBadge: "Upcoming",
      admissionsOpenBadge: "Admissions Open",
      deadlineLabel: "Enrollment Deadline",
      startDateLabel: "Starting Date",
      noCoursesFound: "No courses found matching this category.",
    },

    footer: {
      motto: "“Learning. Character. Faith.”",
      desc: "Dedicated to learning, understanding, and living the teachings of Islam. Providing a peaceful and welcoming environment for personal growth and beneficial knowledge.",
      navTitle: "Navigation",
      contactTitle: "Contact Details",
      reachOutBtn: "Reach Out Today",
      applyAdmissionBtn: "Online Admission Form",
      copyright: "© 2026 Al-Ikhlas Islamic Institute. All rights reserved.",
      backToTop: "Back to top",
    }
  },

  ur: {
    instituteName: "الاخلاص اسلامک انسٹیٹیوٹ",
    instituteCategory: "اسلامی تعلیمی ادارہ",
    instituteLocation: "لاہور، پاکستان",
    instituteCityCountry: "لاہور، پاکستان",
    phone: "923094884183+",
    bismillah: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    motto: "”تعلیم • اخلاق • ایمان“",

    nav: {
      home: "صفحۂ اول",
      about: "ہمارے بارے میں",
      courses: "ہمارے کورسز",
      learning: "تعلیم و تدریس",
      admission: "داخلہ فارم",
      contact: "رابطہ کریں",
      callInstitute: "کال کریں",
      contactUs: "رابطہ کریں",
      switchLang: "English",
      applyNow: "داخلہ لیں",
    },

    home: {
      badge: "لاہور، پاکستان • اسلامی تعلیمی ادارہ",
      heroHeadline: "اسلامی تعلیمات کے ذریعے دلوں کی نشوونما",
      heroHeadlinePart1: "اسلامی تعلیمات کے ذریعے",
      heroHeadlinePart2: "دلوں کی نشوونما و تزکیہ",
      heroSubtext: "الاخلاص اسلامک انسٹیٹیوٹ لاہور میں خوش آمدید — ایک ایسا ادارہ جو اسلامی تعلیمات کو سیکھنے، سمجھنے اور ان پر عمل کرنے کے لیے وقف ہے۔",
      heroBtnContact: "رابطہ کریں",
      heroBtnAdmission: "آن لائن داخلہ فارم پُر کریں",
      heroBtnLearnMore: "مزید جانیے",
      quickPointers: {
        sincere: "مخلصانہ تعلیم",
        values: "اخلاق و اقدار",
        welcoming: "پُرسکون ماحول",
      },
      heroImageCaptionTitle: "الاخلاص اسلامک انسٹیٹیوٹ",
      heroImageCaptionSub: "لاہور، پاکستان • داخلے جاری ہیں",

      welcomeBadge: "ادارے کا تعارف و مشن",
      welcomeTitle: "الاخلاص اسلامک انسٹیٹیوٹ کا جامع تعارف",
      welcomeFoundation: "آغاز: 27 جون 2024ء بروز جمعرات",
      welcomeIntroP1: "الاخلاص اسلامک انسٹیٹیوٹ ایک دینی و تعلیمی ادارہ ہے، جس کا آغاز 27 جون 2024ء بروز جمعرات سے ہوا۔ ادارے کا مقصد قرآنِ کریم کی تعلیم، فہمِ دین اور اسلامی علوم کو عام کرتے ہوئے طلبہ و طالبات کی دینی و اخلاقی تربیت کرنا ہے۔",
      welcomeProgramsTitle: "ادارے کے خصوصی تعلیمی و تربیتی کورسز",
      welcomeProgramsList: [
        { title: "تجوید القرآن", desc: "قرآنِ مجید کو درست مخارج، تجوید اور حسنِ ترتیل کے ساتھ پڑھنا۔", badge: "بنیادی" },
        { title: "18 ماہ میں حفظِ قرآن", desc: "مخصوص و منظم تدریسی نظام کے تحت صرف 18 ماہ میں حفظِ کلامِ پاک۔", badge: "18 ماہ" },
        { title: "2 سالہ ترجمہ و تفسیر کورس", desc: "مکمل قرآنِ کریم کا 2 سالہ باقاعدہ فہم اور مفصل ترجمہ و تفسیر۔", badge: "2 سالہ" },
        { title: "2 سالہ شارٹ درسِ نظامی", desc: "بنیادی عربی گرامر، فقہ، حدیث، عقائد اور ضروری علومِ اسلامیہ۔", badge: "2 سالہ" },
        { title: "40 روزہ فہمِ دین کورس", desc: "ضروری دینی مسائل، بنیادی عقائد اور عبادات و طہارت کی عملی تربیت۔", badge: "40 روزہ" },
        { title: "سمر کورس (Summer Course)", desc: "تعطیلات میں بچوں اور نوجوانوں کے لیے خصوصی فکری و دینی تربیتی کیمپ۔", badge: "موسمی" },
        { title: "ہفتہ وار درسِ قرآن", desc: "قرآن و سنت سے دائمی وابستگی اور شعورِ دین کی بیداری کے لیے عام نشست۔", badge: "ہفتہ وار" },
      ],
      welcomeIntroP2: "الاخلاص اسلامک انسٹیٹیوٹ علم، عمل اور کردار کی تعمیر کے ذریعے ایک صالح، باکردار اور دین سے وابستہ معاشرے کی تشکیل میں اپنا کردار ادا کرنے کے لیے سرگرمِ عمل ہے۔",
      welcomeMotto: "”آئیے اخلاص کے ساتھ علم کا چراغ روشن کریں۔“",
      welcomeText: "الاخلاص اسلامک انسٹیٹیوٹ اسلامی تعلیم اور ذاتی و روحانی ترقی کے لیے ایک پروقار اور سازگار ماحول فراہم کرنے کے لیے پرعزم ہے۔ ہمارا مقصد نفع بخش علم کے حصول کی حوصلہ افزائی کرنا اور طالبانِ علم کو اپنے ایمان اور اسلامی اقدار کے ساتھ مضبوط تعلق قائم کرنے میں مدد دینا ہے۔",
      welcomeReadMore: "ادارے کے مشن اور اقدار کے بارے میں مزید جانیے",

      whyBadge: "بنیادی اصول",
      whyTitle: "الاخلاص اسلامک انسٹیٹیوٹ کا انتخاب کیوں؟",
      whySubtitle: "اخلاص، شائستہ رہنمائی اور پُرسکون تعلیمی ماحول پر مبنی بنیاد۔",
      whyCards: [
        {
          title: "اسلامی علم",
          description: "اسلامی تعلیمات کے بامقصد فہم اور گہرے ادراک کی حوصلہ افزائی۔"
        },
        {
          title: "اخلاق و کردار",
          description: "عمدہ اخلاق، اخلاصِ نیت، احترام اور ذمہ دارانہ طرزِ زندگی کا فروغ۔"
        },
        {
          title: "خوشگوار ماحول",
          description: "طلبہ اور سیکھنے والوں کے لیے باعزت، پُرامن اور معاون تعلیمی فضا۔"
        },
        {
          title: "فکری و روحانی ترقی",
          description: "مسلسل علم کے حصول اور باطنی و روحانی بالیدگی کی ترغیب۔"
        }
      ],

      learningBadge: "تعلیمی مواقع",
      learningTitle: "اسلامی تعلیم کے بابرکت سفر کا آغاز کیجیے",
      learningText1: "چاہے آپ بنیادی اسلامی فہم حاصل کرنا چاہتے ہوں یا اپنی روحانی زندگی کو نکھارنا چاہتے ہوں، لاہور میں تعلیمی مواقع کے لیے الاخلاص اسلامک انسٹیٹیوٹ سے ضرور رابطہ فرمائیں۔",
      learningText2: "دستیاب تعلیمی مواقع، اوقات اور داخلہ تفصیلات کے لیے آن لائن داخلہ فارم جمع کروائیں یا ادارے سے براہِ راست رابطہ فرمائیں۔",
      learningBtn: "آن لائن داخلہ فارم پُر کریں",

      ctaTitle: "اپنے تعلیمی سفر کی طرف اگلا قدم بڑھائیے",
      ctaSubtext: "کیا آپ کے پاس الاخلاص اسلامک انسٹیٹیوٹ کے تعلیمی مواقع سے متعلق کوئی سوالات ہیں؟ آج ہی آن لائن داخلہ فارم پُر کیجیے یا ہم سے رابطہ کیجیے۔",
      ctaBtn: "ہم سے رابطہ کریں",
      ctaAdmissionBtn: "داخلہ فارم پُر کریں",

      contactPreviewLocation: "لاہور، پاکستان",
      callNow: "ابھی کال کریں",
      sendMessage: "پیغام بھیجیں",
    },

    about: {
      pageBadge: "ادارے کا تعارف",
      pageTitle: "الاخلاص اسلامک انسٹیٹیوٹ کے بارے میں",
      pageSubtitle: "لاہور، پاکستان میں واقع اسلامی تعلیم، ذاتی تفکر اور اخلاقی بلندی کا ایک پُروقار مرکز۔",
      purposeBadge: "ہمارا مقصد",
      purposeTitle: "مخلصانہ تعلیم اور مستند فہم کے لیے وقف",
      purposeText1: "الاخلاص اسلامک انسٹیٹیوٹ کا قیام لاہور، پاکستان میں اس مقصد کے تحت عمل میں آیا کہ یہ اسلامی تعلیم اور ذاتی تربیت کا ایک روشن ذریعہ بنے۔ ہمارا پختہ یقین ہے کہ حقیقی اسلامی تعلیم انسان کی عقل اور دل دونوں کو منور کرتی ہے اور مخلصانہ بندگی، عمدہ اخلاق اور مفید معاشرتی کردار کی طرف رہنمائی کرتی ہے۔",
      purposeText2: "ہمارا ادارہ ان تمام افراد اور خاندانوں کا گرمجوشی سے خیرمقدم کرتا ہے جو اللہ تعالیٰ کے ساتھ اپنے تعلق کو مضبوط بنانے اور پُروقار ماحول میں اسلامی اصولوں کی پختہ فہم حاصل کرنے کے خواہاں ہیں۔",
      purposeHighlight: "تاریخی شہر لاہور میں واقع، علم اور روحانی نشوونما کا مرکز۔",
      libraryCaptionTitle: "الاخلاص اسلامک انسٹیٹیوٹ",
      libraryCaptionSub: "”اخلاص اور لگن کے ساتھ نفع بخش علم کا حصول۔“",

      missionTitle: "ہمارا مشن",
      missionText: "”نفع بخش اسلامی علم کے حصول کی ترغیب دینا، عمدہ اخلاق کی آبیاری کرنا، اور روزمرہ زندگی میں ایمان اور اسلامی اقدار کے ساتھ ایک گہرا اور مخلصانہ تعلق استوار کرنے میں طالبانِ علم کی مدد کرنا۔“",
      missionCards: {
        knowledgeTitle: "علمِ نافع",
        knowledgeDesc: "لازوال اسلامی حکمت اور نفع بخش علم کے فہم کا فروغ۔",
        characterTitle: "حسنِ اخلاق",
        characterDesc: "دیانت، اخلاص، عاجزی اور بہترین کردار کی ترغیب۔",
        growthTitle: "روحانی بالیدگی",
        growthDesc: "مسلسل ذاتی اصلاح اور روحانی ترقی کے جذبے کی بیداری۔",
      },

      valuesBadge: "بنیادی ستون",
      valuesTitle: "ہماری رہنما اقدار",
      valuesSubtitle: "وہ اصول جو ہماری تعلیمی کاوشوں اور ادارے کی فضا کو منور رکھتے ہیں۔",
      valuesList: [
        {
          title: "اخلاص (Al-Ikhlas)",
          description: "تمام تر تعلیم و تدریس کو خالص نیت اور صرف رضائے الٰہی کے حصول کے جذبے کے ساتھ سرانجام دینا۔"
        },
        {
          title: "علمِ نافع ('Ilm Nafi')",
          description: "ایسے علم کو فوقیت دینا جو عقل کو وسعت دے، دل کو پاکیزہ بنائے اور نیک اعمال میں ڈھل سکے۔"
        },
        {
          title: "حسنِ اخلاق (Akhlaq)",
          description: "عاجزی، احترام، سچائی، صبر اور ہمدردی کو زندگی کے ہر پہلو میں اپنانے کی ترغیب دینا۔"
        },
        {
          title: "باعزت و معاون ماحول",
          description: "ایک ایسا خوشگوار اور مشفقانہ ماحول جہاں ہر فرد کی حوصلہ افزائی کی جائے اور اسے احترام دیا جائے۔"
        }
      ],

      commitmentTitle: "اسلامی تعلیم کے لیے ہمارا عزم",
      commitmentText: "ہم لاہور اور اس کے مضافات میں تمام متلاشیانِ علم کے لیے واضح، قابلِ رسائی اور باعزت تعلیمی مواقع فراہم کرنے کے لیے کوشاں ہیں۔",
      exploreProgramsBtn: "تعلیمی مواقع دریافت کریں",
      admissionBtn: "داخلہ فارم پُر کریں",
      callBtnText: "کال کریں: 923094884183+",
    },

    learning: {
      pageBadge: "تعلیمی رہنمائی",
      pageTitle: "الاخلاص اسلامک انسٹیٹیوٹ میں تعلیم و تدریس",
      pageSubtitle: "لاہور، پاکستان میں پُرسکون اور معاون ماحول کے اندر نفع بخش اسلامی تعلیم کے مواقع جانیے۔",
      mainBadge: "تعلیمی مواقع",
      mainTitle: "موجودہ اور آئندہ تعلیمی مواقع کے بارے میں معلومات حاصل کریں",
      mainText1: "الاخلاص اسلامک انسٹیٹیوٹ میں ہم اپنے طلبہ کے لیے نفع بخش علم اور روحانی تربیت کو آسان بنانے کے لیے پُرعزم ہیں۔ ہم ایسے ماحول کی فراہمی پر یقین رکھتے ہیں جو حقیقی فہم، غور و فکر اور عمدہ اخلاق کو پروان چڑھائے۔",
      infoBoxTitle: "تعلیمی معلومات اور داخلہ رجسٹریشن",
      infoBoxText: "موجودہ تعلیمی مواقع، نئے سیشنز، داخلے اور اوقات کی تفصیلات جاننے کے لیے براہِ کرم آن لائن داخلہ فارم جمع کروائیں یا ادارے سے رابطہ فرمائیں۔",
      askProgramsBtn: "آن لائن داخلہ فارم",
      admissionBtn: "داخلہ فارم پُر کریں",
      callBtnText: "کال کریں: 923094884183+",
      spaceTitle: "لاہور میں ایک پُرسکون تعلیمی فضا",
      spaceDesc: "ہمارے تعلیمی سلسلے میں داخلے کے لیے آن لائن فارم پُر کریں یا ہم سے رابطہ کریں۔",

      coursesBadge: "پیش کردہ تعلیمی کورسز و شعبہ جات",
      coursesTitle: "جامع اسلامی کورسز اور تعلیمی شعبہ جات",
      coursesSubtitle: "قرآن فہمی، اسلامی علوم، حفظ و تجوید، اور اخلاقی و فکری تربیت کے لیے معیاری نصاب۔",
      coursesEnrollBtn: "آن لائن داخلہ فارم",
      coursesWhatsappBtn: "واٹس ایپ رہنمائی",
      courses: [
        {
          id: "tajweed",
          title: "تجوید القرآن",
          subtitle: "مخارج و صفات، تلاوتِ مسنون اور قواعدِ تجوید کی عملی مشق",
          description: "قرآن پاک کو درست مخارج اور ترتیل کے ساتھ پڑھنے کی جامع ٹریننگ۔ تمام عمر کے طلبہ و طالبات کے لیے انفرادی توجہ اور روزانہ مشق۔",
          duration: "3 تا 6 ماہ",
          mode: "آن لائن و بالمشافہ | صبح و شام",
          badge: "بنیادی و ایڈوانسڈ",
          features: ["قواعد التجوید کا مکمل فہم", "حروف کے درست مخارج و صفات", "حسنِ صوت و تلاوتِ مسنون", "روزانہ انفرادی تصحیح"]
        },
        {
          id: "tafseer",
          title: "تفسیر القرآن",
          subtitle: "فہمِ قرآن، لفظی و با محاورہ ترجمہ، اور اسبابِ نزول کا مطالعہ",
          description: "کلام الٰہی کی گہرائی، ربانی احکامات، اخلاقی رہنمائی اور روزمرہ زندگی کے لیے قرآنی حکمت کی مستند و عام فہم تشریح۔",
          duration: "1 تا 2 سال",
          mode: "آن لائن و بالمشافہ | باقاعدہ و ویک اینڈ",
          badge: "فہم و تدبر",
          features: ["لفظی و بامحاورہ ترجمہ", "مستند تفاسیر کی روشنی میں فہم", "عصری مسائل کا قرآنی حل", "آیات پر غور و تدبر کی نشستیں"]
        },
        {
          id: "hifz",
          title: "حفظ القرآن",
          subtitle: "حفظ کلامِ پاک مع دہرائی، پختگی اور تلاوتِ مسنون",
          description: "قرآن مجید کو مکمل حفظ کرنے کا باقاعدہ اور منظم نظام جس میں روزانہ سبق، سبقی اور منزل کی پختگی پر خصوصی توجہ دی جاتی ہے۔",
          duration: "2 تا 3 سال",
          mode: "مکمل وقتی و جز وقتی شفٹس",
          badge: "شعبہ حفظِ قرآن",
          features: ["روزانہ سبق و منزل ٹریکنگ", "تجوید کے اصولوں کے ساتھ حفظ", "اساتذہ کی مسلسل انفرادی نگرانی", "ماہانہ ٹیسٹ و جائزے"]
        },
        {
          id: "shortDarsNizami",
          title: "شارٹ درس نظامی",
          subtitle: "جامع بنیادی علومِ شریعت، عربی گرائمر، فقہ اور اصولِ حدیث",
          description: "کم وقت میں مستند دینی علوم، عربی زبان، نحو و صرف، فقہِ اسلامی اور حدیث نبوی کا پختہ فہم حاصل کرنے کا جامع و منظم کورس۔",
          duration: "1 تا 2 سال",
          mode: "آن لائن و ویک اینڈ / شام کی کلاسز",
          badge: "علمی بنیادیں",
          features: ["عربی گرائمر (نحو و صرف)", "فقہی مسائل و عبادات کے احکام", "فہمِ حدیث و سنتِ نبوی", "اسٹوڈنٹس اور پروفیشنلز کے لیے موزوں"]
        },
        {
          id: "fahmDeen",
          title: "فہم دین کورس",
          subtitle: "عقائد، عبادات، سیرتِ طیبہ اور روزمرہ اخلاقیات کی بنیادی تعلیم",
          description: "ہر مسلمان کے لیے روزمرہ کے فرائض، طہارت، نماز، روزمرہ دعائیں، بنیادی عقائد اور پاکیزہ طرزِ زندگی کا لازمی اور آسان فہم کورس۔",
          duration: "3 تا 6 ماہ",
          mode: "شام و ویک اینڈ شفٹس",
          badge: "لازمی دینی فہم",
          features: ["درست عقائد و ایمانیات", "طہارت و نماز کے مکمل احکام", "سیرتِ نبوی ﷺ اور اسوۂ حسنہ", "حلال و حرام کی عملی تمیز"]
        },
        {
          id: "shortCourses",
          title: "شارٹس کورسز",
          subtitle: "مخصوص موضوعاتی ورکشاپس، عربی بول چال، حج و زکوٰۃ گائیڈ",
          description: "مختصر دورانیے کے خصوصی کورسز جیسے تجارتی مسائل، تربیتِ اولاد، اسلامی خاندانی نظام اور بنیادی عربی بول چال کی تربیتی ورکشاپس۔",
          duration: "2 تا 4 ہفتے",
          mode: "آن لائن لائیو سیشنز و ورکشاپس",
          badge: "موضوعاتی ورکشاپس",
          features: ["موضوعاتی فقہی مسائل", "عربی بول چال (Spoken Arabic)", "تربیتِ اولاد و خاندانی رہنمائی", "سرٹیفکیٹ کورسز"]
        },
        {
          id: "weeklyDarsQuran",
          title: "ہفتہ وار درسِ قرآن",
          subtitle: "ہر ہفتے فکر انگیز درسِ قرآن، تربیتی مجلس اور عمومی فکری نشست",
          description: "عام فہم اور پرتاثیر انداز میں قرآنی آیات کی تشریح و تدبر۔ تمام شعبہ ہائے زندگی سے تعلق رکھنے والے احباب، نوجوانوں اور فیملیز کے لیے کھلا سیشن۔",
          duration: "مستقل ہفتہ وار سلسلہ",
          mode: "ہفتہ وار نشست (ویک اینڈ / بعد نماز مغرب)",
          badge: "کھلا فکری سیشن",
          features: ["کھلا و مفت فکری سیشن", "سوال و جواب کی باقاعدہ نشست", "روحانی و اخلاقی اصلاح", "تمام فیملی ممبرز کے لیے مفید"]
        }
      ],

      approachBadge: "ہمارا تعلیمی طریقہ کار",
      approachTitle: "اسلامی تعلیم کے لیے ہمارا انداز",
      approachSubtitle: "اخلاص، مستند رہنمائی اور عملی زندگی میں نفاذ کے رہنما اصول۔",
      pillars: [
        {
          title: "بنیادی و نفع بخش علم",
          description: "اسلامی اصولوں، اخلاقیات اور بنیادی تعلیمات کی جامع اور بامقصد سمجھ بوجھ۔"
        },
        {
          title: "ذاتی و باطنی تزکیہ",
          description: "تفکر، دل کی صفائی اور روزمرہ معاملات میں اعلیٰ اخلاقی رویوں کو اپنانا۔"
        },
        {
          title: "شائستہ اور پُرامن فضا",
          description: "ایک پُروقار ماحول جہاں ہر سوال اور استفسار کو صبر، توجہ اور عزت کے ساتھ سنا جاتا ہے۔"
        }
      ],

      stepsTitle: "داخلہ اور تعلیمی سفر کا آغاز کیسے کریں؟",
      stepsSubtitle: "ہم نے لاہور میں طلبہ اور خاندانوں کے لیے داخلہ لینے کا عمل نہایت آسان اور سہل بنایا ہے۔",
      steps: [
        {
          number: "۱",
          title: "داخلہ فارم پُر کیجیے",
          desc: "آن لائن داخلہ فارم میں اپنی ذاتی معلومات اور منتخب کورس درج فرما کر جمع کروائیں۔"
        },
        {
          number: "۲",
          title: "جائزہ اور رابطہ",
          desc: "ادارہ آپ کے فارم کا جائزہ لے کر فون یا واٹس ایپ کے ذریعے اوقات اور طریقہ کار سے آگاہ کرے گا۔"
        },
        {
          number: "۳",
          title: "کلاسز کا باقاعدہ آغاز",
          desc: "مقررہ شیڈول کے مطابق اپنی کلاس میں شامل ہو کر نفع بخش علم کے سفر کا آغاز کیجیے۔"
        }
      ]
    },

    admission: {
      pageBadge: "داخلے جاری ہیں",
      pageTitle: "آن لائن داخلہ و رجسٹریشن فارم",
      pageSubtitle: "الاخلاص اسلامک انسٹیٹیوٹ لاہور کے ساتھ نفع بخش اسلامی تعلیم کے مبارک سفر کا آغاز کیجیے۔ نیچے دیا گیا فارم پُر فرمائیں۔",
      formNoticeTitle: "ضروری ہدایات برائے داخلہ",
      formNoticeDesc: "براہِ کرم تمام معلومات اور رابطہ نمبر درست درج فرمائیں تاکہ لاہور میں موجود ہماری تعلیمی انتظامیہ آپ سے بروقت رابطہ کر کے شیڈول اور کلاسز کو حتمی شکل دے سکے۔",
      
      sectionStudent: "۱. طالب علم کی بنیادی معلومات",
      sectionGuardian: "۲. سرپرست اور رابطے کی تفصیلات",
      sectionProgram: "۳. منتخب شعبہ و پسندیدہ اوقاتِ کار",
      sectionEducation: "۴. تعلیمی پس منظر و سابقہ مطالعہ",
      sectionDeclaration: "۵. اخلاص و عہدِ تعلیم",

      fullNameLabel: "طالب علم کا پورا نام",
      fullNamePlaceholder: "مثلاً محمد احمد / عائشہ فاطمہ",
      fatherNameLabel: "والد / سرپرست کا نام",
      fatherNamePlaceholder: "مثلاً طارق محمود",
      genderLabel: "جنس (Gender)",
      genderMale: "مرد (طالب علم)",
      genderFemale: "خاتون (طالبہ)",
      genderSelectPlaceholder: "جنس منتخب کیجیے",
      ageLabel: "عمر (سال)",
      agePlaceholder: "مثلاً 18",
      
      phoneLabel: "بنیادی رابطہ نمبر (فون)",
      phonePlaceholder: "مثلاً 03094884183",
      whatsappLabel: "واٹس ایپ نمبر (اگر مختلف ہو)",
      whatsappPlaceholder: "مثلاً 03001234567",
      emailLabel: "ای میل پتہ (اختیاری)",
      emailPlaceholder: "مثلاً applicant@example.com",
      cityAreaLabel: "رہائشی پتہ / علاقہ (لاہور)",
      cityAreaPlaceholder: "مثلاً گلبرگ / ماڈل ٹاؤن / جوہر ٹاؤن، لاہور",

      programLabel: "منتخب تعلیمی شعبہ / کورس",
      programSelectPlaceholder: "-- مطلوبہ شعبہ منتخب فرمائیں --",
      programs: {
        tajweed: "تجوید القرآن (Tajweed-ul-Quran)",
        tafseer: "تفسیر القرآن (Tafseer-ul-Quran)",
        hifz: "حفظ القرآن الکریم (Hifz-ul-Quran)",
        shortDarsNizami: "شارٹ درس نظامی (Short Dars-e-Nizami)",
        fahmDeen: "فہم دین کورس (Fahm-e-Deen Course)",
        shortCourses: "شارٹس کورسز (Short Courses / Workshops)",
        weeklyDarsQuran: "ہفتہ وار درسِ قرآن (Weekly Dars-e-Quran)",
        general: "دیگر کورسز / عمومی رہنمائی (General Guidance)"
      },

      timingLabel: "پسندیدہ اوقات / شفٹ",
      timingOptions: {
        morning: "صبح کے اوقات (Morning Shift)",
        afternoon: "دوپہر کے اوقات (Afternoon Shift)",
        evening: "شام کے اوقات (Evening Shift)",
        weekend: "صرف ہفتہ و اتوار (Weekend Only)",
        flexible: "کوئی بھی مناسب وقت (Flexible Timing)"
      },

      educationBackgroundLabel: "موجودہ عصری / اسکول تعلیم",
      educationBackgroundPlaceholder: "مثلاً میٹرک / ایف ایس سی / بی ایس / ماسٹرز / اسکول کے طالب علم",
      previousIslamicStudyLabel: "سابقہ دینی تعلیم (اگر ہو)",
      previousIslamicStudyPlaceholder: "مثلاً ناظرہ قرآن پڑھا ہوا ہے / بنیادی دینی معلومات / بالکل ابتدائی سطح وغیرہ",
      additionalNotesLabel: "کوئی خاص نوٹ، سوال یا اوقات کے بارے میں وضاحت",
      additionalNotesPlaceholder: "اگر آپ کے کوئی خاص سوالات ہیں یا ایک سے زائد افراد کا داخلہ ہے تو یہاں تحریر فرمائیں...",

      termsDeclaration: "میں حلفیہ اقرار کرتا / کرتی ہوں کہ درج کردہ تمام معلومات درست ہیں، اور میں اخلاصِ نیت، ادب و احترام اور مکمل لگن کے ساتھ اسلامی علم حاصل کرنے کا ارادہ رکھتا / رکھتی ہوں۔",
      submitBtn: "داخلہ فارم جمع کروائیں",
      submittingBtn: "فارم جمع ہو رہا ہے...",
      resetBtn: "فارم صاف کریں",

      // Validation
      validationRequired: "یہ خانہ پُر کرنا ضروری ہے۔",
      validationName: "براہِ کرم طالب علم کا پورا نام درج کیجیے۔",
      validationFather: "براہِ کرم والد یا سرپرست کا نام درج کیجیے۔",
      validationGender: "براہِ کرم جنس کا انتخاب کیجیے۔",
      validationAge: "براہِ کرم طالب علم کی عمر درج کیجیے۔",
      validationPhone: "براہِ کرم درست فون نمبر درج کیجیے۔",
      validationCity: "براہِ کرم لاہور میں اپنا علاقہ یا پتہ درج کیجیے۔",
      validationProgram: "براہِ کرم مطلوبہ تعلیمی شعبہ منتخب کیجیے۔",
      validationTerms: "براہِ کرم آگے بڑھنے کے لیے اخلاص و عہدِ تعلیم کے خانے پر نشان لگائیے۔",

      // Success Slip
      successBadge: "داخلہ فارم کامیابی سے جمع ہو چکا ہے",
      successTitle: "داخلہ رجسٹریشن موصول ہو گئی ہے",
      successDesc: "جزاکم اللہ خیراً۔ آپ کا داخلہ فارم الاخلاص اسلامک انسٹیٹیوٹ لاہور کے پاس موصول ہو چکا ہے۔",
      refNoLabel: "داخلہ حوالہ نمبر (Ref ID)",
      dateLabel: "فارم جمع کرنے کی تاریخ",
      statusLabel: "حیثیت (Status)",
      statusValue: "زیرِ جائزہ و تصدیق",
      applicantSummaryTitle: "طالب علم کی درج شدہ تفصیلات",
      nextStepsTitle: "داخلے کے آئندہ مراحل:",
      nextSteps: [
        "لاہور میں ہماری تعلیمی کمیٹی آپ کے منتخب کردہ کورس اور اوقات کا جائزہ لے گی۔",
        "اگلے 24 سے 48 گھنٹوں کے اندر ہمارے فون نمبر (923094884183+) سے آپ کو کال یا واٹس ایپ پیغام کے ذریعے رہنمائی فراہم کی جائے گی۔",
        "طالب علم کے ساتھ ایک مختصر تعارفی اور تعلیمی گفتگو کی جائے گی تاکہ کلاس کا شیڈول حتمی کیا جا سکے۔",
        "فوری معلومات کے لیے آپ کسی بھی وقت ہمارے نمبر 923094884183+ پر رابطہ کر سکتے ہیں۔"
      ],
      printBtn: "داخلہ سلپ پرنٹ / محفوظ کریں",
      newApplicationBtn: "ایک اور داخلہ فارم پُر کریں",
      instituteCallBanner: "داخلے سے متعلق کسی بھی مدد کے لیے لاہور آفس سے فوری رابطہ فرمائیں:"
    },

    contact: {
      pageBadge: "رابطہ کریں",
      pageTitle: "الاخلاص اسلامک انسٹیٹیوٹ سے رابطہ کیجیے",
      pageSubtitle: "ہم آپ کے سوالات کے جوابات دینے اور اسلامی تعلیم کے سفر میں آپ کی معاونت کے لیے حاضر ہیں۔",
      hearFromYouBadge: "ہمیشہ حاضر",
      hearFromYouTitle: "ہمیں آپ سے رابطہ کر کے خوشی ہوگی",
      hearFromYouText: "چاہے آپ کے ذہن میں اسلامی تعلیم سے متعلق کوئی سوال ہو، دستیاب مواقع جاننا چاہتے ہوں یا رہنمائی درکار ہو، آپ ہم سے بلا تکلف رابطہ کر سکتے ہیں۔",
      phoneLabel: "ٹیلی فون نمبر",
      locationLabel: "مقام / پتہ",
      noteTitle: "ملاقات اور تعلیمی معلومات",
      noteText: "لاہور میں تعلیمی مواقع، اوقات یا ملاقات کے انتظام کے بارے میں معلومات کے لیے براہِ کرم براہِ راست فون کیجیے یا نیچے دیا گیا فارم پُر کیجیے۔",

      formTitle: "ہمیں پیغام بھیجیے",
      formSubtitle: "نیچے دیا گیا فارم پُر کیجیے، ہم جلد از جلد آپ سے رابطہ کریں گے۔",
      nameLabel: "آپ کا پورا نام",
      namePlaceholder: "مثلاً محمد احمد",
      phoneEmailLabel: "فون نمبر یا ای میل",
      phoneEmailPlaceholder: "مثلاً 03001234567 یا yourname@example.com",
      subjectLabel: "پیغام کا موضوع",
      subjectOptions: {
        general: "عام معلومات",
        programs: "دستیاب تعلیمی مواقع",
        family: "طلبہ اور فیملی کے سوالات",
        other: "دیگر سوالات"
      },
      messageLabel: "آپ کا پیغام یا سوال",
      messagePlaceholder: "براہِ کرم اپنا سوال یا جس چیز کے بارے میں جاننا چاہتے ہیں وہ یہاں تحریر فرمائیں...",
      submitBtn: "پیغام ارسال کریں",
      submittingBtn: "پیغام بھیجا جا رہا ہے...",
      successTitle: "پیغام موصول ہو گیا ہے",
      successDesc: "الاخلاص اسلامک انسٹیٹیوٹ سے رابطہ کرنے کا شکریہ۔ ہم اسلامی تعلیم میں آپ کی دلچسپی کو قدر کی نگاہ سے دیکھتے ہیں اور جلد ہی آپ کے سوال کا جواب دیں گے۔",
      sendAnotherBtn: "ایک اور پیغام بھیجیں",
      validationName: "براہِ کرم اپنا پورا نام درج کیجیے۔",
      validationContact: "براہِ کرم اپنا فون نمبر یا ای میل درج کیجیے۔",
      validationMsg: "براہِ کرم اپنا پیغام یا سوال درج کیجیے۔",

      mapTitle: "مقام: لاہور، پاکستان",
      mapSubtitle: "الاخلاص اسلامک انسٹیٹیوٹ • لاہور اور گردونواح کے تمام طلبہ و خاندانوں کی خدمت کے لیے",
      mapBadge: "لاہور، پنجاب، پاکستان",
    },

    coursesPage: {
      badge: "نصاب و تعلیمی پروگرامز",
      title: "ہمارے کورسز اور تعلیمی شعبہ جات",
      subtitle: "الاخلاص اسلامک انسٹیٹیوٹ کے باقاعدہ و جدید کورسز، نئے تعلیمی سیشنز اور تازہ ترین اعلانات کی مکمل تفصیلات۔",
      updatesBadge: "تازہ ترین اعلانات و اپڈیٹس",
      updatesTitle: "نئے کورسز اور لائیو اپڈیٹس",
      updatesSubtitle: "ہمارے ہر نئے شروع ہونے والے کورس، ورکشاپس اور داخلے کی آخری تاریخوں سے باخبر رہیں۔",
      filterAll: "تمام کورسز",
      filterNew: "نئے اور آنے والے",
      filterRegular: "باقاعدہ کورسز",
      filterShort: "مختصر کورسز",
      applyNow: "داخلہ فارم پُر کریں",
      inquireWhatsApp: "واٹس ایپ پر معلومات لیں",
      durationLabel: "مدت",
      scheduleLabel: "اوقات کار",
      modeLabel: "طریقہ تدریس",
      keyFeatures: "اہم خصوصیات",
      newBadge: "نیا کورس",
      upcomingBadge: "جلد شروع ہونے والا",
      admissionsOpenBadge: "داخلے جاری ہیں",
      deadlineLabel: "داخلے کی آخری تاریخ",
      startDateLabel: "کلاسز کا آغاز",
      noCoursesFound: "اس کیٹیگری میں فی الحال کوئی کورس دستیاب نہیں ہے۔",
    },

    footer: {
      motto: "”تعلیم • اخلاق • ایمان“",
      desc: "اسلام کی سچی تعلیمات کو سیکھنے، سمجھنے اور ان پر عمل کرنے کے لیے وقف۔ نفع بخش علم اور ذاتی تربیت کے لیے ایک پُرامن و خوشگوار تعلیمی مرکز۔",
      navTitle: "فہرست صفحات",
      contactTitle: "رابطے کی تفصیلات",
      reachOutBtn: "آج ہی رابطہ کریں",
      applyAdmissionBtn: "آن لائن داخلہ فارم",
      copyright: "© 2026 الاخلاص اسلامک انسٹیٹیوٹ۔ جملہ حقوق محفوظ ہیں۔",
      backToTop: "اوپر جائیں",
    }
  }
};
