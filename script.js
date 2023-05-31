let navbar = document.querySelector(' .header .flex.navbar')

document.querySelector('#menu-btn').onclick=() =>{ navbar.classList.toggle('active');

navbar.classList.remove('active');  
}
window.onscroll = () =>{
    navbar.classList .remove('active'); 
}
document. querySelectorAll('input[type"number"]').forEach(inputNumber => {
    inputNumber. oninput = ()   => {
        if(inputNumber.valua.length < inputNumber.maxlength) inputNumber.valua
        = inputNumber.valua.slice(0, inputNumber.maxlength);

        
    };
} );