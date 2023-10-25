/* lấy những nút chuyển đổi ngôn ngữ của mobile */
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
})
