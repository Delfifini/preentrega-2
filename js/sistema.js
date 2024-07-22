

class Sistema {
    costructor(recetas) {
        this.recetas = recetas
    }

    buscar_receta(){
        let receta_ingresada = prompt('Ingresá el nombre o parte del nombre de la receta').toUpperCase()

        let receta_encontrada = this.recetas.find((receta) => receta.nombre.toUpperCase == receta_ingresada)
        if(receta_encontrada) {
            alert(`
                ${receta_encontrada.nombre}
                ${receta_encontrada.contenido}`)
        } else {
            alert('No se encontró ninguna receta con ese nombre')
        }
    } 
    mostrar_recetas() {
        alert('${recetas}')
    }
    agregar_receta() {
        const nombre = prompt('INgresá el nombre de tu receta')
        const contenido = prompt('Ingresá lons ingredientes y el procedimiento')
        const categoria = prompt('Ingresá la categoría de tu receta')
        this.recetas.push (new Receta(nombre, contenido, categoria))
    }
}