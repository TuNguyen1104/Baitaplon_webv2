/*tính năng click vào ô translate ở Navbar xuất hiện 2 lựa chọn ngôn ngữ - bật và tắt */
var nut=0
var hide= function hide1(){
   if(nut==0) {document.getElementById("translate").style.display="block" ;nut=1;return}
   if(nut==1) {document.getElementById("translate").style.display="none";nut=0;return}
}

/* tính năng click vào icon nào thì ra ngôn ngữ đó và ẩn ngôn ngữ còn lại */
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
    localStorage.setItem('translate','VN');
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
    localStorage.setItem('translate','EN');
})
//-----------------------------------------------------------------
