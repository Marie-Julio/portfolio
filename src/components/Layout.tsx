import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initDynamicPlugins } from '../utils/initDynamicPlugins';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      initDynamicPlugins();
    }, 0);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // Fonction pour déterminer si un lien est actif
  const isActive = (path: string) => location.pathname === path;

  return (
    <div id="colorlib-page">
      <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
      <aside id="colorlib-aside" role="complementary" className="js-fullheight">
        <h1 id="colorlib-logo" className="mb-4 mb-md-5">
          <a href="/" style={{ backgroundImage: 'url(/assets/images/bg_1.jpg)' }}>
            Brice DJEGO
          </a>
        </h1>
        <nav id="colorlib-main-menu" role="navigation">
          <ul>
            <li className={isActive('/') ? 'colorlib-active' : ''}>
              <a href="/">Accueil</a>
            </li>
            <li className={isActive('/projets') ? 'colorlib-active' : ''}>
              <a href="/projets">Réalisations</a>
            </li>
            <li className={isActive('/about') ? 'colorlib-active' : ''}>
              <a href="/about">À propos</a>
            </li>
            <li className={isActive('/competences') ? 'colorlib-active' : ''}>
              <a href="/competences">Compétences</a>
            </li>
            <li className={isActive('/contact') ? 'colorlib-active' : ''}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="colorlib-footer">
          <div className="mb-4">
            <h3>Disponible</h3>
            <p>N'hésitez pas à me contacter pour vos projets web.</p>
          </div>
          <p className="pfooter">
            Copyright &copy; {new Date().getFullYear()} | Brice DJEGO<br />
          </p>
        </div>
      </aside>

      <div id="colorlib-main">
        {children}
      </div>
    </div>
  );
};

export default Layout;