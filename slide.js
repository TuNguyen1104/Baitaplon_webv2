/* js tính năng click nút chuyển slide trái phải */
const img = document.querySelectorAll(".image img")
let index=0;
var u=document.querySelectorAll('.symbol2 i')
var a=function sangphai()
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
var b=function sangtrai()
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
/* tính năng tự động chuyển slide và click vào dấu tròn ở dưới ra slide tương ứng */
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