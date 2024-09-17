const misProductos = [
    { id: "1", nombre: "Mercurial", stock: 10, precio: 15000, img: "assets/nike/nike blanco reac gato.jpg", idCat: "Nike" },
    { id: "2", nombre: "Lunar-2", stock: 10, precio: 14000, img: "assets/nike/nike lunar 2.jpg", idCat: "Nike" },
    { id: "3", nombre: "Top Sala", stock: 10, precio: 13000, img: "assets/adidas/top sala blanco.jpg", idCat: "Adidas" },
    { id: "4", nombre: "joma 3", stock: 10, precio: 12000, img: "", idCat: "Joma" },
    { id: "5", nombre: "joma 4", stock: 10, precio: 12000, img: "", idCat: "Joma" },
    { id: "6", nombre: "Top Flex", stock: 10, precio: 12000, img: "assets/nike/nike blanco reac gato.jpg", idCat: "Nike" },
    { id: "7", nombre: "Top Flex", stock: 10, precio: 12000, img: "assets/nike/lunar gato1.jpg", idCat: "Nike" },
    { id: "8", nombre: "Tiempo-amarillo", stock: 10, precio: 12000, img: "assets/nike/tiempo amarillo.jpg", idCat: "Nike" },
    { id: "9", nombre: "Predator-2", stock: 10, precio: 12000, img: "assets/adidas/predator 2.jpg", idCat: "Adidas" },
    { id: "10", nombre: "Predator-1", stock: 10, precio: 12000, img: "assets/adidas/predator 1.jpg", idCat: "Adidas" },
    { id: "11", nombre: "joma 2", stock: 10, precio: 12000, img: "assets/joma/joma 2.webp", idCat: "Joma" },
    { id: "12", nombre: "joma 5", stock: 10, precio: 12000, img: "", idCat: "Joma" },
    { id: "13", nombre: "nike th", stock: 10, precio: 12000, img: "assets/nike/nike th.jpg", idCat: "Nike" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })
}

export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productos = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productos)
        }, 100)
    })
}
