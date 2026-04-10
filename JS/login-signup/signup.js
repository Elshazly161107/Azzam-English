// HELPERS

function getLang() {
  return sessionStorage.getItem("currentLang");
}

let checkingInputsValues = false;
let passwordConditionDone = false;
let allInputs = document.querySelectorAll("main :is(input, select)");

// index main menu

let menuBtn = document.getElementById("menu-bars");
let menu = document.querySelector("header .btns");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");
  menuBtn.classList.toggle("fa-bars");
  menuBtn.classList.toggle("fa-xmark");
});

// sign up nav text

let step1 = document.querySelector("nav .steps>div:nth-of-type(1) p");
let step2 = document.querySelector("nav .steps>div:nth-of-type(2) p");
let step3 = document.querySelector("nav .steps>div:nth-of-type(3) p");
let step4 = document.querySelector("nav .steps>div:nth-of-type(4) p");

step1.textContent = "البيانات الأساسية";
step2.textContent = "بيانات ولي الأمر";
step3.textContent = "المستوى الحالي";
step4.textContent = "كلمة المرور";

// sign up footer text

let nextBtnArrow = document.querySelector("footer .btns .next i");
let previousBtnArrow = document.querySelector("footer .btns .previous i");

nextBtnArrow.classList.add("fa-solid");
previousBtnArrow.classList.add("fa-solid");

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

let nextBtnSpan = document.querySelector("footer .btns .next span");
let previousBtnSpan = document.querySelector("footer .btns .previous span");

if (getLang() === "ar") {
  nextBtnSpan.textContent = "التالي";
  previousBtnSpan.textContent = "السابق";
} else {
  nextBtnSpan.textContent = "next";
  previousBtnSpan.textContent = "previous";
}

let footerInfoP = document.querySelector("footer .info p");

if (getLang() === "ar") {
  footerInfoP.textContent =
    "عزيزي الطالب، يرجى التأكد من دقة بياناتك؛ لنتمكن من تخصيص تجربتك وإبقائك على اطلاع. مراجعة بياناتك الآن توفر وقتك لاحقاً";
} else {
  footerInfoP.textContent =
    "Dear student, please ensure your details are accurate. This helps us customize your experience and keep you updated. Reviewing your info now saves time later";
}

/////////////////////// sign up javascript
// sign up form data
let signUpFormData = {
  nameAr: {
    ar: "الاسم كاملًا (بالعربية)",
    en: "full name (arabic)",
  },
  nameEn: {
    ar: "الاسم كاملًا (بالانجليزية)",
    en: "full name (english)",
  },
  birthday: {
    ar: "يوم الميلاد",
    en: "birthday date",
  },
  phoneNum: {
    ar: "رقم الهاتف",
    en: "phone number",
  },
  gender: {
    ar: "الجنس",
    en: "gender",
    op: [
      {
        textEn: "--select--",
        textAr: "--اختر--",
        val: "",
      },
      {
        textEn: "male",
        textAr: "ذكر",
        val: "male",
      },
      {
        textEn: "female",
        textAr: "أنثى",
        val: "female",
      },
    ],
  },
  address: {
    ar: "العنوان",
    en: "address",
    op: [
      {
        textEn: "--select--",
        textAr: "--اختر--",
        val: "",
      },
      {
        textEn: "inside saudi arabia",
        textAr: "داخل السعودية",
        val: "inksa",
      },
      {
        textEn: "outside saudi arabia",
        textAr: "خارج السعودية",
        val: "outksa",
      },
    ],
  },
  guardianName: {
    ar: "اسم ولي الأمر",
    en: "guardian name",
  },
  guardianPhone: {
    ar: "رقم هاتف ولي الأمر",
    en: "guardian phone",
  },
  guardianJob: {
    ar: "وظيفة ولي الأمر",
    en: "guardian job",
  },
  guardianRelation: {
    ar: "صلة قرابة ولي الأمر",
    en: "guardian relationship",
    op: [
      {
        textEn: "--select--",
        textAr: "--اختر--",
        val: "",
      },
      {
        textEn: "father",
        textAr: "أب",
        val: "father",
      },
      {
        textEn: "mother",
        textAr: "أم",
        val: "mother",
      },
      {
        textEn: "brother",
        textAr: "أخ",
        val: "brother",
      },
      {
        textEn: "sister",
        textAr: "أخت",
        val: "sister",
      },
      {
        textEn: "uncle (dad)",
        textAr: "عم",
        val: "uncledad",
      },
      {
        textEn: "uncle (mom)",
        textAr: "خال",
        val: "unclemom",
      },
      {
        textEn: "other",
        textAr: "أخرى",
        val: "other",
      },
    ],
  },
  educationLevel: {
    ar: "المرحلة الدراسية",
    en: "education level",
    op: [
      {
        textEn: "--select--",
        textAr: "--اختر--",
        val: "",
      },
      {
        textEn: "primary school",
        textAr: "المرحلة الإبتدائية",
        val: "prischool",
      },
      {
        textEn: "middle school",
        textAr: "المرحلة المتوسطة (الإعدادية)",
        val: "midschool",
      },
      {
        textEn: "high school",
        textAr: "المرحلة الثانوية",
        val: "higschool",
      },
      {
        textEn: "university",
        textAr: "المرحلة الجامعية",
        val: "uni",
      },
      {
        textEn: "other",
        textAr: "أخرى",
        val: "other",
      },
    ],
  },
  englishLevel: {
    ar: "المستوى الحالي في اللغة",
    en: "english level",
    op: [
      {
        textEn: "--select--",
        textAr: "--اختر--",
        val: "",
      },
      {
        textEn: "a",
        textAr: "a",
        val: "a",
      },
      {
        textEn: "b",
        textAr: "b",
        val: "b",
      },
      {
        textEn: "c",
        textAr: "c",
        val: "c",
      },
      {
        textEn: "d",
        textAr: "d",
        val: "d",
      },
      {
        textEn: "e",
        textAr: "e",
        val: "e",
      },
      {
        textEn: "f",
        textAr: "f",
        val: "f",
      },
    ],
  },
  email: {
    ar: "البريد الإلكتروني",
    en: "email",
  },
  username: {
    ar: "اسم المستخدم",
    en: "username",
  },
  password: {
    ar: "كلمة المرور",
    en: "password",
  },
  confirmPassword: {
    ar: "تأكيد كلمة المرور",
    en: "confirm password",
  },
};

