import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "resources.content": "In Development",
          "resources.title": "Resources & Guidebook",
          "reference": "Reference",
          "tip_4": "Tell an Adult",
          "tip_4_description": "If something feels wrong or someone is being mean, tell a trusted adult right away.",
          "tip_5": "Be Respectful",
          "tip_5_description": "Respect others' privacy and avoid using offensive language.",
          "tip_6": "Play Monitored",
          "tip_6_description": "If you're playing online, always play when monitored by your parents.",
          "tip_3": "Friend Requests",
          "tip_3_description": "Only accept friend requests from people you know in real life. Be careful about who you talk to online.",
          "tip_2_description": "Think before you type. Don't share personal information in game chats or forums.",
          "tip_2": "Be Careful online",
          "tip_1": "Protect Yourself",
          "tip_1_description": "Never share your real name, address, school, or other personal information when playing games online.",
          "safety_online_tips": "Online Safety Tips",
          "get_started": "Get Started",
          "description": "Learn how to have fun gaming online while keeping yourself protected!",
          "play_smart": "Play Smart,",
          "stay_safe": " Stay Safe",
          "Arabic": "Arabic",
          "English": "English",
          "Spanish": "Spanish",
          "game_safe": "GameSafe",
          "home": "Home",
          "safety_tips": "Safety Tips",
          "quiz": "Quiz",
          "resources": "Resources",
        }
      },
      es: {
        translation: {
          "resources.content": "En Desarrollo",
          "resources.title": "Recursos y Guía",
          "tip_4": "Habla con un Adulto",
          "tip_4_description": "Si algo te parece mal o alguien se porta mal, habla de inmediato con un adulto de confianza.",
          "tip_5": "Sé Respetuoso",
          "tip_5_description": "Respeta la privacidad de los demás y evita usar lenguaje ofensivo.",
          "tip_6": "Juega siempre bajo supervisión",
          "tip_6_description": "Si estás jugando en línea, juega siempre bajo la supervisión de tus padres.",
          "tip_3": "Solicitudes de Amistad",
          "tip_3_description": "Solo acepta solicitudes de amistad de personas que conozcas en la vida real. Sé cuidadoso con quién hablas en línea.",
          "tip_2": "Ten cuidado con lo que dices",
          "tip_2_description": "Piensa antes de escribir. No compartas información personal en chats de juegos o foros.",
          "tip_1": "Protege tu Identidad",
          "tip_1_description": "Nunca comparte tu nombre real, dirección, escuela u otra información personal cuando juegas en línea.",
          "safety_online_tips": "Consejos de Seguridad en Línea",
          "get_started": "Comenzar",
          "description": "Aprende a jugar online mientras se protege tu cuenta!",
          "play_smart": "Juega Inteligente,",
          "stay_safe": " Mantente Seguro",
          "Arabic": "Árabe",
          "English": "Inglés",
          "Spanish": "Español",
          "game_safe": "GameSafe",
          "home": "Hogar",
          "safety_tips": "Consejos de Seguridad",
          "quiz": "Cuestionario",
          "resources": "Recursos",
        }
      },
      ar: {
        translation: {
          "resources.content": "في التطوير",
          "resources.title": "المصادر والدليل",
          "tip_4": "أخبر بالغًا",
          "tip_4_description": "إذا شعرت أن شيئًا ما خطأ أو أن شخصًا ما يتصرف بشكل سيء، أخبر بالغًا موثوقًا به على الفور.",
          "tip_5": "كن محترمًا",
          "tip_5_description": "احترم خصوصية الآخرين وتجنب استخدام لغة مهينة.",
          "tip_6": "العب دائمًا تحت المراقبة",
          "tip_6_description": "إذا كنت تلعب عبر الإنترنت، العب دائمًا تحت إشراف والديك.",
          "tip_3": "طلبات الصداقة",
          "tip_3_description": "اقبل طلبات الصداقة فقط من الأشخاص الذين تعرفهم في الواقع. كن حذرًا بشأن من تتحدث معه عبر الإنترنت.",
          "tip_2": "كن حذرًا بما تقوله",
          "tip_2_description": "فكر قبل أن تكتب. لا تشارك معلوماتك الشخصية في دردشات الألعاب أو المنتديات.",
          "tip_1": "حماية نفسك",
          "tip_1_description": "لا تشارك اسمك الحقيقي أو عنوانك أو مدرستك أو أي معلومات شخصية أخرى عند اللعب عبر الإنترنت.",
          "safety_online_tips": "نصائح للسلامة على الإنترنت",
          "get_started": "ابدأ",
          "description": "تعلم كيفية اللعب على الإنترنت و الحفاظ على سلامتك!",
          "play_smart": "العب بذكاء،",
          "stay_safe": " ابقَ آمناً",
          "Arabic": "عربي",
          "English": "إنجليزي",
          "Spanish": "إسباني",
          "game_safe": "جيم سيف",
          "home": "الرئيسية",
          "safety_tips": "نصائح السلامة",
          "quiz": "الاختبار",
          "resources": "المصادر",
        }
      }
    },
    lng: "ar", // language to use
    fallbackLng: "ar", // language to use if translations in user language are not available

    interpolation: {
      escapeValue: false // react already escapes by default
    }
  });

export default i18n;