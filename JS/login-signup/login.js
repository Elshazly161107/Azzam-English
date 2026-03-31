// index main menu

let menuBtn = document.getElementById("menu-bars");
let menu = document.querySelector("header .btns");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");
  menuBtn.classList.toggle("fa-bars");
  menuBtn.classList.toggle("fa-xmark");
});

// box

let userNameIn = document.querySelector("main form input[type='email']");
let PasswordIn = document.querySelector("main form input[type='password']");
let submitBtn = document.querySelector("main form button[type='submit']");
let formQP = document.querySelector("main .box .footer p");
let formQA = document.querySelector("main .box .footer h1 a");
let forgetPass = document.querySelector("main .box .footer>a");

userNameIn.placeholder = "البريد الإلكتروني";
PasswordIn.placeholder = "كلمة المرور";
submitBtn.textContent = "تسجيل الدخول";
formQP.textContent = "لا تملك حسابًا ؟";
formQA.textContent = "انضم إلينا";
forgetPass.textContent = "نسيت كلمة المرور ؟";
