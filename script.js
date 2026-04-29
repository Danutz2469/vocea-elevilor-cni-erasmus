// --- 1. STATE MANAGEMENT (LOCAL STORAGE) ---
// V10: Actualizez cheia de stocare pentru a gestiona noul câmp 'poze'
const KEY = 'vocea_elevilor_local_v10';
const LANG_KEY = 'vocea_elevilor_lang';

const translations = {
    ro: {
        navHome: "Acasă", navReport: "Sesizări", navAnnounce: "Anunțuri", navPoll: "Sondaj", navResources: "Resurse", navRules: "Regulament",
        welcomeTitle: "👋 Bine ați venit!",
        welcomeText: "Aceasta este platforma centralizată a Consiliului Elevilor <strong>CNI Piatra Neamț</strong>. Aici poți afla ultimele noutăți, poți vota în sondaje și poți trimite sesizări anonime pentru a îmbunătăți viața școlară.",
        welcomeSub: "Folosiți meniul de sus pentru a naviga.",
        calendarTitle: "📅 Calendar Evenimente Școlare",
        pollTitle: "📊 Sondaj Rapid: Părerea Ta Contează",
        pollBtn: "Votează",
        resTitle: "🔗 Resurse și Linkuri Utile",
        res1: "<strong>Program secretariat:</strong> 08:00 - 16:00.",
        res2: "📄 Regulamentul Intern și Recomandări",
        res3: "<strong>Link util:</strong> <a href=\"https://edu.ro\" target=\"_blank\" style=\"color: var(--primary); text-decoration:none;\">🌐 Site-ul Ministerului Educației</a>",
        sugTitle: "💡 Sugestii pentru îmbunătățirea școlii",
        sugSub: "Ai o idee bună? Spune-ne!",
        sugName: "Nume (Opțional)", sugEmail: "Email (Opțional - pentru răspuns)", sugIdea: "Ideea ta", sugBtn: "Trimite Sugestia",
        annTitle: "📢 Anunțuri Oficiale",
        probTitle: "⚠️ Raportează o problemă în școală",
        probLoc: "Locație", probType: "Tip Problemă", probDesc: "Descriere", probPic: "Adaugă Poze (Opțional)", probBtn: "Trimite Raportare",
        probOpt1: "Mobilier rupt", probOpt2: "Curățenie", probOpt3: "Iluminat/Electrice", probOpt4: "Altele",
        bullTitle: "🛡️ Raportare Bullying (Anonim)",
        bullDesc: "Ce s-a întâmplat?", bullDet: "Detalii (Loc, oră - opțional)", bullBtn: "Trimite Anonim",
        acadTitle: "🎓 Probleme Academice / Sprijin",
        acadType: "Tip problemă", acadDesc: "Descriere/Detalii", acadBtn: "Trimite Solicitare",
        acadOpt0: "Selectează un tip de problemă", acadOpt1: "Lipsă materiale didactice", acadOpt2: "Probleme evaluare subiectivă", acadOpt3: "Relație dificilă cu un profesor", acadOpt4: "Nevoie de suport/consiliere educațională",
        footer1: "Vocea Elevilor — Proiect Erasmus+ | CNI Piatra Neamț",
        footer2: "Dezvoltat de <strong>SEZONOV DANIEL-ADAM</strong>",
        adminTitle: "🔧 PANOU ADMINISTRARE", adminDelAll: "Șterge TOATE Datele", adminLogout: "Deconectare",
        adminAddPub: "Adaugă Conținut Public", adminOptAnn: "Anunț Oficial", adminOptCal: "Eveniment Calendar",
        adminPostBtn: "Publică", adminPollTitle: "Gestionează Sondajul Public", adminPollQ: "Întrebarea Sondajului",
        adminPollOpt: "Opțiuni (Câte una pe rând nou)", adminPollBtn: "Actualizează Sondaj", adminPollReset: "Resetează Voturi",
        adminStatTitle: "Stadiu Rezolvare Sesizări Probleme", adminProb: "⚠️ Sesizări Probleme", adminSug: "💡 Sugestii Primite",
        adminBull: "🛡️ Rapoarte Bullying", adminAcad: "🎓 Solicitări Academice", adminAnn: "📢 Anunțuri Oficiale", adminCal: "📅 Evenimente Calendar",
        phName: "Anonim", phEmail: "email@exemplu.ro", phIdea: "Descrie ideea...",
        phLoc: "Ex: Sala 204, etaj 1", phDesc: "Descrie situația...",
        phTitle: "Titlu...", phContent: "Conținut...", phPollQ: "Introduceți întrebarea...",
        phPollOpt: "Ex: Opțiunea 1\nOpțiunea 2\nOpțiunea 3",
        regTitle: "📚 Regulament Intern și Recomandări Detaliate",
        regIntro: "Acest document este un extras din Regulamentul de Organizare și Funcționare a Unității de Învățământ (ROFUIP) și conține recomandări esențiale pentru un mediu școlar pozitiv, adaptat proiectului <strong>\"Vocea Elevilor\"</strong>. Cunoașterea acestor reguli este obligatorie.",
        regSec1: "1. 🤝 Reguli Generale de Comportament și Consecințe",
        regSub1_1: "Respect și Responsabilitate",
        regLi1_1_1: "<strong>Respectul:</strong> Tratează toți elevii, profesorii și personalul școlii cu <strong>respect</strong>, evitând orice formă de discriminare sau atitudine ofensatoare.",
        regLi1_1_2: "<strong>Integrarea:</strong> Încurajează un mediu <strong>inclusiv</strong>. Orice act de izolare sau marginalizare a unui coleg este interzis.",
        regLi1_1_3: "<strong>Proprietatea Școlii:</strong> Ești responsabil pentru păstrarea curățeniei și integrității bunurilor școlii (mobilier, pereți, echipamente). Deteriorarea lor atrage <strong>sancțiuni și obligația de a repara/înlocui</strong>.",
        regSub1_2: "Prezență și Sancțiuni",
        regLi1_2_1: "<strong>Punctualitatea:</strong> Se impune intrarea în clasă înainte de sunetul de începere a orei. Întârzierile repetate vor fi sancționate.",
        regLi1_2_2: "<strong>Absențele:</strong> Peste <strong>10 absențe nemotivate</strong> pe semestru atrag scăderea notei la purtare (clasa a IX-a și următoarele).",
        regLi1_2_3: "<strong>Sancțiuni Disciplinare:</strong> Abaterile grave (ex: violență fizică/verbală, fraudă la evaluări) pot fi sancționate cu <strong>mustrare scrisă</strong>, <strong>mutarea disciplinară</strong> la o altă clasă/școală sau chiar <strong>exmatricularea</strong> (conform ROFUIP).",
        regAlert: "<strong>Atenție!</strong> Orice fraudă sau tentativă de fraudă la lucrările scrise sau evaluările orale atrage nota 4 (patru) la disciplină, indiferent de rezultat.",
        regSec2: "2. 🚨 Sănătate, Siguranță și Anti-Bullying",
        regSub2_1: "Securitatea Spațiului Școlar",
        regLi2_1_1: "<strong>Substanțe Interzise:</strong> Este <strong>strict interzisă</strong> introducerea și consumul de alcool, droguri, tutun (inclusiv țigări electronice) și substanțe periculoase în perimetrul școlii.",
        regLi2_1_2: "<strong>Echipamentele:</strong> Accesul în spațiile cu risc (laboratoare speciale, ateliere) se face doar sub <strong>supravegherea strictă</strong> a personalului.",
        regLi2_1_3: "<strong>Evacuarea:</strong> În caz de urgență (incendiu, cutremur), elevii sunt obligați să urmeze imediat <strong>planul de evacuare</strong> și instrucțiunile profesorului.",
        regSub2_2: "Politica Anti-Bullying (Toleranță Zero)",
        regLi2_2_1: "<strong>Definiție Extinsă:</strong> Bullying-ul include nu doar agresiunea fizică sau verbală, dar și <strong>amenințarea</strong>, <strong>hărțuirea sexuală</strong>, <strong>cyberbullying-ul</strong> (mesaje sau postări online) și <strong>furtul</strong>.",
        regLi2_2_2: "<strong>Raportare:</strong> Dacă ești victimă sau martor, utilizează secțiunea <strong>\"Bullying (Anonim)\"</strong> din aplicația \"Vocea Elevilor\". Informațiile tale ajung direct la consilierul școlar, care va demara ancheta <strong>fără a-ți dezvălui identitatea</strong>.",
        regSec3: "3. 💻 Eticheta Digitală (Digital Etiquette)",
        regSub3_0: "Utilizarea responsabilă a tehnologiei este esențială. Iată regulile de bază:",
        regSub3_1: "Reguli privind Telefoanele Mobile",
        regLi3_1_1: "<strong>În Timpul Ore:</strong> Telefoanele trebuie să fie puse pe <strong>mod silențios</strong> și păstrate în ghiozdan sau la locul desemnat. Utilizarea lor în scopuri non-educative în timpul orei este interzisă.",
        regLi3_1_2: "<strong>În Pauze:</strong> Utilizarea lor este permisă, dar nu trebuie să deranjeze activitățile celorlalți sau să fie folosită pentru a înregistra, fotografia sau filma colegii/profesorii fără acordul explicit.",
        regSub3_2: "Utilizarea Platformelor Online",
        regLi3_2_1: "<strong>Conturi Educaționale:</strong> Păstrează-ți conturile de email și platformele educaționale (ex: Google Classroom, Teams) <strong>securizate</strong> și nu partaja parola cu nimeni.",
        regLi3_2_2: "<strong>Limbajul Online:</strong> Comportamentul civilizat din clasă se aplică și în grupurile de chat sau pe platformele școlii. Evită *spam*-ul, *flaming*-ul (postări agresive) sau distribuirea de conținut neadecvat.",
        regLi3_2_3: "<strong>Cyberbullying:</strong> Orice act de cyberbullying (publicarea de secrete, imagini compromițătoare, mesaje de ură) este tratat cu aceeași <strong>gravitate</strong> ca bullying-ul din viața reală.",
        regSec4: "4. 🧠 Recomandări și Sfaturi de Studiu",
        regSub4_0: "Aceste sfaturi te pot ajuta să îți îmbunătățești performanța:",
        regSub4_1: "Sfaturi Academice Esențiale:",
        regLi4_1_1: "<strong>Echilibrul:</strong> Alocă timp atât pentru studiu, cât și pentru odihnă și activități extrașcolare.",
        regLi4_1_2: "<strong>Recuperarea:</strong> Dacă ai dificultăți la o materie, folosește secțiunea <strong>\"Academice\"</strong> din aplicație pentru a solicita sprijin suplimentar (ore remediale, consultații).",
        regLi4_1_3: "<strong>Colaborarea:</strong> Formează grupuri de studiu constructive cu colegii, dar asigură-te că nu copiați, ci vă ajutați reciproc la înțelegere.",
        regFooter: "Document adaptat și actualizat: Decembrie 2025.",
        alPass: "Introdu parola de administrator:(1234)", alPassErr: "Parolă incorectă!", alDelAll: "ATENȚIE MAXIMĂ! Această acțiune va șterge absolut TOATE datele stocate. Ești sigur?",
        tsDelAll: "Toate datele au fost șterse.", alFillAll: "Completează titlul și conținutul", tsPub: "Conținut publicat!",
        alPollErr: "Sondajul trebuie să aibă o întrebare și cel puțin 2 opțiuni.", tsPollUpd: "Sondaj actualizat și voturi resetate!", alResetPoll: "Ești sigur că vrei să resetezi doar voturile?",
        tsPollRes: "Voturile sondajului au fost resetate!", alDelItem: "Ștergi elementul din ", tsDelItem: "Element șters!", txtNoEvents: "Nu sunt evenimente.", txtNoAnn: "Nu sunt anunțuri.",
        txtComments: "Comentarii", phComment: "Adaugă notă/comentariu...", btnComment: "Adaugă", tsProbSuccess: "✅ Problemă raportată! Pozele au fost atașate.", tsFileErr: "❌ Eroare la citirea fișierelor.",
        tsSugSuccess: "✅ Sugestie trimisă!", tsBullSuccess: "✅ Raport trimis anonim.", alSelType: "Selectează un tip de problemă!", tsAcadSuccess: "✅ Solicitare trimisă!", alSelVote: "Selectează o opțiune pentru a vota!",
        alVoteErr: "Eroare la înregistrarea votului.", tsVoteOk: "Vot înregistrat!", lblResolved: "Rezolvat", lblNew: "Nou", btnMarkRes: "Marchează Rezolvat", btnMarkNew: "Marchează Nou",
        btnRmUrgent: "Scoate Urgent", btnAddUrgent: "Marchează Urgent", btnDelete: "Șterge", btnDelEvent: "Șterge Eveniment", btnDelAnn: "Șterge Anunț",
        lblTotal: "Total", lblRes: "Rezolvate", lblConf: "Confidențial", lblDet: "Detalii", lblUnspec: "Nespecificat"
    },
    en: {
        navHome: "Home", navReport: "Reports", navAnnounce: "Announcements", navPoll: "Poll", navResources: "Resources", navRules: "Rules",
        welcomeTitle: "👋 Welcome!",
        welcomeText: "This is the centralized platform of the Students' Council at <strong>CNI Piatra Neamț</strong>. Here you can find the latest news, vote in polls, and send anonymous reports to improve school life.",
        welcomeSub: "Use the top menu to navigate.",
        calendarTitle: "📅 School Events Calendar",
        pollTitle: "📊 Quick Poll: Your Opinion Matters",
        pollBtn: "Vote",
        resTitle: "🔗 Resources and Useful Links",
        res1: "<strong>Secretariat schedule:</strong> 08:00 - 16:00.",
        res2: "📄 Internal Regulations and Recommendations",
        res3: "<strong>Useful link:</strong> <a href=\"https://edu.ro\" target=\"_blank\" style=\"color: var(--primary); text-decoration:none;\">🌐 Ministry of Education Website</a>",
        sugTitle: "💡 Suggestions for school improvement",
        sugSub: "Have a good idea? Tell us!",
        sugName: "Name (Optional)", sugEmail: "Email (Optional - for reply)", sugIdea: "Your idea", sugBtn: "Send Suggestion",
        annTitle: "📢 Official Announcements",
        probTitle: "⚠️ Report a school problem",
        probLoc: "Location", probType: "Problem Type", probDesc: "Description", probPic: "Add Photos (Optional)", probBtn: "Submit Report",
        probOpt1: "Broken furniture", probOpt2: "Cleaning", probOpt3: "Lighting/Electrical", probOpt4: "Others",
        bullTitle: "🛡️ Bullying Report (Anonymous)",
        bullDesc: "What happened?", bullDet: "Details (Location, time - optional)", bullBtn: "Submit Anonymously",
        acadTitle: "🎓 Academic Problems / Support",
        acadType: "Problem type", acadDesc: "Description/Details", acadBtn: "Submit Request",
        acadOpt0: "Select a problem type", acadOpt1: "Lack of teaching materials", acadOpt2: "Subjective evaluation issues", acadOpt3: "Difficult relationship with a teacher", acadOpt4: "Need for educational support/counseling",
        footer1: "Students' Voice — Erasmus+ Project | CNI Piatra Neamț",
        footer2: "Developed by <strong>SEZONOV DANIEL-ADAM</strong>",
        adminTitle: "🔧 ADMIN DASHBOARD", adminDelAll: "Delete ALL Data", adminLogout: "Logout",
        adminAddPub: "Add Public Content", adminOptAnn: "Official Announcement", adminOptCal: "Calendar Event",
        adminPostBtn: "Publish", adminPollTitle: "Manage Public Poll", adminPollQ: "Poll Question",
        adminPollOpt: "Options (One per line)", adminPollBtn: "Update Poll", adminPollReset: "Reset Votes",
        adminStatTitle: "Problem Reports Resolution Status", adminProb: "⚠️ Problem Reports", adminSug: "💡 Received Suggestions",
        adminBull: "🛡️ Bullying Reports", adminAcad: "🎓 Academic Requests", adminAnn: "📢 Official Announcements", adminCal: "📅 Calendar Events",
        phName: "Anonymous", phEmail: "email@example.com", phIdea: "Describe the idea...",
        phLoc: "Ex: Room 204, 1st floor", phDesc: "Describe the situation...",
        phTitle: "Title...", phContent: "Content...", phPollQ: "Enter question...",
        phPollOpt: "Ex: Option 1\nOption 2\nOption 3",
        regTitle: "📚 Internal Regulations and Detailed Recommendations",
        regIntro: "This document is an excerpt from the Organization and Functioning Regulation of the Educational Unit (ROFUIP) and contains essential recommendations for a positive school environment, adapted to the <strong>\"Students' Voice\"</strong> project. Knowledge of these rules is mandatory.",
        regSec1: "1. 🤝 General Rules of Behavior and Consequences",
        regSub1_1: "Respect and Responsibility",
        regLi1_1_1: "<strong>Respect:</strong> Treat all students, teachers, and school staff with <strong>respect</strong>, avoiding any form of discrimination or offensive attitude.",
        regLi1_1_2: "<strong>Integration:</strong> Encourage an <strong>inclusive</strong> environment. Any act of isolation or marginalization of a colleague is prohibited.",
        regLi1_1_3: "<strong>School Property:</strong> You are responsible for keeping school goods (furniture, walls, equipment) clean and intact. Damaging them incurs <strong>sanctions and the obligation to repair/replace</strong>.",
        regSub1_2: "Attendance and Sanctions",
        regLi1_2_1: "<strong>Punctuality:</strong> You must enter the classroom before the bell rings. Repeated delays will be sanctioned.",
        regLi1_2_2: "<strong>Absences:</strong> Over <strong>10 unexcused absences</strong> per semester will result in a lower conduct grade (9th grade and above).",
        regLi1_2_3: "<strong>Disciplinary Sanctions:</strong> Serious offenses (e.g., physical/verbal violence, fraud in evaluations) may be punished with a <strong>written reprimand</strong>, <strong>disciplinary transfer</strong> to another class/school, or even <strong>expulsion</strong> (according to ROFUIP).",
        regAlert: "<strong>Attention!</strong> Any fraud or attempted fraud in written or oral evaluations will result in a grade of 4 (four) in that subject, regardless of the outcome.",
        regSec2: "2. 🚨 Health, Safety, and Anti-Bullying",
        regSub2_1: "School Space Security",
        regLi2_1_1: "<strong>Prohibited Substances:</strong> It is <strong>strictly forbidden</strong> to bring or consume alcohol, drugs, tobacco (including e-cigarettes), and dangerous substances on school premises.",
        regLi2_1_2: "<strong>Equipment:</strong> Access to high-risk areas (special laboratories, workshops) is allowed only under <strong>strict supervision</strong> by staff.",
        regLi2_1_3: "<strong>Evacuation:</strong> In case of an emergency (fire, earthquake), students must immediately follow the <strong>evacuation plan</strong> and the teacher's instructions.",
        regSub2_2: "Anti-Bullying Policy (Zero Tolerance)",
        regLi2_2_1: "<strong>Extended Definition:</strong> Bullying includes not only physical or verbal aggression but also <strong>threats</strong>, <strong>sexual harassment</strong>, <strong>cyberbullying</strong> (online messages or posts), and <strong>theft</strong>.",
        regLi2_2_2: "<strong>Reporting:</strong> If you are a victim or a witness, use the <strong>\"Bullying (Anonymous)\"</strong> section in the \"Students' Voice\" app. Your information goes straight to the school counselor, who will investigate <strong>without revealing your identity</strong>.",
        regSec3: "3. 💻 Digital Etiquette",
        regSub3_0: "Responsible use of technology is essential. Here are the basic rules:",
        regSub3_1: "Mobile Phone Rules",
        regLi3_1_1: "<strong>During Class:</strong> Phones must be on <strong>silent mode</strong> and kept in your backpack or the designated area. Non-educational use during class is prohibited.",
        regLi3_1_2: "<strong>During Breaks:</strong> Use is allowed, but it must not disturb others' activities or be used to record, photograph, or film colleagues/teachers without explicit consent.",
        regSub3_2: "Online Platform Use",
        regLi3_2_1: "<strong>Educational Accounts:</strong> Keep your email and educational platforms (e.g., Google Classroom, Teams) <strong>secure</strong> and never share your password.",
        regLi3_2_2: "<strong>Online Language:</strong> Civilized classroom behavior also applies to chat groups or school platforms. Avoid *spam*, *flaming* (aggressive posts), or sharing inappropriate content.",
        regLi3_2_3: "<strong>Cyberbullying:</strong> Any act of cyberbullying (publishing secrets, compromising images, hate messages) is treated with the same <strong>severity</strong> as real-life bullying.",
        regSec4: "4. 🧠 Recommendations and Study Tips",
        regSub4_0: "These tips can help you improve your performance:",
        regSub4_1: "Essential Academic Tips:",
        regLi4_1_1: "<strong>Balance:</strong> Allocate time for both study and rest or extracurricular activities.",
        regLi4_1_2: "<strong>Recovery:</strong> If you are struggling with a subject, use the <strong>\"Academics\"</strong> section in the app to request additional support (remedial classes, tutoring).",
        regLi4_1_3: "<strong>Collaboration:</strong> Form constructive study groups with colleagues, but ensure you don't copy; rather, help each other understand.",
        regFooter: "Document adapted and updated: December 2025.",
        alPass: "Enter administrator password:(1234)", alPassErr: "Incorrect password!", alDelAll: "MAXIMUM ATTENTION! This action will delete absolutely ALL stored data. Are you sure?",
        tsDelAll: "All data has been deleted.", alFillAll: "Fill in the title and content", tsPub: "Content published!",
        alPollErr: "The poll must have a question and at least 2 options.", tsPollUpd: "Poll updated and votes reset!", alResetPoll: "Are you sure you want to reset only the votes?",
        tsPollRes: "Poll votes have been reset!", alDelItem: "Delete item from ", tsDelItem: "Item deleted!", txtNoEvents: "No events.", txtNoAnn: "No announcements.",
        txtComments: "Comments", phComment: "Add note/comment...", btnComment: "Add", tsProbSuccess: "✅ Problem reported! Photos attached.", tsFileErr: "❌ Error reading files.",
        tsSugSuccess: "✅ Suggestion sent!", tsBullSuccess: "✅ Report sent anonymously.", alSelType: "Select a problem type!", tsAcadSuccess: "✅ Request sent!", alSelVote: "Select an option to vote!",
        alVoteErr: "Error registering vote.", tsVoteOk: "Vote registered!", lblResolved: "Resolved", lblNew: "New", btnMarkRes: "Mark Resolved", btnMarkNew: "Mark New",
        btnRmUrgent: "Remove Urgent", btnAddUrgent: "Mark Urgent", btnDelete: "Delete", btnDelEvent: "Delete Event", btnDelAnn: "Delete Announcement",
        lblTotal: "Total", lblRes: "Resolved", lblConf: "Confidential", lblDet: "Details", lblUnspec: "Unspecified"
    }
};
const t = (key) => translations[currentLang] ? (translations[currentLang][key] || key) : key;

