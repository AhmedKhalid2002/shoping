const email=document.getElementById("email");
const password =document.getElementById("password");
const btnSignin=document.getElementById("btn-signin");
const message=document.getElementById("message")
const userArr=JSON.parse(localStorage.getItem("userData"));

btnSignin.addEventListener("click",login)
function login(e){
    e.preventDefault()
    for(let i=0;i<userArr.length;i++){
        if(localStorage.getItem("userData")==null){
            message.innerHTML="user not found";
            message.style.color="red"
        }else{
            if(userArr[i].email==email.value &&userArr[i].password==password.value){
                window.location.href='index.html';
                sessionStorage.setItem('userName',userArr[i].userName)
            }else{
                message.innerHTML="user not found";
                message.style.color="red"
            }
        }
    }
}

