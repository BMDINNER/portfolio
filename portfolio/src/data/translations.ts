export const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',

    // About Section
    'about.title': 'About Me',
    'about.p1': "Hello! I'm a full-stack developer building various projects and systems using technologies like TypeScript, ReactJS, and TailwindCSS. I containerize and test these projects using Docker.",
    'about.p2': "Currently, I'm working with Kubernetes, focusing on orchestration and container concepts.",
    'about.techs': "Technologies I've been working with:",

    // Projects Section
    'projects.title': 'Projects',

    // Modal
    'modal.description': 'Overview',
    'modal.features': 'Key Features',
    'modal.technologies': 'Technologies Used',
    'modal.liveDemo': 'Live Demo',
    'modal.noMedia': 'No media available for this project, but you can check out the "Details" for more information of the system flow.',
    'modal.details': 'Details',

    // Flowchart Section
    'flowchart.title': 'System Architecture',

    // Project Titles
    'project.auth': 'Multi-Platform Centralized Authentication Service',
    'project.logreg': 'LogReg - JWT Token Management Package',
    'project.ai': 'AI-Powered Code Snippet Platform',
    'project.hospital': 'Hospital Appointment & Prescription Platform',

    // Project Descriptions (short)
    'project.auth.desc': 'A centralized authentication service that handles registration, login, and JWT-based session management for multiple projects through API key scoping.',
    'project.logreg.desc': 'An NPM package that automatically generates JWT tokens and manages the access token lifecycle for React and Express applications.',
    'project.ai.desc': 'A full-stack platform where users create, save, and reuse code snippets, with AI assistance for generating, optimizing, and explaining code.',
    'project.hospital.desc': 'An appointment management system that combines MHRS and E-Nabız, where a patient can both book appointments and automatically generate prescriptions.',

    // Project Full Descriptions
    'project.auth.full': 'A centralized authentication microservice that handles user registration, login, JWT session management, OAuth2 (Google, GitHub, Microsoft), and project-based multi-tenancy with API key validation. Frontends never touch API keys directly; backend services attach project credentials before forwarding requests.',
    'project.logreg.full': 'A lightweight npm package that simplifies JWT token management for React applications. It handles login and registration flows, session refresh, and credential ownership, leaving the actual authentication logic to the backend. It was built as the frontend counterpart to my auth-service and is published on npm.',
    'project.ai.full': 'An AI-powered snippet management platform built with React, Express, Prisma, and PostgreSQL. Users can generate snippets from prompts, optimize existing code, get explanations, and chat with an AI assistant. AI features are powered by Groq and route through the backend so the API key never reaches the browser.',
    'project.hospital.full': 'A hospital management system that combines MHRS and E-Nabız functionality into a single platform. Patients can book appointments with hospitals and doctors, and after an appointment is completed, a prescription is automatically generated with medication details, diagnosis, and follow-up dates. Authentication is handled by my auth-service, and JWT tokens are managed by my LogReg package.',

    // Project Features
    'project.auth.features.0': 'JWT access and refresh token rotation',
    'project.auth.features.1': 'OAuth2 login (Google, GitHub, Microsoft)',
    'project.auth.features.2': 'Project-based multi-tenancy with API key validation',
    'project.auth.features.3': 'Secure password hashing with bcryptjs',
    'project.auth.features.4': 'Rate limiting and Helmet security headers',

    'project.logreg.features.0': 'Automatic token generation and refresh',
    'project.logreg.features.1': 'Form components driven by Zod schemas',
    'project.logreg.features.2': 'HTTP-only cookie session storage',
    'project.logreg.features.3': 'No API keys or project IDs exposed to the browser',
    'project.logreg.features.4': 'Minimal configuration required',

    'project.ai.features.0': 'AI-powered snippet generation and optimization',
    'project.ai.features.1': 'Code explanation and AI chat assistant',
    'project.ai.features.2': 'Search and filter by language, tags, and category',
    'project.ai.features.3': 'Markdown rendering with syntax highlighting',
    'project.ai.features.4': 'Groq API key kept server-side',

    'project.hospital.features.0': 'Appointment booking with hospital and doctor selection',
    'project.hospital.features.1': 'Automatic prescription generation on appointment completion',
    'project.hospital.features.2': 'Patient profile and medical history management',
    'project.hospital.features.3': 'Session management with token blacklisting',
    'project.hospital.features.4': 'API key and project ID hidden from the browser',

    // Video Descriptions - AI Project
    'video.ai.create.desc': 'Creating code snippets with the Groq-based AI model.',
    'video.ai.optimize.desc': 'Optimizing existing code with AI assistance.',
    'video.ai.explanation.desc': 'Creating a detailed and proper explanation for the generated or written code.',
    'video.ai.filter.desc': 'Filtering created snippets by searching for specific tags or clicking on the tags themselves.',
    'video.ai.help.desc': 'If help is needed beyond generating snippets, the chat assistant can help users with any code-related issues.',
    'video.ai.oauth2.desc': 'OAuth2 options for GitHub and Google are integrated as well for more login options.',

    // Video Descriptions - Hospital Project
    'video.hospital.appointment.desc': 'Booking appointments with hospital and doctor selection, and time slot availability.',
    'video.hospital.prescription.desc': 'Viewing and managing prescriptions with E-Nabız integration. Demonstrates the prescription retrieval and management system.',

    // Flowchart Descriptions
    'flowchart.auth.desc': 'Complete architecture diagram of the Multi-Platform Authentication Service showing JWT token flow, OAuth2 callbacks, project scoping, and the database schema.',
    'flowchart.logreg.desc': 'Complete architecture diagram of the LogReg JWT Token Management Package showing how the frontend, backend, and auth service interact, and where credentials live.',
    'flowchart.ai.desc': 'Complete architecture diagram of the AI-Powered Code Snippet Platform showing the integration with Groq, the snippet management system, the code optimization workflow, and the AI chat architecture.',
    'flowchart.hospital.desc': 'Complete architecture diagram of the Hospital Appointment & Prescription Platform showing the shared auth-service integration, LogReg token flow, patient management system, appointment scheduling flow, and prescription handling.',
  },
  tr: {
    // Navigation
    'nav.about': 'Hakkımda',
    'nav.projects': 'Projeler',

    // About Section
    'about.title': 'Hakkımda',
    'about.p1': "Merhabalar, fullstack developer olma yolunda ilerleyen, Typescript, ReactJS, TailwindCSS gibi teknolojiler kullanarak çeşitli projeler ve sistemler oluşturuyor, docker kullanarak bu projeleri konteynerize ediyor ve test ediyorum.",
    'about.p2': "İçerisinde bulunduğumuz zaman dilimi içerisinde, Kubernetes ile çalışmalarım sürmektedir. Orchestration ve Container mantıkları üzerinde çalışmalar yapmaktayım.",
    'about.techs': "Bu zamana kadar zamanla kendimi geliştirerek kullandığım teknolojiler:",

    // Projects Section
    'projects.title': 'Projeler',

    // Modal
    'modal.description': 'Genel Bakış',
    'modal.features': 'Öne Çıkan Özellikler',
    'modal.technologies': 'Kullanılan Teknolojiler',
    'modal.liveDemo': 'Canlı Demo',
    'modal.noMedia': 'Bu proje için medya mevcut değil, fakat "Detaylar" kısmından sistemin akışını inceleyebilirsiniz.',
    'modal.details': 'Detaylar',

    // Flowchart Section
    'flowchart.title': 'Sistem Mimarisi',

    // Project Titles
    'project.auth': 'Birden Fazla Platform Destekli Merkezi Authentication Servisi',
    'project.logreg': 'LogReg - JWT Token Yönetim Paketi',
    'project.ai': 'AI Destekli Kod Kaydetme Platformu',
    'project.hospital': 'Hastane Randevu ve Reçete Platformu',

    // Project Descriptions (short)
    'project.auth.desc': "Kullanıcı kaydı, giriş ve JWT tabanlı oturum yönetimini tek bir servis üzerinden yürüten, API anahtarı kapsamlandırması ile birden fazla projeye hizmet eden merkezi bir kimlik doğrulama servisi.",
    'project.logreg.desc': "React ve Express uygulamaları için JWT tokenlarını otomatik oluşturan ve access token yaşam döngüsünü yöneten bir NPM paketi.",
    'project.ai.desc': "Kullanıcıların kod parçaları oluşturup, kaydedip tekrar kullanabildiği; üretme, optimize etme ve açıklama için yapay zeka desteği alabildiği bir platform.",
    'project.hospital.desc': "MHRS ve E-Nabız'ı birleştirmeye çalıştığım, bir hastanın hem randevu alabileceği hem de otomatik reçete oluşturabildiği bir randevu yönetim sistemi.",

    // Project Full Descriptions
    'project.auth.full': 'Kullanıcı kaydı, giriş, JWT tabanlı oturum yönetimi, OAuth2 (Google, GitHub, Microsoft) ve API anahtarı doğrulamalı proje bazlı çoklu kiracılık işlemlerini yürüten merkezi bir kimlik doğrulama mikroservisi. Frontend, API anahtarlarına asla doğrudan dokunmaz; backend servisleri istekleri iletmeden önce proje kimlik bilgilerini ekler.',
    'project.logreg.full': 'React uygulamaları için JWT token yönetimini basitleştiren hafif bir npm paketi. Giriş ve kayıt akışlarını, oturum yenilemeyi ve kimlik bilgisi sahipliğini üstlenir; asıl kimlik doğrulama mantığını backend\'e bırakır. auth-service projemin frontend karşılığı olarak geliştirildi ve npm üzerinde yayınlandı.',
    'project.ai.full': 'React, Express, Prisma ve PostgreSQL ile geliştirilmiş, yapay zeka destekli bir snippet yönetim platformu. Kullanıcılar prompt\'tan snippet üretebilir, var olan kodu optimize edebilir, kod açıklaması alabilir ve yapay zeka asistanıyla sohbet edebilir. Yapay zeka özellikleri Groq ile güçlendirilmiştir.',
    'project.hospital.full': 'MHRS ve E-Nabız işlevlerini tek bir platformda birleştiren bir hastane yönetim sistemi. Hastalar hastane ve doktor seçerek randevu alabilir; randevu tamamlandığında ilaç bilgileri, tanı ve kontrol tarihi içeren bir reçete otomatik oluşturulur. Kimlik doğrulama auth-service tarafından yürütülür, JWT token yönetimi ise LogReg paketi ile sağlanır.',

    // Project Features
    'project.auth.features.0': 'JWT access ve refresh token rotasyonu',
    'project.auth.features.1': 'OAuth2 girişi (Google, GitHub, Microsoft)',
    'project.auth.features.2': 'API anahtarı doğrulamalı proje bazlı çoklu kiracılık',
    'project.auth.features.3': 'bcryptjs ile güvenli şifre hashleme',
    'project.auth.features.4': 'Rate limiting ve Helmet güvenlik başlıkları',

    'project.logreg.features.0': 'Otomatik token oluşturma ve yenileme',
    'project.logreg.features.1': 'Zod şemalarıyla üretilen form bileşenleri',
    'project.logreg.features.2': 'HTTP-only cookie ile oturum saklama',
    'project.logreg.features.3': 'Tarayıcıya sızmayan API anahtarı ve proje ID\'si',
    'project.logreg.features.4': 'Minimum yapılandırma gerektirir',

    'project.ai.features.0': 'Yapay zeka destekli snippet üretimi ve optimizasyonu',
    'project.ai.features.1': 'Kod açıklama ve yapay zeka sohbet asistanı',
    'project.ai.features.2': 'Dil, etiket ve kategoriye göre arama ve filtreleme',
    'project.ai.features.3': 'Syntax highlighting ile markdown render',
    'project.ai.features.4': 'Groq API anahtarı sunucu tarafında tutulur',

    'project.hospital.features.0': 'Hastane ve doktor seçimi ile randevu alma',
    'project.hospital.features.1': 'Randevu tamamlandığında otomatik reçete oluşturma',
    'project.hospital.features.2': 'Hasta profili ve tıbbi geçmiş yönetimi',
    'project.hospital.features.3': 'Token kara listeye alma ile oturum yönetimi',
    'project.hospital.features.4': 'API anahtarı ve proje ID\'si tarayıcıdan gizli',

    // Video Descriptions - AI Project (Turkish)
    'video.ai.create.desc': 'Groq tabanlı yapay zeka modeli ile kod parçaları oluşturma.',
    'video.ai.optimize.desc': 'Var olan kodu yapay zeka yardımı ile optimize etme.',
    'video.ai.explanation.desc': 'Üretilen veya yazılan kod için detaylı ve düzgün bir açıklama oluşturma.',
    'video.ai.filter.desc': 'Oluşturulmuş kod parçalarını, etiketlere tıklayarak veya arama kısmında etiket ya da kod parçasının kendisini aratarak filtreleme.',
    'video.ai.help.desc': 'Kod parçası oluşturmak dışında bir yardıma ihtiyaç duyulduğunda, sohbet asistanı kod ile ilgili konularda kullanıcılara yardımcı olur.',
    'video.ai.oauth2.desc': 'OAuth2 ile giriş opsiyonu projeye entegre edildi, böylelikle kullanıcıya platforma daha fazla giriş yapma seçeneği sağlanıyor.',

    // Video Descriptions - Hospital Project (Turkish)
    'video.hospital.appointment.desc': 'Hastane ve doktor seçimi, uygun zaman dilimleri ile randevu alma.',
    'video.hospital.prescription.desc': 'Reçete görüntüleme ve yönetimi. Reçete alma ve yönetim sistemini gösterir.',

    // Flowchart Descriptions (Turkish)
    'flowchart.auth.desc': 'Çoklu Platform Kimlik Doğrulama Servisi\'nin tam mimari diyagramı. JWT token akışını, OAuth2 callback\'lerini, proje kapsamlandırmasını ve veritabanı şemasını gösterir.',
    'flowchart.logreg.desc': 'LogReg JWT Token Yönetim Paketi\'nin tam mimari diyagramı. Frontend, backend ve auth servisinin nasıl etkileştiğini ve kimlik bilgilerinin nerede tutulduğunu gösterir.',
    'flowchart.ai.desc': 'Yapay Zeka Destekli Kod Snippet Platformu\'nun tam mimari diyagramı. Groq entegrasyonunu, snippet yönetim sistemini, kod optimizasyon akışını ve yapay zeka sohbet mimarisini gösterir.',
    'flowchart.hospital.desc': 'Hastane Randevu ve Reçete Platformu\'nun tam mimari diyagramı. Ortak auth-service entegrasyonunu, LogReg token akışını, hasta yönetim sistemini, randevu planlama akışını ve reçete yönetimini gösterir.',
  }
};

export type Language = 'en' | 'tr';
export type TranslationKey = keyof typeof translations.en;