let currentLang = localStorage.getItem(LANG_KEY) || 'ro';

function toggleLanguage() {
    currentLang = currentLang === 'ro' ? 'en' : 'ro';
    localStorage.setItem(LANG_KEY, currentLang);
    updateLanguage();
    renderPublicContent();
    if(isAdmin) renderAdminPanel();
}

function updateLanguage() {
    const dict = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (dict[key]) {
            el.placeholder = dict[key];
        }
    });
    
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
        toggleBtn.innerText = currentLang === 'ro' ? '🌍 EN' : '🌍 RO';
    }
}

const createInitialData = () => ({
    probleme: [],
    sugestii: [],
    bullying: [],
    acad: [],
    
    // --- POPULARE CU DATELE CERUTE (Evenimente și Anunțuri) ---
    anunturi: [
        {
            id: 101,
            title: "Procedura de Înscriere la Examenele Naționale 2026",
            date: "12/09/2025",
            content: "Se aduce la cunoștința elevilor de clasele a VIII-a și a XII-a, precum și părinților acestora, că a fost publicată metodologia oficială privind înscrierea și desfășurarea Evaluării Naționale și a examenului de Bacalaureat pentru sesiunea 2026. Documentul complet, ce cuprinde calendarul exact, condițiile de eligibilitate și structura subiectelor, este disponibil pe site-ul Ministerului Educației și în secțiunea 'Resurse' a platformei școlii. Termenul limită pentru depunerea cererilor de înscriere este 30 ianuarie. Elevii sunt rugați să completeze formularele cu cea mai mare atenție sub îndrumarea diriginților. Orice nelămurire poate fi adresată secretariatului școlii în timpul programului de lucru. Vă rugăm să citiți cu atenție toate detaliile publicate."
        },
        {
            id: 102,
            title: "Regulamentul Intern al Școlii - Modificări și Actualizări",
            date: "12/05/2025",
            content: "Începând cu data de 1 decembrie, intră în vigoare noul Regulament de Organizare și Funcționare al Unității de Învățământ, care include modificări semnificative în ceea ce privește utilizarea telefoanelor mobile în timpul orelor și normele de conduită în spațiile comune. Noile reglementări vin în urma consultărilor cu elevii, părinții și corpul profesoral și au ca scop crearea unui mediu educațional mai disciplinat și mai propice învățării. Textul integral al regulamentului actualizat este afișat la avizierul școlii și poate fi descărcat de pe pagina principală. Toți membrii comunității școlare sunt obligați să ia la cunoștință și să respecte aceste prevederi, contribuind astfel la buna desfășurare a activităților."
        },
        {
            id: 103,
            title: "Programul de Consiliere Psihopedagogică Gratuită Extins",
            date: "11/28/2025",
            content: "Școala oferă sesiuni săptămânale extinse de consiliere psihopedagogică gratuită pentru elevii și părinții care se confruntă cu dificultăți de adaptare școlară, stres, anxietate sau probleme de comunicare. Programul este susținut de psihologul școlar și are loc în fiecare miercuri și vineri, între orele 14:00 și 17:00, în cabinetul de specialitate. Pentru a beneficia de o sesiune individuală, este necesară o programare prealabilă, care se poate face printr-un email trimis la adresa consiliere@scoala.ro sau prin intermediul dirigintelui. Confidențialitatea este garantată. Încurajăm toți elevii care simt nevoia de sprijin emoțional să apeleze cu încredere la acest serviciu esențial pentru starea lor de bine."
        },
        {
            id: 104,
            title: "Avertizare Meteo și Măsuri de Siguranță Iarna (Cod Galben)",
            date: "11/20/2025",
            content: "În contextul emiterii unui cod galben de vreme nefavorabilă (ninsori abundente/ger), rugăm toți elevii și părinții să ia măsuri sporite de precauție pe drumul către și de la școală. Recomandăm purtarea de îmbrăcăminte adecvată, antiderapante și evitarea zonelor periculoase (gheață, acoperișuri cu risc de cădere a țurțurilor). De asemenea, în cazul în care condițiile meteorologice impun suspendarea cursurilor, anunțul oficial va fi făcut public până cel târziu la ora 6:30 dimineața pe site-ul școlii și prin mesaj către diriginți. Vă rugăm să urmăriți canalele oficiale de comunicare și să nu vă bazați pe surse neconfirmate. Siguranța elevilor este prioritatea noastră absolută în aceste condiții meteo dificile."
        },
        {
            id: 105,
            title: "Recrutare Voluntari pentru Proiectul 'Biblioteca Viitorului'",
            date: "11/15/2025",
            content: "Lansăm un apel către elevii entuziaști din clasele IX-XI care doresc să se implice în modernizarea și digitalizarea fondului de carte al bibliotecii școlare. Proiectul implică activități de inventariere, etichetare și introducere a datelor în noul sistem informatic, oferind voluntarilor o experiență valoroasă de lucru în echipă și organizare. Participarea este recunoscută cu diplome de voluntariat, esențiale pentru portofoliul personal și dezvoltarea personală. Cei interesați sunt invitați la o sesiune de informare joi, la ora 13:00, în sala de lectură a bibliotecii. Vă rugăm să vă înscrieți până miercuri la secretariat. Contribuția voastră este crucială pentru succesul acestui proiect de modernizare."
        }
    ],
    calendar: [
        {
            id: 201,
            title: "Ziua Porților Deschise - 15 Noiembrie 2025",
            date: "2025-11-15",
            content: "Evenimentul este dedicat elevilor de clasa a VIII-a și părinților acestora, oferindu-le ocazia unică de a explora facilitățile școlii și de a interacționa direct cu profesorii și conducerea. Vom prezenta oferta educațională detaliată, inclusiv profilurile specializate și activitățile extrașcolare disponibile. Este o șansă excelentă de a înțelege viziunea noastră pedagogică și de a pune întrebări despre procesul de admitere. Tururile ghidate vor începe la ora 10:00 și vor include laboratoarele de informatică, biblioteca modernă și terenurile de sport. Participarea se face pe bază de înscriere prealabilă pe site-ul școlii pentru o mai bună organizare și estimare a numărului de vizitatori. Vă așteptăm cu drag în număr cât mai mare!"
        },
        {
            id: 202,
            title: "Săptămâna Verde: Reciclare și Educație Ecologică",
            date: "2025-12-02",
            content: "În cadrul inițiativei naționale „Săptămâna Verde”, școala noastră organizează o serie de activități menite să crească gradul de conștientizare privind protecția mediului. Elevii vor participa la ateliere practice de reciclare creativă, la plantarea de puieți în curtea școlii și la sesiuni interactive despre reducerea amprentei de carbon. Fiecare clasă va concura într-o competiție de colectare separată a deșeurilor, cu premii ecologice pentru câștigători. Scopul principal este de a insufla elevilor un simț al responsabilității față de natură și de a promova practici sustenabile în viața de zi cu zi, învățând totodată prin joacă și experimente practice. Vă rugăm să încurajați elevii să aducă materiale reciclabile de acasă pentru ateliere."
        },
        {
            id: 203,
            title: "Concursul de Matematică 'Pitagora Junior'",
            date: "2026-01-20",
            content: "Cea de-a X-a ediție a prestigiosului concurs de matematică se va desfășura online și fizic, adresându-se elevilor talentați din clasele V-VIII. Obiectivul este de a stimula gândirea logică și rezolvarea de probleme complexe, depășind programa școlară standard. Înscrierile se fac până la data de 10 ianuarie prin intermediul profesorilor coordonatori de clasă. Subiectele vor fi elaborate de o comisie de experți și vor testa creativitatea și profunzimea înțelegerii conceptelor matematice. Cei mai buni elevi vor fi premiați în cadrul unei ceremonii speciale și vor avea șansa de a participa la etapele superioare ale competițiilor naționale. Recomandăm pregătirea intensivă și consultarea materialelor de antrenament disponibile pe platforma dedicată. Mult succes tuturor participanților!"
        },
        {
            id: 204,
            title: "Ședință cu Părinții: Evaluarea Semestrială",
            date: "2026-02-15",
            content: "Conducerea școlii și cadrele didactice invită toți părinții la o ședință generală urmată de întâlniri individuale cu diriginții. Subiectul principal îl constituie analiza performanței elevilor după primul semestru, discuția despre progresul școlar și identificarea strategiilor de îmbunătățire a rezultatelor. Vor fi prezentate noile metode de evaluare și instrumentele digitale folosite în procesul didactic. Părinții sunt încurajați să participe activ, să adreseze întrebări și să colaboreze cu profesorii pentru a asigura un mediu de învățare optim. Vă rugăm să confirmați prezența la dirigintele clasei până la data de 10 februarie pentru o mai bună estimare a numărului de participanți și alocarea spațiilor necesare, în vederea unei sesiuni cât mai productive."
        },
        {
            id: 205,
            title: "Festivalul de Artă și Cultură Școlară",
            date: "2026-03-10",
            content: "Acest eveniment anual celebrează talentul artistic al elevilor noștri prin expoziții de pictură, sculptură, spectacole de teatru și recitaluri de muzică. Festivalul oferă o platformă esențială pentru exprimarea creativității și încurajează dezvoltarea laturii culturale a tinerilor. Elevii de la toate ciclurile de învățământ sunt invitați să se înscrie cu creațiile lor până la 1 martie. Juriul va acorda premii pentru cele mai originale și bine executate lucrări din fiecare categorie. Publicul este invitat să admire operele și să susțină micii artiști, transformând evenimentul într-o adevărată sărbătoare a comunității școlare. Detaliile despre înscriere și programul exact al spectacolelor vor fi publicate săptămâna viitoare pe site-ul oficial al școlii."
        }
    ],
    sondaj: {
        intrebare: "Ce activitate doriți săptămâna viitoare?",
        optiuni: ["Seară de Film", "Turneu de Șah", "Club de Lectură"],
        votes: [0, 0, 0]
    }
});

