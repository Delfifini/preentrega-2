
class Sistema {
    constructor(recetas) {
        this.recetas = recetas
    }

    buscar_receta(){
        let receta_ingresada = prompt('Ingresá el nombre o parte del nombre de la receta').toUpperCase()

        let receta_encontrada = this.recetas.find((receta) => {
            if (receta.nombre.toUpperCase() == receta_ingresada) return receta
        })
        if(receta_encontrada) {
            alert(`Nombre: ${receta_encontrada.nombre} \n Contenido: ${receta_encontrada.contenido} \n`)
        } else {
            alert('No se encontró ninguna receta con ese nombre')
        }
    } 
    mostrar_recetas() {
        console.log(this.recetas)
        let recetas = this.recetas.map((receta, index) => {return `Nombre: ${receta.nombre} \n
         Contenido: ${receta.contenido} \n`})
        alert(`${recetas.join(`\n`)}`)
    }
    agregar_receta() {
        const nombre = prompt('Ingresá el nombre de tu receta')
        const contenido = prompt('Ingresá lons ingredientes y el procedimiento')
        const categoria = prompt('Ingresá la categoría de tu receta')
        this.recetas.push (new Receta(nombre, contenido, categoria))
    }
}