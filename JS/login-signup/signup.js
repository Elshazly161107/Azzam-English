// HELPERS

function getLang() {
  return sessionStorage.getItem("currentLang");
}

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

// sign up main text

let main = document.querySelector("main");

if (getLang() === "ar") {
  main.innerHTML = `
  <div class="container">
      <div class="form-1 active">
          <div class="content">
              <div>
                  <label for="full-name-arabic">الاسم كاملًا (بالعربية)</label>
                  <input type="text" id="full-name-arabic">
              </div>
              <div>
                  <label for="full-name-english">الاسم كاملًا (بالانجليزية)</label>
                  <input type="text" id="full-name-english">
              </div>
              <div>
                  <label for="birthday">تاريخ الميلاد</label>
                  <input type="date" id="birthday">
              </div>
              <div>
                  <label for="phone">رقم الهاتف</label>
                  <input type="tel" id="phone">
              </div>
              <div>
                  <label for="gender">الجنس</label>
                  <select name="gender" id="gender">
                      <option value>--اختر--</option>
                      <option value="male">ذكر</option>
                      <option value="female">أنثى</option>
                  </select>
              </div>
              <div>
                  <label for="home-place">مكان الإقامة</label>
                  <select name="home-place" id="home-place">
                      <option value>--اختر--</option>
                      <option value="in-saudi">داخل السعودية</option>
                      <option value="out-saudi">خارج السعودية</option>
                  </select>
              </div>
          </div>
      </div>
      <div class="form-2">
          <div class="content">
              <div>
                  <label for="guardian-name">اسم ولي الأمر</label>
                  <input type="text" id="guardian-name">
              </div>
              <div>
                  <label for="guardian-phone">رقم هاتف ولي الأمر</label>
                  <input type="tel" id="guardian-phone">
              </div>
              <div>
                  <label for="guardian-job">وظيفة ولي الأمر</label>
                  <input type="text" id="guardian-job">
              </div>
              <div>
                  <label for="guardian-relationship">صلة قرابة ولي الأمر</label>
                  <select name="guardian-relationship"
                      id="guardian-relationship">
                      <option value>--اختر--</option>
                      <option value="father">أب</option>
                      <option value="mother">أم</option>
                      <option value="brother">أخ</option>
                      <option value="sister">أخت</option>
                      <option value="other">أخرى</option>
                  </select>
              </div>
          </div>
      </div>
      <div class="form-3">
          <div class="content">
              <div>
                  <label for="education-level">المرحلة الدراسية</label>
                  <select name="education-level" id="education-level">
                      <option value>--اختر--</option>
                      <option
                          value="primary-school">المرحلة الابتدائية</option>
                      <option
                          value="middle-school">المرحلة المتوسطة</option>
                      <option value="high-school">المرحلة الثانوية</option>
                      <option value="university">الجامعة</option>
                      <option value="other">أخرى</option>
                  </select>
              </div>

              <div class="quiz">
                  <h1>اختر مستواك بناء على الاختبار أدناه، الاختيار حسب الجدول</h1>
                  <a href="#">
                      <i class="fa-solid fa-link"></i>
                      <span>رابط الاختبار</span>
                  </a>
                  <table>
                      <thead>
                          <tr>
                              <td>الدرجة</td>
                              <td>التقييم</td>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>25 - 30</td>
                              <td>a</td>
                          </tr>
                          <tr>
                              <td>20 - 25</td>
                              <td>b</td>
                          </tr>
                          <tr>
                              <td>15 - 20</td>
                              <td>c</td>
                          </tr>
                          <tr>
                              <td>10 - 15</td>
                              <td>d</td>
                          </tr>
                          <tr>
                              <td>5 - 10</td>
                              <td>e</td>
                          </tr>
                          <tr>
                              <td>0 - 5</td>
                              <td>f</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div>
                  <label for="english-level">مستوى اللغة</label>
                  <select name="english-level" id="english-level">
                      <option value>--اختر--</option>
                      <option value="a">a</option>
                      <option value="b">b</option>
                      <option value="c">c</option>
                      <option value="d">d</option>
                      <option value="e">e</option>
                      <option value="f">f</option>
                  </select>
              </div>
          </div>
      </div>
      <div class="form-4">
          <div class="content">
              <div>
                  <label for="email">البريد الالكتروني</label>
                  <input type="email" id="email">
              </div>
              <div class="user-name-div">
                  <i
                      class="fa-solid fa-circle-check available"></i>
                  <i class="fa-solid fa-circle-xmark unavailable"></i>
                  <label for="user-name">اسم المستخدم</label>
                  <input type="text" id="user-name">
              </div>
              <div>
                  <label for="password">كلمة المرور</label>
                  <input type="password" id="password">
              </div>
              <div>
                  <label for="confirm-password">تأكيد كلمة المرور</label>
                  <input type="password" id="confirm-password">
              </div>
          </div>
      </div>
  </div>`;
} else {
  main.innerHTML = `
  <div class="container">
      <div class="form-1 active">
          <div class="content">
              <div>
                  <label for="full-name-arabic">full name
                      (arabic)</label>
                  <input type="text" id="full-name-arabic">
              </div>
              <div>
                  <label for="full-name-english">full name
                      (english)</label>
                  <input type="text" id="full-name-english">
              </div>
              <div>
                  <label for="birthday">birthday date</label>
                  <input type="date" id="birthday">
              </div>
              <div>
                  <label for="phone">phone number</label>
                  <input type="tel" id="phone">
              </div>
              <div>
                  <label for="gender">gender</label>
                  <select name="gender" id="gender">
                      <option value>--select--</option>
                      <option value="male">male</option>
                      <option value="female">female</option>
                  </select>
              </div>
              <div>
                  <label for="home-place">home place</label>
                  <select name="home-place" id="home-place">
                      <option value>--select--</option>
                      <option value="in-saudi">in saudi</option>
                      <option value="out-saudi">out saudi</option>
                  </select>
              </div>
          </div>
      </div>
      <div class="form-2">
          <div class="content">
              <div>
                  <label for="guardian-name">guardian name</label>
                  <input type="text" id="guardian-name">
              </div>
              <div>
                  <label for="guardian-phone">guardian phone</label>
                  <input type="tel" id="guardian-phone">
              </div>
              <div>
                  <label for="guardian-job">guardian job</label>
                  <input type="text" id="guardian-job">
              </div>
              <div>
                  <label for="guardian-relationship">guardian
                      relationship</label>
                  <select name="guardian-relationship"
                      id="guardian-relationship">
                      <option value>--select--</option>
                      <option value="father">father</option>
                      <option value="mother">mother</option>
                      <option value="brother">brother</option>
                      <option value="sister">sister</option>
                      <option value="other">other</option>
                  </select>
              </div>
          </div>
      </div>
      <div class="form-3">
          <div class="content">
              <div>
                  <label for="education-level">education level</label>
                  <select name="education-level" id="education-level">
                      <option value>--select--</option>
                      <option
                          value="primary-school">primary school</option>
                      <option
                          value="middle-school">middle school</option>
                      <option value="high-school">high school</option>
                      <option value="university">university</option>
                      <option value="other">other</option>
                  </select>
              </div>

              <div class="quiz">
                  <h1>Select your level by completing the test in the
                      link below, Placement is based on the following
                      evaluation</h1>
                  <a href="#">
                      <i class="fa-solid fa-link"></i>
                      <span>quiz link</span>
                  </a>
                  <table>
                      <thead>
                          <tr>
                              <td>mark</td>
                              <td>grade</td>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>25 - 30</td>
                              <td>a</td>
                          </tr>
                          <tr>
                              <td>20 - 25</td>
                              <td>b</td>
                          </tr>
                          <tr>
                              <td>15 - 20</td>
                              <td>c</td>
                          </tr>
                          <tr>
                              <td>10 - 15</td>
                              <td>d</td>
                          </tr>
                          <tr>
                              <td>5 - 10</td>
                              <td>e</td>
                          </tr>
                          <tr>
                              <td>0 - 5</td>
                              <td>f</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div>
                  <label for="english-level">english level</label>
                  <select name="english-level" id="english-level">
                      <option value>--select--</option>
                      <option value="a">a</option>
                      <option value="b">b</option>
                      <option value="c">c</option>
                      <option value="d">d</option>
                      <option value="e">e</option>
                      <option value="f">f</option>
                  </select>
              </div>
          </div>
      </div>
      <div class="form-4">
          <div class="content">
              <div>
                  <label for="email">email</label>
                  <input type="email" id="email">
              </div>
              <div class="user-name-div">
                  <i
                      class="fa-solid fa-circle-check available"></i>
                  <i class="fa-solid fa-circle-xmark unavailable"></i>
                  <label for="user-name">username</label>
                  <input type="text" id="user-name">
              </div>
              <div>
                  <label for="password">password</label>
                  <input type="password" id="password">
              </div>
              <div>
                  <label for="confirm-password">confirm
                      password</label>
                  <input type="password" id="confirm-password">
              </div>
          </div>
      </div>
  </div>`;
}

/////////////////////// sign up javascript

// general
let currentStep = 0;
let completingLine = document.querySelector("nav .nav");
let stepsOfLine = ["comp-step-1", "comp-step-2", "comp-step-3", "comp-step-4"];
let steps = document.querySelectorAll("nav .steps>div span");
let stepsP = document.querySelectorAll("nav .steps>div p");
let stepsForms = document.querySelectorAll("main .container>div");

stepsGeneralSpan();
stepsGeneralP();
formsGeneral();

// btns
let nextBtn = document.querySelector("footer .btns .next");
let previousBtn = document.querySelector("footer .btns .previous");

nextBtn.addEventListener("click", () => {
  if (currentStep < 3) {
    currentStep++;
    completingLine.setAttribute("class", "nav");
    completingLine.classList.add(stepsOfLine[currentStep - 1]);
  } else return;
  stepsGeneralSpan();
  stepsGeneralP();
  formsGeneral();
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
