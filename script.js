
const captchaDiv = document.getElementById('captcha-div');

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