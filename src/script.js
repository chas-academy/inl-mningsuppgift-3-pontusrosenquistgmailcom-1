    
    // Fetch elements
const productInput = document.getElementById("productInput")
const priceInput = document.getElementById("priceInput")
const addButton = document.getElementById("addButton")
const cartList = document.getElementById("cartList")


let scriptCart = [] //[{productName: "Gem", price: 5, quantity: 1,},]
showCartList()


addButton.addEventListener("click", () =>{
//    console.log("click input recieved, productName:", productInput.value)
  //  console.log ("click input recieved, price:", Number(priceInput.value))

    let priceSEK = Number(priceInput.value)
//    console.log(priceSEK)
        if(productInput.value !== "" && priceSEK !== 0){
            //console.log("prod value not null")
            let isItemAlreadyListed = false
            for(let item of scriptCart){
                
                
                if(item.productName === productInput.value){
                    isItemAlreadyListed = true

                    item.quantity++

                    //item.price = item.price + priceSEK

                    productInput.value = null
                    priceInput.value = null
                    break
                }
                else {
                    isItemAlreadyListed = false
                }
            }

            if (!isItemAlreadyListed){
                scriptCart.push({productName: productInput.value, price: priceSEK, quantity: 1})

                productInput.value = null
                priceInput.value = null
            }

        }
        showCartList()
})


function addToCartList(){

    scriptCart.push({productName: productInput.value, price: priceSEK, quantity: 1})
    productInput.value = null
    priceInput.value = null
    

}


function increaseCartListItem() {

    item.quantity++

    productInput.value = null
    priceInput.value = null


}



function showCartList (){
    cartList.innerHTML =""

    for(item of scriptCart){

        const listItem = document.createElement("li")
        listItem.textContent = `${item.productName} - ${item.price}kr (x${item.quantity})`
        cartList.appendChild(listItem)

    }

}