let data = JSON.parse(localStorage.getItem(KEY)) || createInitialData();

// Asigură că toate intrările au status, comments, urgent și poze (pentru probleme)
['probleme', 'sugestii', 'bullying', 'acad'].forEach(type => {
    data[type].forEach(item => {
        if(typeof item.status === 'undefined') item.status = 'nou';
        if(typeof item.comments === 'undefined') item.comments = [];
        if(typeof item.urgent === 'undefined') item.urgent = false;
        if(type === 'probleme' && typeof item.poze === 'undefined') item.poze = []; // Noul câmp 'poze'
    });
});

// --- Asigură reinițializarea câmpurilor (în cazul în care structura veche nu le avea) ---
['anunturi', 'calendar'].forEach(type => {
    data[type].forEach(item => {
        if(typeof item.date === 'undefined') item.date = new Date().toLocaleDateString();
    });
});

let isAdmin = false;
const ADMIN_PASS = "1234";

// --- 2. PERSISTENCE & INIT & TOAST ---
function saveData() {
    localStorage.setItem(KEY, JSON.stringify(data));
    renderPublicContent();
    if(isAdmin) renderAdminPanel();
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.classList.add('show');
    setTimeout(() => { t.classList.remove('show'); }, 3500); 
}

// --- 3. NAVIGARE & ANIMATII ---
function switchView(viewName, btn) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active-view'));
    
    const targetSection = document.getElementById('view-' + viewName);
    targetSection.classList.add('active-view');
    
    const cards = targetSection.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('revealed'));
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => card.classList.add('revealed'), index * 100);
        });
    }, 50);

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    
    document.getElementById('mainMenu').classList.remove('mobile-open');
}

