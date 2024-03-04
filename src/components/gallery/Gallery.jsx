import { useEffect, useState } from 'react';
import { getDataCache, getGalleryPhotos, imageUrl } from './utils';
import './gallery.scss'

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!getDataCache(setPhotos, setIsLoading)) {
          // Si los datos no están en caché, realiza la petición y almacena los datos en caché
          const { photos, success } = await getGalleryPhotos();
          if (success) setPhotos(photos.photo);
          setIsLoading(false);
        }
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;

      nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
      })

      preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
      })
    })
  }, [photos])
  console.log(error, isLoading)

  function renderDescription(producto) {
    const descripcion = {};
    producto.split(';').forEach(elemento => {
      const [clave, valor] = elemento.split(':');
      descripcion[clave.trim()] = valor.trim();
    });
    return (
      <div style={{ textAlign: 'start' }}>
        {Object.keys(descripcion).map((des, index) => {
          return (
            <div key={index}>
              {
                index === 0 ? <h2 className="product-brand">{descripcion[des]}</h2>
                  : index === 1 ? <p className="product-short-description">{descripcion[des]}</p> :
                    <span className="price">${descripcion[des]}</span>
              }
            </div>
          )
        })}
      </div>
    )
  }

  function onClickAdd(product) {
    console.log(product)
  }

  return (
    isLoading ? <div className="loader"></div> :
      <section className="product" id='products'>
        <h6 className="product-category">DROPS | Coleccion</h6>
        <button className="pre-btn"><img src="images/arrow.png" alt="" /></button>
        <button className="nxt-btn"><img src="images/arrow.png" alt="" /></button>
        <div className="product-container">
          {photos.map((producto) => (
            <div key={producto.id} className="product-card">
              <div className="product-image">
                <img src={imageUrl(producto)} alt={producto.id} className="product-thumb" />
                <button className="card-btn" onClick={() => onClickAdd(producto)}>Agregar al Carrito</button>
              </div>
              <div className="product-info">
                {renderDescription(producto.title)}
              </div>
            </div>
          ))}
          {/* <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="images/card1.jpg" className="product-thumb" alt="" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="images/card2.jpg" className="product-thumb" alt="" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="images/card3.jpg" className="product-thumb" alt="" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="images/card4.jpg" className="product-thumb" alt="" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="images/card5.jpg" className="product-thumb" alt="" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="images/card6.jpg" className="product-thumb" alt="" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="images/card7.jpg" className="product-thumb" alt="" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="images/card8.jpg" className="product-thumb" alt="" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="images/card9.jpg" className="product-thumb" alt="" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img src="images/card10.jpg" className="product-thumb" alt="" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the cloth..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
          </div>
        </div>
      </div> */}
        </div>

      </section>
  );
}

export default Gallery
