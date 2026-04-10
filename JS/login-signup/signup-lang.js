// INIT

let langBtn = document.getElementById("lang");

if (!sessionStorage.getItem("currentLang")) {
  sessionStorage.setItem("currentLang", "ar");
  sessionStorage.setItem("currentDir", "rtl");
  sessionStorage.setItem("currentClass", "ar");
}

// APPLY ALL

function applyLanguage() {
  html();
  welcomePhrase();
  navBar();
  signUpFooterArrows();
  signUpFooterBtnsText();
  signUpFooterInfo();
  signUpFinalFormsText();
  sendFormBtnText();
  wrongSendText();
}

// TOGGLE LANG

function toggleLang() {
  let currentLang = getLang();

  if (currentLang === "ar") {
    sessionStorage.setItem("currentLang", "en");
    sessionStorage.setItem("currentDir", "ltr");
    sessionStorage.setItem("currentClass", "ar");
  } else {
    sessionStorage.setItem("currentLang", "ar");
    sessionStorage.setItem("currentDir", "rtl");
    sessionStorage.setItem("currentClass", "en");
  }
}

//

langBtn.addEventListener("click", function () {
  toggleLang();
  applyLanguage();
});

document.addEventListener("DOMContentLoaded", function () {
  applyLanguage();
});

// FUNCTIONS

// HTML SETTINGS

function html() {
  let htmlPage = document.querySelector("html");

  let lang = getLang();
  let dir = sessionStorage.getItem("currentDir");
  let cls = sessionStorage.getItem("currentClass");

  htmlPage.setAttribute("lang", lang);
  htmlPage.setAttribute("dir", dir);
  htmlPage.setAttribute("class", cls);

  langBtn.textContent = lang === "ar" ? "EN" : "عــ";
}

// Welcome Phrase

let welcomePhraseH1 = document.querySelector("header .container>h1");

function welcomePhrase() {
  if (getLang() === "ar") {
    welcomePhraseH1.textContent = "أهلًا بك";
  } else {
    welcomePhraseH1.textContent = "welcome";
  }
}

// sign up nav text

function navBar() {
  if (getLang() === "ar") {
    step1.textContent = "البيانات الأساسية";
    step2.textContent = "بيانات ولي الأمر";
    step3.textContent = "المستوى الحالي";
    step4.textContent = "كلمة المرور";
    convertText(document.querySelector("nav"));
  } else {
    step1.textContent = "basic information";
    step2.textContent = "guardian details";
    step3.textContent = "current academic level";
    step4.textContent = "password";
    revertNumbers(document.querySelector("nav"));
  }
}

// sign up main text
/// forms functions
function signUpForm1TextLang() {
  if (getLang() === "ar") {
    nameArLable.textContent = signUpFormData.nameAr.ar;
    nameEnLable.textContent = signUpFormData.nameEn.ar;
    birthLable.textContent = signUpFormData.birthday.ar;
    phoneLable.textContent = signUpFormData.phoneNum.ar;
    genderLable.textContent = signUpFormData.gender.ar;
    addressLable.textContent = signUpFormData.address.ar;
    for (let i = 0; i < signUpFormData.gender.op.length; i++) {
      document.querySelector(
        `main .form-1 .content>div:nth-of-type(5) select option:nth-of-type(${i + 1})`,
      ).textContent = signUpFormData.gender.op[i].textAr;
    }
    for (let i = 0; i < signUpFormData.address.op.length; i++) {
      document.querySelector(
        `main .form-1 .content>div:nth-of-type(6) select option:nth-of-type(${i + 1})`,
      ).textContent = signUpFormData.address.op[i].textAr;
    }
  } else {
    nameArLable.textContent = signUpFormData.nameAr.en;
    nameEnLable.textContent = signUpFormData.nameEn.en;
    birthLable.textContent = signUpFormData.birthday.en;
    phoneLable.textContent = signUpFormData.phoneNum.en;
    genderLable.textContent = signUpFormData.gender.en;
    addressLable.textContent = signUpFormData.address.en;
    for (let i = 0; i < signUpFormData.gender.op.length; i++) {
      document.querySelector(
        `main .form-1 .content>div:nth-of-type(5) select option:nth-of-type(${i + 1})`,
      ).textContent = signUpFormData.gender.op[i].textEn;
    }
    for (let i = 0; i < signUpFormData.address.op.length; i++) {
      document.querySelector(
        `main .form-1 .content>div:nth-of-type(6) select option:nth-of-type(${i + 1})`,
      ).textContent = signUpFormData.address.op[i].textEn;
    }
  }
  for (let i = 0; i < signUpFormData.gender.op.length; i++) {
    document.querySelector(
      `main .form-1 .content>div:nth-of-type(5) select option:nth-of-type(${i + 1})`,
    ).value = signUpFormData.gender.op[i].val;
  }
  for (let i = 0; i < signUpFormData.address.op.length; i++) {
    document.querySelector(
      `main .form-1 .content>div:nth-of-type(6) select option:nth-of-type(${i + 1})`,
    ).value = signUpFormData.address.op[i].val;
  }
}

