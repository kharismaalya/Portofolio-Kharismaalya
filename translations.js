// Each row contains the Indonesian and English versions of the same text.
// Product names, institutions, publication titles, and course titles stay official.
const languagePairs = [
  ["Kepanitiaan", "Committee Work"], ["Pengalaman Kegiatan Kampus", "Campus Activities"],
  ["Organisasi", "Organization"], ["Pengalaman Organisasi & Kepanitiaan", "Organization & Committee Experience"],
  ["Pengalaman Kepanitiaan", "Committee Experience"], ["Pengalaman dalam Kegiatan Kampus", "Campus Involvement"],
  ["Saya pernah terlibat dalam kompetisi keamanan siber (CTF), seminar nasional, Terabit, malam keakraban, dan Latihan Dasar Organisasi ITech. Kegiatan tersebut memberi pengalaman dalam koordinasi acara, komunikasi, dan kerja tim.", "I have participated in campus activities including a cybersecurity competition (CTF), a national seminar, Terabit, a student gathering, and ITech's basic organization training. These activities gave me experience in event coordination, communication, and teamwork."],
  ["Pelatihan & Sertifikat | Kharisma Alya Septiana", "Training & Certificates | Kharisma Alya Septiana"],
  ["6 Sertifikat", "6 Certificates"], ["Lihat 6 Sertifikat", "View 6 Certificates"],
  ["Pengembangan Kompetensi", "Competency Development"], ["Sertifikat Pelatihan", "Training Certificates"],
  ["Pelatihan yang saya ikuti mencakup dasar jaringan, pengembangan web, keamanan siber, backend, dan cloud. Materinya melengkapi pengalaman saya dalam pengolahan data dan administrasi teknologi.", "My training covers networking fundamentals, web development, cybersecurity, backend development, and cloud. These courses complement my experience in data processing and technology administration."],
  ["Pelatihan yang saya ikuti mencakup dasar jaringan, pengembangan web, keamanan siber, backend, dan cloud. Rangkaian ini menunjukkan minat saya untuk terus belajar dan mendukung pekerjaan di bidang teknologi informasi.", "My training covers networking fundamentals, web development, cybersecurity, backend development, and cloud. These courses reflect my interest in continuous learning and supporting work in information technology."],
  ["Kembali ke Keahlian", "Back to Skills"],
  ["Lihat sertifikat Networking Basics", "View Networking Basics certificate"],
  ["Lihat sertifikat Belajar Dasar-dasar HTML dan CSS", "View HTML and CSS Fundamentals certificate"],
  ["Lihat sertifikat Introduction to Front-End Development", "View Introduction to Front-End Development certificate"],
  ["Lihat sertifikat Fundamental Cyber Security", "View Fundamental Cyber Security certificate"],
  ["Lihat sertifikat Belajar Membuat Aplikasi Back-End untuk Pemula", "View Back-End Development for Beginners certificate"],
  ["Lihat sertifikat Cloud Practitioner Essentials", "View Cloud Practitioner Essentials certificate"],
  ["Kepanitiaan & Organisasi | Kharisma Alya Septiana", "Organization & Committee Experience | Kharisma Alya Septiana"],
  ["Saya pernah terlibat dalam kompetisi keamanan siber (CTF), seminar nasional, Terabit, dan malam keakraban. Kegiatan tersebut memberi pengalaman dalam koordinasi acara, komunikasi, publikasi, dan dukungan administrasi.", "I have taken part in campus activities including a cybersecurity competition (CTF), a national seminar, Terabit, and a student gathering. These activities gave me experience in event coordination, communication, publicity, and administrative support."],
  ["Lihat Selengkapnya", "See More"], ["Dokumentasi Kegiatan", "Activity Documentation"], ["Kolase Foto Kepanitiaan", "Committee Photo Collage"], ["Foto kegiatan dapat ditambahkan di sini", "Committee photos will be added here"], ["Kampus & Organisasi", "Campus & Organization"],
  ["Organisasi & Kepanitiaan", "Organization & Committee Work"], ["Pengalaman Kegiatan Kampus", "Campus Activities"], ["Ragam Kegiatan", "Activities"], ["Pengalaman yang Saya Ikuti", "Activities I Joined"],
  ["Selama kuliah, saya mengikuti dan terlibat dalam berbagai kegiatan kampus, termasuk kompetisi keamanan siber atau Capture The Flag (CTF), seminar nasional, Terabit, dan malam keakraban. Dari kegiatan tersebut, saya mendapat pengalaman bekerja bersama tim, berkoordinasi dalam acara, berkomunikasi, dan mendukung publikasi. Saya juga menjalankan tanggung jawab bendahara di ITech.", "During college, I took part in campus activities including a cybersecurity competition or Capture The Flag (CTF), a national seminar, Terabit, and a student gathering. These experiences helped me work with teams, coordinate events, communicate, and support publicity. I also served as treasurer in ITech."],
  ["Keterlibatan dalam kegiatan kampus memberi kesempatan untuk belajar bekerja sama, membantu koordinasi acara, membangun komunikasi, serta mendukung kebutuhan administrasi dan publikasi.", "Campus involvement gave me opportunities to collaborate, help coordinate events, communicate with others, and support administrative and publicity needs."],
  ["Dokumen Pendukung", "Supporting Document"], ["Sertifikat Kepanitiaan", "Committee Certificate"], ["Sertifikat penghargaan kepanitiaan Latihan Dasar Organisasi ITech, 2025.", "Committee recognition certificate for ITech Basic Organization Training, 2025."], ["Lihat Sertifikat Kepanitiaan", "View Committee Certificate"],
  ["Menghubungi alumni dan PIC untuk mendukung pengisian kuesioner, melakukan data entry dan memperbarui data alumni, memantau progres, merekap status pengisian, serta menyusun laporan perkembangan Tracer Study.", "Contacted alumni and coordinators to support questionnaire completion, entered and updated alumni data, monitored progress, recapped response status, and prepared Tracer Study progress reports."],
  ["Data & Administrasi Operasional", "Data & Operational Administration"],
  ["Melakukan data entry dan rekapitulasi data untuk mendukung administrasi operasional.", "Entered and recapped data to support operational administration."],
  ["Membantu menyusun jadwal karyawan dan merekap jam lembur.", "Helped prepare employee schedules and recap overtime hours."],
  ["Mengoordinasikan tim untuk menindaklanjuti perbaikan layanan Wi-Fi, sekaligus melayani pelanggan dan menangani keluhan.", "Coordinated the team to follow up on Wi-Fi service repairs, while assisting customers and handling complaints."],
  ["Prediksi Penjualan Coffee Shop", "Coffee Shop Sales Forecasting"],
  ["Menganalisis tren penjualan untuk mendapatkan wawasan dalam mengoptimalkan stok.", "Analyzed sales trends to gain insights for inventory optimization."],
  ["Peramalan", "Forecasting"],
  ["Meraih Juara 3 Proyek Capstone Web Presensi.", "Won third place in the Attendance Web Capstone Project."],
  ["Proyek ini menggunakan metode K-Means untuk mengelompokkan data historis mahasiswa berdasarkan Tracer Study.", "This project applies K-Means to group historical student data based on Tracer Study data."],
  ["Angka hasil akhir belum dicantumkan.", "Final result figures have not been provided."],
  ["Situs Medical Tourism ini merupakan proyek gabungan beberapa mata kuliah.", "This Medical Tourism website is a project spanning several courses."],
  ["Situs ini dikembangkan secara kolaboratif dengan koordinasi kebutuhan, pengambilan keputusan, dan pemecahan masalah selama proses pengembangan.", "This collaborative website project involved coordinating requirements, making team decisions, and solving problems throughout development."],
  ["Mengoordinasikan komunikasi dan pekerjaan tim, mendukung pengambilan keputusan, serta berkontribusi sebagai analis selama pengembangan proyek.", "Coordinated team communication and work, supported decision-making, and contributed as an analyst during project development."],
  ["Hasil akhir proyek belum dicantumkan.", "A final project result has not been provided."],
  ["Sistem menggunakan aturan dan data gejala yang dikumpulkan sebagai dasar diagnosis awal.", "The system uses rules and collected symptom data as the basis for preliminary diagnosis."],
  ["Mengumpulkan data gejala, menyusun aturan, dan mengembangkan alur situs untuk konsultasi awal.", "Collected symptom data, defined rules, and developed website flows for preliminary consultations."],
  ["Proyek kolaborasi antara mahasiswa Kebidanan dan Teknologi Informasi.", "A collaborative project between Midwifery and Information Technology students."],
  ["Menerjemahkan kebutuhan skrining menjadi rancangan antarmuka untuk pengguna perangkat seluler dan desktop.", "Translated screening requirements into interface designs for mobile and desktop users."],
  ["Sertifikat BNSP Business Intelligence Analyst", "BNSP Business Intelligence Analyst certificate"],
  ["Lewati ke konten", "Skip to content"],
  ["Tentang", "About"], ["Pengalaman", "Experience"], ["Proyek", "Projects"],
  ["Prestasi", "Achievements"], ["Keahlian", "Skills"], ["Kontak", "Contact"],
  ["Lulusan Teknologi Informasi", "Information Technology Graduate"],
  ["Data Processing & Recapitulation", "Data Processing & Recapitulation"], ["Document Administration", "Document Administration"], ["Monitoring & Reporting", "Monitoring & Reporting"],
  ["Data & Analytics", "Analitik Data"], ["Administration", "Administrasi"], ["Data Processing & Recapitulation", "Pengolahan & Rekapitulasi Data"], ["Document Administration", "Administrasi Dokumen"], ["Monitoring & Reporting", "Pemantauan & Pelaporan"], ["Operational Support", "Dukungan Operasional"],
  ["Document Management", "Pengelolaan Dokumen"], ["Data Recapitulation", "Rekapitulasi Data"], ["Administrative Support", "Dukungan Administratif"], ["Attention to Detail", "Ketelitian"], ["Coordination", "Koordinasi"], ["Data Entry", "Entri Data"], ["Data Cleaning", "Pembersihan Data"], ["Data Processing", "Pengolahan Data"], ["Data Visualization", "Visualisasi Data"],
  ["Data & Analytics", "Data & Analytics"], ["Administration", "Administration"], ["Attention to Detail", "Attention to Detail"], ["Coordination", "Coordination"],
  ["Visualisasi analisis clustering kelulusan mahasiswa", "Student graduation clustering analysis visualization"],
  ["Menganalisis tren penjualan untuk menghasilkan insight pengoptimalan stok.", "Analyzed sales trends to identify opportunities for inventory optimization."],
  ["Menghubungi alumni dan PIC untuk mendukung pengisian kuesioner, memperbarui data alumni, memantau progres, merekap status pengisian, serta menyusun laporan perkembangan Tracer Study.", "Contacted alumni and coordinators about questionnaires, updated alumni records, monitored progress, summarized response status, and prepared Tracer Study progress reports."],
  ["Lulusan Teknologi Informasi dengan pengalaman pengolahan data, administrasi dokumen, rekapitulasi, dan dukungan operasional. Terbiasa memantau progres pekerjaan, menyusun laporan, serta berkoordinasi dalam kegiatan akademik dan organisasi.", "Information Technology graduate with experience in data processing, document administration, recapitulation, and operational support. Experienced in monitoring progress, preparing reports, and coordinating academic and organizational work."],
  ["Lihat Proyek", "View Projects"], ["Hubungi Saya", "Contact Me"], ["Unduh CV", "Download CV"],
  ["Fokus", "Focus"], ["Data & Administrasi", "Data & Administration"], ["Domisili", "Based in"],
  ["Terbuka untuk", "Open to"], ["Pekerjaan, Magang & Freelance", "Employment, Internship & Freelance"],
  ["Portofolio teknologi", "Technology portfolio"], ["Profil berbasis proyek", "Project-oriented profile"],
  ["Tentang Saya", "About Me"],
  ["Saya lulusan S1 Teknologi Informasi Universitas 'Aisyiyah Yogyakarta dengan IPK 3,71. Saya memiliki pengalaman mengolah dan menganalisis data, melakukan data entry dan rekapitulasi, serta mengelola dokumen dan administrasi operasional. Dalam tugas akhir, saya mengembangkan pipeline ETL berbasis Python untuk mengumpulkan dan mengolah data Twitter/X.", "I hold a bachelor's degree in Information Technology from Universitas 'Aisyiyah Yogyakarta, with a 3.71 GPA. My experience includes data processing and analysis, data entry and recapitulation, document management, and operational administration. For my final project, I developed a Python ETL pipeline to collect and process Twitter/X data."],
  ["Pengalaman saya mencakup pembaruan data alumni dan pemantauan kuesioner Tracer Study, pemeriksaan data dan dokumen akreditasi, serta pencatatan dan pelaporan keuangan organisasi. Saat magang, saya juga membantu penjadwalan karyawan, rekap lembur, koordinasi tindak lanjut perbaikan Wi-Fi, dan layanan pelanggan.", "My experience includes updating alumni records and monitoring Tracer Study questionnaires, checking accreditation data and documents, and recording and reporting organizational finances. During my internship, I also helped schedule employees, recap overtime, coordinate Wi-Fi repair follow-ups, and assist customers."],
  ["Analisis Data & Machine Learning", "Data Analytics & Machine Learning"],
  ["Administrasi Operasional", "Operational Administration"], ["Pipeline ETL Python", "Python ETL Pipeline"],
  ["Layanan Pelanggan", "Customer Service"],
  ["Manajemen Proyek", "Project Management"], ["Karya Pilihan", "Selected Work"], ["Proyek Unggulan", "Featured Projects"],
  ["Proyek pilihan ini menampilkan pengalaman Kharisma dalam pengolahan dan analisis data, pengembangan sistem, serta koordinasi proyek.", "These selected projects highlight Kharisma's experience in data processing and analysis, system development, and project coordination."],
  ["Capstone Presensi GPS & Kamera", "GPS & Camera Attendance Capstone"],
  ["Manajer Proyek & Analis Data", "Project Manager & Data Analyst"],
  ["Proyek gabungan beberapa mata kuliah dengan kontribusi sebagai manajer proyek dan analis data.", "A project spanning several courses, with contributions as Project Manager and Data Analyst."],
  ["Merancang alur sistem dan menganalisis kebutuhan untuk presensi berbasis GPS dan kamera.", "Designed system workflows and analyzed requirements for GPS and camera based attendance."],
  ["Analisis Sistem", "System Analysis"], ["Kamera", "Camera"], ["Lihat Detail", "View Details"],
  ["SIMBPA – Skrining Ibu & Anak", "SIMBPA – Maternal & Child Health Screening"],
  ["Merancang UI desktop dan mobile serta prototipe interaktif menggunakan Figma.", "Designed desktop and mobile interfaces and interactive prototypes using Figma."],
  ["Pipeline Scraping Twitter/X", "Twitter/X Scraping Pipeline"],
  ["Tugas akhir: mengembangkan pipeline ETL otomatis berbasis Python untuk data terkait studi kasus Program Makan Bergizi Gratis.", "Final project: developed an automated Python ETL pipeline for data related to Indonesia's Free Nutritious Meals Program."],
  ["Rekayasa Data", "Data Engineering"], ["Manajer Proyek", "Project Manager"],
  ["JogjaCare – Situs Wisata Medis", "JogjaCare – Medical Tourism Website"],
  ["Project gabungan beberapa mata kuliah dengan peran sebagai Project Manager untuk koordinasi tim, keputusan, komunikasi, dan problem solving.", "A project spanning several courses, serving as Project Manager for team coordination, decision making, communication, and problem solving."],
  ["Pengembangan Web", "Web Development"], ["Koordinasi Tim", "Team Coordination"],
  ["Proyek Lainnya | Kharisma Alya Septiana", "Other Projects | Kharisma Alya Septiana"],
  ["Proyek Lainnya", "Other Projects"],
  ["Karya Lainnya", "More Work"],
  ["Karya Pilihan", "Selected Work"], ["Proyek Unggulan", "Featured Projects"],
  ["08 Projects", "08 Projects"],
  ["Jelajahi proyek lain di bidang data, pengembangan web, desain antarmuka, dan kerja tim.", "Explore other projects across data, web development, interface design, and teamwork."],
  ["08 Projects", "08 Projects"], ["08 Proyek", "08 Projects"],
  ["Analisis Clustering Kelulusan Mahasiswa", "Student Graduation Clustering Analysis"],
  ["Menganalisis data historis mahasiswa menggunakan K-Means untuk melihat pola kelulusan.", "Analyzed historical student data with K-Means to identify graduation patterns."],
  ["Capstone Presensi GPS & Kamera", "GPS & Camera Attendance Capstone"],
  ["Analisis Sistem", "System Analysis"], ["Kamera", "Camera"], ["Lihat Detail", "View Details"],
  ["Project Manager & Data Analyst", "Project Manager & Data Analyst"],
  ["Berperan sebagai Project Manager dan Data Analyst: mengoordinasikan tim serta lini masa proyek, sekaligus mendukung pengolahan dan analisis data.", "Served as Project Manager and Data Analyst, coordinating the team and project timeline while supporting data processing and analysis."],
  ["Tim Akreditasi Program Studi Teknologi Informasi", "Information Technology Study Program Accreditation Team"],
  ["Mengolah dan memverifikasi data akreditasi, memeriksa kelengkapan dokumen, serta membantu mengelola RPS, portofolio mata kuliah, dan dokumen pendukung akreditasi.", "Processed and verified accreditation data, checked document completeness, and helped manage course plans, course portfolios, and supporting accreditation documents."],
  ["Pengolahan Data", "Data Processing"], ["Dokumen", "Documents"], ["Akreditasi", "Accreditation"],
  ["07 projects", "07 proyek"], ["08 projects", "08 proyek"], ["Jelajahi Proyek", "Explore Projects"],
  ["Lihat Semua Proyek", "Explore All Projects"], ["Kembali ke Portofolio", "Back to Portfolio"], ["Kembali ke proyek unggulan", "Back to featured projects"],
  ["Ruang untuk melihat karya dan pengalaman proyek lainnya, dari pengembangan aplikasi hingga kolaborasi lintas bidang.", "Explore more work and project experience, from application development to cross-disciplinary collaboration."],
  ["Arsip Proyek", "Project Archive"], ["UI / UX Design", "Desain UI / UX"], ["Web Project", "Proyek Web"], ["Programming", "Pemrograman"], ["Application Development", "Pengembangan Aplikasi"], ["Learning Technology", "Teknologi Pembelajaran"], ["Business Case", "Studi Kasus Bisnis"], ["Data Analysis", "Analisis Data"], ["Web Application", "Aplikasi Web"], ["Machine Learning", "Pembelajaran Mesin"],
  ["Game Labirin", "Maze Game"],
  ["Proyek akhir Pemrograman Dasar berupa game labirin kelompok menggunakan C++.", "A team maze game built in C++ as the final project for Programming Fundamentals."],
  ["Dasar Pemrograman", "Programming Fundamentals"], ["Formulir Rekam Medis", "Medical Record Form"],
  ["Aplikasi pengelolaan data pasien untuk proyek Struktur Data dan Algoritma.", "A patient data management application for a Data Structures and Algorithms project."],
  ["Struktur Data", "Data Structure"], ["Proyek Pembelajaran MoodleCloud", "MoodleCloud Learning Project"],
  ["Pengembangan pembelajaran berbasis MoodleCloud untuk Inovasi Pembelajaran Jarak Jauh.", "Developed MoodleCloud learning materials for a Distance Learning Innovation course."],
  ["Pembelajaran Daring", "E-Learning"], ["Studi Kasus Bisnis – Indoned Gizi", "Business Case – Indoned Gizi"],
  ["Proyek kelompok untuk merancang strategi dan solusi pengembangan perusahaan.", "A team project to design strategies and solutions for company development."],
  ["Analisis Bisnis", "Business Analysis"], ["Strategi", "Strategy"],
  ["Sistem Prediksi Penyakit Jantung", "Heart Disease Prediction System"],
  ["Membangun sistem prediksi penyakit jantung menggunakan algoritma Random Forest.", "Built a heart disease prediction system using the Random Forest algorithm."],
  ["Analisis Data", "Data Analysis"],
  ["Analisis Clustering Kelulusan Mahasiswa", "Student Graduation Clustering Analysis"],
  ["Menggunakan K-Means untuk mengelompokkan data historis mahasiswa berdasarkan tracer study dan pola tahun kelulusan periode 2016–2020.", "Used K-Means to group historical student data based on tracer studies and graduation year patterns from 2016 to 2020."],
  ["Menggunakan metode K-Means untuk clustering data historis mahasiswa berdasarkan tracer study dan pola tahun kelulusan periode 2016-2020.", "Used K-Means to cluster historical student data based on tracer studies and graduation year patterns from 2016 to 2020."],
  ["Sistem Pakar Diagnosa Penyakit Asma", "Asthma Diagnosis Expert System"],
  ["Sistem pakar berbasis website untuk membantu proses diagnosis awal penyakit asma menggunakan rule dan data gejala yang dikumpulkan.", "A web expert system supporting preliminary asthma diagnosis using rules and collected symptom data."],
  ["Sistem Pakar", "Expert System"], ["Pengumpulan Data", "Data Collection"],
  ["Pengalaman Akademik", "Academic Experience"], ["Surveyor Tracer Study", "Tracer Study Surveyor"],
  ["Bertanggung jawab dalam pelaksanaan Tracer Study dengan menghubungi alumni melalui WhatsApp, telepon, dan grup alumni untuk menyampaikan informasi serta mengingatkan pengisian kuesioner. Melakukan pemantauan status pengisian, memperbarui data alumni, merekap progres pengisian berdasarkan program studi dan tahun kelulusan, serta menyusun laporan perkembangan untuk memastikan pengisian kuesioner berjalan dengan baik dan mencapai target yang ditetapkan.", "Supported the Tracer Study by contacting alumni through WhatsApp, phone calls, and alumni groups to share information and questionnaire reminders. Monitored responses, updated alumni records, summarized progress by study program and graduation year, and prepared progress reports to help meet response targets."],
  ["Komunikasi Alumni", "Alumni Outreach"], ["Pengelolaan Data", "Data Management"], ["Pelaporan", "Reporting"],
  ["Tim Akreditasi Program Studi Teknologi Informasi", "Information Technology Study Program Accreditation Team"],
  ["Program Studi Teknologi Informasi, UNISA Yogyakarta", "Information Technology Study Program, UNISA Yogyakarta"],
  ["Mengolah dan memverifikasi data akreditasi, memeriksa kelengkapan dokumen, serta membantu mengelola RPS, portofolio mata kuliah, dan dokumen pendukung akreditasi.", "Processed and verified accreditation data, checked document completeness, and helped manage course plans, course portfolios, and supporting accreditation documents."],
  ["Penelitian", "Research"], ["Pengolahan Data", "Data Processing"], ["Akreditasi", "Accreditation"],
  ["Magang Industri", "Industry Internship"], ["Okt 2024 – Jan 2025", "Oct 2024 – Jan 2025"],
  ["Analis Data & Administrasi Operasional", "Data Analyst & Operational Administration"],
  ["Melayani pelanggan dan menangani keluhan (customer service/support) terkait masalah teknis maupun layanan Wi-Fi.", "Provided customer service and resolved complaints about technical issues and Wi-Fi services."],
  ["Melakukan analisis kelayakan layanan Wi-Fi Coin Cleon dengan metode Skala Likert dan dipublikasikan pada prosiding ilmiah nasional.", "Analyzed the feasibility of Coin Cleon Wi-Fi services using a Likert scale, with findings published in national scientific proceedings."],
  ["Pengabdian Masyarakat", "Community Service"],
  ["Digitalroots Alpha: Pelatihan Kesehatan Keluarga Berbasis Teknologi", "Digitalroots Alpha: Technology Based Family Health Training"],
  ["Desa Salam, Patuk, Gunungkidul · UNISA Yogyakarta & PT SIMS", "Salam Village, Patuk, Gunungkidul · UNISA Yogyakarta & PT SIMS"],
  ["15 Februari 2025", "15 February 2025"],
  ["Berpartisipasi dalam kegiatan pengabdian masyarakat yang membahas penggunaan internet secara positif dan pemanfaatan teknologi sebagai sumber pengetahuan kesehatan keluarga.", "Participated in a community service program on positive internet use and technology as a source of family health knowledge."],
  ["Literasi Digital", "Digital Literacy"], ["Kesehatan Keluarga", "Family Health"],
  ["Baca liputan kegiatan ↗", "Read the event coverage ↗"], ["Proyek Masyarakat", "Community Project"],
  ["Program Kreativitas Mahasiswa - TELE-UKS", "Student Creativity Program - TELE-UKS"],
  ["Berpartisipasi dalam kegiatan PKM kolaboratif yang melibatkan mahasiswa bidang kesehatan dan Teknologi Informasi. Program berfokus pada peningkatan kesehatan siswa melalui skrining anemia dan edukasi pola hidup sehat.", "Participated in a collaborative Student Creativity Program involving health and Information Technology students. The program focused on improving student health through anemia screening and healthy lifestyle education."],
  ["Kolaborasi", "Collaboration"], ["Teknologi", "Technology"], ["Kesehatan", "Health"],
  ["Program Akademik", "Academic Program"], ["Pertukaran Mahasiswa Merdeka", "Independent Student Exchange Program"],
  ["Mengikuti kegiatan akademik lintas universitas dan menyelesaikan proyek pengolahan data clustering kelulusan mahasiswa.", "Joined academic activities at another university and completed a student graduation data clustering project."],
  ["Pertukaran Mahasiswa", "Student Exchange"], ["Akademik", "Academic"],
  ["Penghargaan", "Recognition"], ["Finalis", "Finalist"],
  ["Finalis - Kompetisi Karya Tulis Ilmiah Nasional", "Finalist - National Scientific Writing Competition"],
  ["Menjadi salah satu finalis dalam kompetisi Karya Tulis Ilmiah tingkat nasional yang diselenggarakan secara online oleh Universitas Brawijaya.", "Selected as a finalist in a national scientific writing competition held online by Universitas Brawijaya."],
  ["Perunggu", "Bronze"], ["Medali Perunggu – Kompetisi Esai Nasional", "Bronze Medal – National Essay Competition"],
  ["Meraih medali perunggu dalam kompetisi esai tingkat nasional.", "Won a bronze medal in a national essay competition."],
  ["Juara 3", "3rd Place"], ["Juara 3 Capstone Project Web Presensi", "3rd Place – Attendance Web Capstone Project"],
  ["Proyek Capstone", "Capstone Project"],
  ["Meraih Juara 3 melalui pengembangan proyek web presensi.", "Won third place for developing an attendance web project."],
  ["Riset & Penulisan", "Research & Writing"], ["Publikasi Ilmiah", "Scientific Publications"],
  ["Karya ilmiah dan publikasi kolaboratif", "Scientific work and collaborative publications"],
  ["Jurnal", "Journal"], ["Prosiding", "Proceedings"], ["Terbit Januari 2026", "Published January 2026"],
  ["Publikasi", "Publication"], ["Pendidikan", "Education"],
  ["Teknologi Informasi", "Information Technology"], ["Teknik Komputer dan Jaringan", "Computer and Network Engineering"],
  ["Organisasi", "Organization"], ["Pengalaman Organisasi & Kepanitiaan", "Organization & Committee Experience"],
  ["Kepemimpinan", "Leadership"], ["ITech - Himpunan Mahasiswa Teknologi Informasi", "ITech - Information Technology Student Association"],
  ["Bendahara Umum", "General Treasurer"],
  ["Mencatat pemasukan dan pengeluaran, merekap transaksi, menyusun laporan keuangan, serta menata dokumentasi transaksi organisasi.", "Recorded income and expenses, recapped transactions, prepared financial reports, and organized transaction records."],
  ["Sertifikat Organisasi", "Organization Certificates"], ["1 Sertifikat", "1 Certificate"],
  ["Lihat Sertifikat", "View Certificate"], ["Lihat sertifikat Latihan Dasar Organisasi", "View Basic Organization Training certificate"],
  ["Sertifikat Latihan Dasar Organisasi ITech tahun 2025", "ITech Basic Organization Training certificate, 2025"],
  ["Penghargaan kepanitiaan Latihan Dasar Organisasi ITech, 2025.", "Committee recognition for ITech Basic Organization Training, 2025."],
  ["Pengalaman Kepanitiaan", "Committee Experience"],
  ["Pengalaman dalam kegiatan kampus dan kepanitiaan.", "Experience in campus activities and event committees."],
  ["Foto kegiatan", "Event photo"], ["Kompetisi", "Competition"], ["Kompetisi Keamanan Siber", "Cybersecurity Competition"],
  ["Seminar Nasional", "National Seminar"], ["Kepanitiaan acara akademik", "Academic event committee"],
  ["Acara Kampus", "Campus Event"], ["Kegiatan kemahasiswaan", "Student activities"],
  ["Kebersamaan", "Togetherness"], ["Malam Keakraban", "Student Bonding Night"], ["Makrab", "Bonding event"],
  ["Keuangan", "Finance"], ["Pengelolaan Keuangan", "Financial Management"], ["Tanggung jawab bendahara", "Treasurer responsibilities"],
  ["Acara", "Event"], ["Perencanaan Acara", "Event Planning"], ["Koordinasi kegiatan", "Event coordination"],
  ["Komunikasi", "Communication"], ["Hubungan Masyarakat", "Public Relations"], ["Informasi dan publikasi acara", "Event information and publicity"],
  ["Keahlian & Kredensial", "Skills & Credentials"], ["Keahlian, Pelatihan & Sertifikasi", "Skills, Training & Certification"],
  ["Analitik Data", "Data Analytics"], ["Perangkat & Keahlian Lainnya", "Tools & Other Skills"],
  ["Dukungan Operasional", "Operational Support"], ["Desain UI/UX", "UI/UX Design"],
  ["Kerja Sama Tim", "Teamwork"], ["Manajemen Waktu", "Time Management"],
  ["Pelatihan", "Training"], ["Kredensial Profesional", "Professional Credential"], ["Sertifikasi", "Certification"],
  ["CV Sedang Diperbarui", "CV Is Being Updated"], ["Maaf, CV Alya sedang diperbarui. Sebentar ya!", "Sorry, Alya's CV is being updated. Please check back soon!"],
  ["1 Sertifikat", "1 Certificate"], ["TERSERTIFIKASI", "CERTIFIED"], ["KOMPETENSI", "COMPETENCY"],
  ["Pipeline ETL", "ETL Pipeline"], ["Scraping Data", "Data Scraping"],
  ["Proyek lainnya", "Other projects"],
  ["Sertifikasi kompetensi dalam pengumpulan, penelaahan, validasi, konstruksi, dan integrasi data serta proses review pemodelan data.", "Competency certification in data collection, review, validation, construction, and integration, as well as data modeling review."],
  ["Mari Terhubung", "Let's Connect"],
  ["Terbuka untuk kesempatan kerja, magang, proyek, maupun kolaborasi di bidang teknologi.", "Open to employment, internships, freelance projects, and collaboration in technology."],
  ["Kirim Email", "Send Email"], ["Portofolio Teknologi Informasi", "Information Technology Portfolio"],
  ["Kharisma Alya Septiana | Portofolio Teknologi Informasi", "Kharisma Alya Septiana | Information Technology Portfolio"],
  ["Gambaran Umum", "Overview"], ["Masalah / Konteks", "Problem / Context"], ["Peran", "Role"],
  ["Proses", "Process"], ["Hasil / Luaran", "Result / Output"], ["Perangkat / Teknologi", "Tools / Technology"],
  ["Sistem presensi berbasis GPS dan kamera untuk proyek capstone.", "A GPS and camera based attendance system for a capstone project."],
  ["Perancangan alur presensi yang memanfaatkan lokasi GPS dan kamera.", "Designed an attendance workflow using GPS location and camera capture."],
  ["Kontributor analisis sistem", "System analysis contributor"],
  ["Menganalisis kebutuhan dan merancang alur sistem presensi berbasis GPS dan kamera.", "Analyzed requirements and designed workflows for a GPS and camera based attendance system."],
  ["Meraih Juara 3 Capstone Project Web Presensi.", "Won third place in the Attendance Web Capstone Project."],
  ["Pipeline ETL otomatis berbasis Python untuk mengumpulkan dan mengolah data Twitter/X.", "An automated Python ETL pipeline to collect and process Twitter/X data."],
  ["Tugas akhir dengan studi kasus Program Makan Bergizi Gratis.", "A final project studying Indonesia's Free Nutritious Meals Program."],
  ["Pengembangan pipeline ETL dan pengolahan data", "ETL pipeline development and data processing"],
  ["Mengembangkan alur pengumpulan, pembersihan, dan pengolahan data Twitter/X secara otomatis menggunakan Python.", "Developed automated workflows for collecting, cleaning, and processing Twitter/X data using Python."],
  ["Pipeline ETL otomatis untuk data Twitter/X.", "An automated ETL pipeline for Twitter/X data."],
  ["Analisis Clustering K-Means", "K-Means Clustering Analysis"],
  ["Hasil Klustering K-means scatter plot", "Scatter plot of K-Means clustering results"],
  ["Project ini menggunakan metode K-Means untuk melakukan clustering data historis mahasiswa berdasarkan data tracer study.", "This project uses K-Means to cluster historical student data from tracer studies."],
  ["Dikerjakan saat mengikuti program pertukaran mahasiswa, dengan fokus melihat pola tahun kelulusan mahasiswa Program Studi Sistem Informasi Universitas Brawijaya periode 2016-2020.", "Completed during a student exchange program, examining graduation year patterns for Information Systems students at Universitas Brawijaya from 2016 to 2020."],
  ["Kontributor analisis data", "Data analysis contributor"],
  ["Mengolah data historis, menerapkan metode clustering, lalu menyajikan pola hasil analisis dalam visualisasi yang mudah dibaca.", "Processed historical data, applied clustering, and presented the analysis patterns in clear visualizations."],
  ["Result / Output belum dilengkapi dengan angka atau laporan final pada PRD.", "Results and final figures have not yet been documented."],
  ["Project website Medical Tourism merupakan project gabungan beberapa mata kuliah.", "The Medical Tourism website is a project spanning several courses."],
  ["Website dirancang sebagai produk kolaboratif yang membutuhkan koordinasi lintas kebutuhan, keputusan tim, dan penyelesaian masalah selama pengembangan.", "The website was designed collaboratively, requiring coordination of requirements, team decisions, and problem solving throughout development."],
  ["Mengatur komunikasi tim, membantu pengambilan keputusan, mengoordinasi anggota, dan menjaga penyelesaian pekerjaan selama pengembangan project. Juga berkontribusi sebagai analis.", "Managed team communication, supported decisions, coordinated members, and kept tasks on track throughout development. Also contributed as an analyst."],
  ["Result / Output belum tersedia pada PRD.", "Results have not yet been documented."],
  ["Sistem Berbasis Aturan", "Rule-Based System"],
  ["Antarmuka sistem pakar berbasis aturan untuk diagnosis asma", "Rule-based expert system interface for asthma diagnosis"],
  ["Sistem pakar berbasis website untuk membantu proses diagnosis awal penyakit asma.", "A web expert system supporting preliminary asthma diagnosis."],
  ["Project memanfaatkan rule dan data gejala yang telah dikumpulkan sebagai dasar proses diagnosis awal.", "The project uses rules and collected symptom data to support preliminary diagnosis."],
  ["Kontributor pengembangan sistem", "System development contributor"],
  ["Mengumpulkan data gejala, menyusun rule, dan mengembangkan alur website untuk proses konsultasi awal.", "Collected symptom data, defined rules, and developed website workflows for preliminary consultations."],
  ["Proyek Desain Antarmuka", "UI Design Project"],
  ["Project kolaborasi antara mahasiswa Kebidanan dan mahasiswa Teknologi Informasi.", "A collaborative project between Midwifery and Information Technology students."],
  ["Tim Teknologi Informasi mengembangkan kebutuhan skrining kesehatan ibu dan anak menjadi rancangan UI untuk versi mobile dan desktop.", "The Information Technology team translated maternal and child health screening requirements into mobile and desktop interface designs."],
  ["Kontributor desain antarmuka", "UI design contributor"],
  ["Menerjemahkan requirement skrining menjadi rancangan antarmuka yang mendukung kebutuhan pengguna pada perangkat mobile dan desktop.", "Translated screening requirements into interface designs supporting user needs on mobile and desktop devices."],
  ["Rancangan UI desktop dan mobile serta prototipe interaktif menggunakan Figma.", "Desktop and mobile interface designs and interactive prototypes using Figma."],
  ["Analisis Kebutuhan", "Requirement Analysis"], ["UI Mobile", "Mobile UI"], ["UI Desktop", "Desktop UI"],
  ["Visualisasi Data", "Data Visualization"], ["Pembersihan Data", "Data Cleaning"], ["Prapemrosesan", "Preprocessing"],
  ["Navigasi utama", "Primary navigation"], ["Beranda Kharisma Alya Septiana", "Kharisma Alya Septiana home"],
  ["Buka navigasi", "Open navigation"], ["Tutup navigasi", "Close navigation"], ["Aksi utama", "Primary actions"],
  ["Sorotan portofolio", "Portfolio highlights"], ["Sorotan utama", "Core highlights"],
  ["Kontrol carousel proyek", "Project carousel controls"], ["Geser proyek ke kiri", "Scroll projects left"], ["Geser proyek ke kanan", "Scroll projects right"],
  ["Pengalaman kepanitiaan dan acara kampus", "Committee and campus event experience"], ["Tutup dialog", "Close dialog"],
  ["Pilih bahasa", "Choose language"],
  ["Lihat sertifikat Finalist", "View finalist certificate"], ["Lihat sertifikat Bronze Medal", "View bronze medal certificate"], ["Lihat sertifikat Juara 3", "View third place certificate"],
  ["Kharisma Alya Septiana mengenakan toga dan memegang ijazah saat wisuda", "Kharisma Alya Septiana wearing a graduation gown and holding her diploma"],
  ["Kharisma Alya Septiana menerima medali perunggu di FAPERTA FAIR 7", "Kharisma Alya Septiana receiving a bronze medal at FAPERTA FAIR 7"],
  ["Jaringan", "Networking"], ["Keamanan Siber", "Cybersecurity"],
  ["Tampilan aplikasi Capstone Presensi GPS dan Kamera", "GPS and camera attendance capstone application"],
  ["Tampilan SIMBPA untuk skrining kesehatan ibu dan anak", "SIMBPA maternal and child health screening interface"],
  ["Diagram alur pipeline ETL untuk data Twitter/X", "ETL pipeline workflow for Twitter/X data"],
  ["Tampilan halaman utama JogjaCare", "JogjaCare homepage"],
  ["Tampilan halaman utama JogjaCare untuk proyek Medical Tourism Website", "JogjaCare homepage for the Medical Tourism Website project"]
];

