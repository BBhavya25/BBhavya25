const faqData = {
    en: {
      "What are the opening hours of the National Museum?":
        "The National Museum is open from 10 AM to 6 PM, Tuesday to Sunday(Except monday).",
      "Is the National Museum open on public holidays?":
        "The museum is closed on public holidays.",
      "How much is the entrance fee for the National Museum?":
        "The entrance fee is $10 for adults and $5 for children.",
      "Is there a discount on entrance tickets for students or senior citizens?":
        "Discounts are available for students and senior citizens.",
      "How can I book tickets online for the National Museum?":
        "You can book tickets online through our website.",
      "What is the best time to visit the National Museum?":
        "The best time to visit is early in the morning or late in the afternoon.",
      "What are the most popular exhibits in the National Museum?":
        "The most popular exhibits include ancient artifacts and the history of civilizations.",
      "How long does it take to tour the entire museum?":
        "It takes approximately 2 hours to tour the entire museum.",
      "Are guided tours available at the National Museum?":
        "Yes, guided tours are available upon request."
    },
    hi: {
      "राष्ट्रीय संग्रहालय के खुलने का समय क्या है?":
        "राष्ट्रीय संग्रहालय सोमवार से शनिवार तक सुबह 10 बजे से शाम 6 बजे तक खुला रहता है।",
      "क्या राष्ट्रीय संग्रहालय सार्वजनिक छुट्टियों पर खुला रहता है?":
        "संग्रहालय सार्वजनिक छुट्टियों पर बंद रहता है।",
      "राष्ट्रीय संग्रहालय का प्रवेश शुल्क कितना है?":
        "प्रवेश शुल्क वयस्कों के लिए $10 और बच्चों के लिए $5 है।",
      "छात्रों या वरिष्ठ नागरिकों के लिए प्रवेश टिकटों पर कोई छूट है?":
        "छात्रों और वरिष्ठ नागरिकों के लिए छूट उपलब्ध है।",
      "राष्ट्रीय संग्रहालय के लिए ऑनलाइन टिकट कैसे बुक करें?":
        "आप हमारी वेबसाइट के माध्यम से ऑनलाइन टिकट बुक कर सकते हैं।",
      "राष्ट्रीय संग्रहालय का दौरा करने का सबसे अच्छा समय क्या है?":
        "सर्वश्रेष्ठ समय सुबह जल्दी या शाम को देर से है।",
      "राष्ट्रीय संग्रहालय में सबसे लोकप्रिय प्रदर्शनी कौन सी हैं?":
        "सर्वाधिक लोकप्रिय प्रदर्शनी में प्राचीन कलाकृतियाँ और सभ्यताओं का इतिहास शामिल हैं।",
      "संग्रहालय का पूरा दौरा करने में कितना समय लगता है?":
        "पूरा दौरा करने में लगभग 2 घंटे लगते हैं।",
      "क्या संग्रहालय में गाइडेड टूर उपलब्ध हैं?":
        "हाँ, गाइडेड टूर उपलब्ध हैं।"
    },
    te: {
      "జాతీయ మ్యూజియం యొక్క తెరవబడిన గంటలు ఏమిటి?":
        "జాతీయ మ్యూజియం సోమవారం నుంచి శనివారం వరకు ఉదయం 10 గంటల నుంచి సాయంత్రం 6 గంటల వరకు తెరవబడుతుంది.",
      "జాతీయ మ్యూజియం పబ్లిక్ హాలిడేలలో తెరిచి ఉంటుంది?":
        "మ్యూజియం పబ్లిక్ హాలిడేలో మూసివేయబడుతుంది.",
      "జాతీయ మ్యూజియం ప్రవేశ రుసుము ఎంత?":
        "ప్రవేశ రుసుము పెద్దల కోసం $10 మరియు పిల్లల కోసం $5.",
      "విద్యార్థులు లేదా సీనియర్ సిటిజన్లకు ప్రవేశ టిక్కెట్లపై ఎటువంటి డిస్కౌంట్ లభించేదేనా?":
        "విద్యార్థులు మరియు సీనియర్ సిటిజన్లకు డిస్కౌంట్ లభిస్తుంది.",
      "జాతీయ మ్యూజియం కోసం టిక్కెట్లను ఆన్లైన్లో ఎలా బుక్ చేయవచ్చు?":
        "మా వెబ్‌సైట్ ద్వారా మీరు ఆన్లైన్ టిక్కెట్లు బుక్ చేయవచ్చు.",
      "జాతీయ మ్యూజియం సందర్శనకు ఉత్తమ సమయం ఏమిటి?":
        "ఉదయం త్వరగా లేదా సాయంత్రం ఆలస్యంగా సందర్శించడం ఉత్తమం.",
      "జాతీయ మ్యూజియంలో అత్యంత ప్రసిద్ధమైన ప్రదర్శనలు ఏమిటి?":
        "ప్రాచీన కళాకృతులు మరియు నాగరికతల చరిత్ర ప్రసిద్ధమైన ప్రదర్శనలలో ఉన్నాయి.",
      "మ్యూజియం మొత్తం విహరించడానికి ఎంత సమయం పడుతుంది?":
        "మ్యూజియం మొత్తం విహరించడానికి సుమారు 2 గంటలు పట్టవచ్చు."
    },
    ta: {
      "தேசிய அருங்காட்சியகத்தின் திறப்பு நேரங்கள் என்ன?":
        "தேசிய அருங்காட்சியகம் திங்கள் முதல் சனி வரை காலை 10 மணி முதல் மாலை 6 மணி வரை திறந்திருக்கிறது.",
      "தேசிய அருங்காட்சியகம் பொது விடுமுறையில் திறந்திருப்பதா?":
        "அருங்காட்சியகம் பொது விடுமுறையில் மூடப்படும்.",
      "தேசிய அருங்காட்சியகத்தின் நுழைவுக் கட்டணம் எவ்வளவு?":
        "நுழைவுக் கட்டணம் பெரியவர்களுக்கு $10 மற்றும் குழந்தைகளுக்கு $5 ஆகும்.",
      "மாணவர்கள் அல்லது முதியவர்கள் நுழைவு சீட்டுகளில் ஏதேனும் தள்ளுபடி உள்ளதா?":
        "மாணவர்கள் மற்றும் முதியவர்களுக்கு தள்ளுபடி கிடைக்கும்.",
      "தேசிய அருங்காட்சியகத்திற்கான சீட்டுகளை ஆன்லைனில் எவ்வாறு பதிவு செய்வது?":
        "நீங்கள் எங்கள் இணையதளத்தின் மூலம் ஆன்லைனில் சீட்டுகளை பதிவு செய்யலாம்.",
      "தேசிய அருங்காட்சியகம் வருகை தருவதற்கான சிறந்த நேரம் எது?":
        "காலை ஆரம்பத்தில் அல்லது மாலையில் வருகை தருவது சிறந்தது.",
      "தேசிய அருங்காட்சியகத்தில் மிகவும் பிரபலமான கண்காட்சிகள் எவை?":
        "பிரபலமான கண்காட்சிகளில் பண்டைய பொருட்கள் மற்றும் நாகரிகங்களின் வரலாறு அடங்கும்.",
      "முழு அருங்காட்சியகத்தை சுற்றி வருவதற்கு எவ்வளவு நேரம் ஆகும்?":
        "முழு அருங்காட்சியகத்தை சுற்றி வர 2 மணி நேரம் ஆகும்."
    },
    kn: {
      "ರಾಷ್ಟ್ರೀಯ ಮ್ಯೂಸಿಯಂನ ತೆರೆದಿರುವ ಸಮಯ ಏನು?":
        "ರಾಷ್ಟ್ರೀಯ ಮ್ಯೂಸಿಯಂ ಸೋಮವಾರದಿಂದ ಶನಿವಾರ ಬೆಳಿಗ್ಗೆ 10 ರಿಂದ ಸಂಜೆ 6 ರವರೆಗೆ ತೆರೆದಿರುತ್ತದೆ.",
      "ರಾಷ್ಟ್ರೀಯ ಮ್ಯೂಸಿಯಂ ಸಾರ್ವಜನಿಕ ರಜಾದಿನಗಳಲ್ಲಿ ತೆರೆದಿರುತ್ತದೆಯೆ?":
        "ಮ್ಯೂಸಿಯಂ ಸಾರ್ವಜನಿಕ ರಜಾದಿನಗಳಲ್ಲಿ ಮುಚ್ಚಲಾಗುತ್ತದೆ.",
      "ರಾಷ್ಟ್ರೀಯ ಮ್ಯೂಸಿಯಂ ಪ್ರವೇಶ ಶುಲ್ಕ ಎಷ್ಟು?":
        "ಪ್ರವೇಶ ಶುಲ್ಕ ಪ್ರাপ্ত ವಯಸ್ಕರಿಗೆ $10 ಮತ್ತು ಮಕ್ಕಳಿಗೆ $5.",
      "ವಿದ್ಯಾರ್ಥಿಗಳು ಅಥವಾ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಪ್ರವೇಶ ಟಿಕೆಟ್‌ಗಳಲ್ಲಿ ಯಾವ ರಿಯಾಯಿತಿ ಇದೆಯೇ?":
        "ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ರಿಯಾಯಿತಿ ಲಭ್ಯವಿದೆ.",
      "ರಾಷ್ಟ್ರೀಯ ಮ್ಯೂಸಿಯಂಗಾಗಿ ಆನ್‌ಲೈನ್ ಟಿಕೆಟ್‌ಗಳನ್ನು ಹೇಗೆ ಬುಕ್ ಮಾಡಬಹುದು?":
        "ನೀವು ನಮ್ಮ ವೆಬ್‌ಸೈಟ್ ಮೂಲಕ ಆನ್‌ಲೈನ್ ಟಿಕೆಟ್‌ಗಳನ್ನು ಬುಕ್ ಮಾಡಬಹುದು.",
      "ರಾಷ್ಟ್ರೀಯ ಮ್ಯೂಸಿಯಂ ಗೆ ಭೇಟಿ ನೀಡಲು ಉತ್ತಮ ಸಮಯ ಏನು?":
        "ಬೆಳಿಗ್ಗೆ ಶೀಘ್ರವಾಗಿ ಅಥವಾ ಸಂಜೆ ತಡವಾಗಿ ಭೇಟಿ ನೀಡುವುದು ಉತ್ತಮ.",
      "ರಾಷ್ಟ್ರೀಯ ಮ್ಯೂಸಿಯಂನಲ್ಲಿ ಪ್ರಸಿದ್ಧವಾದ ಪ್ರದರ್ಶನಗಳು ಯಾವುವು?":
        "ಪ್ರಸಿದ್ಧ ಪ್ರದರ್ಶನಗಳಲ್ಲಿ ಪುರಾತನ ಕಲಾಕೃತಿಗಳು ಮತ್ತು ನಾಗರಿಕತೆಗಳ ಇತಿಹಾಸವನ್ನು ಒಳಗೊಂಡಿವೆ.",
      "ಮ್ಯೂಸಿಯಂ ಸಂಪೂರ್ಣವಾಗಿ ಪ್ರವಾಸ ಮಾಡುವುದಕ್ಕೆ ಎಷ್ಟು ಸಮಯ ಹೊಡೆದುಕೊಳ್ಳುತ್ತದೆ?":
        "ಮ್ಯೂಸಿಯಂ ಸಂಪೂರ್ಣವಾಗಿ ಪ್ರವಾಸ ಮಾಡಲು ಸುಮಾರು 2 ಗಂಟೆಗಳ ಕಾಲ ಬೇಕು."
    },
    bn: {
      "জাতীয় জাদুঘরের খোলার সময়সূচি কী?":
        "জাতীয় জাদুঘর সোমবার থেকে শনিবার পর্যন্ত সকাল 10টা থেকে সন্ধ্যা 6টা পর্যন্ত খোলা থাকে।",
      "জাতীয় জাদুঘর কি পাবলিক হলিডেতে খোলা থাকে?":
        "জাদুঘর পাবলিক হলিডেতে বন্ধ থাকে।",
      "জাতীয় জাদুঘরের প্রবেশ ফি কত?":
        "প্রবেশ ফি প্রাপ্তবয়স্কদের জন্য $10 এবং শিশুদের জন্য $5।",
      "ছাত্রছাত্রী বা বৃদ্ধদের জন্য প্রবেশ টিকিটে কোন ছাড় আছে কি?":
        "ছাত্রছাত্রী এবং বৃদ্ধদের জন্য ছাড় পাওয়া যায়।",
      "জাতীয় জাদুঘরের জন্য অনলাইনে টিকিট কিভাবে বুক করব?":
        "আপনি আমাদের ওয়েবসাইটের মাধ্যমে অনলাইনে টিকিট বুক করতে পারেন।",
      "জাতীয় জাদুঘরে যাওয়ার জন্য সেরা সময় কী?":
        "সকাল বা সন্ধ্যায় যাওয়া সেরা সময়।",
      "জাতীয় জাদুঘরের সবচেয়ে জনপ্রিয় প্রদর্শনী কোনগুলি?":
        "সবচেয়ে জনপ্রিয় প্রদর্শনীগুলির মধ্যে প্রাচীন সামগ্রী এবং সভ্যতার ইতিহাস অন্তর্ভুক্ত।",
      "জাদুঘর পুরোপুরি দর্শন করতে কত সময় লাগে?":
        "সম্পূর্ণ জাদুঘর দর্শন করতে প্রায় 2 ঘন্টা সময় লাগে।"
    },
    gu: {
      "રાષ્ટ્રીય મ્યુઝિયમના ખુલવાની સમયસર શું છે?":
        "રાષ્ટ્રીય મ્યુઝિયમ સોમવારથી શનિવાર સુધી સવારે 10 વાગ્યાથી સાંજ 6 વાગ્યા સુધી ખૂલવું છે.",
      "રાષ્ટ્રીય મ્યુઝિયમ જાહેર રજાના દિવસો પર ખૂલે છે કે નહિ?":
        "મ્યુઝિયમ જાહેર રજાના દિવસો પર બંધ રહે છે.",
      "રાષ્ટ્રીય મ્યુઝિયમ માટે પ્રવેશ ફી કેટલી છે?":
        "પ્રવેશ ફી પ્રૌઢોને $10 અને બાળકો માટે $5 છે.",
      "વિદ્યાર્થીઓ અથવા વૃદ્ધો માટે પ્રવેશ ટિકિટ પર કઈ છૂટ છે?":
        "વિદ્યાર્થીઓ અને વૃદ્ધો માટે છૂટ ઉપલબ્ધ છે.",
      "રાષ્ટ્રીય મ્યુઝિયમ માટે ઓનલાઈન ટિકિટ કેવી રીતે બુક કરવી?":
        "તમે અમારી વેબસાઇટ મારફતે ઓનલાઈન ટિકિટ બુક કરી શકો છો.",
      "રાષ્ટ્રીય મ્યુઝિયમ માટે મુલાકાત લેવાનો શ્રેષ્ઠ સમય શું છે?":
        "સવાર વહેલા અથવા સાંજને મોડા સમય દરમિયાન મુલાકાત લેવું શ્રેષ્ઠ છે.",
      "રાષ્ટ્રીય મ્યુઝિયમમાં સૌથી લોકપ્રિય પ્રદર્શન કયા છે?":
        "સૌથી લોકપ્રિય પ્રદર્શનોમાં પ્રાચીન કલા અને સંસ્કૃતિઓનો ઇતિહાસ શામેલ છે.",
      "મ્યુઝિયમને સંપૂર્ણ રીતે શોધવા માટે કેટલો સમય લાગે છે?":
        "મ્યુઝિયમને સંપૂર્ણ રીતે શોધવા માટે લગભગ 2 કલાકનો સમય લાગે છે."
    },
    fr:{
        "Quelles sont les heures d'ouverture du Musée National?": 
          "Le Musée National est ouvert de 10h à 18h, du lundi au samedi.",
          
        "Le Musée National est-il ouvert les jours fériés?": 
          "Le musée est fermé les jours fériés.",
          
        "Quel est le tarif d'entrée au Musée National?": 
          "Le tarif d'entrée est de 10 $ pour les adultes et de 5 $ pour les enfants.",
          
        "Y a-t-il une réduction sur les billets d'entrée pour les étudiants ou les personnes âgées?": 
          "Des réductions sont disponibles pour les étudiants et les personnes âgées.",
          
        "Comment puis-je réserver des billets en ligne pour le Musée National?": 
          "Vous pouvez réserver des billets en ligne sur notre site web.",
          
        "Quelle est la meilleure heure pour visiter le Musée National?": 
          "Le meilleur moment pour visiter est tôt le matin ou en fin d'après-midi.",
          
        "Quelles sont les expositions les plus populaires du Musée National?": 
          "Les expositions les plus populaires comprennent des artefacts anciens et l'histoire des civilisations.",
          
        "Combien de temps faut-il pour visiter tout le musée?": 
          "Il faut environ 2 heures pour visiter tout le musée.",
          
        "Y a-t-il des visites guidées disponibles au Musée National?": 
          "Oui, des visites guidées sont disponibles sur demande."
    },
    sp:{
        "¿Cuáles son los horarios de apertura del Museo Nacional?": 
          "El Museo Nacional está abierto de 10 AM a 6 PM, de lunes a sábado.",
          
        "¿Está abierto el Museo Nacional en días festivos?": 
          "El museo está cerrado los días festivos.",
          
        "¿Cuál es la tarifa de entrada al Museo Nacional?": 
          "La tarifa de entrada es de $10 para adultos y $5 para niños.",
          
        "¿Hay un descuento en las entradas para estudiantes o personas mayores?": 
          "Hay descuentos disponibles para estudiantes y personas mayores.",
          
        "¿Cómo puedo reservar entradas en línea para el Museo Nacional?": 
          "Puedes reservar entradas en línea a través de nuestro sitio web.",
          
        "¿Cuál es el mejor momento para visitar el Museo Nacional?": 
          "El mejor momento para visitar es temprano en la mañana o al final de la tarde.",
          
        "¿Cuáles son las exhibiciones más populares del Museo Nacional?": 
          "Las exhibiciones más populares incluyen artefactos antiguos y la historia de las civilizaciones.",
          
        "¿Cuánto tiempo se tarda en recorrer todo el museo?": 
          "Se tarda aproximadamente 2 horas en recorrer todo el museo.",
          
        "¿Hay visitas guiadas disponibles en el Museo Nacional?": 
          "Sí, hay visitas guiadas disponibles a petición."
    },
    ger:{
        "Was sind die Öffnungszeiten des Nationalmuseums?": 
          "Das Nationalmuseum ist von 10 Uhr bis 18 Uhr, Montag bis Samstag, geöffnet.",
          
        "Ist das Nationalmuseum an Feiertagen geöffnet?": 
          "Das Museum ist an Feiertagen geschlossen.",
          
        "Wie viel kostet der Eintritt ins Nationalmuseum?": 
          "Der Eintritt beträgt 10 $ für Erwachsene und 5 $ für Kinder.",
          
        "Gibt es Ermäßigungen auf Eintrittskarten für Studenten oder Senioren?": 
          "Es gibt Ermäßigungen für Studenten und Senioren.",
          
        "Wie kann ich Tickets online für das Nationalmuseum buchen?": 
          "Sie können Tickets online über unsere Website buchen.",
          
        "Wann ist die beste Zeit, um das Nationalmuseum zu besuchen?": 
          "Die beste Zeit für einen Besuch ist früh am Morgen oder spät am Nachmittag.",
          
        "Was sind die beliebtesten Ausstellungen im Nationalmuseum?": 
          "Zu den beliebtesten Ausstellungen gehören antike Artefakte und die Geschichte der Zivilisationen.",
          
        "Wie lange dauert es, das gesamte Museum zu besichtigen?": 
          "Es dauert etwa 2 Stunden, um das gesamte Museum zu besichtigen.",
          
        "Gibt es im Nationalmuseum Führungen?": 
          "Ja, Führungen sind auf Anfrage verfügbar."
      
    },
    jap:{
      "国立博物館の開館時間は何時ですか?": 
        "国立博物館は月曜日から土曜日の午前10時から午後6時まで開館しています。",
        
      "国立博物館は祝日に開館していますか?": 
        "博物館は祝日に閉館しています。",
        
      "国立博物館の入場料はいくらですか?": 
        "入場料は大人10ドル、子供5ドルです。",
        
      "学生や高齢者向けの割引はありますか?": 
        "学生や高齢者向けの割引があります。",
        
      "国立博物館のチケットをオンラインで予約するにはどうすればいいですか?": 
        "チケットは当館のウェブサイトからオンラインで予約できます。",
        
      "国立博物館を訪れるのに最適な時間はいつですか?": 
        "訪れるのに最適な時間は、朝早くか午後遅くです。",
        
      "国立博物館で最も人気のある展示は何ですか?": 
        "最も人気のある展示には、古代の遺物や文明の歴史が含まれます。",
        
      "博物館全体を見学するのにどのくらい時間がかかりますか?": 
        "博物館全体を見学するには約2時間かかります。",
        
      "国立博物館ではガイドツアーがありますか?": 
        "はい、ガイドツアーはリクエストに応じて利用できます。"
    }
  };

  function populateQuestions() {
    const lang = document.getElementById('language').value;
    const questions = Object.keys(faqData[lang]);
    const questionSelect = document.getElementById('questions');
    questionSelect.innerHTML = '';

    questions.forEach(q => {
      const option = document.createElement('option');
      option.value = q;
      option.textContent = q;
      questionSelect.appendChild(option);
    });
  }

  function displayAnswer() {
    const lang = document.getElementById('language').value;
    const selectedQuestion = document.getElementById('questions').value;
    const answer = faqData[lang][selectedQuestion];

    const chatbox = document.getElementById('chatbot-body');
    const userMessage = document.createElement('div');
    userMessage.className = 'chatbot-message user-message';
    userMessage.textContent = selectedQuestion;
    chatbox.appendChild(userMessage);

    if (answer) {
      const botMessage = document.createElement('div');
      botMessage.className = 'chatbot-message bot-message';
      botMessage.textContent = answer;
      chatbox.appendChild(botMessage);
    } else {
      const botMessage = document.createElement('div');
      botMessage.className = 'chatbot-message bot-message';
      botMessage.textContent = 'Sorry, I don\'t have an answer for that.';
      chatbox.appendChild(botMessage);
    }

    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
  }

  document.getElementById('language').addEventListener('change', populateQuestions);

  document.getElementById('ask').addEventListener('click', displayAnswer);

  // Initialize
  populateQuestions();



  // Function to get the user's preferred language
