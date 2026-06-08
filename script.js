const translations = {
    ar: {
        dir: "rtl",
        "btn-hide-header": "إخفاء القائمة",
        "btn-show-header": "إظهار القائمة",
        "nav-home": "الرئيسية",
        "nav-danger": "مخاطر الإنترنت",
        "nav-cyber": "الأمن السيبراني",
        "nav-systems": "نظم المعلومات",
        "nav-protection": "حماية البيانات",
        "nav-stories": "هجمات تاريخية",

        "home-title": "بوابة التكنولوجيا والمعرفة المتقدمة",
        "home-desc": "أكاديمية رقمية متكاملة تهدف إلى تشريح مخاطر الفضاء السيبراني المعقدة، واستكشاف أحدث إستراتيجيات الدفاع الأمني، وتحليل بنية نظم المعلومات وإدارة البيانات الضخمة في المؤسسات الحديثة.",

        "danger-title": "التشريح الأكاديمي لمهددات الفضاء الرقمي",
        "danger-subtitle": "لم تعد التهديدات مجرد فيروسات عابرة، بل تحولت إلى منظومات تخريبية منظمة تستهدف البنى التحتية للمعلومات.",
        "danger-c1-title": "برمجيات الفدية المتطورة (Advanced Ransomware)",
        "danger-c1-desc": "تعتمد برمجيات الفدية الحديثة على إستراتيجية 'الابتزاز المزدوج'، حيث تقوم بتسريب البيانات الحساسة أولاً ثم تشفيرها محلياً باستخدام خوارزميات هجينة معقدة مثل RSA-2048 و AES-256.",
        "danger-c2-title": "الهندسة الاجتماعية والتزييف العميق (Deepfakes)",
        "danger-c2-desc": "تطور الاصطياد التقليدي إلى اصطياد موجه يعتمد على جمع معلومات استخباراتية دقيقة عن الضحية عبر مصادر مفتوحة (OSINT)، مدمجاً بتقنيات التزييف العميق الصوتي والمرئي لتزوير الهويات.",

        "cyber-title": "هندسة الدفاع السيبراني وسياسات الحماية",
        "cyber-subtitle": "الأمن السيبراني ليس منتجاً يتم شراؤه، بل هو علم تكاملي يجمع بين التكنولوجيا المتطورة، والسياسات الصارمة، والوعي البشري.",
        "cyber-c1-title": "مثلث أمن البيانات (The CIA Triad)",
        "cyber-c1-desc": "تتمحور الهندسة الأمنية حول ثلاثة أركان رئيسية: السرية (Confidentiality) لضمان عدم الوصول غير المصرح للبيانات، السلامة (Integrity) لضمان عدم التعديل، والتوافر (Availability).",
        "cyber-c2-title": "أنظمة الكشف والاستجابة (EDR & SIEM)",
        "cyber-c2-desc": "تعتمد مراكز العمليات الأمنية (SOC) على الذكاء الاصطناعي لتحليل سجلات الأحداث لحظياً، مما يسمح بالتنبؤ بالهجمات السلوكية غير المعروفة مسبقاً (Zero-Day Attacks) وإيقافها.",

        "systems-title": "هندسة وإدارة نظم المعلومات بالمؤسسات",
        "systems-subtitle": "العمود الفقري التقني الذي يدير الأصول المعرفية ويحول البيانات الخام الضخمة إلى قرارات استراتيجية.",
        "systems-c1-title": "المكونات الستة الهيكلية لنظم المعلومات",
        "systems-c1-desc": "يتكامل النظام الحديث من خلال انسجام ستة عناصر: العتاد المادي (Hardware)، البرمجيات (Software)، البيانات (Data)، الشبكات (Networks)، الإجراءات الصارمة (Procedures)، والعنصر البشري.",
        "systems-c2-title": "الحوسبة السحابية وهندسة البيانات الضخمة",
        "systems-c2-desc": "التحول نحو بيئات السحاب الهجينة (Hybrid Cloud) يمنح المؤسسات مرونة ديناميكية متناهية في معالجة تدفقات البيانات الضخمة وسرعة اتخاذ القرار الاستراتيجي عبر مستودعات البيانات.",

        "protection-title": "إستراتيجيات حماية البيانات وتحصين الهوية",
        "protection-subtitle": "كيف تحمي نفسك، حساباتك، وأصولك الرقمية من هجمات الاختراق باستخدام معايير الأمن الشخصي والمؤسساتي.",
        "protection-c1-title": "إدارة الهوية والتحقق متعدد العوامل (IAM & MFA)",
        "protection-c1-desc": "تعتبر كلمات المرور التقليدية خط دفاع منهار. يعتمد الأمن الحديث على التحقق متعدد العوامل (MFA) بربط الدخول بالسمات الحيوية (Biometrics) أو مفاتيح الأمان الفيزيائية.",
        "protection-c2-title": "التشفير الشامل وسياسات النسخ الاحتياطي",
        "protection-c2-desc": "تطبيق تشفير البيانات أثناء السكون (At Rest) وأثناء الانتقال (In Transit) مع اعتماد استراتيجية النسخ الاحتياطي الثلاثية (3-2-1) على وسائط تخزين معزولة تماماً عن الشبكة.",

        "stories-title": "أعظم الهجمات السيبرانية في التاريخ",
        "stories-subtitle": "تحليل لأشهر الهجمات الرقمية التي هزت دولاً وغيرت مفاهيم الحروب والسيادة التكنولوجية.",
        "stories-c1-title": "دودة ستوكسنت (Stuxnet) - السلاح الرقمي الأول",
        "stories-c1-desc": "تم اكتشافه عام 2010، وهو عبارة عن دودة برمجية بالغة التعقيد استهدفت أنظمة التحكم الصناعية (SCADA) لمنشأة نووية معزولة، ودمرت أجهزة الطرد المركزي فيزيائياً دون إطلاق رصاصة واحدة.",
        "stories-c2-title": "هجوم برمجية (WannaCry) - شلل الأنظمة العالمي",
        "stories-c2-desc": "في عام 2017، انتشرت برمجية فدية مستغلة ثغرة أمنية تدعى (EternalBlue)، مما أدى إلى تشفير مئات الآلاف من الأجهزة حول العالم خلال ساعات، وتسبب في شلل تام للمستشفيات والمطارات.",

        "footer-text": "© 2026 Diaa Hammud. جميع الحقوق محفوظة."
    },
    en: {
        dir: "ltr",
        "btn-hide-header": "Hide Menu",
        "btn-show-header": "Show Menu",
        "nav-home": "Home",
        "nav-danger": "Internet Dangers",
        "nav-cyber": "Cybersecurity",
        "nav-systems": "Info Systems",
        "nav-protection": "Data Protection",
        "nav-stories": "Cyber Attacks",

        "home-title": "Advanced Technology & Knowledge Hub",
        "home-desc": "A comprehensive digital academy designed to deconstruct complex cyber threats, explore state-of-the-art security defense architectures, and analyze modern information systems and Big Data operations.",

        "danger-title": "Academic Deconstruction of Cyber Threats",
        "danger-subtitle": "Threats are no longer just transient viruses, but have evolved into organized destructive systems targeting information infrastructures.",
        "danger-c1-title": "Advanced Ransomware",
        "danger-c1-desc": "Modern ransomware relies on a 'double extortion' strategy, leaking sensitive data first and then encrypting it locally using complex hybrid algorithms like RSA-2048 and AES-256.",
        "danger-c2-title": "Spear Phishing & Deepfakes",
        "danger-c2-desc": "Traditional phishing has evolved into targeted spear phishing based on gathering precise OSINT data about the victim, integrated with advanced Deepfake audio/visual identity forgery.",

        "cyber-title": "Cyber Defense Engineering & Security Policies",
        "cyber-subtitle": "Cybersecurity is not a product to be purchased, but an integrative science combining cutting-edge technology, strict policies, and human awareness.",
        "cyber-c1-title": "The CIA Triad Architecture",
        "cyber-c1-desc": "All security engineering centers around three core pillars: Confidentiality to prevent unauthorized access, Integrity to prevent unauthorized modifications, and Availability.",
        "cyber-c2-title": "Detection & Response Systems (EDR & SIEM)",
        "cyber-c2-desc": "Security Operations Centers (SOC) leverage artificial intelligence to analyze event logs in real-time, allowing the prediction and neutralisation of unknown Zero-Day Attacks.",

        "systems-title": "Enterprise Information Systems Engineering",
        "systems-subtitle": "The technical backbone that manages knowledge assets and transforms massive raw data into high-level strategic enterprise decisions.",
        "systems-c1-title": "The Six Structural Components of IS",
        "systems-c1-desc": "Modern systems integrate six crucial elements: Hardware, Software, Data, Networks, Strict Operational Procedures, and Qualified People.",
        "systems-c2-title": "Cloud Computing & Big Data Engineering",
        "systems-c2-desc": "Transitioning to Hybrid Cloud environments grants enterprises immense dynamic flexibility in processing high-velocity Big Data streams via optimized Data Warehouses.",

        "protection-title": "Data Protection Strategies & Identity Fortification",
        "protection-subtitle": "How to protect yourself, your personal accounts, and digital assets from advanced hacking using personal and institutional security standards.",
        "protection-c1-title": "Identity & Access Management (IAM & MFA)",
        "protection-c1-desc": "Traditional passwords are a collapsed line of defense. Modern security relies on Multi-Factor Authentication (MFA), linking access to Biometrics or physical security keys.",
        "protection-c2-title": "End-to-End Encryption & Backup Policies",
        "protection-c2-desc": "Enforcing data encryption At Rest and In Transit, combined with the 3-2-1 backup strategy on completely isolated offline storage media to mitigate catastrophic data loss.",

        "stories-title": "Greatest Cyber Attacks in History",
        "stories-subtitle": "Analysis of the most famous digital attacks that shook nations and redefined the concepts of warfare and technological sovereignty.",
        "stories-c1-title": "Stuxnet - The First Cyber Weapon",
        "stories-c1-desc": "Discovered in 2010, this highly sophisticated worm targeted industrial control systems (SCADA) of an isolated nuclear facility, physically destroying centrifuges without firing a single bullet.",
        "stories-c2-title": "WannaCry Ransomware - Global System Paralysis",
        "stories-c2-desc": "In 2017, a global ransomware pandemic exploited the EternalBlue vulnerability, encrypting hundreds of thousands of devices within hours, crippling hospitals, airports, and major industries.",

        "footer-text": "© 2026 Diaa Hammud. All Rights Reserved."
    },
    he: {
        dir: "rtl",
        "nav-home": "דף הבית",
        "nav-danger": "סכנות האינטרנט",
        "nav-cyber": "אבטחת מידע",
        "nav-systems": "מערכות מידע",
        "nav-protection": "הגנת נתונים",
        "nav-stories": "מתקפות היסטוריות",

        "btn-hide-header": "הסתר תפריט",
        "btn-show-header": "הצג תפריט",

        "home-title": "שער לטכנולוגיה ולידע מתקדם",
        "home-desc": "אקדמיה דיגיטלית מקיפה שמטרתה לנתח איומי סייבר מורכבים, לחקור אסטרטגיות הגנה מתקדמות ולהבין את המבנה של מערכות מידע וניהול נתוני עתק בארגונים מודרניים.",

        "danger-title": "ניתוח אקדמי של איומי סייבר",
        "danger-subtitle": "איומים אינם עוד רק וירוסים חולפים, אלא הפכו למערכות הרסניות מאורגנות המכוונות לתשתיות מידע.",
        "danger-c1-title": "תוכנות כופר מתקדמות (Advanced Ransomware)",
        "danger-c1-desc": "תוכנות כופר מודרניות מסתמכות על אסטרטגיית 'סחיטה כפולה', מדליפות נתונים רגישים תחילה ואז מצפינות אותם מקומית באמצעות אלגוריתמים היברידיים מורכבים כמו RSA-2048 ו-AES-256.",
        "danger-c2-title": "הנדסה חברתית וזיוף עמוק (Deepfakes)",
        "danger-c2-desc": "פישינג מסורתי התפתח לפישינג ממוקד המבוסס על איסוף נתוני OSINT מדויקים על הקורבן, בשילוב טכנולוגיות זיוף עמוק קולי וחזותי לזיוף זהויות.",

        "cyber-title": "הנדסת הגנת סייבר ומדיניות אבטחה",
        "cyber-subtitle": "אבטחת סייבר אינה מוצר לרכישה, אלא מדע אינטגרטיבי המשלב טכנולוגיה מתקדמת, מדיניות קפדנית ומודעות אנושית.",
        "cyber-c1-title": "ארכיטקטורת משולש ה-CIA",
        "cyber-c1-desc": "כל הנדסת האבטחה מתרכזת סביב שלושה עמודי תווך: סודיות (Confidentiality) למניעת גישה לא מורשית, שלמות (Integrity) למניעת שינויים לא מורשים, וזמינות (Availability).",
        "cyber-c2-title": "מערכות גילוי ותגובה (EDR & SIEM)",
        "cyber-c2-desc": "מרכזי פעולות אבטחה (SOC) ממנפים בינה מלאכותית לניתוח יומני אירועים בזמן אמת, מה שמאפשר חיזוי ונטרול של מתקפות יום אפס (Zero-Day) לא ידועות.",

        "systems-title": "הנדסה וניהול של מערכות מידע ארגוניות",
        "systems-subtitle": "עמוד השדרה הטכנולוגי המנהל נכסי ידע וממיר נתונים גולמיים מסיביים להחלטות ארגוניות אסטרטגיות.",
        "systems-c1-title": "ששת הרכיבים המבניים של מערכות מידע",
        "systems-c1-desc": "מערכות מודרניות משלבות שישה אלמנטים חיוניים: חומרה, תוכנה, נתונים, רשתות, נהלים קפדניים ואנשים מוסמכים.",
        "systems-c2-title": "מחשוב ענן והנדסת ביג דאטה",
        "systems-c2-desc": "מעבר לסביבות ענן היברידיות מעניק לארגונים גמישות דינמית עצומה בעיבוד זרמי נתונים מסיביים באמצעות מחסני נתונים (Data Warehouses) מותאמים.",

        "protection-title": "אסטרטגיות הגנת נתונים וביצור זהות דיגיטלית",
        "protection-subtitle": "כיצד להגן על עצמך, על החשבונות האישיים ועל הנכסים הדיגיטליים שלך מפני פריצות מתקדמות באמצעות תקני אבטחה אישיים וארגוניים.",
        "protection-c1-title": "ניהול זהויות ואימות רב-גורמי (IAM & MFA)",
        "protection-c1-desc": "סיסמאות מסורתיות הן קו הגנה קורס. אבטחה מודרנית מסתמכת על אימות רב-גורמי (MFA), המקשר גישה למאפיינים ביומטריים או למפתחות אבטחה פיזיים.",
        "protection-c2-title": "הצפנה מקצה לקצה ומדיניות גיבוי",
        "protection-c2-desc": "אכיפת הצפנת נתונים במנוחה (At Rest) ובתנועה (In Transit), בשילוב אסטרטגיית גיבוי 3-2-1 על אמצעי אחסון לא מקוונים ומבודדים לחלוטין.",

        "stories-title": "מתקפות הסייבר הגדולות בהיסטוריה",
        "stories-subtitle": "ניתוח של מתקפות הדיגיטל המפורסמות ביותר שזעזעו מדינות והגדירו מחדש את מושגי המלחמה והריבונות הטכנולוגית.",
        "stories-c1-title": "Stuxnet - נשק הסייבר הראשון",
        "stories-c1-desc": "התולעת התגלתה בשנת 2010 ופגעה במערכות בקרה תעשייתיות (SCADA) של מתקן גרעיני מבודד, תוך השמדה פיזית של צנטריפוגות מבלי לירות כדור אחד.",
        "stories-c2-title": "רוגלת WannaCry - שיתוק מערכות עולמי",
        "stories-c2-desc": "בשנת 2017, מגפת תוכנת כופר עולמית ניצלה את פגיעות EternalBlue, והצפינה מאות אלפי מכשירים תוך שעות, משתקת בתי חולים, שדות תעופה ותעשיות גדולות.",

        "footer-text": "© 2026 Diaa Hammud. כל הזכויות שמורות."
    }
};

