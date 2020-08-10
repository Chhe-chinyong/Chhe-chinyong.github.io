const btn1 = document.querySelector('#btn1');
const name = document.querySelector('#name');
const form =document.querySelector('#form');
const popup = document.querySelector('#pop-up')
const darkMode = document.querySelector('#dark-mode');
const card = document.querySelectorAll('.card ');
var count = 0;



darkMode.addEventListener('click', () => {
    count ++;
    if (count % 2 == 1){
        document.body.style.backgroundColor = "#2d2d2d"
        document.body.style.color="white"
        // card.style.backgroundColor = "#2d2d2d"
        document.querySelector('.nav-link').style.color = "white"
        document.querySelector('#about').style.color = "white"
        document.querySelector('#contact').style.color = "white"
        document.querySelector('#personal-id').style.color = "white"
        darkMode.style.color ="white"
        for(var i = 0; i < card.length; i++){
           card[i].style.backgroundColor="#2d2d2d"
        }

        // console.log('dark')
       
    }
    else{
        document.body.style.backgroundColor ="white"
        document.body.style.color = "black"
        document.querySelector('.nav-link').style.color = "black"
        document.querySelector('#about').style.color = "black"
        document.querySelector('#contact').style.color = "black"
        document.querySelector("#dark-mode").style.color ="black"
        for(var i = 0; i < card.length; i++){
            card[i].style.backgroundColor="white"
         }
        document.querySelector('#personal-id').style.color = "#353b48"

    }
    
});


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };



// form.addEventListener('submit', (e)=> {
//     document.querySelector('#pop-up').style.visibility = "visible"
//         console.log('hello') 
//         e.preventDefault()
//             popup.innerHTML = `<div id ="alert" class="alert alert-success" role="alert">
//             <h4 class="alert-heading">Well done!</h4>
//             <img src="./tick.png" style = "width:1rem; height:1rem" >
//             </div>`        
       
//         sleep(2000).then(() => {
//             document.querySelector('#pop-up').style.visibility = "hidden"
//             // btn1.innerHTML = `<button id="btn1" type="submit" class="btn form-control mt-3 btn-primary">Submit</button>` 
//         })
//     });









