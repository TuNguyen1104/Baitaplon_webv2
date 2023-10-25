const btnLogin = document.querySelector(".login__signInButton");
const validAccount = document.getElementById("valid_account");
const iconLoading = document.getElementById("loadingv1");
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regexStr = /^(?=.{6,20}$)[a-zA-Z0-9._]+$/
const showLoading = () => {
    iconLoading.style.display = "flex";// do dùng flex box nên phải đổi thành flex
}
const hideLoading = () => {
    iconLoading.style.display = "none";
}
btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    const inputEmail = document.querySelector(".input-signup-email");
    const inputPassword = document.querySelector(".input-login-password");
    if (!inputEmail.value) {
        validAccount.innerText = "Vui lòng nhập Email";
        inputEmail.focus();
    }
    else if (!regexEmail.test(inputEmail.value)) {
        validAccount.innerText = "Email không đúng định dạng";
        inputEmail.focus();
    }
    else {
        if (!inputPassword.value) {
            validAccount.innerText = "Vui lòng nhập mật khẩu";
            inputPassword.focus();
        }
        else if (inputPassword.value.trim().length < 8) {
            validAccount.innerText = "password phải có ít nhất 8 ký tự";
            inputPassword.focus();
        }
        else {
            //Done
            validAccount.innerText = "";
            console.log("Đã nhập đúng định dạng");
            const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []; //lấy mảng users
            if (users) {
                const user_check = users.find(user => user.email === inputEmail.value && user.password === inputPassword.value);
                if (user_check) {
                    localStorage.setItem("currentUser", JSON.stringify(user_check));
                    showLoading();
                    setTimeout(() => {
                        alert("Đăng Nhập Thành Công");
                        window.location.href = "index.html";
                        hideLoading();
                    }, 2000);
                }
                else {
                    showLoading();
                    setTimeout(() => {
                        hideLoading();
                    }, 1000);
                    validAccount.innerText = "Email hoặc Mật khẩu sai!";
                }
            }
            else {
                showLoading();
                    setTimeout(() => {
                        hideLoading();
                    }, 1000);
                    validAccount.innerText = "Email hoặc Mật khẩu sai!";
            }
        }
    }
});
//hide show password
const hide_show = document.getElementById("hide_show");
const input_passwordv2 = document.querySelector(".input-login-password");
hide_show.addEventListener("click", function(){
    hide_show.classList.toggle("fa-eye-slash");
    if(input_passwordv2.type === "password"){
        console.log(2);
        input_passwordv2.type = "text";
        console.log(1);
    }
    else input_passwordv2.type = "password";
});
