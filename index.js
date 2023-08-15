//estructura previa
const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


// constantes y variables
const boton = document.getElementById("buttonNumber");
const inputNum = document.getElementById("inputNumber");
const printItem = document.getElementById("printContainer");
const alertError =document.getElementById("mySpan");


// funciones

/// busca si el input tiene un igual en las id de los elementos de pizza
const idComparator = () =>{
  let value = false;
  let idFilter = pizzas.filter( pizza => pizza.id == inputNum.value);
  if (idFilter.length === 0){
    //agregar mas
  }else{
    //agregar mas
    localStorage.setItem("pizza",JSON.stringify(idFilter[0]));
    value =true;
  }
  return value;
}
///verificar si el input esta vacio
const estaVacio = () =>{
  if (inputNum.value ===""){
    return true;
  }else{
    return false;
  }
}
/// creador de la card
const createItem = () =>{
  const printPizza = JSON.parse(localStorage.getItem("pizza"));
  printItem.innerHTML = 
  `<div class="card">
    <h2>${printPizza.nombre}</h2>
    <div class="containerPrecio">
      <span> $ ${printPizza.precio}</span>
    </div>
    <div class="containerListCard">
      <h2>Ingredientes</h2>
      <ul class="listCard">${printPizza.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join("")}</ul>
    </div>
    
    <img src="${printPizza.imagen}" alt="${printPizza.nombre}" class="imgCard">

  </div>`;
  return false
}

///funcion main
const getInput = (e) =>{
  e.preventDefault();

  if (estaVacio()) {
    alertError.innerText = "*Ingrese un ID";
    alertError.classList.remove("alertErrorNone");
    printItem.innerText="";
    return;
  }
  if(alertError.innerText === "*Ingrese un ID"){
    alertError.innerText ="*No existe el ID ingresado";
  }


  if (idComparator()){
    if(!alertError.classList.contains("alertErrorNone")){
      alertError.classList.add("alertErrorNone");
    };
    createItem();
    localStorage.clear();
  }else{
    alertError.classList.remove("alertErrorNone");
    printItem.innerText="";
  }



  inputNum.value ="";
}






/// funcion iniciadora
const init = () =>{
  boton.addEventListener("click",getInput);
}

init();



































