
  const mains=document.querySelector('body');
 const gang = document.querySelector('header');
 const emagencee = document.getElementById('emergence');
const changeColors=document.createElement('li')
changeColors.textContent='DARK MODE';
emagencee.appendChild(changeColors);
changeColors.style.cursor='pointer';
changeColors.addEventListener('click',()=>{
    
    gang.classList.toggle('dark-mode');
    if(gang.classList.contains('dark-mode')){
        changeColors.textContent='LIGHT MODE';
        gang.style.backgroundColor='black';
        gang.style.color='white';
        mains.style.backgroundColor='#1a1818ff'; 
        mains.style.color="white"; 

    }else{
        changeColors.textContent='DARK MODE';
        gang.style.backgroundColor='aliceblue'; 
         gang.style.color='black';
            mains.style.backgroundColor='rgb(184, 204, 145)';
            mains.style.color="black";
 }
});