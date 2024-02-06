import './footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="container-footer">
                <div className="footer-info">
                    <h3>Contacto</h3>
                    <p>Calle Falsa 123, Santa Clara del Mar</p>
                    <p>(123) 456-7890</p>
                    <p>tiendaflame@gmail.com</p>
                    <a href="https://www.instagram.com/theflame.ind?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Tienda de Indumentaria. Todos los derechos reservados.</p>
            </div>
        </footer >
    )
}

export default Footer
