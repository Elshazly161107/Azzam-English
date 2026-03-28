// INIT

let langBtn = document.getElementById("lang");

if (!sessionStorage.getItem("currentLang")) {
  sessionStorage.setItem("currentLang", "ar");
  sessionStorage.setItem("currentDir", "rtl");
  sessionStorage.setItem("currentClass", "ar");
}

// HELPERS

function getLang() {
  return sessionStorage.getItem("currentLang");
}

// APPLY ALL

function applyLanguage() {
  html();
  header();
  mainSection();
  homeCourses();
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

// EVENTS

langBtn.addEventListener("click", function () {
  toggleLang();
  applyLanguage();
});

document.addEventListener("DOMContentLoaded", function () {
  applyLanguage();
});

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

// HEADER

function header() {
  let setNewUserBtn = document.getElementById("create-new-user");
  let alreadyUserBtn = document.getElementById("already-user");

  if (getLang() === "ar") {
    setNewUserBtn.textContent = "انضم إلينا !";
    alreadyUserBtn.textContent = "تسجيل الدخول";
  } else {
    setNewUserBtn.textContent = "join with us !";
    alreadyUserBtn.textContent = "log in";
  }
}

// MAIN SECTION

function mainSection() {
  let mainH1 = document.querySelector(".main-section h1");
  let mainH2 = document.querySelector(".main-section h2");

  if (getLang() === "ar") {
    mainH1.innerHTML = "مع <span>عزام</span>";
    mainH2.innerHTML = "تأسيس من <span>a</span> إلى <span>z</span>";
  } else {
    mainH1.innerHTML = "with <span>azzam</span>";
    mainH2.innerHTML = "foundation from <span>a</span> to <span>z</span>";
  }
}

// COURSES

function homeCourses() {
  nowCoursesHomeContainer.innerHTML = "";

  if (getLang() === "ar") {
    nowCoursesHomeH1.textContent = "الكورسات الحالية";

    for (let i = 0; i < coursesData.length; i++) {
      let course = document.createElement("div");
      course.classList.add("course");

      let points = coursesData[i].coursePointsAR
        .map((p) => `<p>${p}</p>`)
        .join("");

      let startDate = new Date(
        coursesData[i].courseStartDate,
      ).toLocaleDateString("ar");

      let lastUpdate = new Date(
        coursesData[i].courseLastUpdateDate,
      ).toLocaleDateString("ar");

      course.innerHTML = `
        <div class="img">
          <img src="${coursesData[i].courseCover}">
        </div>
        <div class="details">
          <div class="header">
            <h1>${coursesData[i].courseNameAR}</h1>
            <h2 class="arabic-num">الفئة المستهدفة :
              <span>${coursesData[i].targetGroupAR}</span>
            </h2>
          </div>
          <div class="center">
            <div class="text">${points}</div>
            <div class="btns">
              <button class="btn-type-one">${coursesData[i].showCourseBtnAR}</button>
              <button class="btn-type-two buy-course-home-btn">${coursesData[i].subscribeBtnAR}</button>
            </div>
          </div>
          <div class="footer">
            <div class="price">
              <h1>
                <span class="arabic-num">${coursesData[i].coursePrice}</span>
                <img
                src="MEDIA/Saudi-Riyal-Symbol/Saudi-Riyal-Symbol-white.svg"
                alt>
                </h1>
            </div>
            <div class="dates">
              <p class="arabic-num">${startDate}</p>
              <p class="arabic-num">${lastUpdate}</p>
            </div>
          </div>
        </div>
      `;

      nowCoursesHomeContainer.appendChild(course);
    }

    convertText(document.body);
  } else {
    nowCoursesHomeH1.textContent = "Current Courses";

    for (let i = 0; i < coursesData.length; i++) {
      let course = document.createElement("div");
      course.classList.add("course");

      let points = coursesData[i].coursePointsEN
        .map((p) => `<p>${p}</p>`)
        .join("");

      let startDate = new Date(
        coursesData[i].courseStartDate,
      ).toLocaleDateString("en");

      let lastUpdate = new Date(
        coursesData[i].courseLastUpdateDate,
      ).toLocaleDateString("en");

      course.innerHTML = `
        <div class="img">
          <img src="${coursesData[i].courseCover}">
        </div>
        <div class="details">
          <div class="header">
            <h1>${coursesData[i].courseNameEN}</h1>
            <h2>Target Audience :
              <span>${coursesData[i].targetGroupEN}</span>
            </h2>
          </div>
          <div class="center">
            <div class="text">${points}</div>
            <div class="btns">
              <button class="btn-type-one">${coursesData[i].showCourseBtnEN}</button>
              <button class="btn-type-two buy-course-home-btn">${coursesData[i].subscribeBtnEN}</button>
            </div>
          </div>
          <div class="footer">
            <div class="price">
              <h1>
                <span>${coursesData[i].coursePrice}</span> sar
              </h1>
            </div>
            <div class="dates">
              <p>${startDate}</p>
              <p>${lastUpdate}</p>
            </div>
          </div>
        </div>
      `;

      nowCoursesHomeContainer.appendChild(course);
    }
  }
}