function toggleMenu() {
    document.getElementById('mainMenu').classList.toggle('mobile-open');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();
    document.querySelectorAll('.card').forEach(card => observer.observe(card));
    renderPublicContent();
    // Deschide vizualizarea corectă bazată pe URL Hash sau implicit 'acasa'
    const initialView = (window.location.hash && window.location.hash.substring(1) !== 'admin') ? window.location.hash.substring(1) : 'acasa';
    const initialBtn = document.querySelector(`.nav-btn[onclick*="'${initialView}'"]`);
    switchView(initialView, initialBtn || document.querySelector('.nav-btn.active'));
});

// MODIFICARE: Logica pentru animația steluței (Doar 3 particule)
function burstStarAnimation(event) {
    const star = event.currentTarget;
    const rect = star.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const container = document.getElementById('star-animation-container');
    
    const particleCount = 3; // MODIFICAT la 3, conform cererii
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'star-particle';
        
        // Poziția inițială (centrul steluței)
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;
        
        // Proprietăți aleatorii
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 50 + 30; // Distanța de zbor
        const duration = Math.random() * 0.5 + 0.5; // Durata animației

        // Poziția finală
        const finalX = centerX + distance * Math.cos(angle);
        const finalY = centerY + distance * Math.sin(angle);

        container.appendChild(particle);

        // Forțează reflow pentru a aplica stilul inițial
        void particle.offsetWidth; 

        // Animația
        particle.style.transition = `transform ${duration}s ease-out, opacity ${duration}s ease-out`;
        particle.style.transform = `translate(${finalX - centerX}px, ${finalY - centerY}px) scale(0.2)`;
        particle.style.opacity = 0;
        
        // Șterge particula după animație
        setTimeout(() => {
            container.removeChild(particle);
        }, duration * 1000);
    }
}


