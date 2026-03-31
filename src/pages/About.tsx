import Layout from '../components/Layout';
import { useEffect } from 'react';

const About = () => {
  // Découpage du nom en lettres pour l'animation
  const fullName = "Marie-Julio Brice DJEGO";
  const nameLetters = fullName.split("");

  useEffect(() => {
    // Permet de déclencher les animations au montage (optionnel)
  }, []);

  return (
    <Layout>
      <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
        <div className="container-fluid px-0">
          <div className="row d-flex">
            {/* Colonne image */}
            <div className="col-md-6 d-flex animate-fade-up">
              <div
                className="img d-flex align-self-stretch align-items-center js-fullheight"
                style={{ backgroundImage: 'url("../../public/assets/images/me.jpg")' }}
              ></div>
            </div>

            {/* Colonne texte */}
            <div className="col-md-6 d-flex align-items-center animate-fade-up">
              <div className="text px-4 pt-5 pt-md-0 px-md-4 pr-md-5">
                <h2 className="mb-4">
                  Bonjour, je suis <br />
                  <span className="animated-name">
                    {nameLetters.map((letter, index) => (
                      <span
                        key={index}
                        className="name-letter"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </span>
                    ))}
                  </span>
                  <br />
                  Développeur Full Stack
                </h2>
                <p>
                  Spécialisé dans le développement d'applications web modernes avec React, Next.js et TypeScript, je suis développeur full stack avec <strong>5 ans d'expérience</strong>. Je conçois des solutions performantes, maintenables et fiables, en appliquant une rigueur et une exigence de qualité à chaque étape.
                </p>

                <div className="team-wrap row mt-4">
                  <div className="col-md-4 team animate-fade-up">
                    <div className="img team-img-1"></div>
                    <h3>Frontend</h3>
                    <span>React · Next.js · TypeScript · Tailwind</span>
                  </div>
                  <div className="col-md-4 team animate-fade-up">
                    <div className="img team-img-2"></div>
                    <h3>Backend</h3>
                    <span>Node.js · Laravel · Flask · REST API</span>
                  </div>
                  <div className="col-md-4 team animate-fade-up">
                    <div className="img team-img-3"></div>
                    <h3>DevOps</h3>
                    <span>Docker · CI/CD · GitHub Actions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ---------- Animation d'apparition ---------- */
        .animate-fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s ease forwards;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ---------- Animation des lettres du nom ---------- */
        .animated-name {
          display: inline-block;
        }

        .name-letter {
          display: inline-block;
          animation: letterPop 0.3s ease forwards;
          opacity: 0;
          transform: scale(0.8);
        }

        @keyframes letterPop {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2); /* grossit de 120% */
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* ---------- Images des cartes avec effet météorite (une seule couleur) ---------- */
        .team .img {
          width: 80px;
          height: 80px;
          margin: 0 auto 1rem;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
        }

        /* Icônes */
        .team-img-1 {
          background-image: url('https://cdn-icons-png.flaticon.com/512/1055/1055687.png');
        }
        .team-img-2 {
          background-image: url('https://cdn-icons-png.flaticon.com/512/4248/4248445.png');
        }
        .team-img-3 {
          background-image: url('https://cdn-icons-png.flaticon.com/512/919/919851.png');
        }

        /* Pseudo-élément pour la lumière tournante (météorite avec traînée) */
        .team .img::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 300deg,
            /* La couleur de la lumière */
            rgba(255, 80, 80, 0.9) 310deg,
            rgba(255, 80, 80, 0.4) 320deg,
            transparent 330deg,
            transparent 360deg
          );
          animation: rotateLight 3s linear infinite;
          filter: blur(4px); /* crée l'effet de traînée */
          z-index: -1;
        }

        /* Couleurs différentes pour chaque icône */
        .team-img-1::after {
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 300deg,
            rgba(255, 80, 80, 0.9) 310deg,
            rgba(255, 80, 80, 0.4) 320deg,
            transparent 330deg,
            transparent 360deg
          );
        }
        .team-img-2::after {
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 300deg,
            rgba(80, 255, 80, 0.9) 310deg,
            rgba(80, 255, 80, 0.4) 320deg,
            transparent 330deg,
            transparent 360deg
          );
        }
        .team-img-3::after {
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 300deg,
            rgba(80, 80, 255, 0.9) 310deg,
            rgba(80, 80, 255, 0.4) 320deg,
            transparent 330deg,
            transparent 360deg
          );
        }

        @keyframes rotateLight {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Ajustement responsive */
        @media (max-width: 768px) {
          .team .img {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default About;