// form-1

let nameArLable = document.querySelector(
  "main .form-1 .content>div:nth-of-type(1) label",
);

let nameEnLable = document.querySelector(
  "main .form-1 .content>div:nth-of-type(2) label",
);

let birthLable = document.querySelector(
  "main .form-1 .content>div:nth-of-type(3) label",
);

let phoneLable = document.querySelector(
  "main .form-1 .content>div:nth-of-type(4) label",
);

let genderLable = document.querySelector(
  "main .form-1 .content>div:nth-of-type(5) label",
);

let addressLable = document.querySelector(
  "main .form-1 .content>div:nth-of-type(6) label",
);

function signUpForm1Text() {
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

// form-2

let guarName = document.querySelector(
  "main .form-2 .content>div:nth-of-type(1) label",
);

let guarPhone = document.querySelector(
  "main .form-2 .content>div:nth-of-type(2) label",
);

let guarJob = document.querySelector(
  "main .form-2 .content>div:nth-of-type(3) label",
);

let guarRelation = document.querySelector(
  "main .form-2 .content>div:nth-of-type(4) label",
);

function signUpForm2Text() {
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

// form-3

let eduLevel = document.querySelector(
  "main .form-3 .content>div:nth-of-type(1) label",
);

let form3H1 = document.querySelector("main .form-3 .content>.quiz h1");

let form3QuizLink = document.querySelector("main .form-3 .content>.quiz a");

let form3QuizLinkSpan = document.querySelector(
  "main .form-3 .content>.quiz a span",
);

let form3TableTd1 = document.querySelector(
  "main .form-3 .content>.quiz table thead tr td:nth-of-type(1)",
);

let form3TableTd2 = document.querySelector(
  "main .form-3 .content>.quiz table thead tr td:nth-of-type(2)",
);

let engLevel = document.querySelector(
  "main .form-3 .content>div:nth-of-type(3) label",
);

function signUpForm3Text() {
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

// form-4

let emailLable = document.querySelector(
  "main .form-4 .content>div:nth-of-type(1) label",
);

let userLable = document.querySelector(
  "main .form-4 .content>div:nth-of-type(2) label",
);

let passLable = document.querySelector(
  "main .form-4 .content>div:nth-of-type(3) label",
);

let confirmPassLable = document.querySelector(
  "main .form-4 .content>div:nth-of-type(4) label",
);

function signUpForm4Text() {
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

// general
let currentStep = 0;
let completingLine = document.querySelector("nav .nav");
let stepsOfLine = ["comp-step-1", "comp-step-2", "comp-step-3", "comp-step-4"];
let steps = document.querySelectorAll("nav .steps>div span");
let stepsP = document.querySelectorAll("nav .steps>div p");
let stepsForms = document.querySelectorAll("main .container>div");
let formSaved = document.querySelector(".complete-signing");
let formSavedIcon = document.querySelector(".complete-signing .check");
let wrongMsg = document.querySelector(".wrong-msg");

// password
let passIn = document.querySelector("[id='password']");
let confPassIn = document.querySelector("[id='confirm-password']");

stepsGeneralSpan();
stepsGeneralP();
formsGeneral();

// btns
let nextBtn = document.querySelector("footer .btns .next");
let previousBtn = document.querySelector("footer .btns .previous");

btnsCurser(previousBtn);
sendFormBtn();

nextBtn.addEventListener("click", () => {
  if (currentStep < 3) {
    currentStep++;
    completingLine.setAttribute("class", "nav");
    completingLine.classList.add(stepsOfLine[currentStep - 1]);
  } else if ((currentStep = 3)) {
    let values = 0;
    allInputs.forEach((inp) => {
      if (inp.value !== "") {
        inp.classList.remove("warrning");
        values++;
      } else {
        inp.classList.add("warrning");
      }
    });
    if (values === allInputs.length) {
      let passArray = passIn.value.split("");
      let chars = ["@", "#", "$", "%", "&"];
      let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      let capLetters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];
      let smallLetters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      //
      let charsNum = 0;
      let numsNum = 0;
      let capLettersNum = 0;
      let smallLettersNum = 0;
      for (let i = 0; i < passArray.length; i++) {
        for (let d = 0; d < chars.length; d++) {
          if (passArray[i] === chars[d]) {
            charsNum++;
            console.log(chars[d]);
            console.log(charsNum);
          }
        }
        for (let d = 0; d < nums.length; d++) {
          if (passArray[i] === nums[d].toString()) {
            numsNum++;
            console.log(nums[d]);
            console.log(numsNum);
          }
        }
        for (let d = 0; d < capLetters.length; d++) {
          if (passArray[i] === capLetters[d]) {
            capLettersNum++;
            console.log(capLetters[d]);
            console.log(capLettersNum);
          }
        }
        for (let d = 0; d < smallLetters.length; d++) {
          if (passArray[i] === smallLetters[d]) {
            smallLettersNum++;
            console.log(smallLetters[d]);
            console.log(smallLettersNum);
          }
        }
      }
      if (
        charsNum > 0 &&
        numsNum > 0 &&
        capLettersNum > 0 &&
        smallLettersNum > 0
      ) {
        passwordConditionDone = true;
        console.log("true");
      } else {
        passwordConditionDone = false;
        console.log("false");
      }
      if (passwordConditionDone === true) {
        checkingInputsValues = true;
      } else {
        checkingInputsValues = false;
      }
    } else {
      checkingInputsValues = false;
    }
    if (checkingInputsValues === true) {
      // allInputs.forEach((inp) => {
      //   inp.value = "";
      // });
      completingLine.classList.add(stepsOfLine[currentStep]);
      formSaved.classList.add("open");
      setTimeout(() => {
        formSavedIcon.classList.add("open");
      }, 2000);
      setTimeout(() => {
        formSaved.classList.remove("open");
        formSavedIcon.classList.remove("open");
      }, 4000);
    } else {
      wrongMsg.classList.add("open");
      setTimeout(() => {
        wrongMsg.classList.remove("open");
      }, 3500);
    }
  } else return;
  stepsGeneralSpan();
  stepsGeneralP();
  formsGeneral();
  btnsCurser(previousBtn);
  sendFormBtn();
});

previousBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    completingLine.setAttribute("class", "nav");
    completingLine.classList.add(stepsOfLine[currentStep - 1]);
  } else return;
  stepsGeneralSpan();
  stepsGeneralP();
  formsGeneral();
  btnsCurser(previousBtn);
  sendFormBtn();
});

