function updatetime(){
    let now=new Date();
    document.getElementById("Jakarta").innerText=now.toLocaleString("id-ID",{timeZone:"Asia/Jakarta"})
}
setInterval(updatetime,1000)