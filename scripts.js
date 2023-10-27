let list = document.querySelector("ul")
const ForEachButton = document.querySelector("#ForEach-button")
const MapButton = document.querySelector("#Map-button")
const SumAllButton = document.querySelector("#Reduce-button")
const FilterButton = document.querySelector("#Filter-button")

function formatCurrency(value){
    const newValue = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    return newValue 
}


function showAll(productsArray){

    let text=''

    productsArray.forEach(item=>{
    text+= `<li>
    <img src="${item.src}" alt="hamburguer-picture" class="image-food">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${formatCurrency(item.price)}</p>
    </li>`
    })

    list.innerHTML=text
}

function discountPrice(){
    const newList = menuOptions.map((item)=>({
        ...item,  //ele pega todos os caras que não serão alterados e mantem original
        price: item.price*0.9,
    }))

    //console.log(newList)

    showAll(newList)

}

function sumAllProdutcs(){

    const totalValue = menuOptions.reduce((acumulator, actualValue)=>{
        return acumulator + actualValue.price 
    },0)

    console.log(totalValue)


    list.innerHTML=`<li>
    <p class="food-name">O valor total da compra</p>
    <br>
    <p class="food-name"> foi de: ${formatCurrency(totalValue)}</p>
    </li>`

}

function filterVeganProducts(){


    const newList = menuOptions.filter((line)=> line.vegan) //como itens da coluna price são true ou false então basta declarar line.vegan, se for true ela passa

    console.log(newList)

    showAll(newList)


}

ForEachButton.addEventListener('click', ()=>showAll(menuOptions))
MapButton.addEventListener('click', discountPrice)
SumAllButton.addEventListener('click', sumAllProdutcs)
FilterButton.addEventListener('click', filterVeganProducts)