// functions
function stepsGeneralSpan() {
  steps.forEach((step) => {
    step.classList.remove("current");
  });
  for (let i = 0; i < steps.length; i++) {
    if (i < currentStep) {
      steps[i].classList.add("complete");
    } else {
      steps[i].classList.remove("complete");
    }
  }
  steps[currentStep].classList.add("current");
}

function formsGeneral() {
  stepsForms.forEach((form) => {
    form.classList.remove("active");
  });
  stepsForms[currentStep].classList.add("active");
}

function stepsGeneralP() {
  stepsP.forEach((p) => {
    p.classList.remove("current");
  });
  stepsP[currentStep].classList.add("current");
}

function btnsCurser(btn) {
  if (currentStep === 0) {
    btn.classList.add("unclickable");
  } else {
    btn.classList.remove("unclickable");
  }
}

function sendFormBtn() {
  if (currentStep === 3) {
    if (getLang() === "ar") {
      nextBtnSpan.textContent = "إرسال";
    } else {
      nextBtnSpan.textContent = "send";
    }
    nextBtn.classList.add("send-btn");
  } else {
    if (getLang() === "ar") {
      nextBtnSpan.textContent = "التالي";
    } else {
      nextBtnSpan.textContent = "next";
    }
    nextBtn.classList.remove("send-btn");
  }
}

/////////////////////// end sign up javascript

// arabic nums

function convertText(node) {
  if (node.nodeType === 3) {
    node.nodeValue = node.nodeValue.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  } else {
    node.childNodes.forEach(convertText);
  }
}

function revertNumbers(element) {
  const hindiNums = [
    /٠/g,
    /١/g,
    /٢/g,
    /٣/g,
    /٤/g,
    /٥/g,
    /٦/g,
    /٧/g,
    /٨/g,
    /٩/g,
  ];
  const englishNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (element.hasChildNodes()) {
    element.childNodes.forEach((node) => {
      if (node.nodeType === 3) {
        // نص فقط
        let text = node.textContent;
        for (let i = 0; i < 10; i++) {
          text = text.replace(hindiNums[i], englishNums[i]);
        }
        node.textContent = text;
      } else {
        revertNumbers(node); // كرر للداخل
      }
    });
  }
}

if (getLang() === "ar") {
  convertText(document.body);
}