// --- 4. FORMULARE ELEVI ---

function submitProblem(e) {
    e.preventDefault();
    
    const fileInput = document.getElementById('probPoze');
    const files = fileInput.files;
    const pozeArray = [];
    
    // Simulează încărcarea (în lipsa unui backend) prin convertirea fișierelor în URL-uri Data: Base64
    // ATENȚIE: Aceasta stochează pozele local în browser. Nu este recomandat pentru producție!
    const processFiles = Array.from(files).map(file => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                // Limitează dimensiunea pozei stocate (pentru a nu bloca localStorage)
                // Aici ar trebui să se facă resize real, dar simplificăm prin stocarea Data URL
                pozeArray.push(e.target.result); 
                resolve();
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    });

    Promise.all(processFiles).then(() => {
        const newItem = {
            id: Date.now(),
            locatie: document.getElementById('probLocatie').value,
            tip: document.getElementById('probTip').value,
            desc: document.getElementById('probDesc').value,
            data: new Date().toLocaleDateString(),
            urgent: false, 
            status: 'nou', 
            comments: [],
            poze: pozeArray // Adaugă Array-ul cu URL-urile imaginilor
        };
        
        data.probleme.unshift(newItem);
        saveData();
        
        const problemCard = e.target.closest('.card');
        problemCard.classList.add('submission-success');
        setTimeout(() => problemCard.classList.remove('submission-success'), 500);

        e.target.reset();
        showToast(t('tsProbSuccess'));
    }).catch(error => {
         showToast(t('tsFileErr'));
         console.error("File processing error:", error);
    });
}

