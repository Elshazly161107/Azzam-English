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
  signUpMainText();
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
    welcomePhraseH1.textContent = "يشرفنا انضامك إلينا !";
  } else {
    welcomePhraseH1.textContent = "We’re honored by your joining !";
  }
}

// sign up nav text

function navBar() {
  if (getLang() === "ar") {
    step1.textContent = "البيانات الأساسية";
    step2.textContent = "بيانات ولي الأمر";
    step3.textContent = "المستوى الحالي";
    step4.textContent = "كلمة المرور";
    convertText(document.body);
  } else {
    step1.textContent = "basic information";
    step2.textContent = "guardian details";
    step3.textContent = "current academic level";
    step4.textContent = "password";
    revertNumbers(document.body);
  }
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

function signUpMainText() {
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
  stepsForms = document.querySelectorAll("main .container>div");
}
