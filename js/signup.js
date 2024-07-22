const userName=document.getElementById("userName");
const email=document.getElementById("email");
const password=document.getElementById("password");
const age=document.getElementById("age");
const btnSignup=document.getElementById("btn-signUp");
const message=document.querySelectorAll("#message");
let exName=/[A-Z][a-z]{2,}$/;
let exEmail=/^[A-Za-z0-9]{1,}@(gmail|yahoo)\.com$/;
let exPass=/[A-Za-z0-9@#$^&*]{6,}/;
let exAge=/([2-8][0-9]|90)/;
let regName=new RegExp(exName);
let regEmail=new RegExp(exEmail);
let regPass=new RegExp(exPass);
let reqAge=new RegExp(exAge)
let userArr=[]
if(localStorage.getItem("userData") !=null){
    userArr=JSON.parse(localStorage.getItem("userData"))
}else{
    userArr=[]
}
btnSignup.addEventListener("click",signUp)

function signUp(e){
    e.preventDefault()
    const userData={
        userName:userName.value,
        email:email.value,
        password:password.value,
        age:age.value,
    }
    const userEx=userArr.find((user)=>user.email === email.value)
    if(userEx){
        message[0].innerHTML='Email already exists',
        message[0].style.color="red";
        message[0].style.textAlign = "center";
    }
    if(userEx == undefined &&userName.value.match(regName)&&email.value.match(regEmail)&&password.value.match(regPass)&&age.value.match(reqAge)){
        userArr.push(userData)
        localStorage.setItem("userData",JSON.stringify(userArr))
        message[0].innerHTML='you can login now';
        setTimeout(()=>{
            message[0].style.display='none'
        },1500)
        message[0].style.color="green";
        message[0].style.textAlign = "center";

        clearData();
    }else{
        
        if(!userName.value.match(regName)){
            message[1].style.color="red";
            message[1].innerHTML="User name start with capital letter"
        }
        if(userName.value==""){
            message[1].style.color="red";
            message[1].innerHTML="name is required"
        }
        if(!email.value.match(regEmail)){
            message[2].style.color="red";
            message[2].innerHTML="Email is invalid"
        }
        if(email.value==""){
            message[2].style.color="red";
            message[2].innerHTML="email is required"
        }
        if(!password.value.match(regPass)){
            message[3].style.color="red";
            message[3].innerHTML="Password invalid length greater 6 (character number @#$^&* )"
        }
        if(password.value==""){
            message[3].style.color="red";
            message[3].innerHTML="password is required"
        }
        if(!age.value.match(reqAge)){
            message[4].style.color="red";
            message[4].innerHTML="Age must be between 20,90 years"
        }
        if(age.value==""){
            message[4].style.color="red";
            message[4].innerHTML="Age is required"
        }
    }
    
}

function clearData(){
    userName.value="";
    email.value="";
    password.value="";
    age.value="";
}
