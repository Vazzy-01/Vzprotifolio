  
  const mains=document.body;
 const gang = document.querySelector('header');
 const emagencee = document.getElementById('emergence');
const changeColors=document.createElement('li')
changeColors.textContent='DARK MODE';
emagencee.appendChild(changeColors);
changeColors.style.cursor='pointer';
const channel = new BroadcastChannel("my-channel");

const savedtheme = localStorage.getItem('theme');
if(savedtheme === 'dark'){
    gang.classList.add('dark-mode');
    mains.classList.add('dark-mode')
}
changeColors.addEventListener('click',()=>{
    mains.classList.toggle('dark-mode');
    gang.classList.toggle('dark-mode');
    const theme = gang.classList.contains('dark-mode') ? 'dark' : 'light';
    const theme2 = mains.classList.contains('dark-mode')?'dark' : 'light';
    localStorage.setItem('theme', theme);
    channel.postMessage({ theme });
}
          );
    channel.onmessage = (event) =>{
      if(event.dataset.theme("dark")){
      gang.classList.add("dark-mode")
      mains.classList.add("dark-mode")
    } 
    else{
gang.classList.remove("dark-mode")
mains.classList.remove("dark-mode")
    }  }   
const track = document.querySelector(".photo-container");
let position = 0;

function slide() {
  position -= 2; // move left
  track.style.left = position + "px";

  // reset once half the strip has moved (since we doubled it)
  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }

  requestAnimationFrame(slide);
}

requestAnimationFrame(slide);

