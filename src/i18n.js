import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      "nav.dashboard": "Dashboard",
      "nav.aiSettings": "AI Settings",
      "nav.sentimentAnalysis": "Sentiment Analysis",
      "nav.reports": "Reports",
      "nav.signIn": "Sign In",

      // Dashboard
      "dashboard.totalConversations": "Total Conversations",
      "dashboard.avgSessionLength": "Avg Session Length",
      "dashboard.sentimentScore": "Sentiment Score",
      "dashboard.uniqueUsers": "Unique Users",
      "dashboard.conversationMetrics": "Conversation Metrics",
      "dashboard.userEngagement": "User Engagement",
      "dashboard.topIssues": "Top Issues",
      "dashboard.peakHours": "Peak Hours",

      // AI Settings
      "aiSettings.title": "AI Settings",
      "aiSettings.toneSettings": "Tone Settings",
      "aiSettings.toneDescription": "Select the tone for AI responses",
      "aiSettings.basicRules": "Basic Rules",
      "aiSettings.rulesDescription": "Define core rules for AI behavior",
      "aiSettings.generalSettings": "General Settings",
      "aiSettings.settingsDescription": "Configure additional AI parameters",
      "aiSettings.testChat": "Test AI Chat",
      "aiSettings.saveTone": "Save Tone",
      "aiSettings.saveRules": "Save Rules",
      "aiSettings.saveSettings": "Save Settings",
      "aiSettings.uploadHint": "Upload reports (PDF, DOC, CSV, XLSX) to test AI analysis capabilities",
      "aiSettings.typeMessage": "Type your message...",
      "aiSettings.send": "Send",

      // Tone options
      "tone.professional": "Professional",
      "tone.friendly": "Friendly",
      "tone.casual": "Casual",
      "tone.formal": "Formal",
      "tone.empathetic": "Empathetic",
      "tone.concise": "Concise",

      // Sentiment Analysis
      "sentiment.title": "Sentiment Analysis",
      "sentiment.overTime": "Sentiment Over Time",
      "sentiment.distribution": "Sentiment Distribution",
      "sentiment.byTopic": "Sentiment by Topic",
      "sentiment.recentFeedback": "Recent Feedback",
      "sentiment.positive": "Positive",
      "sentiment.neutral": "Neutral",
      "sentiment.negative": "Negative",

      // Suggestions
      "sentiment.suggestions.title": "Suggestions",
      "sentiment.suggestions.improveResponse": "Improve Response Time",
      "sentiment.suggestions.improveResponseDesc": "Average response time is 45s. Consider optimizing for faster replies during peak hours.",
      "sentiment.suggestions.enhancePersonalization": "Enhance Personalization",
      "sentiment.suggestions.enhancePersonalizationDesc": "Add user preference tracking to provide more tailored responses.",
      "sentiment.suggestions.expandKnowledge": "Expand Knowledge Base",
      "sentiment.suggestions.expandKnowledgeDesc": "Add more FAQs about payment issues to reduce escalations.",
      "sentiment.suggestions.addEmojis": "Add Emoji Support",
      "sentiment.suggestions.addEmojisDesc": "Users respond positively to emojis. Consider adding them to casual conversations.",

      // Insights
      "sentiment.insights.title": "Key Insights",
      "sentiment.insights.positiveTrend": "Positive Sentiment Trending Up",
      "sentiment.insights.positiveTrendDesc": "Positive feedback increased by 3.2% this week compared to last week.",
      "sentiment.insights.peakHours": "Peak Satisfaction Hours",
      "sentiment.insights.peakHoursDesc": "Users are most satisfied during afternoon hours (2-5 PM).",
      "sentiment.insights.commonIssues": "Common Pain Points",
      "sentiment.insights.commonIssuesDesc": "Payment-related queries generate the most negative sentiment.",
      "sentiment.insights.avgResolution": "Resolution Time Improving",
      "sentiment.insights.avgResolutionDesc": "Average resolution time decreased by 15 seconds compared to last week.",
      "sentiment.insights.overallHealth": "Overall Health Score",

      // Priority
      "sentiment.priority.high": "High",
      "sentiment.priority.medium": "Medium",
      "sentiment.priority.low": "Low",

      // Reports
      "reports.title": "Reports",
      "reports.templates": "Report Templates",
      "reports.scheduled": "Scheduled Reports",
      "reports.generate": "Generate Report",
      "reports.viewSchedule": "View Schedule",

      // Chat messages
      "chat.greeting": "Hello! I'm your AI assistant. How can I help you today?",
      "chat.fileReceived": "I've received your report",
      "chat.analyzing": "I'll analyze it and provide insights based on the conversation data.",
      "chat.testResponse": "Thank you for your message. This is a test response from the AI chatbot. In production, this would be connected to your AI model.",

      // Common
      "common.growth": "growth",
      "common.since": "since",
      "common.lastMonth": "last month",
      "common.loading": "Loading...",
      "common.error": "Error",
      "common.success": "Success",
    }
  },
  ar: {
    translation: {
      // Navigation
      "nav.dashboard": "لوحة التحكم",
      "nav.aiSettings": "إعدادات الذكاء الاصطناعي",
      "nav.sentimentAnalysis": "تحليل المشاعر",
      "nav.reports": "التقارير",
      "nav.signIn": "تسجيل الدخول",

      // Dashboard
      "dashboard.totalConversations": "إجمالي المحادثات",
      "dashboard.avgSessionLength": "متوسط مدة الجلسة",
      "dashboard.sentimentScore": "درجة المشاعر",
      "dashboard.uniqueUsers": "المستخدمون الفريدون",
      "dashboard.conversationMetrics": "مقاييس المحادثة",
      "dashboard.userEngagement": "تفاعل المستخدمين",
      "dashboard.topIssues": "أهم المشكلات",
      "dashboard.peakHours": "ساعات الذروة",

      // AI Settings
      "aiSettings.title": "إعدادات الذكاء الاصطناعي",
      "aiSettings.toneSettings": "إعدادات النبرة",
      "aiSettings.toneDescription": "اختر نبرة استجابات الذكاء الاصطناعي",
      "aiSettings.basicRules": "القواعد الأساسية",
      "aiSettings.rulesDescription": "حدد القواعد الأساسية لسلوك الذكاء الاصطناعي",
      "aiSettings.generalSettings": "الإعدادات العامة",
      "aiSettings.settingsDescription": "تكوين معلمات الذكاء الاصطناعي الإضافية",
      "aiSettings.testChat": "اختبار الدردشة مع الذكاء الاصطناعي",
      "aiSettings.saveTone": "حفظ النبرة",
      "aiSettings.saveRules": "حفظ القواعد",
      "aiSettings.saveSettings": "حفظ الإعدادات",
      "aiSettings.uploadHint": "قم بتحميل التقارير (PDF، DOC، CSV، XLSX) لاختبار قدرات تحليل الذكاء الاصطناعي",
      "aiSettings.typeMessage": "اكتب رسالتك...",
      "aiSettings.send": "إرسال",

      // Tone options
      "tone.professional": "احترافي",
      "tone.friendly": "ودود",
      "tone.casual": "غير رسمي",
      "tone.formal": "رسمي",
      "tone.empathetic": "متعاطف",
      "tone.concise": "موجز",

      // Sentiment Analysis
      "sentiment.title": "تحليل المشاعر",
      "sentiment.overTime": "المشاعر عبر الزمن",
      "sentiment.distribution": "توزيع المشاعر",
      "sentiment.byTopic": "المشاعر حسب الموضوع",
      "sentiment.recentFeedback": "التعليقات الأخيرة",
      "sentiment.positive": "إيجابي",
      "sentiment.neutral": "محايد",
      "sentiment.negative": "سلبي",

      // Suggestions
      "sentiment.suggestions.title": "الاقتراحات",
      "sentiment.suggestions.improveResponse": "تحسين وقت الاستجابة",
      "sentiment.suggestions.improveResponseDesc": "متوسط وقت الاستجابة هو 45 ثانية. فكر في التحسين للحصول على ردود أسرع خلال ساعات الذروة.",
      "sentiment.suggestions.enhancePersonalization": "تعزيز التخصيص",
      "sentiment.suggestions.enhancePersonalizationDesc": "أضف تتبع تفضيلات المستخدم لتقديم استجابات أكثر ملاءمة.",
      "sentiment.suggestions.expandKnowledge": "توسيع قاعدة المعرفة",
      "sentiment.suggestions.expandKnowledgeDesc": "أضف المزيد من الأسئلة الشائعة حول مشكلات الدفع لتقليل التصعيد.",
      "sentiment.suggestions.addEmojis": "إضافة دعم الرموز التعبيرية",
      "sentiment.suggestions.addEmojisDesc": "يستجيب المستخدمون بشكل إيجابي للرموز التعبيرية. فكر في إضافتها للمحادثات غير الرسمية.",

      // Insights
      "sentiment.insights.title": "الرؤى الرئيسية",
      "sentiment.insights.positiveTrend": "المشاعر الإيجابية في تزايد",
      "sentiment.insights.positiveTrendDesc": "زادت التعليقات الإيجابية بنسبة 3.2٪ هذا الأسبوع مقارنة بالأسبوع الماضي.",
      "sentiment.insights.peakHours": "ساعات الرضا القصوى",
      "sentiment.insights.peakHoursDesc": "المستخدمون أكثر رضا خلال ساعات بعد الظهر (2-5 مساءً).",
      "sentiment.insights.commonIssues": "نقاط الألم الشائعة",
      "sentiment.insights.commonIssuesDesc": "الاستفسارات المتعلقة بالدفع تولد أكثر المشاعر السلبية.",
      "sentiment.insights.avgResolution": "تحسين وقت الحل",
      "sentiment.insights.avgResolutionDesc": "انخفض متوسط وقت الحل بمقدار 15 ثانية مقارنة بالأسبوع الماضي.",
      "sentiment.insights.overallHealth": "درجة الصحة العامة",

      // Priority
      "sentiment.priority.high": "عالية",
      "sentiment.priority.medium": "متوسطة",
      "sentiment.priority.low": "منخفضة",

      // Reports
      "reports.title": "التقارير",
      "reports.templates": "قوالب التقارير",
      "reports.scheduled": "التقارير المجدولة",
      "reports.generate": "إنشاء تقرير",
      "reports.viewSchedule": "عرض الجدول",

      // Chat messages
      "chat.greeting": "مرحباً! أنا مساعد الذكاء الاصطناعي. كيف يمكنني مساعدتك اليوم؟",
      "chat.fileReceived": "لقد استلمت تقريرك",
      "chat.analyzing": "سأقوم بتحليله وتقديم رؤى بناءً على بيانات المحادثة.",
      "chat.testResponse": "شكراً لرسالتك. هذه استجابة تجريبية من روبوت الدردشة بالذكاء الاصطناعي. في الإنتاج، سيتم ربط هذا بنموذج الذكاء الاصطناعي الخاص بك.",

      // Common
      "common.growth": "نمو",
      "common.since": "منذ",
      "common.lastMonth": "الشهر الماضي",
      "common.loading": "جار التحميل...",
      "common.error": "خطأ",
      "common.success": "نجاح",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
