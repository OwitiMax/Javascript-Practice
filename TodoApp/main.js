const wholeform=document.querySelector('#form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('#msg');
const addedlist=document.querySelector('#users');
wholeform.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    if(nameInput.value==''||emailInput.value===''){
        msg.style.visibility="visible";
        setTimeout(()=>msg.remove(),3000)
    }
    else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        addedlist.appendChild(li);

        //clear the fields
        nameInput='';
        emailInput='';

    }
}