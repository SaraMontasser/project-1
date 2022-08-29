// const { initial } = require("lodash");

let courses;
let coursesContainer = document.getElementById("demo");
let carouselInner = document.getElementById("carouselInner"),carouselItem;

function renderhtml(course,cnt) {
  carouselItem = document.getElementById(cnt.toString());
  let card = document.createElement("div"), imageWrapper = document.createElement("div"), cardBody = document.createElement("div");
  card.classList.add("card");
  imageWrapper.classList.add("image-wrapper");
  cardBody.classList.add("card-body");
  // console.log(course);
  let img = document.createElement("img"), courseName = document.createElement("a");
  let authorName = document.createElement("p"), rating = document.createElement("p"), star = document.createElement("i"), star1 = document.createElement("i"), star2 = document.createElement("i");
  let star3 = document.createElement("i"), star4 = document.createElement("i"), star5 = document.createElement("i");
  let viewers = document.createElement("p"), price = document.createElement("p"), oldPrice = document.createElement("s");
  img.src = course.image;
  img.alt = "python";
  imageWrapper.appendChild(img);
  card.appendChild(imageWrapper);
  courseName.innerHTML = course.title;
  courseName.classList.add("pythoncourse");
  cardBody.appendChild(courseName);
  authorName.innerHTML = course.author;
  authorName.classList.add("card-text");
  cardBody.appendChild(authorName);
  rating.innerHTML = course.rate;
  rating.classList.add("ratingsection");
  cardBody.appendChild(rating);
  star.classList.add("fa", "fa-star", "checked");
  cardBody.appendChild(star);
  star2.classList.add("fa", "fa-star", "checked");
  cardBody.appendChild(star2);
  star3.classList.add("fa", "fa-star", "checked");
  cardBody.appendChild(star3);
  star4.classList.add("fa", "fa-star", "checked");
  cardBody.appendChild(star4);
  star5.classList.add("fa", "fa-star-half-full", "notchecked");
  cardBody.appendChild(star5);
  viewers.innerHTML = course.reviewers;
  viewers.classList.add("visiting");
  cardBody.appendChild(viewers);
  price.innerHTML = course.price;
  price.classList.add("money");
  oldPrice.innerHTML = course.oldPrice;
  price.appendChild(oldPrice);
  cardBody.appendChild(price);
  card.appendChild(cardBody);
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
      if (searchWord == "") {
        renderCourse('python');
      }
      else {
        renderCourse(searchWord);
      }
    }
  });
}
let python = document.getElementById("python"),excel = document.getElementById("excel"),webDevelopment = document.getElementById("webDevelopment");
let javaScript = document.getElementById("js"),dataScience = document.getElementById("dataScience"),awsCertification = document.getElementById("awsCertification"),drawing=document.getElementById("drawing");
python.addEventListener("click",function(){
  python.style.color="grey";
  excel.style.color="black";
  webDevelopment.style.color="black";
  javaScript.style.color="black";
  dataScience.style.color="black";
  awsCertification.style.color="black";
  drawing.style.color="black";
  renderCourse('python');
});
excel.addEventListener("click",function(){
  python.style.color="black";
  excel.style.color="grey";
  webDevelopment.style.color="black";
  javaScript.style.color="black";
  dataScience.style.color="black";
  awsCertification.style.color="black";
  drawing.style.color="black";
  renderCourse('excel');
});
webDevelopment.addEventListener("click",function(){
  python.style.color="black";
  excel.style.color="black";
  webDevelopment.style.color="grey";
  javaScript.style.color="black";
  dataScience.style.color="black";
  awsCertification.style.color="black";
  drawing.style.color="black";
  renderCourse('web d');
});
javaScript.addEventListener("click",function(){
  python.style.color="black";
  excel.style.color="black";
  webDevelopment.style.color="black";
  javaScript.style.color="grey";
  dataScience.style.color="black";
  awsCertification.style.color="black";
  drawing.style.color="black";
  renderCourse('java');
});
dataScience.addEventListener("click",function(){
  python.style.color="black";
  excel.style.color="black";
  webDevelopment.style.color="black";
  javaScript.style.color="black";
  dataScience.style.color="grey";
  awsCertification.style.color="black";
  drawing.style.color="black";
  renderCourse('data science');
});
awsCertification.addEventListener("click",function(){
  python.style.color="black";
  excel.style.color="black";
  webDevelopment.style.color="black";
  javaScript.style.color="black";
  dataScience.style.color="black";
  awsCertification.style.color="grey";
  drawing.style.color="black";
  renderCourse('aws');
});
drawing.addEventListener("click",function(){
  python.style.color="black";
  excel.style.color="black";
  webDevelopment.style.color="black";
  javaScript.style.color="black";
  dataScience.style.color="black";
  awsCertification.style.color="black";
  drawing.style.color="grey";
  renderCourse('draw');
});

function renderCourse(name){
console.log(courses);
  let cnt = 0;
    carouselItem = document.getElementById(cnt.toString());
    if(carouselItem!= null){
      while(carouselInner.childElementCount>1){
        carouselInner.removeChild(carouselInner.lastChild);
      }
    }
    while(carouselItem.firstChild){
      carouselItem.removeChild(carouselItem.firstChild);
    }
    for (var course of courses) {
      var courseTitle = course.title.toLowerCase();
      if(courseTitle.indexOf(name) == -1) continue;
      carouselItem = document.getElementById(cnt.toString());
      if(carouselItem!= null&& carouselItem.childElementCount==5){
        cnt++;
        carouselItem=document.createElement("div");
        carouselItem.setAttribute("id",cnt.toString());
        carouselItem.classList.add("carousel-item");
        carouselInner.appendChild(carouselItem);
        coursesContainer.appendChild(carouselInner);
      }
      renderhtml(course,cnt);
    }
  }
  fetch('http://localhost:3000/courses').then(res => {
    courses = JSON.decode(res); 
});

  renderCourse('python');
// fetch(' http://localhost:3000/courses')
//   .then((response) => response.json())
//   .then((data) => {
//     courses = data;
//     let cnt = 0;
//     for (var course of data) {
//       carouselItem = document.getElementById(cnt.toString());
//       if(carouselItem!= null&& carouselItem.childElementCount==5){
//         cnt++;
//         carouselItem=document.createElement("div");
//         carouselItem.setAttribute("id",cnt.toString());
//         carouselItem.classList.add("carousel-item");
//         carouselInner.appendChild(carouselItem);
//         coursesContainer.appendChild(carouselInner);
//       }
//       renderhtml(course,cnt);
//     }
//   });