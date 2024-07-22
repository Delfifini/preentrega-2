const sis = new Sistema(recetas)

let menu_recetas = `
Bienvenido a tu recetario
Elegí una opción:
Ingresá 1 para buscar una receta 
Ingresá 2 para consultar todas las recetas
Ingresá 3 para agregar una receta
`
let i = 0

while (true) {
    let opcion = Number(prompt(menu_recetas))
    if (opcion == 1) {
        sis.buscar_receta()
    } else if (opcion == 2) {
        sis.mostrar_recetas
    } else if (opcion == 3 ) {
        sis.agregar_receta
    } else {
        alert(`Opción incorrecta`)
    }
    if (confirm('¿Salir del menú?')){
        break
    }

    }
