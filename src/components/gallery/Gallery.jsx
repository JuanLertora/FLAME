import './gallery.scss'

function Gallery() {
    const productos = [
        {
            id: 1,
            nombre: "Camisa de algodón",
            categoria: "Camisas",
            precio: 29.99,
            color: "Blanco",
            talla: "M",
            imagen: "camisa-algodon-blanco.jpg",
            descripcion: "Camisa de algodón de manga larga, ideal para ocasiones formales.",
        },
        {
            id: 2,
            nombre: "Pantalón chino",
            categoria: "Pantalones",
            precio: 39.99,
            color: "Negro",
            talla: "L",
            imagen: "pantalon-chino-negro.jpg",
            descripcion: "Pantalón chino de tela suave y cómoda, perfecto para el día a día.",
        },
        {
            id: 3,
            nombre: "Vestido floral",
            categoria: "Vestidos",
            precio: 49.99,
            color: "Azul",
            talla: "S",
            imagen: "vestido-floral-azul.jpg",
            descripcion: "Vestido corto con estampado floral, ideal para la primavera.",
        },
        // Agrega más productos según sea necesario
    ];

    return (
        <div className="catalogo">
          {productos.map((producto) => (
            <div key={producto.id} className="producto">
              <img src={producto.imagen} alt={producto.nombre} className="imagen-producto" />
              <div className="descripcion-producto">
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p>Precio: ${producto.precio}</p>
              </div>
            </div>
          ))}
        </div>
      );
}

export default Gallery