const normalizeText = (text) => text.replace(/\s+/g, " ").trim();
const translationIndex = new Map();
languagePairs.forEach(([id, en]) => {
  translationIndex.set(normalizeText(id), { id, en });
  translationIndex.set(normalizeText(en), { id, en });
});
let currentLanguage = "id";
const originalText = new WeakMap();
const originalAttributes = new WeakMap();

function translateText(text) {
  return translationIndex.get(normalizeText(text))?.[currentLanguage] ?? text;
}

// Remember the source so repeated switches never translate an already translated value.
function translateContent(root = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => node.parentElement.closest("script, style, [data-language-switch]")
      ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!originalText.has(node)) originalText.set(node, node.textContent);
    const source = originalText.get(node);
    node.textContent = source.replace(/\S[\s\S]*\S|\S/, (text) => translateText(text));
  }
  [root, ...root.querySelectorAll("[alt], [aria-label]")].forEach((element) => {
    if (!originalAttributes.has(element)) originalAttributes.set(element, {});
    const originals = originalAttributes.get(element);
    ["alt", "aria-label"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      originals[attribute] ??= element.getAttribute(attribute);
      let text = translateText(originals[attribute]);
      if (attribute === "alt" && currentLanguage === "en") text = text.replace(/^Sertifikat /, "Certificate: ");
      element.setAttribute(attribute, text);
    });
  });
}

