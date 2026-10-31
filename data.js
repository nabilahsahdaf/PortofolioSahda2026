/**
 * Data Portofolio - Nabilah Sahda Firjatullah
 * UI/UX Designer & Data Analyst
 */

const portfolioData = {
  profile: {
    name: "Nabilah Sahda Firjatullah",
    nickname: "Nabilah",
    initials: "NSF",
    taglineEyebrow: "nabilah@portfolio:~$ whoami",
    avatar: "assets/avatar-nabilah.jpg",
    badgeStatus: "Tersedia untuk Magang & Proyek UI/UX & Data",
    roles: [
      "UI/UX Design",
      "System Analyst"
    ],
    headline: "Transforming complex data into intuitive, human-centered digital experiences.",
    bio: "Mahasiswa Sistem Informasi UPN 'Veteran' Jawa Timur (IPK 3.74) dengan passion kuat pada UI/UX Design dan Data Analysis. Berpengalaman di Infinite Learning (MSIB) dalam Design Thinking & Figma, serta Dinas Komunikasi dan Informatika Surabaya dalam pengolahan data & dashboard Looker Studio.",
    location: "Kab. Bekasi, Jawa Barat, Indonesia",
    email: "nabilahsahdaf@gmail.com",
    phone: "081288473857",
    whatsapp: "https://wa.me/6281288473857",
    cvUrl: "#",
    socialLinks: {
      email: "mailto:nabilahsahdaf@gmail.com",
      whatsapp: "https://wa.me/6281288473857",
      linkedin: "https://www.linkedin.com/in/nabilahsahdaf/",
      instagram: "https://www.instagram.com/nabilahsahdaf/?utm_source=ig_web_button_share_sheet",
      github: "https://github.com/nabilahsahdaf"
    },
    stats: [
      { label: "IPK Kumulatif", value: "3.74", suffix: "/4.00", icon: "academic-cap" },
      { label: "Proyek Unggulan", value: "4+", suffix: "Karya", icon: "sparkles" },
      { label: "Sertifikasi Resmi", value: "2", suffix: "BNSP & EPT", icon: "badge-check" },
      { label: "Pelatihan Profesional", value: "4+", suffix: "MySkill", icon: "certificate" }
    ]
  },

  about: {
    story: `**Information Systems** student at Universitas Pembangunan Nasional "Veteran" Jawa Timur with a strong focus on **UI/UX Design, User Flow, and Prototyping**. Gained hands-on experience through the MSIB Independent Study program as a **Web Development & UI/UX Design intern at Infinite Learning - PT Kinema Systrans Multimedia**, covering the application of Design Thinking, user needs identification, flowchart and wireframe creation, and prototyping using Figma. Also experienced as a **Data Analyst at the Communication and Informatics Office of Surabaya City**, processing and visualizing data using Python, SQL, and Looker Studio. Skilled in cross-team collaboration, creative thinking, detail-oriented, and committed to delivering projects on time.`,

    quickInfo: [
      { label: "Domisili", value: "Kab. Bekasi, Jawa Barat, Indonesia" },
      { label: "Pendidikan", value: "S1 Sistem Informasi - UPN 'Veteran' Jatim (2022 - 2026)" },
      { label: "IPK", value: "3.74 / 4.00" },
      { label: "Fokus Bidang", value: "UI/UX Design, System Analyst" },
      { label: "Bahasa", value: "Indonesia (Native), English (Certified EPT)" },
      { label: "Ketersediaan", value: "Full-time, Internship, Freelance, Collaboration" }
    ],

    principles: [
      {
        title: "User Empathy",
        description: "Memahami kebutuhan dan sudut pandang pengguna dalam proses desain.",
        icon: "heart"
      },
      {
        title: "Critical Thinking",
        description: "Mampu menganalisis masalah dan menyusun solusi berbasis data maupun riset pengguna.",
        icon: "moon"
      },
      {
        title: "Time Management",
        description: "Mampu mengatur prioritas dan menyelesaikan proyek sesuai deadline.",
        icon: "clock"
      },
      {
        title: "Team Collaboration",
        description: "Terbiasa bekerja dalam tim lintas divisi (developer, designer, data).",
        icon: "users"
      }
    ]
  },

  experiences: [
    {
      id: "exp-diskominfo",
      role: "Data Analyst",
      company: "Dinas Komunikasi dan Informatika Kota Surabaya",
      period: "Feb 2025 - Jun 2025",
      type: "Internship / Work Experience",
      location: "Surabaya, Jawa Timur",
      tagColor: "teal",
      summary: "Mengolah, menganalisis, dan memvisualisasikan data strategis sektoral pemerintah kota untuk mendukung pengambilan kebijakan berbasis data.",
      achievements: [
        "Melakukan Data Cleaning & Exploratory Data Analysis (EDA) skala besar memanfaatkan Google Colab, Python (Pandas/NumPy), SQL, dan Microsoft Excel.",
        "Merancang dan membangun dashboard analitik interaktif berbasis Looker Studio untuk memudahkan pemangku kepentingan memantau tren data secara real-time.",
        "Menyusun dan menerbitkan Buku Infografis Data Kesehatan Jawa Timur dengan visualisasi data yang komunikatif, menarik, dan mudah dipahami publik."
      ],
      skills: ["Python", "SQL", "Looker Studio", "Google Colab", "Microsoft Excel", "EDA", "Data Visualization"]
    },
    {
      id: "exp-infinite",
      role: "Web Development & UI/UX Design",
      company: "Infinite Learning - PT Kinema Systrans Multimedia",
      period: "Sep 2024 - Des 2024",
      type: "MSIB Studi Independen Bersertifikat",
      location: "Batam / Hybrid",
      tagColor: "indigo",
      summary: "Mengembangkan produk digital berbasis Design Thinking mulai dari riset kebutuhan pengguna hingga prototipe interaktif dan frontend web.",
      achievements: [
        "Bertindak sebagai peran Hipster (pemberi konsep, perancang visual branding, dan penentu arah gaya kreatif produk dalam tim).",
        "Merancang rancang bangun UI/UX aplikasi mobile Agrofriend (platform pertanian digital terpadu untuk mendampingi petani mengoptimalkan hasil panen).",
        "Berkontribusi pada perancangan antarmuka dan pengembangan website Paddle Pals (sistem digital manajemen stok dan inventaris bagi komunitas nelayan).",
        "Menerapkan metodologi Design Thinking secara komprehensif: Empathize, Define problem, Ideate flowchart & wireframe, Prototype di Figma, dan Usability Testing."
      ],
      skills: ["Figma", "Design Thinking", "User Flow", "Wireframing", "Interactive Prototyping", "UI/UX Design", "HTML/CSS"]
    }
  ],

  projects: [
    {
      id: "agrofriend",
      title: "Agrofriend - Smart Farming Companion",
      category: "uiux",
      categoryLabel: "UI/UX Mobile App",
      badge: "Infinite Learning MSIB",
      year: "2024",
      thumbnail: "assets/Desktop - 1.png",
      summary: "Platform aplikasi mobile inovatif yang dirancang untuk membantu para petani memantau kesehatan tanaman, prakiraan cuaca pertanian, serta manajemen panen yang terukur.",
      role: "Hipster & Lead UI/UX Designer",
      tags: ["Figma", "Design Thinking", "User Flow", "Prototyping", "Mobile UI"],
      highlights: [
        "Riset pengguna mendalam mengenai tantangan petani tradisional dalam mendeteksi hama dan penyakit tanaman lebih dini.",
        "Pembuatan user journey, flowchart navigasi, serta wireframe low-fidelity hingga high-fidelity.",
        "Desain sistem terstruktur dengan palet warna natural yang nyaman bagi mata pengguna di luar ruangan.",
        "Prototipe interaktif Figma dengan animasi transisi micro-interaction yang intuitif."
      ],
      tools: ["Figma", "Canva", "FigJam", "Design Thinking"],
      figma: "https://www.figma.com/design/bcWPzHDoD3b96pYqDuhMkY/Argo-Friend?node-id=52-4295&t=1vqzy7DBfFb4CxaH-1",
      caseStudyUrl: "#modal-agrofriend"
    },
    {
      id: "paddlepals",
      title: "Amarine - Fishery Stock Management Website",
      category: "web-uiux",
      categoryLabel: "Web App UI/UX & Frontend",
      badge: "Team Collaboration Project",
      year: "2024",
      thumbnail: "assets/project-paddlepals-real.png",
      summary: "Dashboard berbasis web untuk komunitas nelayan dan distributor hasil laut dalam mencatat hasil tangkapan harian, mengelola persediaan es & perahu, serta visualisasi penjualan.",
      role: "UI/UX Designer & Frontend Contributor",
      tags: ["Figma", "Web Dashboard", "Data Viz", "HTML/CSS", "Design System"],
      highlights: [
        "Perancangan antarmuka dashboard desktop modern dengan hierarki visual data yang memudahkan pembacaan metrik penting.",
        "Visualisasi grafik tren tangkapan bulanan, status kapal aktif, serta stok inventaris bahan bakar dan logistik.",
        "Kolaborasi implementasi frontend web menggunakan HTML, modern CSS, dan interaktivitas JavaScript.",
        "Desain responsif yang tetap rapi saat diakses melalui tablet maupun monitor kapal."
      ],
      github: "https://github.com/MuhammadIrfanMusthofa/Amarine-Orien",
      link: "https://github.com/MuhammadIrfanMusthofa/Amarine-Orien",
      tools: ["Figma", "HTML5", "CSS3", "JavaScript", "Looker Studio Concept"],
      figma: "https://www.figma.com/design/SRnGL9kdK2QS8gRSP3rQnL/UIUX-Amarine---Massive-Project?node-id=1-3&t=bqLYuvM1EkkFVQ6T-1",
      caseStudyUrl: "#modal-paddlepals"
    },
    {
      id: "peduligula",
      title: "Peduli Gula - Diabetes Monitoring App",
      category: "uiux",
      categoryLabel: "UI/UX Mobile App (Award Winning)",
      badge: "Semi Finalis Nasional 2023",
      year: "2023",
      thumbnail: "assets/Thumbnail.jpg",
      summary: "Aplikasi mobile ramah pengguna untuk membantu penderita diabetes melacak kadar glukosa darah berkala, asupan karbohidrat, serta pengingat konsumsi obat.",
      role: "Co-Designer (Team of 3) - Research & UI Prototyping",
      tags: ["Award Winning", "Figma", "Healthcare UX", "Accessibility", "Prototyping"],
      highlights: [
        "Meraih predikat Semi Finalis pada UI/UX Design Competition at 7th Anniversary Information Systems, Telkom Institute of Technology Purwokerto.",
        "Merancang antarmuka dengan standar aksesibilitas tinggi (tipografi jelas, kontras warna ramah lansia, dan grafik tren visual yang intuitif).",
        "Riset empati bersama penderita diabetes untuk mereduksi beban mental pencatatan medis harian.",
        "Pengembangan prototipe interaktif Figma yang diuji langsung kepada pengguna sasaran."
      ],
      tools: ["Figma", "UX Research", "Usability Testing", "Prototyping"],
      figma: "https://www.figma.com/design/bRWTzsADrlXXqyDdrOwATa/IMK-LOMBA?node-id=1-17&t=mizM6mVw1SCi74XT-1",
      caseStudyUrl: "#modal-peduligula"
    },
    {
      id: "infografis-kesehatan",
      title: "Buku Infografis Data Kesehatan Jawa Timur & Dashboard",
      category: "data",
      categoryLabel: "Data Analytics & Visualization",
      badge: "Diskominfo Surabaya",
      year: "2025",
      thumbnail: "assets/Screenshot 2026-09-08 111855.png",
      summary: "Penyusunan infografis visual dan dashboard interaktif Looker Studio untuk menyajikan indikator kesehatan publik Jawa Timur secara komprehensif.",
      role: "Data Analyst & Visualizer",
      tags: ["Python", "SQL", "Looker Studio", "Google Colab", "Excel", "Infographics"],
      highlights: [
        "Data cleaning dan transformasi dataset kesehatan lintas kabupaten/kota menggunakan Python (Pandas) dan SQL queries.",
        "Pembuatan visualisasi data tematik yang informatif untuk publik dan pejabat pembuat kebijakan dinas.",
        "Penyusunan layout buku infografis berstandar visual profesional yang siap cetak dan dipublikasikan secara digital."
      ],
      tools: ["Python", "SQL", "Looker Studio", "Google Colab", "Microsoft Excel", "Canva"],
      figma: "https://datastudio.google.com/reporting/cfac9458-8d38-464c-9971-d4b55f50a699",
      caseStudyUrl: "#modal-infografis"
    }
  ],

  skillsData: {
    categories: [
      { id: "uiux", name: "UI/UX & Product Design", icon: "palette" },
      { id: "data", name: "Data Analysis & Viz", icon: "chart" },
      { id: "tech", name: "Web & Technical", icon: "code" },
      { id: "soft", name: "Methods & Soft Skills", icon: "bulb" }
    ],
    items: [
      // UI/UX
      { name: "Figma", category: "uiux", level: "Advanced", icon: "figma", desc: "Design systems, auto-layout, wireframes, component variants, and interactive prototyping" },
      { name: "UI/UX Design", category: "uiux", level: "Advanced", icon: "palette", desc: "User research, user journey, visual hierarchy, mobile & desktop layouts" },
      { name: "Design Thinking", category: "uiux", level: "Advanced", icon: "lightbulb", desc: "Empathize, Define, Ideate, Prototype, and Usability Testing cycles" },
      { name: "User Flow & Wireframing", category: "uiux", level: "Advanced", icon: "git-merge", desc: "Information architecture, flowchart mapping, and low-to-high fidelity wires" },
      { name: "Canva", category: "uiux", level: "Advanced", icon: "brush", desc: "Visual storytelling, publication graphics, social media assets, and infography" },

      // Data
      { name: "Data Analysis & EDA", category: "data", level: "Intermediate", icon: "table", desc: "Exploratory data analysis, statistical summarization, pattern discovery" },
      { name: "Python", category: "data", level: "Intermediate", icon: "python", desc: "Data manipulation with Pandas, data cleaning, and Google Colab scripts" },
      { name: "SQL & MySQL", category: "data", level: "Intermediate", icon: "database", desc: "Relational database queries, data aggregation, filtering, and joining tables" },
      { name: "Looker Studio", category: "data", level: "Advanced", icon: "bar-chart-2", desc: "Interactive dashboards, real-time KPI cards, geospatial and trend charts" },
      { name: "Microsoft Excel", category: "data", level: "Advanced", icon: "file-spreadsheet", desc: "Formulas (VLOOKUP/XLOOKUP), pivot tables, data formatting, and charts" },
      { name: "Data Visualization", category: "data", level: "Advanced", icon: "pie-chart", desc: "Communicating complex datasets through clean charts and infographical books" },

      // Tech
      { name: "HTML5", category: "tech", level: "Advanced", icon: "html5", desc: "Semantic tags, accessibility standards, SEO best practices" },
      { name: "CSS3", category: "tech", level: "Intermediate", icon: "css3", desc: "Flexbox, CSS Grid, responsive design, animations, and variables" },
      { name: "JavaScript", category: "tech", level: "Intermediate", icon: "javascript", desc: "DOM manipulation, fetch API, asynchronous scripting, and micro-interactions" },

      // Soft Skills
      { name: "Time Management", category: "soft", level: "Advanced", icon: "clock", desc: "Structured project planning, prioritizing deliverables, punctual submissions" },
      { name: "Cross-Functional Collaboration", category: "soft", level: "Advanced", icon: "users", desc: "Smooth communication between designers, software developers, and analysts" },
      { name: "Creative Problem Solving", category: "soft", level: "Advanced", icon: "sparkles", desc: "Role of Hipster: framing innovative ideas into practical user value" }
    ]
  },

  education: [
    {
      degree: "S1 Sistem Informasi",
      institution: "Universitas Pembangunan Nasional 'Veteran' Jawa Timur",
      period: "2022 - 2026 (Sedang Menempuh)",
      gpa: "IPK 3.74 / 4.00",
      description: "Mempelajari integrasi rekayasa perangkat lunak, analisis sistem informasi bisnis, tata kelola data, dan rekayasa interaksi manusia-komputer. Aktif dalam kompetisi desain produk dan program MSIB nasional."
    }
  ],

  certifications: [
    {
      id: "cert-bnsp",
      title: "Junior Web Programmer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP) - LSP UPN Veteran Jawa Timur",
      validity: "2025 - 2028",
      type: "Sertifikasi Nasional",
      badge: "BNSP Resmi",
      icon: "award",
      description: "Pengujian kompetensi nasional mencakup pemahaman arsitektur pemrograman web, logika algoritma, database relational, serta implementasi standar industri.",
      image: null
    },
    {
      id: "cert-ept",
      title: "English Proficiency Test (EPT)",
      issuer: "UPA Bahasa UPN Veteran Jawa Timur",
      validity: "09 April 2026 - 2028",
      type: "Language Certification",
      badge: "Certified • Skor 450",
      score: "450",
      scoreDetail: "Listening: 47 • Structure: 41 • Reading: 47 (Benchmark: 310 - 677)",
      credentialId: "No Seri: 131840 • ID: 22082010240",
      icon: "globe",
      description: "Sertifikasi kemahiran berbahasa Inggris resmi (setara TOEFL Institutional) dari UPA Bahasa UPN 'Veteran' Jawa Timur dengan pencapaian skor 450.",
      image: "assets/cert-ept.jpg"
    }
  ],

  trainings: [
    {
      id: "train-uxwriting",
      title: "Short Class UI/UX Research & Design: UX Writing Fundamental",
      provider: "MySkill.id",
      date: "17 Oktober 2023",
      category: "UI/UX Design",
      certId: "94040/UIX/LM/10/2023",
      desc: "Prinsip penulisan microcopy yang jelas, padat, dan berempati untuk membimbing pengguna dalam navigasi produk digital.",
      image: "assets/cert-myskill-ux-writing.jpg"
    },
    {
      id: "train-figma",
      title: "Short Class UI/UX Design: Introduction to Figma",
      provider: "MySkill.id",
      date: "25 Maret 2023",
      category: "UI/UX Design",
      certId: "32109/UIX/LM/03/2023",
      desc: "Fundamental penguasaan Figma: layouting, design system components, interactive prototyping, dan best practice collaboration.",
      image: "assets/cert-myskill-figma.jpg"
    },
    {
      id: "train-dataviz",
      title: "Short Class Data Analysis: Basic Statistics and Data Visualization",
      provider: "MySkill.id",
      date: "19 Maret 2023",
      category: "Data Analysis",
      certId: "28829/DTA/LM/03/2023",
      desc: "Fundamental analisis data: statistik dasar, visualisasi data, pengolahan variabel, dan interpretasi grafik untuk insight bisnis.",
      image: "assets/cert-myskill-data-visualization.jpg"
    },
    {
      id: "train-frontend",
      title: "Short Class Software Engineering: Introduction to Frontend",
      provider: "MySkill.id",
      date: "18 Maret 2023",
      category: "Software Engineering",
      certId: "26669/WEB/LM/03/2023",
      desc: "Pemahaman dasar arsitektur web client-side, semantic HTML5, styling CSS modern, dan integrasi logika dasar JavaScript.",
      image: "assets/cert-myskill-frontend.jpg"
    }
  ],

  achievements: [
    {
      id: "achieve-telkom",
      title: "Semi Finalis UI/UX Design Competition",
      event: "7th Anniversary Information Systems",
      organizer: "Telkom Institute of Technology Purwokerto",
      year: "2023",
      badge: "Tingkat Nasional",
      icon: "trophy",
      projectTitle: "Aplikasi Mobile 'Peduli Gula'",
      description: "Merancang inovasi aplikasi mobile kesehatan 'Peduli Gula' bersama 2 anggota tim. Bertanggung jawab penuh mulai dari riset kebutuhan penderita diabetes, arsitektur informasi, perancangan UI/UX, hingga pengujian prototipe interaktif di hadapan dewan juri."
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
