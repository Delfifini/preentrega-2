let budin = new Receta('Budin', 'ingredientes y procedimiento', 0)
let cookies =  new Receta('Cookies', 'ingredientes y procedimiento', 0)
let pizza = new Receta('Pizza','ingredientes y procedimiento', 1)

let recetas = [budin, cookies, pizza]

const sis = new Sistema(recetas)

let menu_recetas = `
Bienvenido a tu recetario
Elegí una opción:
Ingresá 1 para buscar una receta 
Ingresá 2 para consultar todas las recetas
Ingresá 3 para agregar una receta
`
let i = 0
let loop =true

while (loop) {
    let opcion = Number(prompt(menu_recetas))
    if (opcion == 1) {
        sis.buscar_receta()
    } else if (opcion == 2) {
        sis.mostrar_recetas()
    } else if (opcion == 3 ) {
        sis.agregar_receta()
    } else if (opcion == 4 ){
        loop = false
        confirm('¿Salir del menú?')
    } else {
        alert(`Opción incorrecta`)
    }
}
