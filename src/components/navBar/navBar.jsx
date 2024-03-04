import { Badge, Popover } from 'antd'
import './navBar.scss'

const contentShop = (
  <div>
    <ul>
      <li><a href="#products" className="content ">Remeras</a></li>
      <li><a href="#products" className="content">Buzos</a></li>
    </ul>
  </div>
);

const contentColecctions = (
  <div>
    <a href="#products" className="nav-links content">Edicion Limitada</a>
  </div>
);

function NavBar() {
  const count = 2
  return (
    <nav>

      <div className='nav-container'>
        <div>
          <ul>
            <Popover content={contentShop} title="Productos">
              <li><a href="#products" className="nav-links">Shop</a></li>
            </Popover>
            <Popover content={contentColecctions} title="Coleccion">
              <li><a href="#products" className="nav-links">Otras Colecciones</a></li>
            </Popover>
          </ul>
        </div>
        <div>
          <a href="#" className="enlace">
            <img src="/flameLogo.png" alt="Icono" style={{ height: '60px' }} className='logo' />
          </a>
        </div>
        <div style={{ width: '20%', textAlign: 'end' }}>
          <Badge count={count} size="small">
            <i className="fas fa-shopping-bag bagicon" style={{ fontSize: 22, marginRight: '10px' }}></i>
          </Badge>
        </div>
        <div className='bag-shopping'>
          <input type='checkbox' id='check'></input>
          <label htmlFor='check' className='checkbtn'>
            <i className='fas fa-bars bagicon' />
          </label>
          <ul>
            <li><a href="#products" className="nav-links">Shop</a></li>
            <li><a href="#products" className="nav-links">Otras Colecciones</a></li>
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default NavBar
