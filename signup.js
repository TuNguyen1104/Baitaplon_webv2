const myForm = document.getElementById("register");
const validUsername = document.getElementById("valid_username");
const validPassword = document.getElementById("valid_password");
const validEmail = document.getElementById("valid_email");
const validCheckbox = document.querySelector(".checkbox");
const iconLoading = document.getElementById("loadingv1");
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regexStr = /^(?=.{6,20}$)[a-zA-Z0-9._]+$/
myForm.onsubmit = function (e) {
    e.preventDefault();
}
//Phải để sau click mới lấy được thông tin
const username = document.querySelector(".input-signup-username");
const password = document.querySelector(".input-signup-password");
const confirm_password = document.querySelector(".input-confirm-password");
const email = document.querySelector(".input-signup-email");
const handleCurrentUser = (data) => {
    localStorage.setItem("currentUser", JSON.stringify(data));
}
const showLoading = () => {
    iconLoading.style.display = "flex";// do dùng flex box nên phải đổi thành flex
}
const hideLoading = () => {
    iconLoading.style.display = "none";
}
function valid(username, password, email) { // check xem có nhập đúng số lượng username và password && email không
    let status1 = false;
    let status2 = false;
    let status3 = false;
    if (!password.value) {
        validPassword.innerText = "Vui lòng nhập mật khẩu";
        password.focus();
    }
    else if (password.value.trim().length < 8) {
        validPassword.innerText = "password phải có ít nhất 8 ký tự";
        password.focus();
    }
    else {
        //Done
        validPassword.innerText = "";
        status2 = true;
    }
    if (!email.value) {
        validEmail.innerText = "Vui lòng nhập Email";
        email.focus();
    }
    else if (!regexEmail.test(email.value)) {
        validEmail.innerText = "Email không đúng định dạng";
        email.focus();
    }
    else {
        //Done
        validEmail.innerText = "";
        status3 = true;
    }
    if (!username.value) {
        validUsername.innerText = "Vui lòng nhập tên đăng nhập!";
        username.focus();
    }
    else if (username.value.trim().length < 8) {
        validUsername.innerText = "username phải có ít nhất 8 ký tự";
        username.focus();
    }
    else if (!regexStr.test(username.value)) {
        validUsername.innerText = "username không đúng định dạng";
        username.focus();
    }
    else {
        //Done
        validUsername.innerText = "";
        status1 = true;
    }
    return status1 && status2 && status3;
}
function send() {
    if (valid(username, password, email)) {
        console.log("Đã nhập đúng định dạng, giờ thì mình check xem trong localstorage có trùng user không");
        const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];// 'users' name of key on localstorage
        const existingUser = users.some(user => user.username === username.value);
        const existingEmail = users.some(user => user.email === email.value); // quên .value fix mất 1 tiếng
        if (existingUser) {
            showLoading();
            setTimeout(() => {
                hideLoading();
            }, 1000);
            validUsername.innerText = "Username đã được sử dụng.";
            username.focus();
        }
        if (existingEmail) {
            showLoading();
            setTimeout(() => {
                hideLoading();
            }, 1000);
            validEmail.innerText = "Email đã được sử dụng";
            email.focus();
        }
        if (confirm_password.value != password.value) {
            showLoading();
            setTimeout(() => {
                hideLoading();
            }, 1000);
            validPassword.innerText = "Sai mật khẩu vui lòng nhập lại";
            confirm_password.focus();
        }
        else if (!validCheckbox.checked) {
            validCheckbox.focus();
        }
        else if (!existingUser && !existingEmail) {
            // Done: Gửi(lưu) dữ liệu của người dùng
            const user = {
                username: username.value,
                password: password.value,
                email: email.value,
                history_order: []
            }
            users.push(user);
            handleCurrentUser(user);
            localStorage.setItem("users", JSON.stringify(users));
            showLoading();
            setTimeout(() => {
                alert("Đăng Ký Thành Công");
                window.location.href = "index.html";
                hideLoading();
            }, 2000);
        }
    }
}
//hide show password
const hide_showv2 = document.getElementById("hide_showsignup");
const input_passwordv3 = document.querySelector(".input-signup-password");
hide_showv2.addEventListener("click", function(){
    hide_showv2.classList.toggle("fa-eye-slash");
    if(input_passwordv3.type === "password"){
        input_passwordv3.type = "text";
    }
    else input_passwordv3.type = "password";
});
