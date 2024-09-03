let form = document.querySelector('form');
let submit_btn = document.querySelector('.sbm_btn');
let success_msg = document.querySelector('.success_message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const email = document.getElementById('email').value.trim();
    const queryType = document.querySelector('input[type="radio"]:checked');
    const msg = document.getElementById('msg').value;
    const agreed = document.querySelector('input[type="checkbox"]').checked;

    let isValid = true;

    if(firstName === '') {
        isValid = false;

        document.querySelector('#first_name + .form_alert').style.display = 'block';
        document.querySelector('#first_name').style.border = '1px solid hsl(0, 66%, 54%)';
    } else {
        document.querySelector('#first_name + .form_alert').style.display = 'none';
        document.querySelector('#first_name').style.border = '1px solid hsl(169, 82%, 27%)';
    }

    if(lastName === '') {
        isValid = false;

        document.querySelector('#last_name + .form_alert').style.display = 'block';
        document.querySelector('#last_name').style.border = '1px solid hsl(0, 66%, 54%)';
    } else {
        document.querySelector('#last_name + .form_alert').style.display = 'none';
        document.querySelector('#last_name').style.border = '1px solid hsl(169, 82%, 27%)';
    }

    if(email === '') {
        isValid = false;
        
        document.querySelector('#email + .form_alert').style.display = 'block';
        document.querySelector('#email').style.border = '1px solid hsl(0, 66%, 54%)';
    } else {
        document.querySelector('#email + .form_alert').style.display = 'none';
        document.querySelector('#email').style.border = '1px solid hsl(169, 82%, 27%)';
        if(!isValidEmail(email)) {
            isValid = false;

            document.querySelector('.valid_email').style.display = 'block';
            document.querySelector('#email').style.border = '1px solid hsl(0, 66%, 54%)';
        } else {
            document.querySelector('.valid_email').style.display = 'none';
            document.querySelector('#email').style.border = '1px solid hsl(169, 82%, 27%)';
        }
    }

    if(!queryType) {
        isValid = false;

        document.querySelector('.query_options + .form_alert').style.display = 'block';
    } else {
        document.querySelector('.query_options + .form_alert').style.display = 'none';
    }

    if(msg === '') {
        isValid = false;

        document.querySelector('#msg + .form_alert').style.display = 'block';
        document.querySelector('#msg').style.border = '1px solid hsl(0, 66%, 54%)';
    } else {
        document.querySelector('#msg + .form_alert').style.display = 'none';
        document.querySelector('#msg').style.border = '1px solid hsl(169, 82%, 27%)';
    }

    if(!agreed) {
        isValid = false;

        document.querySelector('.check + .form_alert').style.display = 'block';
    } else {
        document.querySelector('.check + .form_alert').style.display = 'none';
    }

    if(isValid) {
        success_msg.classList.add('popup');
        form.reset();
    }
})

function isValidEmail(email) {
    return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}