function getUserLanguage() {
  return navigator.language || navigator.userLanguage;
}

// Function to update the "Book-Ticket" button text based on the user's language
function updateBookTicketButton() {
  const userLang = getUserLanguage().substring(0, 2); // Get the first two letters of the language code
  const bookTicketButton = document.getElementById('book-ticket');

  switch (userLang) {
      case 'en':
          bookTicketButton.textContent = 'Book-Ticket';
          break;
      case 'fr':
          bookTicketButton.textContent = 'Réserver un billet';
          break;
      case 'es':
          bookTicketButton.textContent = 'Reservar boleto';
          break;
      case 'de':
          bookTicketButton.textContent = 'Ticket buchen';
          break;
      case 'ja':
          bookTicketButton.textContent = 'チケットを予約する';
          break;
      case 'hi':
          bookTicketButton.textContent = 'टिकट बुक करें';
          break;
      case 'te':
          bookTicketButton.textContent = 'టికెట్ బుక్ చేయండి';
          break;
      case 'ta':
          bookTicketButton.textContent = 'டிக்கெட் முன்பதிவு';
          break;
      case 'kn':
          bookTicketButton.textContent = 'ಟಿಕೆಟ್ ಬುಕ್ ಮಾಡಿ';
          break;
      case 'bn':
          bookTicketButton.textContent = 'টিকিট বুক করুন';
          break;
      case 'gu':
          bookTicketButton.textContent = 'ટિકિટ બુક કરો';
          break;
      default:
          bookTicketButton.textContent = 'Book-Ticket'; // Default to English
          break;
  }
}

// Redirect to the booking page
document.getElementById('book-ticket').addEventListener('click', function() {
  window.location.href = 'http://127.0.0.1:5500/chatbot/dummy.html';
});

// Update the button text when the page loads
updateBookTicketButton();
