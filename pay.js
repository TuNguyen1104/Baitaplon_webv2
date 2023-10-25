let valid_address = false;// biến này check xem bạn đã chọn địa chỉ hay chưa
const productInCart = JSON.parse(localStorage.getItem("products")) || [];
const account = JSON.parse(localStorage.getItem("currentUser"));
if(account) console.log(1);
else console.log(2)
console.log(account)
function totalAmount () {
    let total = 0;
    for (let i = 0; i < productInCart.length; i++) {
        total += productInCart[i].quantity * productInCart[i].price.replace(/,/g, '');
      }
    document.querySelector("#total-payment").innerHTML = `${total.toLocaleString()}đ`;
  };
function loadCartPay() {
    checkUser();// check xem đã đăng nhập chưa và thực hiện các event
    document.querySelector(".card-right h2 span").innerHTML = `(${productInCart.length || 0} sản phẩm)`;
    count_productInCart();// xuất giỏ hàng bên card-right
    //Màn hình điện thoại mới có chức năng này
    document.querySelector(".show-product").addEventListener("click", () => {
      if (document.querySelector(".wrapper-right").offsetHeight != 50) {
        document.querySelector(".wrapper-right").style.height = "50px"
        document.querySelector(".show-product i").style = "transform: rotate(0)"
      } else {
        document.querySelector(".wrapper-right").style.height = "100%"
        document.querySelector(".show-product i").style = "transform: rotate(180deg)"
      }
    })
    totalAmount();
}

function count_productInCart() {
  let data = "";
  productInCart.map((product) => {
    data += `
      <div class="item-products">
        <div class="item-img" data-quantity="${product.quantity}">
          <img src="${product.image}" alt="">
        </div>
        <div class="title-products">
          <p class="name">${product.nameVN}</p>
        </div>
        <p class="price">${product.price}đ</p>
      </div>`;
  });
  document.querySelector(".main-right").innerHTML = data;
}
function checkUser (){
    if(account !== null){// nếu có tài khoản trong localstorage
        document.getElementById("check_user").style.display = "none";
        document.querySelector(".address-availablev1").style.display = "block";
    }
    else {
        document.getElementById("check_user").style.display = "block";
        document.querySelector(".address-availablev1").style.display = "none";
    }
}
function address_available(){
    document.querySelector(".add-addressv1").style.display = "none";
    valid_address = true;
}
//----------
function CloseNoticeSuccess() {
  document.querySelector(".notice-success").style.opacity = "1"
  document.querySelector(".notice-success").style.visibility = "inherit"
  if (account !== null) {
    account.history_order = account.history_order.concat(productInCart)
    localStorage.setItem("currentUser", JSON.stringify(account));
  }
  localStorage.removeItem("products");
  setTimeout(() => {
    window.location.href = "cart.html"
  }, 10000)
  document.querySelector(".close").addEventListener("click", () => {
    window.location.href = "cart.html"
  })
}
function order_end(){
    if((account !== null && valid_address) || (account !== null && validationInfor())){
      // sau mình xoá all sản phẩm trong localstorage
      CloseNoticeSuccess();
    }
    else alert("Vui lòng điền đầy đủ thông tin");
}
//check address
function validationInfor() {
    let condition1 = false;
    let condition2 = false;
    let condition3 = false;
    let condition4 = false;
    let condition5 = false;
    let condition6 = false;
    let condition7 = false;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}document.querySelector/
    const regexPhone = /^(03[2-9]|05[6|8|9]|07[0|6-9]|08[1-9]|09[0-9]|01[2|6|8|9])+([0-9]{7})document.querySelector/
    if (document.querySelector(".name").value.trim().length < 3 || document.querySelector(".name").value.trim().length >= 50) {
      document.querySelector(".name").style.border = "1px solid red"
    } else {
      document.querySelector(".name").style.border = "1px solid green"
      condition1 = true
    }
    if (regexEmail.test(document.querySelector(".email").value.trim())) {
      document.querySelector(".email").style.border = "1px solid green"
      condition2 = true
    } else {
      document.querySelector(".email").style.border = "1px solid red"
    }

    if (regexPhone.test(document.querySelector(".phone").value.trim())) {
      document.querySelector(".phone").style.border = "1px solid green"
      condition3 = true
    } else {
      document.querySelector(".phone").style.border = "1px solid red"
    }

    if (document.querySelector(".address").value.trim().length <= 5 || document.querySelector(".address").value.trim().length > 100) {
      document.querySelector(".address").style.border = "1px solid red"
    } else {
      document.querySelector(".address").style.border = "1px solid green"
      condition4 = true
    }

    if (document.querySelector(".province-city").value.trim().length <= 5 || document.querySelector(".province-city").value.trim().length > 50) {
      document.querySelector(".province-city").style.border = "1px solid red"
    } else {
      document.querySelector(".province-city").style.border = "1px solid green"
      condition5 = true
    }
    if (document.querySelector(".district").value.trim().length <= 5 || document.querySelector(".district").value.trim().length > 50) {
      document.querySelector(".district").style.border = "1px solid red"
    } else {
      document.querySelector(".district").style.border = "1px solid green"
      condition6 = true
    }

    if (document.querySelector(".wards").value.trim().length <= 5 || document.querySelector(".wards").value.trim().length > 50) {
      document.querySelector(".wards").style.border = "1px solid red"
    } else {
      document.querySelector(".wards").style.border = "1px solid green"
      condition7 = true
    }
    return condition1 && condition2 && condition3 && condition4 && condition5 && condition6 && condition7;
}
