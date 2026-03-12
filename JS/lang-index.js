let langBtn = document.getElementById("lang");
let htmlPage = document.querySelector("html");
//
let setNewUserBtn = document.getElementById("create-new-user");
let alreadyUserBtn = document.getElementById("already-user");
//
let mainH1 = document.querySelector(".main-section h1");
let mainH2 = document.querySelector(".main-section h2");

langBtn.addEventListener("click", function () {
  // html page & header
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
  // header
  if (langBtn.textContent === "EN") {
    setNewUserBtn.textContent = "انضم إلينا !";
    alreadyUserBtn.textContent = "تسجيل الدخول";
  } else {
    setNewUserBtn.textContent = "join with us !";
    alreadyUserBtn.textContent = "log in";
  }
  // main section
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
});