function setLanguage(language) {
  currentLanguage = language === "en" ? "en" : "id";
  document.documentElement.lang = currentLanguage;
  const isCommitteePage = window.location.pathname.endsWith("committee.html");
  const isArchivePage = window.location.pathname.endsWith("other-projects.html");
  const isTrainingPage = window.location.pathname.endsWith("training.html");
  document.title = isTrainingPage
    ? translateText("Pelatihan & Sertifikat | Kharisma Alya Septiana")
    : isCommitteePage
    ? translateText("Kepanitiaan & Organisasi | Kharisma Alya Septiana")
    : isArchivePage
      ? translateText("Proyek Lainnya | Kharisma Alya Septiana")
      : translateText("Kharisma Alya Septiana | Information Technology Portfolio");
  const description = isTrainingPage
    ? (currentLanguage === "id"
      ? "Pelatihan dan sertifikat Kharisma Alya Septiana di bidang jaringan, pengembangan web, keamanan siber, backend, dan cloud."
      : "Kharisma Alya Septiana's training and certificates in networking, web development, cybersecurity, backend, and cloud.")
    : isCommitteePage
    ? (currentLanguage === "id"
      ? "Pengalaman organisasi dan kepanitiaan kampus Kharisma Alya Septiana."
      : "Kharisma Alya Septiana's campus organization and committee experience.")
    : isArchivePage
      ? (currentLanguage === "id"
        ? "Kumpulan proyek lain Kharisma Alya Septiana di bidang teknologi informasi, data, desain, dan pengembangan sistem."
        : "More of Kharisma Alya Septiana's work in information technology, data, design, and system development.")
      : (currentLanguage === "id"
        ? "Portofolio Kharisma Alya Septiana, lulusan Teknologi Informasi dengan pengalaman dalam analisis data, pengembangan sistem, desain antarmuka, dan administrasi operasional."
        : "Portfolio of Kharisma Alya Septiana, an Information Technology graduate with experience in data analysis, system development, interface design, and operational administration.");
  document.querySelector('meta[name="description"]').content = description;
  document.querySelector('meta[property="og:description"]').content = description;
  document.querySelector('meta[property="og:title"]').content = document.title;
  translateContent();
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
  });
  const toggle = document.querySelector(".nav-toggle");
  toggle?.setAttribute("aria-label", translateText(toggle.getAttribute("aria-expanded") === "true" ? "Close navigation" : "Open navigation"));
  try { localStorage.setItem("portfolio-language", currentLanguage); } catch { /* Storage may be disabled. */ }
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});
let savedLanguage = "id";
try { savedLanguage = localStorage.getItem("portfolio-language") || "id"; } catch { /* Use Indonesian. */ }
setLanguage(savedLanguage);
