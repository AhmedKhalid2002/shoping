const tblBody=document.getElementById("table-body");
const tblFooter=document.getElementById("table-footer")
let cart=JSON.parse(localStorage.getItem("cartData"));


if(sessionStorage.getItem("userName")==null){
    window.location.href="signin.html"
}
function displayCart(){
let total=cart.reduce((sum,item)=>sum+item.price,0)
    tblBody.innerHTML=cart.map((data)=>`
    <tr class="text-center">
            <td style="width: 50px;"><img src="${data.image}" class="w-100" alt=""></td>
            <td>${data.name}</td>
            <td>${data.price}$</td>
            <td>${data.quantity}</td>
            <td class="text-danger fs-5 " ><i onclick="deleteProduct('${data.id}')" class="fa-solid fa-trash pointer"></i></td>
    </tr>
`)
tblFooter.innerHTML=`
    <tr class="text-center">
        <td colspan="4" class="text-end fw-bold ">Total Price:</td>
        <td class="text-center fw-bold">${total}$</td>
    </tr>
    <tr class="text-center">
        <td colspan="4" class="text-end fw-bold ">Number of Product: </td>
        <td class="text-center fw-bold">${cart.length}</td>
    </tr>
`
}

function deleteProduct(id){
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cartData", JSON.stringify(cart));
    displayCart()
}
displayCart()
