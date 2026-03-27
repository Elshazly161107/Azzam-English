let langBtn = document.getElementById("lang");

langBtn.addEventListener("click", function () {
  html();
  header();
  mainSection();
  homeCourses();
});

// functions

function html() {
  let htmlPage = document.querySelector("html");
  if (langBtn.textContent === "EN") {
    langBtn.textContent = "AR";
    htmlPage.setAttribute("class", "ar");
    htmlPage.setAttribute("lang", "en");
    htmlPage.setAttribute("dir", "ltr");
  } else {
    langBtn.textContent = "EN";
    htmlPage.setAttribute("class", "en");
    htmlPage.setAttribute("lang", "ar");
    htmlPage.setAttribute("dir", "rtl");
  }
}

function header() {
  let setNewUserBtn = document.getElementById("create-new-user");
  let alreadyUserBtn = document.getElementById("already-user");
  if (langBtn.textContent === "EN") {
    setNewUserBtn.textContent = "انضم إلينا !";
    alreadyUserBtn.textContent = "تسجيل الدخول";
  } else {
    setNewUserBtn.textContent = "join with us !";
    alreadyUserBtn.textContent = "log in";
  }
}

function mainSection() {
  let mainH1 = document.querySelector(".main-section h1");
  let mainH2 = document.querySelector(".main-section h2");
  // --- h1
  if (langBtn.textContent === "EN") {
    mainH1.innerHTML = "مع <span>عزام</span>";
  } else {
    mainH1.innerHTML = "with <span>azzam</span>";
  }
  // --- h2
  if (langBtn.textContent === "EN") {
    mainH2.innerHTML = "تأسيس من <span>a</span> إلى <span>z</span>";
  } else {
    mainH2.innerHTML = "foundation from <span>a</span> to <span>z</span>";
  }
}

function homeCourses() {
  if (langBtn.textContent === "EN") {
    nowCoursesHomeH1.textContent = "الكورسات الحالية";
    nowCoursesHomeContainer.innerHTML = "";
    for (let i = 0; i < coursesData.length; i++) {
      let course = document.createElement("div");
      course.classList.add("course");
      //
      let pointsDiv = "";
      for (let o = 0; o < coursesData[i].coursePointsAR.length; o++) {
        let p = `<p>${coursesData[i].coursePointsAR[o]}</p>`;
        pointsDiv += p;
      }
      //
      let startData = new Date(
        coursesData[i].courseStartDate,
      ).toLocaleDateString("ar-EG");
      let lastUpdate = new Date(
        coursesData[i].courseLastUpdateDate,
      ).toLocaleDateString("ar-EG");
      //
      course.innerHTML = `
    <div class="img">
        <img
            src="${coursesData[i].courseCover}"
            alt>
    </div>
    <div class="details">
        <div class="header">
            <h1>${coursesData[i].courseNameAR}</h1>
            <h2>الفئة المستهدفة : <span>${coursesData[i].targetGroupAR}</span></h2>
        </div>
        <div class="center">
          <div class="text">
           ${pointsDiv}
          </div>
            <div class="btns">
                <button class="btn-type-one">${coursesData[i].showCourseBtnAR}</button>
                <button
                    class="buy-course-home-btn btn-type-two">${coursesData[i].subscribeBtnAR}</button>
            </div>
        </div>
        <div class="footer">
            <div class="price">
                <h1>
                    <span>${coursesData[i].coursePrice}</span>
                    <img
                        src="MEDIA/Saudi-Riyal-Symbol/Saudi-Riyal-Symbol-white.svg"
                        alt>
                </h1>
            </div>
            <div class="dates">
                <p class="create-day">${startData}</p>
                <p class="last-update">${lastUpdate}</p>
            </div>
        </div>
    </div>`;
      nowCoursesHomeContainer.appendChild(course);
    }
  } else {
    nowCoursesHomeH1.textContent = "Current Courses";
    nowCoursesHomeContainer.innerHTML = "";
    for (let i = 0; i < coursesData.length; i++) {
      let course = document.createElement("div");
      course.classList.add("course");
      //
      let pointsDiv = "";
      for (let o = 0; o < coursesData[i].coursePointsEN.length; o++) {
        let p = `<p>${coursesData[i].coursePointsEN[o]}</p>`;
        pointsDiv += p;
      }
      //
      let startData = new Date(
        coursesData[i].courseStartDate,
      ).toLocaleDateString("en");
      let lastUpdate = new Date(
        coursesData[i].courseLastUpdateDate,
      ).toLocaleDateString("en");
      //
      course.innerHTML = `
    <div class="img">
        <img
            src="${coursesData[i].courseCover}"
            alt>
    </div>
    <div class="details">
        <div class="header">
            <h1>${coursesData[i].courseNameEN}</h1>
            <h2>Target Audience : <span>${coursesData[i].targetGroupEN}</span></h2>
        </div>
        <div class="center">
          <div class="text">
           ${pointsDiv}
          </div>
            <div class="btns">
                <button class="btn-type-one">${coursesData[i].showCourseBtnEN}</button>
                <button
                    class="buy-course-home-btn btn-type-two">${coursesData[i].subscribeBtnEN}</button>
            </div>
        </div>
        <div class="footer">
            <div class="price">
                <h1>
                    <span>${coursesData[i].coursePrice}</span>
                    sar
                </h1>
            </div>
            <div class="dates">
                <p class="create-day">${startData}</p>
                <p class="last-update">${lastUpdate}</p>
            </div>
        </div>
    </div>`;
      nowCoursesHomeContainer.appendChild(course);
    }
  }
}
