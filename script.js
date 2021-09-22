let navbar = document.querySelector(".navbar");
// console.log(navbar)
document.querySelector(".navbar").onclick = () => {
  navbar.classList.toggle("active");
};

// document.querySelector('.close').onclick = () =>{
//     navbar.classList.remove('active');
// }


// For MenuSearch
let allBox = document.querySelectorAll(".card .box");
let AllBtn = document.querySelectorAll(".menu-btn button");

AllBtn.forEach((button)=>{
  button.addEventListener("click", (e) => {
  console.log(e.target);
  let category = e.target.getAttribute("data-category");
  console.log(category);
  if(category=='all'){
    showBox(allBox);
  }
  else{
  let filterBoxes=[];
  allBox.forEach((box) => {
    console.log(box);
    hideBoxes();
    if(box.getAttribute("data-category")==category)
    {
        filterBoxes.push(box)
    }
    showBox(filterBoxes);
  });
}
// console.log(filterBoxes)
});
})

function hideBoxes() {
  allBox.forEach((box) => {
    box.classList.add("hide");
  });
}
function showBox(boxList){

    boxList.forEach((box)=>{
        box.classList.remove('hide');
    })
}
