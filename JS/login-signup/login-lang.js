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
  welcomePhrase();
  loginFormText();
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
    welcomePhraseH1.textContent = "أهلا بك مرة أخرى !";
  } else {
    welcomePhraseH1.textContent = "welcome again !";
  }
}

// log in form text

function loginFormText() {
  if (getLang() === "ar") {
    userNameIn.placeholder = "البريد الإلكتروني";
    PasswordIn.placeholder = "كلمة المرور";
    submitBtn.textContent = "تسجيل الدخول";
    formQP.textContent = "لا تملك حسابًا ؟";
    formQA.textContent = "انضم إلينا";
    forgetPass.textContent = "نسيت كلمة المرور ؟";
  } else {
    userNameIn.placeholder = "email";
    PasswordIn.placeholder = "password";
    submitBtn.textContent = "log in";
    formQP.textContent = "don't have an account ?";
    formQA.textContent = "join us";
    forgetPass.textContent = "forget password ?";
  }
}
