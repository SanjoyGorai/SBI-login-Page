
const captchaDiv = document.getElementById('captcha-div');
// captchaDiv.style.visibility = 'hidden';
console.log(captchaDiv);

function generateCaptcha() {
    let uniqueCaptcha = '';
    const captchaChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 1; i < 6; i++) {
        uniqueCaptcha += captchaChar.charAt(
            Math.random() * captchaChar.length)
    }
    captchaDiv.innerHTML = uniqueCaptcha
}
const refreshImg = document.getElementById('refresh-img');
refreshImg.addEventListener('click', generateCaptcha);


const userName = window.document.getElementById('username-field');
userName.addEventListener('paste', e => alert('Paste is not allwoed'));


const imageRadio = document.getElementById('image-radio');
const audioRadio = document.getElementById('audio-radio');
const captchaAudio = document.getElementById('captcha-audio');

audioRadio.addEventListener('change', e => showHide())
imageRadio.addEventListener('change', e => showHide())



function showHide() {
    if (audioRadio.checked) {
        captchaAudio.hidden = false;
        refreshImg.style.visibility = 'hidden';
        captchaDiv.style.visibility = 'hidden'
    } else {
        refreshImg.style.visibility = 'visible'
        captchaAudio.hidden = true;
        // captchaAudio.style.visibility = 'hidden'
        captchaDiv.style.visibility = 'visible'
    }

    if (imageRadio.checked) {
        console.log('ffff');
      
    } 
}