function submitSuggestion(e) {
    e.preventDefault();
    const newItem = {
        id: Date.now(),
        nume: document.getElementById('sugestieNume').value || 'Anonim',
        email: document.getElementById('sugestieEmail').value || '-',
        text: document.getElementById('sugestieText').value,
        data: new Date().toLocaleDateString(),
        urgent: false, 
        status: 'nou',
        comments: []
    };
    data.sugestii.unshift(newItem);
    saveData();
    e.target.reset();
    
    const card = e.target.closest('.card');
    card.classList.add('submission-success');
    setTimeout(() => card.classList.remove('submission-success'), 500);

    showToast(t('tsSugSuccess'));
}

function submitBullying(e) {
    e.preventDefault();
    const newItem = {
        id: Date.now(),
        desc: document.getElementById('bullDesc').value,
        detalii: document.getElementById('bullDetalii').value,
        data: new Date().toLocaleDateString(),
        urgent: false, 
        status: 'nou',
        comments: []
    };
    data.bullying.unshift(newItem);
    saveData();
    e.target.reset();
    
    const card = e.target.closest('.card');
    card.classList.add('submission-success');
    setTimeout(() => card.classList.remove('submission-success'), 500);

    showToast(t('tsBullSuccess'));
}

function submitAcademic(e) {
    e.preventDefault();
    const selectedType = document.getElementById('acadTipSelect').value;
    
    if(!selectedType) return alert(t('alSelType'));

    const newItem = {
        id: Date.now(),
        tip: selectedType, 
        desc: document.getElementById('acadDesc').value,
        data: new Date().toLocaleDateString(),
        urgent: false, 
        status: 'nou',
        comments: []
    };
    data.acad.unshift(newItem);
    saveData();
    e.target.reset();
    
    const card = e.target.closest('.card');
    card.classList.add('submission-success');
    setTimeout(() => card.classList.remove('submission-success'), 500);

    showToast(t('tsAcadSuccess'));
}

// --- 5. SONDAJ LOGIC ---

function animatePollBars() {
    setTimeout(() => {
        document.querySelectorAll('#pollResultsDisplay .poll-bar-fill').forEach(fill => {
            const percent = fill.getAttribute('data-poll-percent');
            void fill.offsetWidth; 
            fill.style.width = `${percent}%`;
        });
    }, 50); 
}

function renderPoll() {
    const voteKey = 'voted_poll_' + data.sondaj.intrebare.replace(/\s/g, '_'); 
    const hasVoted = localStorage.getItem(voteKey);
    
    document.getElementById('pollQuestionDisplay').innerText = data.sondaj.intrebare;
    
    const optionsDiv = document.getElementById('pollOptionsDisplay');
    const resultsDiv = document.getElementById('pollResultsDisplay');
    const voteBtn = document.getElementById('btnVote');

    optionsDiv.innerHTML = '';
    resultsDiv.innerHTML = '';

    if(hasVoted) {
        optionsDiv.style.display = 'none';
        voteBtn.style.display = 'none';
        resultsDiv.style.display = 'block';

        let total = data.sondaj.votes.reduce((a,b)=>a+b, 0);
        
        data.sondaj.optiuni.forEach((opt, i) => {
            let val = data.sondaj.votes[i];
            let pct = total ? Math.round((val/total)*100) : 0;
            
            resultsDiv.innerHTML += `
                <div class="poll-result-item">
                    <div class="poll-result-text"><span>${opt}</span><span>${pct}% (${val})</span></div>
                    <div class="poll-bar-bg"><div class="poll-bar-fill" data-poll-percent="${pct}" style="width:0;"></div></div>
                </div>
            `;
        });
        
        animatePollBars();

    } else {
        optionsDiv.style.display = 'flex';
        voteBtn.style.display = 'block';
        resultsDiv.style.display = 'none';

        data.sondaj.optiuni.forEach((opt, i) => {
            optionsDiv.innerHTML += `
                <label class="poll-option-label">
                    <span style="display:flex; align-items:center;">
                        <input type="radio" name="pollVote" value="${i}"> ${opt}
                    </span>
                </label>
            `;
        });
    }
}

function submitVote() {
    const selected = document.querySelector('input[name="pollVote"]:checked');
    if(!selected) return alert(t('alSelVote'));
    
    const idx = parseInt(selected.value); 
    
    if(isNaN(idx) || idx < 0 || idx >= data.sondaj.votes.length) {
        console.error("Invalid poll index:", selected.value);
        return alert(t('alVoteErr'));
    }

    data.sondaj.votes[idx]++;
    
    const voteKey = 'voted_poll_' + data.sondaj.intrebare.replace(/\s/g, '_'); 
    localStorage.setItem(voteKey, 'true');
    
    saveData();
    
    renderPoll(); 
    
    showToast(t('tsVoteOk'));
    
    const pollCard = document.getElementById('pollCard');
    pollCard.classList.add('submission-success');
    setTimeout(() => pollCard.classList.remove('submission-success'), 500);
}

