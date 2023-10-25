//----
const thanhtoan = document.querySelector(".pay");
thanhtoan.addEventListener("click", function(e){
  // e.preventDefault();
  if(document.getElementById("total-money").textContent !== "0"){
    window.location.href = "pay.html";
  }
  else {
    alert("Bạn chưa đặt sản phẩm nào cả");
  }
});