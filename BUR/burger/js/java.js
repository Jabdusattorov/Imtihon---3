let total = document.querySelector(".total")
let a = 2
total.textContent = `Total: ${a} $`

const burger = document.querySelector(".ingr")

const reset = document.querySelector(".reset")
const submit = document.querySelector(".submit")

const tomato = document.querySelector(".btn-tomato")
const onion = document.querySelector(".btn-onion")
const cheese = document.querySelector(".btn-cheese")
const meat = document.querySelector(".btn-meat")
const salad = document.querySelector(".btn-salad")
const pickle = document.querySelector(".btn-pickle")

const data = ["tomato", "onion", "cheese", "meat", "salad", "pickle",]

tomato.addEventListener("click", function(){
  const tomatoBox = document.createElement("img")
  tomatoBox.setAttribute("src", "./burger-layers/tomato.svg")
  tomatoBox.setAttribute("data-product", "tomato")
  a += 1
  total.textContent = `Total: ${a} $`
  burger.append(tomatoBox)
})

onion.addEventListener("click", function(){
  const onionBox = document.createElement("img")
  onionBox.setAttribute("src", "./burger-layers/onion.svg")
  onionBox.setAttribute("data-product", "onion")
  a += 1
  total.textContent = `Total: ${a} $`
  burger.append(onionBox)
})

cheese.addEventListener("click", function(){
  const cheeseBox = document.createElement("img")
  cheeseBox.setAttribute("src", "./burger-layers/cheese.svg")
  cheeseBox.setAttribute("data-product", "cheese")
  a += 2
  total.textContent = `Total: ${a} $`
  burger.append(cheeseBox)
})

meat.addEventListener("click", function(){
  const meatBox = document.createElement("img")
  meatBox.setAttribute("src", "./burger-layers/meat.svg")
  meatBox.setAttribute("data-product", "meat")
  a += 3
  total.textContent = `Total: ${a} $`
  burger.append(meatBox)
})

salad.addEventListener("click", function(){
  const saladBox = document.createElement("img")
  saladBox.setAttribute("src", "./burger-layers/salad.svg")
  saladBox.setAttribute("data-product", "salad")
  a += 2
  total.textContent = `Total: ${a} $`
  burger.append(saladBox)
})

pickle.addEventListener("click", function(){
  const pickleBox = document.createElement("img")
  pickleBox.setAttribute("src", "./burger-layers/pickle.svg")
  pickleBox.setAttribute("data-product", "pickle")
  a += 1
  total.textContent = `Total: ${a} $`
  burger.append(pickleBox)
})

burger.addEventListener("click", (e) => {
  if(data.includes(e.target.dataset.product)){
    burger.removeChild(e.target)
  }
  if(e.target.dataset.product = data[0]){
    a -= 1
    total.textContent = `Total: ${a} $`
  }
  if(e.target.dataset.product = data[3]){
    a -= 3
    total.textContent = `Total: ${a} $`
  }
  console.log(e.target);
})

console.log(data[3]);

reset.addEventListener("click", ()=>{
  burger.innerHTML = ""
  a = 2
  total.textContent = `Total: ${a} $`
})
submit.addEventListener("click", ()=>{
  let r = Math.floor(Math.random() * (35 - 10 + 1)) + 10
  if(a < 4){
    alert("iltmimos buyurtmani to'g'ri tanlang!")
  }else if(a >= 4){
    alert(`Buyurtmangiz qabul qilindi!!! Sizning navbat raqamingiz ${r}`)
  }
})