// --- 6. ADMIN LOGIC ---
function toggleAdminAuth() {
    if(isAdmin) {
        logoutAdmin();
    } else {
        let pass = prompt(t('alPass'));
        if(pass === ADMIN_PASS) {
            isAdmin = true;
            document.getElementById('btnAdminAuth').innerText = t('adminLogout');
            document.getElementById('btnAdminAuth').style.background = "#c81919";
            document.getElementById('admin-dashboard').classList.add('visible');
            renderAdminPanel();
            window.location.hash = 'admin'; 
            setTimeout(() => document.getElementById('admin-dashboard').scrollIntoView({behavior: 'smooth'}), 300);
        } else if (pass !== null) {
            alert(t('alPassErr'));
        }
    }
}

function logoutAdmin() {
    isAdmin = false;
    document.getElementById('btnAdminAuth').innerText = "Admin";
    document.getElementById('btnAdminAuth').style.background = "";
    document.getElementById('admin-dashboard').classList.remove('visible');
    window.location.hash = ''; // Scoate din URL hash
}

// V4.9 FIX: Șterge toate datele din localStorage și resetează aplicația
function adminDeleteAllData() {
    if(confirm(t('alDelAll'))) {
        localStorage.clear(); 
        data = createInitialData(); 
        isAdmin = false;
        showToast(t('tsDelAll'));
        window.location.reload(); 
    }
}

function adminPostContent() {
    const type = document.getElementById('adminPostType').value;
    const title = document.getElementById('adminPostTitle').value;
    const dateVal = document.getElementById('adminPostDate').value;
    const content = document.getElementById('adminPostContent').value;

    if(!title || !content) return alert(t('alFillAll'));

    const newItem = { id: Date.now(), title, content, date: dateVal || new Date().toLocaleDateString() };

    if(type === 'anunt') {
        data.anunturi.unshift(newItem);
    } else {
        data.calendar.unshift(newItem);
    }
    saveData();
    document.getElementById('adminPostTitle').value = "";
    document.getElementById('adminPostContent').value = "";
    document.getElementById('adminPostDate').value = "";
    showToast(t('tsPub'));
}

function adminUpdatePoll() {
    const newQuestion = document.getElementById('adminPollQuestion').value.trim();
    const newOptions = document.getElementById('adminPollOptions').value.trim().split('\n').filter(o => o.trim() !== '');

    if(!newQuestion || newOptions.length < 2) {
        return alert(t('alPollErr'));
    }

    const voteKey = 'voted_poll_' + data.sondaj.intrebare.replace(/\s/g, '_'); 
    localStorage.removeItem(voteKey); 

    data.sondaj = {
        intrebare: newQuestion,
        optiuni: newOptions,
        votes: new Array(newOptions.length).fill(0)
    };
    
    saveData();
    showToast(t('tsPollUpd'));
}

function adminResetPollVotes() {
     if(confirm(t('alResetPoll'))) {
        data.sondaj.votes = new Array(data.sondaj.optiuni.length).fill(0);
        
        const voteKey = 'voted_poll_' + data.sondaj.intrebare.replace(/\s/g, '_'); 
        localStorage.removeItem(voteKey); 
        
        saveData();
        showToast(t('tsPollRes'));
    }
}


function deleteItem(type, id) {
    if(confirm(t('alDelItem') + type.toUpperCase() + "?")) {
        data[type] = data[type].filter(i => i.id !== id);
        saveData();
        showToast(t('tsDelItem'));
    }
}

function toggleStatus(type, id) {
    const item = data[type].find(i => i.id === id);
    if(item && type !== 'sugestii') {
        item.status = (item.status === 'nou') ? 'rezolvat' : 'nou';
        saveData();
    }
}

function toggleUrgent(type, id) {
    const item = data[type].find(i => i.id === id);
    if(item && (type === 'probleme' || type === 'acad')) {
        item.urgent = !item.urgent;
        saveData();
    }
}

function addComment(type, id) {
    const item = data[type].find(i => i.id === id);
    const input = document.getElementById(`commentInput_${type}_${id}`);
    const text = input.value.trim();

    if(!text || !item) return;

    item.comments.push({
        text: text,
        data: new Date().toLocaleDateString()
    });
    saveData();
    input.value = ''; 
}

// --- 7. RENDER GENERAL ---
function renderPublicContent() {
    // Calendar
    const calDiv = document.getElementById('calendarDisplay');
    if(data.calendar.length === 0) calDiv.innerHTML = `<p style="color:#666">${t('txtNoEvents')}</p>`;
    else {
        calDiv.innerHTML = data.calendar.map(c => `
            <div class="data-item" style="border-left: 4px solid var(--acad-color);">
                <div class="item-meta"><span>📅 ${c.date}</span></div>
                <div style="font-weight:700; font-size:1.1rem">${c.title}</div>
                <div style="margin-top:5px">${c.content}</div>
            </div>
        `).join('');
    }

    // Anunțuri
    const anuntDiv = document.getElementById('announcementsDisplay');
    if(data.anunturi.length === 0) anuntDiv.innerHTML = `<p style="color:#666">${t('txtNoAnn')}</p>`;
    else {
        anuntDiv.innerHTML = data.anunturi.map(a => `
            <div class="data-item" style="border-left: 4px solid var(--resurse-color);">
                <div class="item-meta"><span>📢 ${a.date}</span></div>
                <div style="font-weight:700; font-size:1.1rem">${a.title}</div>
                <div style="margin-top:5px">${a.content}</div>
            </div>
        `).join('');
    }

    renderPoll();
}

function renderImages(images) {
     if (images.length === 0) return '';
     const imageTags = images.map(src => `<img src="${src}" alt="Poză Problemă" onclick="window.open(this.src)">`).join('');
     return `<div class="item-images">Imagini: ${imageTags}</div>`;
}


function renderCommentsSection(item, type) {
    const commentList = item.comments.map(c => `
        <div class="comment-item">
            <div class="comment-meta">Admin (${c.data})</div>
            ${c.text}
        </div>
    `).join('');

    return `
        <div class="comments-section">
            <h5 style="margin-top:0; color:var(--primary);">${t('txtComments')} (${item.comments.length})</h5>
            ${commentList}
            <div class="comment-form">
                <textarea id="commentInput_${type}_${item.id}" placeholder="${t('phComment')}"></textarea>
                <button class="btn-small" style="background:var(--accent)" onclick="addComment('${type}', ${item.id})">${t('btnComment')}</button>
            </div>
        </div>
    `;
}

