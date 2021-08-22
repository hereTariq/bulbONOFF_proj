// accessing the elements using getElementById('id') and storing refrence into corresponding elem

let bulbImg = document.getElementById("bulbImg");
let toggle_btn = document.getElementById('toggle_btn');

//applying a click event on toogle btn
toggle_btn.addEventListener('click', () => {

    if(bulbImg.src.match("images/pic_bulboff.gif")){
        toggle_btn.classList.add("clicked_btn");
        bulbImg.src = "images/pic_bulbon.gif"
    }else{
        toggle_btn.classList.remove("clicked_btn");
        bulbImg.src = "images/pic_bulboff.gif"
    }
    // if (!(toggle_btn.classList.contains("clicked_btn"))) {
    //   toggle_btn.classList.add("clicked");
    //   toggle_btn.firstChild.style.color = "green";
    //   bulbImg.src = "images/pic_bulbon.gif"
    // }
    // else{
    //   toggle_btn.classList.remove("clicked_btn");
    //   toggle_btn.firstChild.style.color = "";
    //   bulbImg.src = "images/pic_bulboff.gif"
    // }

});
//
// toggle_btn.addEventListener('click', () => {
//   bulbImg.src = "images/pic_bulbon.gif";
// })
//
//
// toggle_btn.addEventListener('click', () => {
//   bulbImg.src = "images/pic_bulboff.gif";
//
// })
