const account = JSON.parse(localStorage.getItem("currentUser"))
const user = JSON.parse(localStorage.getItem("users"))
if (account) {
  document.querySelector(".profile-child").innerHTML = `
  <li> <a href="user.html">Tài khoản</a> </li>
  <li> <a href="index.html"class="logout">Đăng xuất</a> </li>`;
  const handleLogout = () => {
    user.forEach(data => {
      if (account.userName == data.userName) {
        data.history_order = account.history_order;
        localStorage.setItem("users", JSON.stringify(user))
        localStorage.removeItem("currentUser");
      }
    });
  }
  document.querySelector(".logout").addEventListener("click", handleLogout)
}
//------------------------