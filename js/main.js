// Scroll behavior  - active navbar
let navArray = Array.from(document.querySelectorAll('.nav-link'));

navArray.forEach((item) => {
  item.onclick = (e) => {
    // Scroll behavior
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior:'smooth',
    });

    //active nav link
    navArray.forEach((i) => {
      i.classList.remove('active');
    })
    item.classList.add('active');

  }
});

//================================
//Highlight Nav Menu on scroll
let sectionItem = Array.from(document.querySelectorAll('.section-item')),
    currentSection = '';

window.onscroll = () => {
  sectionItem.forEach((section) => {
    const sectionTop = section.offsetTop;
    if(scrollY >= sectionTop - 90){
        currentSection = section.getAttribute('name');
    };
  });

  navArray.forEach((li) => {
    li.classList.remove('active');
    
    if(li.classList.contains(currentSection)){
        li.classList.add('active');
    };
  });
}

//================================
// validation form
// let getStart = document.querySelector('.get-start'),
//     consedInput= document.querySelector('.consed-email'),
//     messageUser = document.getElementById('message-user');

    
// getStart.onclick = (e) => {
//   e.preventDefault();
//   checkInput()
// }


// function checkInput(){
//   const userValue = consedInput.value.trim(); 

//   if(userValue === ""){
//       //add error massage
//       messageUser.innerText = 'Please Enter Your Email Address';
//   }else{
//       //add sucsse massage
//       messageUser.innerText = "We received your message and you'll hear from us soon. Thank You!";
//   }

//   setTimeout(() => {
//     messageUser.style.display = "none";
//   }, 2000);
// }





