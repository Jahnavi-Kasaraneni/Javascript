
let btn=document.querySelector('.button');

let modalcontainer=document.getElementById('modal-container');

let closebtn=document.getElementById('close-btn');

btn.addEventListener('click',()=>{

    modalcontainer.style.display='block';

});

closebtn.addEventListener('click',()=>{
modalcontainer.style.display='none';
})

window.addEventListener('click',(e)=>{
    if(e.target === modalcontainer){
        modalcontainer.style.display='none';
    }
});