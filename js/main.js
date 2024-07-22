const home=document.getElementById("home");
const logout=document.getElementById("logout")
const product=document.getElementById("product")

home.innerHTML=`Welcome ${sessionStorage.getItem('userName')}`

logout.addEventListener("click",()=>{
    sessionStorage.removeItem("userName");
    window.location.href="signin.html"
})
if(sessionStorage.getItem("userName")==null){
    window.location.href="signin.html"
}
