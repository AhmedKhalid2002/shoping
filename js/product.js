const product=document.getElementById("product")
const logout=document.getElementById("logout")
const toast=document.getElementById("toast")
logout.addEventListener("click",()=>{
    sessionStorage.removeItem("userName");
    window.location.href="signin.html"
})
if(sessionStorage.getItem("userName")==null){
    window.location.href="signin.html"
}
// ^ products
let products = [
    {
        id: "200",
        image: '../asset/image/watch.png',
        name: 'Watch',
        description: "The genuine leather strap offers a comfortable and adjustable fit, perfect for everyday wear or special occasions.",
        price:200
    },
    {
        id: "300",
        image: '../asset/image/watch.png',
        name: 'watch',
        description: "The genuine leather strap offers a comfortable and adjustable fit, perfect for everyday wear or special occasions.",
        price:250
    },
    {
        id: "400",
        image: '../asset/image/t-shirt-white.png',
        name: 'Tshirt',
        description: "The genuine leather strap offers a comfortable and adjustable fit, perfect for everyday wear or special occasions.",
        price:300
    },
    {
        id: "500",
        image: '../asset/image/tshirt-black.png',
        name: 'Tshirt',
        description: "The genuine leather strap offers a comfortable and adjustable fit, perfect for everyday wear or special occasions.",
        price: 300
    },
    
];

let cart=[];
if(localStorage.getItem("cartData") !=null){
    cart=JSON.parse(localStorage.getItem("cartData"))
}else{
    cart=[];
}
product.innerHTML = products.map(prod => `
    <div class="col-md-3">
        <div class="bg-pink rounded-2 p-4 shadow-sm h-100 position-relative">
            <div>
                <img src="${prod.image}" alt="${prod.name}" class="img-fluid"/>
            </div>
            <div>
                <h4 class="text-center">${prod.name}</h4>
                <p class="mt-3">${prod.description}</p>
                <p>${prod.price}$</p>
            </div>
            <div class="position-absolute bottom-0  end-0">
                <button onclick="addToCart('${prod.id}')"  class="btn btn-orange w-100 rounded-0" id="chart">Add Chart</button>
            </div>
        </div>
    </div>
`).join('');


function addToCart(id){
    const product=products.find((prod)=>prod.id ==id);
    const cartItem=cart.find((item)=>item.id==id)
    if(cartItem){
        cartItem.quantity+=1;
        cartItem.price+=cartItem.price;
        toast.innerHTML=`
            <div class="bg-success-subtle p-4 rounded-3 position-absolute end-0 top-0 m-5 " style="width: 300px;">
            <h6 class="text-success"> The product added successfully in cart</h6>
        </div>
        `
        setTimeout(()=>{
            toast.innerHTML=''
        },3000)
    }else{
        cart.push({...product, quantity: 1});
        localStorage.setItem("cartData",JSON.stringify(cart))
        toast.innerHTML=`
            <div class="bg-success-subtle p-4 rounded-3 position-absolute end-0 top-0 m-5 " style="width: 300px;">
            <h6 class="text-success"> The product added successfully in cart</h6>
        </div>
        `
        setTimeout(()=>{
            toast.innerHTML=''
        },3000)
    }
}



