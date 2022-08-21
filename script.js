let courses;
let coursesboxes = document.getElementById("courses-box"), coursesContainer = document.getElementById("courseContainer");
function renderhtml(course) {
  let coursedata = document.createElement("div"), img = document.createElement("img"), courseName = document.createElement("a");
  let authorName = document.createElement("h7"), rating = document.createElement("p"), star = document.createElement("i"), star1 = document.createElement("i"), star2 = document.createElement("i");
  let star3 = document.createElement("i"), star4 = document.createElement("i"), star5 = document.createElement("i");
  let viewers = document.createElement("p"), price = document.createElement("p"), oldPrice = document.createElement("s");
  coursedata.classList.add("course1");
  img.src = course.image;
  img.alt = "python";
  img.classList.add("pythonimg");
  coursedata.appendChild(img);
  courseName.innerHTML = course.title;
  courseName.classList.add("pythoncourse");
  coursedata.appendChild(courseName);
  authorName.innerHTML = course.author;
  coursedata.appendChild(authorName);
  rating.innerHTML = course.rate;
  rating.classList.add("ratingsection");
  coursedata.appendChild(rating);
  star.classList.add("fa", "fa-star", "checked");
  coursedata.appendChild(star);
  star2.classList.add("fa", "fa-star", "checked");
  coursedata.appendChild(star2);
  star3.classList.add("fa", "fa-star", "checked");
  coursedata.appendChild(star3);
  star4.classList.add("fa", "fa-star", "checked");
  coursedata.appendChild(star4);
  star5.classList.add("fa", "fa-star-half-full", "notchecked");
  coursedata.appendChild(star5);
  viewers.innerHTML = course.reviewers;
  viewers.classList.add("visiting");
  coursedata.appendChild(viewers);
  price.innerHTML = course.price;
  price.classList.add("money");
  oldPrice.innerHTML = course.oldPrice;
  price.appendChild(oldPrice);
  coursedata.appendChild(price);
  coursesboxes.appendChild(coursedata);
  coursesContainer.appendChild(coursesboxes);
}
function getCourses() {
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

// {/* <div class="course1">

// <img src="img/python.jpg" alt="python" class="pythonimg">
// <a href=# class="pythoncourse">Learn python: the complete python programming course </a>
// <h7>Avinash Jain, The Codex</h7>
// <p class="ratingsection">4.4</p>
// <i class="fa fa-star checked"></i>
// <i class="fa fa-star checked"></i>
// <i class="fa fa-star checked"></i>
// <i class="fa fa-star checked"></i>
// <i class="fa fa-star-half-full notchecked"></i>
// <p class="ratingsection"><span class="visiting">(2,845)</span></p>
// <p class="money">E&#128 199.99 <s>E&#128 679.99</s></p>
// </div> */}