function signUpForm2TextLang() {
  if (getLang() === "ar") {
    guarName.textContent = signUpFormData.guardianName.ar;
    guarPhone.textContent = signUpFormData.guardianPhone.ar;
    guarJob.textContent = signUpFormData.guardianJob.ar;
    guarRelation.textContent = signUpFormData.guardianRelation.ar;
    for (let i = 0; i < signUpFormData.guardianRelation.op.length; i++) {
      document.querySelector(
        `main .form-2 .content>div:nth-of-type(4) select option:nth-of-type(${i + 1})`,
      ).textContent = signUpFormData.guardianRelation.op[i].textAr;
    }
  } else {
    guarName.textContent = signUpFormData.guardianName.en;
    guarPhone.textContent = signUpFormData.guardianPhone.en;
    guarJob.textContent = signUpFormData.guardianJob.en;
    guarRelation.textContent = signUpFormData.guardianRelation.en;
    for (let i = 0; i < signUpFormData.guardianRelation.op.length; i++) {
      document.querySelector(
        `main .form-2 .content>div:nth-of-type(4) select option:nth-of-type(${i + 1})`,
      ).textContent = signUpFormData.guardianRelation.op[i].textEn;
    }
  }
  for (let i = 0; i < signUpFormData.guardianRelation.op.length; i++) {
    document.querySelector(
      `main .form-2 .content>div:nth-of-type(4) select option:nth-of-type(${i + 1})`,
    ).value = signUpFormData.guardianRelation.op[i].val;
  }
}

function signUpForm3TextLang() {
  if (getLang() === "ar") {
    eduLevel.textContent = signUpFormData.educationLevel.ar;
    for (let i = 0; i < signUpFormData.educationLevel.op.length; i++) {
      document.querySelector(
        `main .form-3 .content>div:nth-of-type(1) select option:nth-of-type(${i + 1})`,
      ).textContent = signUpFormData.educationLevel.op[i].textAr;
    }
    // quiz
    form3H1.textContent =
      "اختر مستواك بناء على الاختبار أدناه، الاختيار حسب الجدول";
    form3QuizLinkSpan.textContent = "رابط الاختبار";
    form3TableTd1.textContent = "الدرجة";
    form3TableTd2.textContent = "التقييم";
    //
    engLevel.textContent = signUpFormData.englishLevel.ar;
    for (let i = 0; i < signUpFormData.englishLevel.op.length; i++) {
      document.querySelector(
        `main .form-3 .content>div:nth-of-type(3) select option:nth-of-type(${i + 1})`,
      ).textContent = signUpFormData.englishLevel.op[i].textAr;
    }
  } else {
    eduLevel.textContent = signUpFormData.educationLevel.en;
    for (let i = 0; i < signUpFormData.educationLevel.op.length; i++) {
      document.querySelector(
        `main .form-3 .content>div:nth-of-type(1) select option:nth-of-type(${i + 1})`,
      ).textContent = signUpFormData.educationLevel.op[i].textEn;
    }
    // quiz
    form3H1.textContent =
      "Choose your level based on the test below; selection is according to the table";
    form3QuizLinkSpan.textContent = "quiz link";
    form3TableTd1.textContent = "degree";
    form3TableTd2.textContent = "rate";
    //
    engLevel.textContent = signUpFormData.englishLevel.en;
    for (let i = 0; i < signUpFormData.englishLevel.op.length; i++) {
      document.querySelector(
        `main .form-3 .content>div:nth-of-type(3) select option:nth-of-type(${i + 1})`,
      ).textContent = signUpFormData.englishLevel.op[i].textEn;
    }
  }
  for (let i = 0; i < signUpFormData.educationLevel.op.length; i++) {
    document.querySelector(
      `main .form-3 .content>div:nth-of-type(1) select option:nth-of-type(${i + 1})`,
    ).value = signUpFormData.educationLevel.op[i].val;
  }
  for (let i = 0; i < signUpFormData.englishLevel.op.length; i++) {
    document.querySelector(
      `main .form-3 .content>div:nth-of-type(3) select option:nth-of-type(${i + 1})`,
    ).value = signUpFormData.englishLevel.op[i].val;
  }
}

