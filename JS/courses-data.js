let coursesData = [
  {
    courseCode: "course0",
    courseNameEN: "foundation course",
    courseNameAR: "الكورس التأسيسي",
    courseCover: "MEDIA/courses-covers/main-course.png",
    targetGroupEN: "from 8 - 13 years old kids",
    targetGroupAR: "الأطفال من عمر 8 - 13 سنة",
    coursePointsAR: [
      "التعلم بالممارسة وليس الحفظ",
      "بدون التركيز على القواعد (الجرامر)",
      "تعلم مفردات وجمل من الحياة اليومية",
      "دروس تفاعلية مناسبة للأطفال",
      "التدرج في التعلم من السهل إلى الأصعب",
      "بناء الثقة في التحدث باللغة الإنجليزية",
      "الهدف: فهم اللغة والتحدث بها بثقة",
    ],
    coursePointsEN: [
      "Learning by doing, not by memorizing",
      "Learning without the stress of grammar rules",
      "Learn everyday vocabulary and real-life phrases",
      "Interactive lessons designed for kids",
      "Step-by-step learning: from basic to advanced",
      "Building confidence in English speaking",
      "The Goal: Understanding the language and speaking it with confidence",
    ],
    coursePrice: 100,
    courseStartDate: "2026-01-20T18:00:00Z",
    courseLastUpdateDate: "2026-02-25T18:00:00Z",
  },
  {
    courseCode: "course1",
    courseNameEN: "Equipping for the Future course",
    courseNameAR: "كورس الاستعداد للمستقبل",
    courseCover: "MEDIA/courses-covers/future-course.png",
    targetGroupEN: "from 13 - 17 years old teenagers",
    targetGroupAR: "الشباب من عمر 13 - 17 سنة",
    coursePointsAR: [
      "تحدث بطلاقة دون تعقيد",
      "إتقان لغة الإنترنت والتقنية",
      "فهم المحتوى العالمي بسهولة",
      "اكتساب ثقة التحدث بجرأة",
      "تعلم بالممارسة لا بالحفظ",
      "تدرج ذكي من الصفر",
      "أسلوب تفاعلي ممتع وعصري",
    ],
    coursePointsEN: [
      "Speak fluently without complexity",
      "Master the language of tech and the internet",
      "Understand global content with ease",
      "Gain the confidence to speak boldly",
      "Learn by practice, not by memorization",
      "Smart progression starting from zero",
      "Fun and modern interactive style",
    ],
    coursePrice: 230,
    courseStartDate: "2026-03-13T18:00:00Z",
    courseLastUpdateDate: "2026-03-13T18:00:00Z",
  },
];

let forAllParams = {
  showCourseBtnAR: "عرض الكورس",
  showCourseBtnEN: "show course",
  subscribeBtnAR: "اشترك الآن !",
  subscribeBtnEN: "subscribe now !",
};

coursesData = coursesData.map((course) => {
  return {
    ...course,
    ...forAllParams,
  };
});
