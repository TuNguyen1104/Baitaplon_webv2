/* nút dịch chuyển thanh sản phẩm bao gồm cả PC và Mobile - độ dịch chuyển khác nhau*/
/* mỗi list sản phẩm có hệ số đếm riêng */
/* khi chuyển đến max hoặc min sẽ ẩn nút tương ứng */
const product = document.querySelectorAll(".containerComics div")
const countComics ={current:0}
const countNovel ={current:0}
const countAcademic ={current:0}
let Comics='.containerComics'
let Novel='.containerNovel'
let Academic='.containerAcademic'
var left_right=document.querySelectorAll(".symbol button")
console.log(left_right.length)
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
    if(countComics.current==0){

        left_right[4].style.visibility="hidden"
    }
    if(countComics.current<product.length-2)
    {
        left_right[5].style.visibility="visible"
    }
})
left_right[5].addEventListener('click',function(){
    if(countComics.current==product.length-2){
        left_right[5].style.visibility="hidden"
    }
    if(countComics.current>0)
    {
        left_right[4].style.visibility="visible"
    }
})
left_right[6].addEventListener('click',function(){
    if(countNovel.current==0){

        left_right[6].style.visibility="hidden"
    }
    if(countNovel.current<product.length-4)
    {
        left_right[7].style.visibility="visible"
    }
})
left_right[7].addEventListener('click',function(){
    if(countNovel.current==product.length-4){
        left_right[7].style.visibility="hidden"
    }
    if(countNovel.current>0)
    {
        left_right[6].style.visibility="visible"
    }
})
left_right[8].addEventListener('click',function(){
    if(countNovel.current==0){

        left_right[8].style.visibility="hidden"
    }
    if(countNovel.current<product.length-2)
    {
        left_right[9].style.visibility="visible"
    }
})
left_right[9].addEventListener('click',function(){
    if(countNovel.current==product.length-2){
        left_right[9].style.visibility="hidden"
    }
    if(countNovel.current>0)
    {
        left_right[8].style.visibility="visible"
    }
})
left_right[10].addEventListener('click',function(){
    if(countAcademic.current==0){

        left_right[10].style.visibility="hidden"
    }
    if(countAcademic.current<product.length-4)
    {
        left_right[11].style.visibility="visible"
    }
})
left_right[11].addEventListener('click',function(){
    if(countAcademic.current==product.length-4){
        left_right[11].style.visibility="hidden"
    }
    if(countAcademic.current>0)
    {
        left_right[10].style.visibility="visible"
    }
})
left_right[12].addEventListener('click',function(){
    if(countAcademic.current==0){

        left_right[12].style.visibility="hidden"
    }
    if(countAcademic.current<product.length-2)
    {
        left_right[13].style.visibility="visible"
    }
})
left_right[13].addEventListener('click',function(){
    if(countAcademic.current==product.length-2){
        left_right[13].style.visibility="hidden"
    }
    if(countAcademic.current>0)
    {
        left_right[12].style.visibility="visible"
    }
})
var hs_pc=26.6666
var hs_mobile=55
var goleft =function gotoleft(a,b1,hs)
{
    b1.current-=1;
    if(b1.current<0)
    {
       b1.current=0; 
    }
    document.querySelector(a).style.right=b1.current*hs+"%";
}
var max_pc=4
var max_mobile=2
var goright =function gotoright(a,b1,hs,sp_max)
{
    b1.current+=1;
    if(b1.current>product.length-sp_max)
    {
        b1.current=product.length-sp_max
    }
    document.querySelector(a).style.right=b1.current*hs+"%";
}