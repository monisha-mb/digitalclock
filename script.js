function current(){
    let date=new Date();
    let hr=zero(date.getHours());
    let mn=zero(date.getMinutes());
    let sc=zero(date.getSeconds());
    
   document.getElementById('hrs').innerHTML=hr
   document.getElementById('min').innerHTML=mn
   document.getElementById('sec').innerHTML=sc
}
function zero(num)
{
    return num<10?"0"+num:num
}
setInterval(current,1000)
