let btnDesordenar = document.querySelector("#btnDesordenar");

btnDesordenar.addEventListener('click',()=>{
   let columnas = document.querySelectorAll(".container>div:first-child>div.col");
   columnas[0].classList.add("order-3");
   columnas[1].classList.add("order-1");
   columnas[2].classList.add("order-2");
});