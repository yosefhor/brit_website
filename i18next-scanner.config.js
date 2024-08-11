module.exports = {
    input: [
      'src/**/*.{js,jsx}',
    ],
    output: './src/TRANSLATIONS/$NAMESPACE.json', // נתיב לשמירת קבצי התרגום
    options: {
      debug: false,
      sort: true, // ממיין את מפתחות התרגום בסדר אלפביתי
      func: {
        list: ['i18next.t', 't'], // פונקציות שמזוהות כקריאות תרגום
        extensions: ['.js', '.jsx'],
      },
      trans: {
        component: 'Trans', // שם הקומפוננטה ב-React שמשמשת לתרגום
        i18nKey: 'i18nKey', // שם הפרופס שמשמש כמפתח תרגום
        defaultsKey: 'defaults', // ברירת מחדל לערך התרגום
        extensions: ['.js', '.jsx'],
        fallbackKey: function(ns, value) {
          return value;
        },
      },
      lngs: ['de', 'en', 'he'], // רשימת השפות הנתמכות
      ns: [
        'header',
        'home',
        'about_me',
        'about_brit_milah',
        'costs',
        'contact',
        'FloatingWhatsAppButton'
      ],
      defaultLng: 'de', // השפה הראשית
      defaultNs: 'header', // namespace ברירת המחדל
      resource: {
        loadPath: 'src/TRANSLATIONS/{{ns}}.json', // מיקום קבצי התרגום
        savePath: 'src/TRANSLATIONS/{{ns}}.json', // מיקום לשמירת קבצי התרגום
        jsonIndent: 2, // רמת השינויים בעת שמירה
        lineEnding: '\n', // סגנון סוף שורה
      },
      keySeparator: false, // מפריד מקשים
      nsSeparator: false, // מפריד namespaces
    },
  };
  