function signUpForm4TextLang() {
  if (getLang() === "ar") {
    emailLable.textContent = signUpFormData.email.ar;
    userLable.textContent = signUpFormData.username.ar;
    passLable.textContent = signUpFormData.password.ar;
    confirmPassLable.textContent = signUpFormData.confirmPassword.ar;
  } else {
    emailLable.textContent = signUpFormData.email.en;
    userLable.textContent = signUpFormData.username.en;
    passLable.textContent = signUpFormData.password.en;
    confirmPassLable.textContent = signUpFormData.confirmPassword.en;
  }
}

/// final function of forms
function signUpFinalFormsText() {
  signUpForm1TextLang();
  signUpForm2TextLang();
  signUpForm3TextLang();
  signUpForm4TextLang();
}

// sign up footer text

function signUpFooterArrows() {
  if (getLang() === "ar") {
    nextBtnArrow.classList.add("fa-arrow-left");
    nextBtnArrow.classList.remove("fa-arrow-right");
    previousBtnArrow.classList.remove("fa-arrow-left");
    previousBtnArrow.classList.add("fa-arrow-right");
  } else {
    nextBtnArrow.classList.remove("fa-arrow-left");
    nextBtnArrow.classList.add("fa-arrow-right");
    previousBtnArrow.classList.add("fa-arrow-left");
    previousBtnArrow.classList.remove("fa-arrow-right");
  }
}

function signUpFooterBtnsText() {
  if (getLang() === "ar") {
    nextBtnSpan.textContent = "التالي";
    previousBtnSpan.textContent = "السابق";
  } else {
    nextBtnSpan.textContent = "next";
    previousBtnSpan.textContent = "previous";
  }
}

function signUpFooterInfo() {
  if (getLang() === "ar") {
    footerInfoP.textContent =
      "عزيزي الطالب، يرجى التأكد من دقة بياناتك؛ لنتمكن من تخصيص تجربتك وإبقائك على اطلاع. مراجعة بياناتك الآن توفر وقتك لاحقاً";
  } else {
    footerInfoP.textContent =
      "Dear student, please ensure your details are accurate. This helps us customize your experience and keep you updated. Reviewing your info now saves time later";
  }
}

function sendFormBtnText() {
  if (currentStep === 3) {
    if (getLang() === "ar") {
      nextBtnSpan.textContent = "إرسال";
    } else {
      nextBtnSpan.textContent = "send";
    }
  } else {
    if (getLang() === "ar") {
      nextBtnSpan.textContent = "التالي";
    } else {
      nextBtnSpan.textContent = "next";
    }
  }
}

let wrongMsgP = document.querySelector(".wrong-msg p");
let completeFormH1 = document.querySelector(".complete-signing h1");

function wrongSendText() {
  if (getLang() === "ar") {
    completeFormH1.textContent = "اكتمل التسجيل";
    wrongMsgP.textContent = "تأكد من اكمال جميع البيانات بشكل صحيح";
  } else {
    completeFormH1.textContent = "signing completed";
    wrongMsgP.textContent =
      "please make sure to fill in all the details correctly";
  }
}