function renderAdminPanel() {
    // Populează Editorul de Sondaj
    document.getElementById('adminPollQuestion').value = data.sondaj.intrebare;
    document.getElementById('adminPollOptions').value = data.sondaj.optiuni.join('\n');

    // PROGRESS BAR PROBLEME 
    const totalProbleme = data.probleme.length + data.acad.length + data.bullying.length;
    const rezolvate = data.probleme.filter(p => p.status === 'rezolvat').length + 
                     data.acad.filter(a => a.status === 'rezolvat').length +
                     data.bullying.filter(b => b.status === 'rezolvat').length;
    
    const percentage = totalProbleme > 0 ? Math.round((rezolvate / totalProbleme) * 100) : 0; 
    const bar = document.getElementById('problemeProgressBar');
    bar.style.width = percentage + '%';
    bar.innerText = percentage + '%';
    bar.classList.toggle('resolved', percentage > 0);
    document.getElementById('countsSpan').textContent = `${t('lblTotal')}: ${totalProbleme} | ${t('lblRes')}: ${rezolvate}`;


    // Render Liste Publice pentru Gestiune
    document.getElementById('adminListCalendar').innerHTML = data.calendar.map(c => `
        <div class="data-item" style="border-left: 4px solid var(--acad-color); margin-bottom: 10px;">
            <div class="item-meta"><span>📅 ${c.date}</span></div>
            <div style="font-weight:700; font-size:1.0rem">${c.title}</div>
            <div class="admin-controls" style="padding-top: 5px; margin-top: 5px; border-top: 1px dashed #ccc;">
                <button class="btn-small btn-del" onclick="deleteItem('calendar', ${c.id})">${t('btnDelEvent')}</button>
            </div>
        </div>
    `).join('') || `<p style="color:var(--muted)">${t('txtNoEvents')}</p>`;

    document.getElementById('adminListAnunturi').innerHTML = data.anunturi.map(a => `
        <div class="data-item" style="border-left: 4px solid var(--resurse-color); margin-bottom: 10px;">
            <div class="item-meta"><span>📢 ${a.date}</span></div>
            <div style="font-weight:700; font-size:1.0rem">${a.title}</div>
            <div class="admin-controls" style="padding-top: 5px; margin-top: 5px; border-top: 1px dashed #ccc;">
                <button class="btn-small btn-del" onclick="deleteItem('anunturi', ${a.id})">${t('btnDelAnn')}</button>
            </div>
        </div>
    `).join('') || `<p style="color:var(--muted)">${t('txtNoAnn')}</p>`;


    // Render Probleme (INCLUSIV POZE)
    document.getElementById('adminListProbleme').innerHTML = data.probleme.map(p => `
        <div class="data-item ${p.urgent ? 'urgent-item' : ''}">
            <div class="item-meta">
                <span>${p.data} | ${p.locatie}</span> 
                <span style="font-weight:bold; color:${p.status === 'rezolvat' ? '#10b981' : '#9ca3af'}">${p.tip} (${p.status === 'rezolvat' ? t('lblResolved') : t('lblNew')})</span>
            </div>
            <div class="item-content">${p.desc}</div>
            ${renderImages(p.poze || [])} <div class="admin-controls">
                <button class="btn-small ${p.status === 'nou' ? 'btn-resolve' : 'btn-status-nou'}" onclick="toggleStatus('probleme', ${p.id})">
                    ${p.status === 'nou' ? t('btnMarkRes') : t('btnMarkNew')}
                </button>
                <button class="btn-small btn-mark-urgent" onclick="toggleUrgent('probleme', ${p.id})">
                    ${p.urgent ? t('btnRmUrgent') : t('btnAddUrgent')}
                </button>
                <button class="btn-small btn-del" onclick="deleteItem('probleme', ${p.id})">${t('btnDelete')}</button>
            </div>
            ${renderCommentsSection(p, 'probleme')}
        </div>
    `).join('');

    // Render Sugestii (FĂRĂ buton de Rezolvare)
    document.getElementById('adminListSugestii').innerHTML = data.sugestii.map(s => `
        <div class="data-item" style="border-left-color: var(--sugestii-color);">
            <div class="item-meta"><span>${s.data}</span> <span>${s.nume} (${s.email})</span></div>
            <div class="item-content">${s.text}</div>
            <div class="admin-controls">
                <button class="btn-small btn-del" onclick="deleteItem('sugestii', ${s.id})">${t('btnDelete')}</button>
            </div>
            ${renderCommentsSection(s, 'sugestii')}
        </div>
    `).join('');

    // Render Bullying
    document.getElementById('adminListBullying').innerHTML = data.bullying.map(b => `
        <div class="data-item" style="border-left-color: var(--bullying-color);">
            <div class="item-meta"><span>${b.data}</span> <span style="color:red">${t('lblConf')}</span></div>
            <div class="item-content">${b.desc} <br><small>${t('lblDet')}: ${b.detalii}</small></div>
            <div class="admin-controls">
                 <button class="btn-small ${b.status === 'nou' ? 'btn-resolve' : 'btn-status-nou'}" onclick="toggleStatus('bullying', ${b.id})">
                    ${b.status === 'nou' ? t('btnMarkRes') : t('btnMarkNew')}
                </button>
                <button class="btn-small btn-del" onclick="deleteItem('bullying', ${b.id})">${t('btnDelete')}</button>
            </div>
            ${renderCommentsSection(b, 'bullying')}
        </div>
    `).join('');

    // Render Academice
    document.getElementById('adminListAcad').innerHTML = data.acad.map(a => {
        const tipDisplay = a.tip || t('lblUnspec');

        return `
            <div class="data-item ${a.urgent ? 'urgent-item' : ''}" style="border-left-color: var(--acad-color);">
                <div class="item-meta">
                    <span>${a.data}</span> 
                    <span style="font-weight:bold; color:${a.status === 'rezolvat' ? '#10b981' : '#9ca3af'}">
                        ${tipDisplay} (${a.status === 'rezolvat' ? t('lblResolved') : t('lblNew')})
                    </span>
                </div>
                <div class="item-content">${a.desc}</div>
                <div class="admin-controls">
                    <button class="btn-small ${a.status === 'nou' ? 'btn-resolve' : 'btn-status-nou'}" onclick="toggleStatus('acad', ${a.id})">
                        ${a.status === 'nou' ? t('btnMarkRes') : t('btnMarkNew')}
                    </button>
                    <button class="btn-small btn-mark-urgent" onclick="toggleUrgent('acad', ${a.id})">
                        ${a.urgent ? t('btnRmUrgent') : t('btnAddUrgent')}
                    </button>
                    <button class="btn-small btn-del" onclick="deleteItem('acad', ${a.id})">${t('btnDelete')}</button>
                </div>
                ${renderCommentsSection(a, 'acad')}
            </div>
        `;
    }).join('');
}

// Faceți funcțiile necesare disponibile global pentru HTML
window.toggleStatus = toggleStatus;
window.toggleUrgent = toggleUrgent;
window.deleteItem = deleteItem; 
window.addComment = addComment; 
window.adminUpdatePoll = adminUpdatePoll;
window.adminResetPollVotes = adminResetPollVotes;
window.adminDeleteAllData = adminDeleteAllData; 
window.submitProblem = submitProblem; 
window.burstStarAnimation = burstStarAnimation; 
window.toggleMenu = toggleMenu;
window.switchView = switchView;
window.submitSuggestion = submitSuggestion;
window.submitBullying = submitBullying;
window.submitAcademic = submitAcademic;
window.submitVote = submitVote;
window.toggleAdminAuth = toggleAdminAuth;
window.logoutAdmin = logoutAdmin;
window.adminPostContent = adminPostContent;
window.toggleLanguage = toggleLanguage;

// Re-mapează data la încărcare pentru a afișa evenimentele/anunțurile default
document.addEventListener('DOMContentLoaded', () => {
    renderPublicContent();
});
