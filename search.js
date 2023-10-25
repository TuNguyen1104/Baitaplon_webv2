/*tính năng click vào input xuất hiện màn hình kết quả tìm kiếm */
var searchbox=document.getElementById("searchbox")
var congtac=0
searchbox.addEventListener('click',function(){
    if(congtac==0){document.querySelector(".display").style.display="flex";document.querySelector(".overlay").style.display="block",congtac=1;return}
    if(congtac==1){document.querySelector(".display").style.display="none";document.querySelector(".overlay").style.display="none",congtac=0;return}
})
/* tính năng tìm kiếm sản phẩm theo tên VN , EN , tên tác giả */
var product_search_list = document.querySelectorAll(".product_search")
var tb=document.querySelectorAll("#sl")
var search = function search1()
{
    document.querySelector(".tb").style.display="flex";
    var input_value = document.getElementById("searchbox").value;
    var input_value_legit = input_value.toLowerCase()
    if(input_value_legit.length==0) {
        for(var i=0;i<product_search_list.length;i++)
        {
            product_search_list[i].style.display="none"
        }
        tb[0].innerHTML='0'
        tb[1].innerHTML='0'
    }
    else
{
    let count2=0
    for(var i=0;i<product_search_list.length;i++)
    {
        var check=product_search_list[i].textContent.toLowerCase()
        if(check.indexOf(input_value_legit)>-1)
        {
            product_search_list[i].style.display="flex"
            count2+=1
            document.querySelector("#pic").style.visibility="hidden"
        }
        if(check.indexOf(input_value_legit)<0){
            product_search_list[i].style.display="none"
        }
    }
    if(count2==0){        document.querySelector("#pic").style.visibility="visible"}
    tb[0].innerHTML=count2
    tb[1].innerHTML=count2
}
}