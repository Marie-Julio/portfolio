import Layout from '../components/Layout';

const Pricing = () => {
  return (
    <Layout>
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container px-md-0">
          <div className="row d-flex no-gutters">
            {/* Carte 1 : Frontend Expert */}
            <div className="col-md-3 pricing">
              <div className="row no-gutters align-items-center">
                <div
                  className="img w-100 js-fullheight d-flex align-items-center"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80)',
                  }}
                >
                  <div className="text p-4 ftco-animate">
                    <h3>Frontend Expert</h3>
                    <ul>
                      <li>
                        <span>React.js / Next.js</span> Interfaces modernes
                      </li>
                      <li>
                        <span>TypeScript</span> Code typé et robuste
                      </li>
                      <li>
                        <span>Tailwind CSS</span> Design responsive
                      </li>
                      <li>
                        <span>Performance</span> SEO & Web Vitals
                      </li>
                      <li>
                        <span>Tests</span> Jest / React Testing Library
                      </li>
                    </ul>
                    <span className="price">Full Stack</span>
                    <p>
                      <a href="/contact" className="btn-custom">
                        Contact
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte 2 : Backend & API */}
            <div className="col-md-3 pricing">
              <div className="row no-gutters align-items-center">
                <div
                  className="img w-100 js-fullheight d-flex align-items-center"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80)',
                  }}
                >
                  <div className="text p-4 ftco-animate">
                    <h3>Backend & API</h3>
                    <ul>
                      <li>
                        <span>Node.js / Express</span> API REST performantes
                      </li>
                      <li>
                        <span>Laravel / Flask</span> Frameworks robustes
                      </li>
                      <li>
                        <span>Swagger</span> Documentation d'API
                      </li>
                      <li>
                        <span>Authentification</span> JWT, OAuth2
                      </li>
                      <li>
                        <span>Architecture</span> Microservices
                      </li>
                    </ul>
                    <span className="price">Scalable</span>
                    <p>
                      <a href="/contact" className="btn-custom">
                        Contact
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte 3 : Bases de données & DevOps */}
            <div className="col-md-3 pricing">
              <div className="row no-gutters align-items-center">
                <div
                  className="img w-100 js-fullheight d-flex align-items-center"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80)',
                  }}
                >
                  <div className="text p-4 ftco-animate">
                    <h3>DB & DevOps</h3>
                    <ul>
                      <li>
                        <span>PostgreSQL / MySQL</span> SQL avancé
                      </li>
                      <li>
                        <span>MongoDB / Redis</span> NoSQL, caching
                      </li>
                      <li>
                        <span>Docker</span> Conteneurisation
                      </li>
                      <li>
                        <span>CI/CD</span> GitHub Actions
                      </li>
                      <li>
                        <span>Cloud</span> Déploiement (AWS, VPS)
                      </li>
                    </ul>
                    <span className="price">Cloud Ready</span>
                    <p>
                      <a href="/contact" className="btn-custom">
                        Contact
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte 4 : Méthodologies & Outils */}
            <div className="col-md-3 pricing">
              <div className="row no-gutters align-items-center">
                <div
                  className="img w-100 js-fullheight d-flex align-items-center"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80)',
                  }}
                >
                  <div className="text p-4 ftco-animate">
                    <h3>Méthodologies</h3>
                    <ul>
                      <li>
                        <span>Agile / Scrum</span> Gestion de projet
                      </li>
                      <li>
                        <span>Kanban</span> Flux de travail efficace
                      </li>
                      <li>
                        <span>Git</span> Contrôle de version
                      </li>
                      <li>
                        <span>Tests unitaires</span> Qualité logicielle
                      </li>
                      <li>
                        <span>Continuous Delivery</span> Livraison continue
                      </li>
                    </ul>
                    <span className="price">Agile</span>
                    <p>
                      <a href="/contact" className="btn-custom">
                        Contact
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;