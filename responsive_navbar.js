/* tạo thanh navbar mới khi responsive lên mobile */
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