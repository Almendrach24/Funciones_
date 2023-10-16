let colorGlobal;

document.addEventListener("keydown", function(event) {

const tecla = event.key;

const colores = {
    a: "pink",
    s: "orange",
    d: "lightblue",
    q: "purple",
    w: "gray",
    e: "brown",
  };

  if (colores.hasOwnProperty(tecla)) {
        colorGlobal = colores[tecla];
        if (tecla === "a" || tecla === "s" || tecla === "d") {
          const keyDiv = document.getElementById("key");
          keyDiv.style.backgroundColor = colorGlobal;
          
        } else {
          
          const nuevoDiv = document.createElement("div");
          nuevoDiv.className = "box";
          nuevoDiv.style.backgroundColor = colorGlobal;
          document.body.appendChild(nuevoDiv);
        }
      }
    });


