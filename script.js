let courses;
let  coursesContainer = document.getElementById("courseContainer");
function renderhtml(course) {
  let str=`
  <div class="course1">
  <img src=${course.image} alt="python" class="pythonimg">
  <a class="pythoncourse">${course.title}</a>
  <h7>${course.author}</h7>
  <p class="ratingsection">${course.rate}</p>
  <i class="fa fa-star checked"></i>
  <i class="fa fa-star checked"></i>
  <i class="fa fa-star checked"></i>
  <i class="fa fa-star checked"></i>
  <i class="fa fa-star-half-full notchecked"></i>
  <p class="visiting">${course.reviewers}</p>
  <p class="money">${course.price}<s>${course.oldPrice}</s></p>
  </div>
  `;
  
  console.log(course);
  let coursedata = document.createElement("div");
  coursedata.classList.add("course1");
  coursedata.innerHTML=str;
  coursesContainer.appendChild(coursedata);
}
function getCourses() {
  console.log("kinh");
  var x = document.getElementById("searchfield");
  x.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      let searchWord = x.value
      searchWord = searchWord.toLowerCase();
      let coursesContent = document.getElementsByClassName("course1");
      for (i = 0; i < coursesContent.length; i++) {
        coursesContent[i].style.display = "none";
      }
      if(searchWord==""){
        for (var course of courses) {
            renderhtml(course);
        }
      }
      else{
      for (var course of courses) {
        var courseTitle = course.title.toLowerCase();
        if (courseTitle.indexOf(searchWord) != -1){
          renderhtml(course);
        }
      }
    }
  }
  });
}
fetch('http://localhost:3000/courses')
  .then((response) => response.json())
  .then((data) => {
    courses = data;
    for (var course of data) {
      renderhtml(course);
    }
  });