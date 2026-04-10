// index main menu

let menuBtn = document.getElementById("menu-bars");
let menu = document.querySelector("header .btns");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");
  menuBtn.classList.toggle("fa-bars");
  menuBtn.classList.toggle("fa-xmark");
});

// now courses
let nowCoursesHomeH1 = document.querySelector(".main-courses h1");
nowCoursesHomeH1.textContent = "الكورسات الحالية";
let nowCoursesHomeContainer = document.querySelector(".main-courses .courses");

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
  let startData = new Date(coursesData[i].courseStartDate).toLocaleDateString(
    "ar-EG",
  );
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
  <h2 class="arabic-num">الفئة المستهدفة : <span>${coursesData[i].targetGroupAR}</span></h2>
  </div>
  <div class="center">
  <div class="text">
  ${pointsDiv}
  </div>
  <div class="btns">
  <button class="btn-type-one">عرض الكورس</button>
  <button
  class="buy-course-home-btn btn-type-two">اشترك الآن !</button>
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
  <p class="create-day arabic-num">${startData}</p>
  <p class="last-update arabic-num">${lastUpdate}</p>
  </div>
  </div>
  </div>`;
  nowCoursesHomeContainer.appendChild(course);
}

// arabic nums
function convertText(node) {
  if (node.nodeType === 3) {
    node.nodeValue = node.nodeValue.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  } else {
    node.childNodes.forEach(convertText);
  }
}

convertText(document.body);
