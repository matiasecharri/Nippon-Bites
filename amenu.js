//Con esta funcion voy a consumir mi API, es importante que sea una async para indicar que su ejecución no bloqueará el hilo principal y, por lo tanto, la interfaz de usuario no se congelará mientras se realiza la llamada a la API.

//Son 4 pasos al momento de consumir una JSON.API:
// 1: Crear funcion asincrona para no congelar la pagina mientras se obtengan los datos

// 2: Declarar una variable e igualarla a await fetch(colocandoaqui el link de la api) espera hasta que la promesa devuelta por fetch se complete antes de continuar con la ejecución del código. Sin el uso de await, la respuesta de la API no sería accesible hasta que se complete. Esto podría resultar en una respuesta no disponible cuando se intenta acceder a ella más adelante en el código. Con await, se asegura que la respuesta esté disponible antes de intentar acceder a ella.

// 3: Igualar nuestra variable que contiene todo lo de la API a await ____.json() para transformarlo a formato json y poder utilizarla, se hace para convertir la respuesta del servidor que se recibe en formato JSON (JavaScript Object Notation), lo cual lo convierte en un objeto de JavaScript manipulable. Si no se hiciera dataApi.json(), se recibiría la respuesta en formato binario y no podrías acceder a su contenido de manera sencilla..

// 4: Inicializar la funcion asincrona.

async function consumirApi() {
  let nipponApi = await fetch(
    "https://my-json-server.typicode.com/matiasecharri/nippon-bites/products"
  );
  nipponApi = await nipponApi.json();
  console.log(nipponApi); // Aca en mi variable nipponApi tengo todos los datos de mi API listos para ser usados
  printer(nipponApi)
  
}
consumirApi(); //Ejecuto consumir API



//Definimos la función con la que vamos a imprimir, es importante que se ejecute dentro de la función async
let containercards = document.getElementById("menumain")
function printer(arreglo) {
    for (i = 0; i < arreglo.length; i++) {
       containercards.innerHTML += `<div class="card">
       <div class="cardimage">
         <img src="${arreglo[i].photo}">
       </div>
       <div class="descriptioncontainercard">
       <h3>${arreglo[i].name}</h3>
       <p>${arreglo[i].description}     
       </p>
       <div class="pricecard"> Price: ${arreglo[i].pricex5} USD</div>
       <button> 私を食べなさい</button>
     </div>
     </div>`
    }
   
  }