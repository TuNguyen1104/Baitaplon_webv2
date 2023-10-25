const btn = document.querySelectorAll(".addCart");
const productInCart = JSON.parse(localStorage.getItem("products")) || [];
calcTotal();
btn.forEach(function (data) {
  data.addEventListener("click", function (event) {
    var takeItem = event.target.parentNode.parentNode;
    var idv2 = takeItem.getAttribute("id");
    console.log(idv2);
    var productItem_img_src = takeItem.querySelector('img').src;
    var productItem_nameVN = takeItem.querySelector(".name.VN").innerText;
    var productItem_nameEN = takeItem.querySelector(".name.EN").innerText;
    var productItem_author = takeItem.querySelector(".author").innerText;
    var productItem_price = takeItem.querySelector(".price").innerText;
    const product = {
      id: idv2,
      nameVN: productItem_nameVN,
      nameEN: productItem_nameEN,
      image: productItem_img_src,
      author: productItem_author,
      price: productItem_price
    }
    addToCart(idv2, product);
  });
});
function saveToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(productInCart));
}
function addToCart(id, product) {
  let checkProduct = false;//= productInCart.some(value => value.id === id);
  productInCart.forEach((e) => {
    if (e.id === id) {
      checkProduct = true;
      e.quantity++;
    }
  });
  if (!checkProduct) {
    const newProduct = { ...product };
    newProduct.quantity = 1;
    productInCart.unshift(newProduct);
    calcTotal();
  }
  alert("Bạn đã thêm quyển " + product.nameVN +" vào giỏ hàng");
  saveToLocalStorage();
}
function calcTotal() {
  document.querySelector(".cart").setAttribute('data-total', productInCart.length);
}
//-----------------------Cart
function renderProductsToTable() {
  if (productInCart.length === 0) {
    cartTemp();
  }
  else {
    let data = ``;
    productInCart.map((value, index) => {
      data += `
      <tr class="item-cart">
      <td class="images_title_cart" data-id=${value.id}>
          <div class="images-cart-product">
              <img src='${value.image}'
                  alt=''>
          </div>
          <div class="title-cart">
              <p class="name-products"><p class="VN">${value.nameVN}</p><p class="EN">${value.nameEN}</p><p class="author_style">${value.author}</p>
              <p onclick='deleteProductInCart(${index})' class="remove">Xóa</p>
          </div>
      </td>
      <td class="price-cart">${value.price}đ</td>
      <td class="quantity-cart">
          <input onclick='minusQuantity(${index}, ${value.quantity})' type="button" value="-" class="btn_decrenment-cart">
          <input type="number" class="btn_quantity_input_cart" min="1" max="10" value=${value.quantity} disabled>
          <input onclick='plusQuantity(${index})' type="button" value="+" class="btn_increment-cart">
      </td>
      <td>${(value.quantity * value.price.replace(/,/g, '')).toLocaleString()}</td>
      <td><button onclick='deleteProductInCart(${index})'>Delete</button></td>
  </tr>
        `;
    });
    document.querySelector(".products-cart").innerHTML = data;
  }
}
const cartTemp = () => {
    document.querySelector(".cart-products").innerHTML = `<h3><p class="VN">Bạn chưa có sản phẩm nào trong giỏ hàng!</p><p class="EN">You have no items in your shopping cart!</p></h3>`;
}

function plusQuantity(index) {
  productInCart[index].quantity += 1;
  saveToLocalStorage();
  renderProductsToTable();
  totalMoney();
}
// $$(".btn_decrenment-cart").forEach((e) => {
//   e.addEventListener("click", (event) => {
//     const name =
//       event.target.parentNode.parentNode.querySelector(
//         ".name-products"
//       ).textContent;
//     const image =
//       event.target.parentNode.parentNode.querySelector(
//         ".tmg-products"
//       ).textContent;
//     const author =
//       event.target.parentNode.parentNode.querySelector(
//         ".author-products"
//       ).textContent;
//     const increaseValue = event.target.parentNode.querySelector(
//       ".quantity-increase"
//     ).value--;
//     if (increaseValue <= 1) {
//       event.target.parentNode.querySelector(
//         ".btn_quantity_input_cart"
//       ).value = 1;
//         alert("Quantity không được nhỏ hơn 1");
//       productInCart.forEach((e) => {
//         if (name === e.name && author === e.author && image === e.image) {
//           e.quantity = increaseValue;
//           localStorage.setItem("cart", JSON.stringify(productInCart));
//         }
//       });
//     } else {
//       productInCart.forEach((e) => {
//         if (name === e.name && author === e.author && image === e.image) {
//           e.quantity--;
//           localStorage.setItem("cart", JSON.stringify(productInCart));
//         }
//       });
//     }
function minusQuantity(index) {
  if (productInCart[index].quantity > 1) {
    productInCart[index].quantity -= 1;
    saveToLocalStorage();
    renderProductsToTable();
    totalMoney();
  } else {
    alert('Quantity min is 1');
  }
}

function deleteProductInCart(index) {
  productInCart.splice(index, 1);
  saveToLocalStorage();
  onLoadCart();
}

function totalMoney() {
  if (productInCart.length) {
    let total = 0;
    for (let i = 0; i < productInCart.length; i++) {
      total += productInCart[i].quantity * productInCart[i].price.replace(/,/g, '');
    }
    document.getElementById("total-money").innerHTML = `${total.toLocaleString()}`;
  }
  else document.getElementById("total-money").innerHTML = '0';
}
function onLoadCart() {
  document.querySelector(".container h2 span").innerHTML = `(${productInCart.length||0}`;
  calcTotal();
  renderProductsToTable();
  totalMoney();
}
// // remove media 320
// const remove_rep = document.querySelector("remove");
// remove_rep.addEventListener("click", (index) =>{
//   productInCart.splice(index, 1);
//   saveToLocalStorage();
//   onLoadCart();
// });
