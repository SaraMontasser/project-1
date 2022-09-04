let courses;
let coursesContainer;
let carouselInner, carouselItem;

function renderhtml(course, cnt) {
  let str = `
  <div class="image-wrapper">
  <img src=${course.image} alt=${course.category}>
  </div>
  <div class="card-body">
  <a class="pythoncourse">${course.title}</a>
  <p class="card-text">${course.author}</p>
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

  carouselItem = document.getElementById(cnt.toString() + "-" + course.category);
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML=str;
  carouselItem.appendChild(card);
}
function getCourses() {

  var x = document.getElementById("searchfield");
  x.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      let searchWord = x.value
      searchWord = searchWord.toLowerCase();
      console.log(searchWord);
      let courseName = ['python', 'excel', 'java', 'web', 'draw', 'aws', 'data'];
      var cnt = [0, 0, 0, 0, 0, 0, 0], courseNumber = 0;
      for (var courseType of courseName) {
        console.log(courseType);
        document.getElementById(courseType + "-button-prev").style.display = "none";
        document.getElementById(courseType + "-button-next").style.display = "none";
        carouselItem = document.getElementById(cnt[courseNumber].toString() + "-" + courseType);
        while (carouselItem != null) {
          if (cnt[courseNumber] != 0) {
            carouselItem.remove();
          }
          else {
            while (carouselItem.childElementCount > 0) {
              carouselItem.removeChild(carouselItem.lastChild);
            }
          }

          cnt[courseNumber]++;
          carouselItem = document.getElementById(cnt[courseNumber].toString() + "-" + courseType);
        }
        courseNumber++;
      }
      cnt = [0, 0, 0, 0, 0, 0, 0]
      for (var course of courses) {
        var courseTitle = course.title.toLowerCase();
        if (searchWord == "" || courseTitle.indexOf(searchWord) != -1) {
          console.log(course.category);
          console.log(cnt[(course.id) - 1]);
          carouselItem = document.getElementById(cnt[(course.id) - 1].toString() + "-" + course.category);
          if (carouselItem == null) console.log("kjnjb");
          else console.log("fdajk " + carouselItem.childElementCount);
          console.log(course);
          if (carouselItem != null && carouselItem.childElementCount == 5) {
            cnt[(course.id) - 1]++;
            carouselItem = document.createElement("div");
            carouselItem.setAttribute("id", cnt[(course.id) - 1].toString() + "-" + course.category);
            carouselItem.classList.add("carousel-item");
            carouselInner = document.getElementsByClassName(course.category)[0];
            carouselInner.appendChild(carouselItem);
          }
          renderhtml(course, cnt[(course.id) - 1]);
          document.getElementById(course.category + "-button-prev").style.display = "flex";
          document.getElementById(course.category + "-button-next").style.display = "flex";
        }
      }
    }
  });
}
fetch(' http://localhost:3000/courses')
  .then((response) => response.json())
  .then((data) => {
    courses = data;
    var cnt = [0, 0, 0, 0, 0, 0, 0];
    for (var course of data) {
      carouselItem = document.getElementById(cnt[(course.id) - 1].toString() + "-" + course.category);
      if (carouselItem != null && carouselItem.childElementCount == 5) {
        cnt[(course.id) - 1]++;
        carouselItem = document.createElement("div");
        carouselItem.setAttribute("id", cnt[(course.id) - 1].toString() + "-" + course.category);
        carouselItem.classList.add("carousel-item");
        coursesContainer = document.getElementById("demo-" + course.category);
        carouselInner = document.getElementsByClassName(course.category)[0];
        carouselInner.appendChild(carouselItem);
        coursesContainer.appendChild(carouselInner);
      }
      renderhtml(course, cnt[(course.id) - 1]);
    }
  });