// 1. نظام التنقل والتحكم الذكي بين الصفحات مع إغلاق الهيدر في الموبايل
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page-content');
const siteHeader = document.getElementById('site-header');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navItems.forEach(nav => nav.classList.remove('active'));
        pages.forEach(page => page.classList.remove('active'));

        item.classList.add('active');
        const targetPage = item.getAttribute('data-page');
        document.getElementById(targetPage).classList.add('active');

        if (window.innerWidth < 768) {
            siteHeader.classList.add('header-hidden');
            updateHeaderButtonText();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// 2. محرك الترجمة الشامل لجميع الأقسام والكروت
const langSelect = document.getElementById('language-change');
langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

function setLanguage(lang) {
    document.documentElement.dir = translations[lang].dir;
    document.documentElement.lang = lang;

    Object.keys(translations[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = translations[lang][key];
        }
    });
    updateHeaderButtonText();
}

// 3. التحكم بالقائمة العلوية من الزر المركزي المستقر
const headerToggle = document.getElementById('header-toggle');

headerToggle.addEventListener('click', () => {
    siteHeader.classList.toggle('header-hidden');
    updateHeaderButtonText();
});

function updateHeaderButtonText() {
    const currentLang = document.documentElement.lang || 'ar';
    const isHidden = siteHeader.classList.contains('header-hidden');
    const btnText = document.getElementById('toggle-btn-text');

    if (btnText) {
        if (isHidden) {
            btnText.innerText = translations[currentLang]["btn-show-header"];
        } else {
            btnText.innerText = translations[currentLang]["btn-hide-header"];
        }
    }
}

// 4. معالج الوضع الداكن والفاتح
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }
});

// 5. محرك التحكم بحجم الخطوط المستند لركيزة rem الديناميكية
const increaseFontBtn = document.getElementById('font-increase');
const decreaseFontBtn = document.getElementById('font-decrease');
let currentFontSizePx = 16;

increaseFontBtn.addEventListener('click', () => {
    if (currentFontSizePx < 24) {
        currentFontSizePx += 1;
        document.documentElement.style.fontSize = `${currentFontSizePx}px`;
    }
});

decreaseFontBtn.addEventListener('click', () => {
    if (currentFontSizePx > 13) {
        currentFontSizePx -= 1;
        document.documentElement.style.fontSize = `${currentFontSizePx}px`;
    }
});

// إعداد الحالة الأولية الافتراضية عند التشغيل لأول مرة
document.documentElement.lang = 'ar';
updateHeaderButtonText();