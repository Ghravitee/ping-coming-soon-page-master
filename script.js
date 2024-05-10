const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    var svgContent = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fill-rule="evenodd"><circle cx="12" cy="12" r="12" fill="#F96464"/><path fill="#FFF" fill-rule="nonzero" d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"/></g></svg>'


    // email
    // email.setAttribute('placeholder', '');
    // email.style.backgroundImage = 'url("data:image/svg+xml;base64,' + btoa(svgContent) + '")';
    // email.style.backgroundRepeat = 'no-repeat';
    // email.style.backgroundPosition = 'right 60px center';

       
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}


const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')
    errorDisplay.innerText = message;
        
    // email
    email.setAttribute('placeholder', '');
    email.style.backgroundImage = 'none';
    email.placeholder = "email@example/com"

    inputControl.classList.add('success');
    inputControl.classList.remove('error')

}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();


    if (emailValue === '') {
        setError(email, "Your email is required to proceed!")
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Looks like this is not an email")
    } else {
        // setSuccess(email, "Thank you subscribing to our newsletter");
        alert("Thank you for subscribing to our newsletter");
    }
 
}
