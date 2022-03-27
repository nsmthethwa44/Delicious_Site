//when user scroll up excute the following script or
// if not remove active
let scrollTopY = document.querySelector(".goTop");
let header = document.querySelector(".header");
window.onscroll = () =>{
 if (window.scrollY > 200){
   header.classList.add("active");
  menuImg.classList.remove("closeImg");
  menu.classList.remove("active");
  scrollTopY.style.display ="block";
 }else{
  header.classList.remove("active");
  scrollTopY.style.display ="none";
 }
}

//when cliick nsv link remove active and 
//add active to a clicked link
let link = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(link).forEach((item, index) =>{
  item.onclick = (e) =>{
    let currentActive = document.querySelector(".header .container .navbar .nav li a.active");
    currentActive.classList.remove("active");
    e.target.classList.add("active");
  }
})

//menu links add active when clicked or 
//remove active
//filter menu by menuLink clicked
let menuLink = document.querySelectorAll(".menu .container .menu_nav .nav li a");
let foodMenu = document.querySelectorAll(".menu .container .container_box .box .menu_content");
Array.from(menuLink).forEach((item, index) =>{
  item.onclick = (e) =>{
  let currentMenuLink = document.querySelector(".menu .container .menu_nav .nav li a.active");
  currentMenuLink.classList.remove("active");
  e.target.classList.add("active");

  let filter = e.target.dataset.filter;
  foodMenu.forEach((item) =>{
    if (filter === "All"){
      item.style.display = "flex";
    }else if(item.classList.contains(filter)){
      item.style.display = "flex";
    }else{
      item.style.display = "none";
    }
  })
  }
})
//gallery links add active when clicked or 
//remove active
//filter gallery by menuLink clicked
let galleryLink = document.querySelectorAll(".gallery .container .menu_nav .nav li a");
let galleryMenu = document.querySelectorAll(".gallery .container .container_box .box");
Array.from(galleryLink).forEach((item, index) =>{
  item.onclick = (e) =>{
  let currentGalleryLink = document.querySelector(".gallery .container .menu_nav .nav li a.active");
  currentGalleryLink.classList.remove("active");
  e.target.classList.add("active");

  let filter = e.target.dataset.filter;
  galleryMenu.forEach((item) =>{
    if (filter === "All"){
      item.style.display = "flex";
    }else if(item.classList.contains(filter)){
      item.style.display = "flex";
    }else{
      item.style.display = "none";
    }
  })
  }
})
//review selector add active when clicked or 
//remove active
//filter reviews by menuLink clicked
let reviewBox = document.querySelectorAll(".reviews .container .container_box .content .box");
let selectorLink = document.querySelectorAll(".reviews .container .container_box .selector span");
Array.from(selectorLink).forEach((item, index) =>{
  item.onclick = (e) =>{
  let currentSelectorLink = document.querySelector(".reviews .container .container_box .selector span.active");
  currentSelectorLink.classList.remove("active");
  e.target.classList.add("active");

  let filter = e.target.dataset.filter;
  reviewBox.forEach((item) =>{
    if(item.classList.contains(filter)){
      item.style.display = "block";
    }else{
      item.style.display = "none";
    }
  })
  }
})

//toggle menu Image when clicked
//open navigation
let menuImg = document.querySelector(".menuImg");
let menu = document.querySelector(".header .container .navbar");
menuImg.onclick = () =>{
  menuImg.classList.toggle("closeImg");
  menu.classList.toggle("active");
}