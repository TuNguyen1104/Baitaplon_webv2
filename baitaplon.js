const img = document.querySelectorAll(".image img")
let index=0;
var u=document.querySelectorAll('.symbol2 i')
var a=function test()
{
    if(index==0)
    {
        u[0].style.fontSize=16+"px"
        u[0].style.opacity=0.7 
    }
    index=index+1;
    if(index>img.length-1)
    {
        index=0
        u[u.length-1].style.fontSize=13+"px"
        u[u.length-1].style.opacity=0.3 
        u[index].style.fontSize=16+"px"
        u[index].style.opacity=0.7
    }
    if(index>0){
    document.querySelector('.image').style.right=index * 100+"%"
    u[index-1].style.fontSize=13+"px"
    u[index -1].style.opacity=0.3
    u[index].style.fontSize=16+"px"
    u[index].style.opacity=0.7 
    for(var i =0 ;i<u.length;i++)
    {
        if(i!=index)
        {
            u[i].style.fontSize=13+"px";
            u[i].style.opacity=0.3
        }
    }
}
}
var b=function test()
{
    if(index==0)
    {
        u[0].style.fontSize=16+"px"
        u[0].style.opacity=0.7 
    }
    index=index-1;
    if(index<0)
    {
        index=img.length-1
        u[0].style.fontSize=13+"px"
        u[0].style.opacity=0.3 
        u[index].style.fontSize=16+"px"
        u[index].style.opacity=0.7
    }
    document.querySelector('.image').style.right=index * 100+"%"
    if(index<img.length-1){
    u[index+1].style.fontSize=13+"px"
    u[index +1].style.opacity=0.3
    u[index].style.fontSize=16+"px"
    u[index].style.opacity=0.7 
    for(var i =0 ;i<u.length;i++)
    {
        if(i!=index)
        {
            u[i].style.fontSize=13+"px";
            u[i].style.opacity=0.3
        }
    }
}
}
var z= function autoimg()
{
    if(index>img.length-1)
    {
        index=0;
        u[u.length-1].style.fontSize=13+"px"
        u[u.length-1].style.opacity=0.3 
        u[index].style.fontSize=16+"px"
        u[index].style.opacity=0.7
    }
    if(index==0)
    {
        u[0].style.fontSize=16+"px"
        u[0].style.opacity=0.7 
    }
    if(index>0)
    {
        u[index-1].style.fontSize=13+"px"
        u[index -1].style.opacity=0.3
        u[index].style.fontSize=16+"px"
        u[index].style.opacity=0.7  
    }
    document.querySelector('.image').style.right=index*100+"%"
    index+=1;
}
var c=function click1()
{
    document.querySelector('.image').style.right=0*100+"%"
    index=0
    u[0].style.fontSize=16+"px"
    u[0].style.opacity=0.7
    for(var i =0 ;i<u.length;i++)
    {
        if(i!=index)
        {
            u[i].style.fontSize=13+"px";
            u[i].style.opacity=0.3
        }
    }
    z()
}
var d=function click2()
{
    document.querySelector('.image').style.right=1*100+"%"
    index=1
    u[1].style.fontSize=16+"px"
    u[1].style.opacity=0.7
    for(var i =0 ;i<u.length;i++)
    {
        if(i!=index)
        {
            u[i].style.fontSize=13+"px";
            u[i].style.opacity=0.3
        }
    }
    z()
    
}
var e=function click3()
{
    document.querySelector('.image').style.right=2*100+"%"
    index=2
    u[2].style.fontSize=16+"px"
    u[2].style.opacity=0.7
    for(var i =0 ;i<u.length;i++)
    {
        if(i!=index)
        {
            u[i].style.fontSize=13+"px";
            u[i].style.opacity=0.3
        }
    }
    z()
}
var f=function click4()
{
    document.querySelector('.image').style.right=3*100+"%"
    index=3
    u[3].style.fontSize=16+"px"
    u[3].style.opacity=0.7
    for(var i =0 ;i<u.length;i++)
    {
        if(i!=index)
        {
            u[i].style.fontSize=13+"px";
            u[i].style.opacity=0.3
        }
    }
    z()
}
var g=function click5()
{
    document.querySelector('.image').style.right=4*100+"%"
    index=4
    u[4].style.fontSize=16+"px"
    u[4].style.opacity=0.7
    for(var i =0 ;i<u.length;i++)
    {
        if(i!=index)
        {
            u[i].style.fontSize=13+"px";
            u[i].style.opacity=0.3
        }
    }
    z()
}
setInterval(z,5000)
var nut=0
var hide= function hide1(){
   
   if(nut==0) {document.getElementById("translate").style.display="block" ;nut=1;return}
   if(nut==1) {document.getElementById("translate").style.display="none" ;nut=0;return}
}
var VNicon=document.getElementById("VNicon")
var ENicon = document.getElementById("ENicon")
var VN = document.getElementsByClassName("VN")
var EN = document.getElementsByClassName("EN")
VNicon.addEventListener('click',function(){
    for(var i=0;i<EN.length;i++)
    {
        EN[i].style.display="none"
    }
    for(var i=0;i<VN.length;i++)
    {
        VN[i].style.display="block"
    }
    document.getElementById('iconEVN').src="/image/iconVN.png"
})
ENicon.addEventListener('click',function(){
    for(var i=0;i<EN.length;i++)
    {
        VN[i].style.display="none"
    }
    for(var i=0;i<VN.length;i++)
    {
        EN[i].style.display="block"
    }
    document.getElementById('iconEVN').src="/image/iconE.png"
})
var searchbox=document.getElementById("searchbox")
var congtac=0
searchbox.addEventListener('click',function(){
    if(congtac==0){document.querySelector(".display").style.display="flex";document.querySelector(".overlay").style.display="block",congtac=1;return}
    if(congtac==1){document.querySelector(".display").style.display="none";document.querySelector(".overlay").style.display="none",congtac=0;return}
})
const product = document.querySelectorAll(".containerComics div")
const countComics ={current:0}
const countNovel ={current:0}
const countAcademic ={current:0}
let Comics='.containerComics'
let Novel='.containerNovel'
let Academic='.containerAcademic'
var left_right=document.querySelectorAll(".symbol button")
left_right[2].addEventListener('click',function(){
    if(countComics.current==0){

        left_right[2].style.visibility="hidden"
    }
    if(countComics.current<product.length-4)
    {
        left_right[3].style.visibility="visible"
    }
})
left_right[3].addEventListener('click',function(){
    if(countComics.current==product.length-4){
        left_right[3].style.visibility="hidden"
    }
    if(countComics.current>0)
    {
        left_right[2].style.visibility="visible"
    }
})
left_right[4].addEventListener('click',function(){
    if(countNovel.current==0){

        left_right[4].style.visibility="hidden"
    }
    if(countNovel.current<product.length-4)
    {
        left_right[5].style.visibility="visible"
    }
})
left_right[5].addEventListener('click',function(){
    if(countNovel.current==product.length-4){
        left_right[5].style.visibility="hidden"
    }
    if(countNovel.current>0)
    {
        left_right[4].style.visibility="visible"
    }
})
left_right[6].addEventListener('click',function(){
    if(countAcademic.current==0){

        left_right[6].style.visibility="hidden"
    }
    if(countAcademic.current<product.length-4)
    {
        left_right[7].style.visibility="visible"
    }
})
left_right[7].addEventListener('click',function(){
    if(countAcademic.current==product.length-4){
        left_right[7].style.visibility="hidden"
    }
    if(countAcademic.current>0)
    {
        left_right[6].style.visibility="visible"
    }
})
var goleft =function gotoleft(a,b1)
{
    b1.current-=1;
    if(b1.current<0)
    {
       b1.current=0; 
    }
    document.querySelector(a).style.right=b1.current*251+"px";
}
var goright =function gotoright(a,b1)
{
    b1.current+=1;
    if(b1.current>product.length-4)
    {
        b1.current=product.length-4
    }
    document.querySelector(a).style.right=b1.current*251+"px";
}

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
        }
        if(check.indexOf(input_value_legit)<0){
            product_search_list[i].style.display="none"
        }
    }
    tb[0].innerHTML=count2
    tb[1].innerHTML=count2
}
}
var product2=document.querySelectorAll(".product")
for(var i=0;i<product2.length;i++)
{
    product2[i].addEventListener('click',function(){
        localStorage.setItem('id',this.id)
    })
}
var bars=document.getElementById("bars")
var mobile_bars=document.querySelector('.mobile_bars')
bars.addEventListener('click',function(){
    mobile_bars.style.left=74+"%"
    mobile_bars.style.opacity=1
    document.querySelector(".overlay").style.display="block"
})
document.querySelector(".X").addEventListener('click',function(){
    mobile_bars.style.left=0+"%"
    document.querySelector(".overlay").style.display="none"
})
document.querySelector(".overlay").addEventListener('click',function(){
    mobile_bars.style.left=0+"%"
    document.querySelector(".overlay").style.display="none"
})
var nut_mobile=0
document.querySelector("#ts_mobile").addEventListener('click',function(){
    if(nut_mobile==0){document.querySelector(".mobile_translate").style.display="block";nut_mobile=1;return}
    if(nut_mobile==1){document.querySelector(".mobile_translate").style.display="none";nut_mobile=0;return}
})
var VNicon_mobile=document.querySelector("#VNicon_mobile")
var ENicon_mobile=document.querySelector("#ENicon_mobile")
VNicon_mobile.addEventListener('click',function(){
    for(var i=0;i<EN.length;i++)
    {
        EN[i].style.display="none"
    }
    for(var i=0;i<VN.length;i++)
    {
        VN[i].style.display="block"
    }
    document.getElementById('iconEVN').src="/image/iconVN.png"
})
ENicon_mobile.addEventListener('click',function(){
    for(var i=0;i<EN.length;i++)
    {
        VN[i].style.display="none"
    }
    for(var i=0;i<VN.length;i++)
    {
        EN[i].style.display="block"
    }
    document.getElementById('iconEVN').src="/image/iconE.png"
})
