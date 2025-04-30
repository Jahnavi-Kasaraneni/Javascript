fetch("https://dummyjson.com/products").then((res)=>{

    console.log(res);

    return res.json();

}).then((data)=>{

console.log(data)

displayProducts(data)

}).catch((error)=>{

    alert(error);
})



function displayProducts(data){

    let maindiv=document.getElementById("maindiv");

    for(let i=0;i<data.products.length;i++){

        let itemdiv=document.createElement('div');

        itemdiv.innerHTML=`<div class="space"><img src="${data.products[i].thumbnail}"><h2>BrandName:${data.products[i].brand}</h2><div class="hello"><h5>Price:${data.products[i].price}</h5>
        <h5>Rating:${data.products[i].rating}</h5></div>`;
        itemdiv.classList.add('hero');

        maindiv.appendChild(itemdiv);
        

    }
}