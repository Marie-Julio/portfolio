import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
        <div className="container-fluid px-0">
          <div className="row d-flex">
            <div className="col-md-6 d-flex">
              <div
                className="img d-flex align-self-stretch align-items-center js-fullheight"
                style={{ backgroundImage: 'url("../../public/assets/images/me.jpg")' }}
              ></div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="text px-4 pt-5 pt-md-0 px-md-4 pr-md-5">
                <h2 className="mb-4">
                  Bonjour, je suis <span>Marie-Julio Brice DJEGO</span><br />Développeur Full Stack
                </h2>
                <p>
                  Spécialisé dans le développement d'applications web modernes avec React, Next.js et TypeScript, je suis développeur full stack avec <strong>5 ans d'expérience</strong>. Je conçois des solutions performantes, maintenables et fiables, en appliquant une rigueur et une exigence de qualité à chaque étape.
                </p>
                <div className="team-wrap row mt-4">
                  <div className="col-md-4 team">
                    <div className="img" style={{ backgroundImage: 'url(https://cdn-icons-png.flaticon.com/512/1055/1055687.png)' }}></div>
                    <h3>Frontend</h3>
                    <span>React · Next.js · TypeScript · Tailwind</span>
                  </div>
                  <div className="col-md-4 team">
                    <div className="img" style={{ backgroundImage: 'url(https://cdn-icons-png.flaticon.com/512/4248/4248445.png)' }}></div>
                    <h3>Backend</h3>
                    <span>Node.js · Laravel · Flask · REST API</span>
                  </div>
                  <div className="col-md-4 team">
                    <div className="img" style={{ backgroundImage: 'url(https://cdn-icons-png.flaticon.com/512/919/919851.png)' }}></div>
                    <h3>DevOps</h3>
                    <span>Docker · CI/CD · GitHub Actions</span>
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

export default About;