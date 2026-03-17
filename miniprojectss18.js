// const products = [];
// localStorage.setItem("products",JSON.stringify(products));
JSON.parse(localStorage.getItem("products"))
function addproducts(){
    let newproductname = document.getElementById("productName")
    let newproductprice = document.getElementById("productprice")
    let newproductquantity =  document.getElementById("productQuantity")
    let newproductdesc = document.getElementById("productDescription")
    if(newproductname.value  = ""){
        alert(` Trường nhập không được để trống`)
    newproductname.value ="";

    }
    if(newproductprice.value  <= 0 ){
        alert(` Giá phải lớn hơn 0`)
    }
    if(newproductquantity.value <= 0){
        alert(` Số lượng phải lớn hơn 0`)
    }
    if(newproductdesc.value = ""){
        newproductdesc.value = " Không có mô tả"
    }
    let newproduct = {
        id : Math.floor(Math.random()*999),
        name : newproductname.value,
        price : newproductprice.value,
        quantity : newproductquantity.value,
        desc : newproductdesc.value,
    }
    products.push(newproduct)
    newproductname.value ="";
    newproductdesc.value = "";
    newproductprice.value = "";
    newproductquantity.value = "";
    renderlist();
}
function renderlist(){
    tablecontainer.innerHTML = products
    .map((product)=>{
        return `<div class="table-container" id="tablecontainer">

            </div>`
    })
}