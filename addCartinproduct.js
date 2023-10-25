
const btnv2 = document.querySelector(".addCartv2");
const productInCartv2 = JSON.parse(localStorage.getItem("products")) || [];
var id_product = localStorage.getItem('id');
function calcTotal() {
    document.querySelector(".cart").setAttribute('data-total', productInCartv2.length);
}
function show_numbercart(){
    
    calcTotal();
}

btnv2.addEventListener("click", function (event) {
    var takeItem = event.target.parentNode.parentNode;
    var productItem_img_src = takeItem.parentNode.querySelector('#img1').src;
    var productItem_nameVN = takeItem.querySelector(".VN.namePr").innerText;
    var productItem_nameEN = takeItem.querySelector(".EN.namePr").innerText;
    var productItem_author = takeItem.querySelector(".VN.authorPr").innerText;
    var productItem_price = takeItem.querySelector(".price1").innerText;
    console.log(id_product)
    console.log();
    const product = {
        id: id_product,
        nameVN: productItem_nameVN,
        nameEN: productItem_nameEN,
        image: productItem_img_src,
        author: productItem_author.slice(10),
        price: productItem_price.slice(0, -2)
    }
    console.log(product);
    addToCart(id_product, product);
});
function saveToLocalStorage() {
    localStorage.setItem("products", JSON.stringify(productInCartv2));
}
function addToCart(id, product) {
    let checkProduct = false;//= productInCart.some(value => value.id === id);
    productInCartv2.forEach((e) => {
        if (e.id === id) {
            checkProduct = true;
            e.quantity++;
        }
    });
    if (!checkProduct) {
        const newProduct = { ...product };
        newProduct.quantity = 1;
        productInCartv2.unshift(newProduct);
        calcTotal();
    }
    alert("Bạn đã thêm quyển " + product.nameVN + " vào giỏ hàng");
    saveToLocalStorage();
}