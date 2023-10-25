/* click vào sản phẩm nào thì lấy ID sản phẩm đó cho vào Local Storage */
var product2=document.querySelectorAll(".product")
for(var i=0;i<product2.length;i++)
{
    product2[i].addEventListener('click',function(){
        localStorage.setItem('id',this.id)
    })
}
var array_search =document.querySelectorAll(".product_search")
for(var i=0;i<array_search.length;i++)
{
    array_search[i].addEventListener('click',function(){
        localStorage.setItem('id',this.id)
        window.location.href="product.html"
    })
}