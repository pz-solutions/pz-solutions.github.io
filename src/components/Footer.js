import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Dane kontaktowe</h2>
            <dl className="alt">
                <dt>Adres</dt>
                <dd>ul. Obrzeżna 1D/177 &bull; 02-691, Warszawa &bull; Polska</dd>
                <dt>NIP</dt>
                <dd>797-174-35-23</dd>
                <dt>Email</dt>
                <dd><a href="mailto:biuro@pz-solutions.pl">biuro@pz-solutions.pl</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://twitter.com/wooboox" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/pz-solutions" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; PZ Solutions. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
