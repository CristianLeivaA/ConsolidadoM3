const producto = 
 [  
    {
        id:1,
        nombre: 'leche',
        precio: 1000,
    },
    {
        id:2,
        nombre:'Pan de Molde',
        precio: 2000,
    },
     {
        id:3,
        nombre: 'Queso',
        precio: 1200,
        },
        {
            id:4,
            nombre: 'Mermelada',
            precio: 890,
        },

        {
            id:5,
            nombre: 'Azucar',
            precio: 1300,
            }


]

// vista de productos 
var root = document.querySelector('#root');

        producto.forEach(productos => {
        const cards = document.createElement('div') 
        cards.classList.add('col-12','col-lg-3','col-sm-5','border','border-2','m-1','h-auto','d-lg-inline-block','d-inline-block');
         cards.innerHTML = 

           `   
           <form  id="contactForm" action="">           
           <div class="p-3 cardsProducto " "id='${productos.id}'>           
              
                    <div class="card-body">
                    
                    <h5 id="nameproducto" value="${productos.id}" class="card-title titulos text-center pt-sans-bold fs-3 mt-4">${productos.nombre}</h5>
                    <p id="precioProducto" class="card-text mt-5 fs-5 pt-sans-regular">${productos.precio}</p>
                    <div><input type="number" value="1" min="1" id="cantidad"></input></div>
                    <button type="submit" value="submit" onclick="AgregarAlCarrito()" id="btn-add">Agregar</button>
                    </div>
                     
           </div></form> `
        root.appendChild(cards) 
        });

//funcion de selecion de datos de producto

//pendiente de resolver obtener datos de form y enviar a carrito


function AgregarAlCarrito(){
var carrito = new Array();

var carritoArray = document.querySelector('contactForm'),

idProductoCarrito = document.querySelector('id')


idCantidadProducto = document.querySelector('cantidad')

carrito.push(idProductoCarrito, idCantidadProducto)



};




  








 let carrito =[]

    
 //clase carrito, array de carrito para mostrar los productos seleccionados
  
    

  
// agregar producto