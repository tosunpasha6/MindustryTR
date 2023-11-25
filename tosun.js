let aui = document.getElementById("div2")
tosun = false;
var auid = "resimler/Samanyolu Fon Müziği.mp3"

aui.addEventListener("mouseover" ,function(){
if(tosun){

    return;
}
tosun= true
var au = new Audio(auid)
au.play();

setTimeout(function() {
    tosun=false;
},30000 );
})