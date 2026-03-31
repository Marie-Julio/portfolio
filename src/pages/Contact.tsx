import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Gestion de l'envoi du formulaire sans rechargement
    const form = formRef.current;
    if (form) {
      const handleSubmit = (e: Event) => {
        e.preventDefault();
        alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
        form.reset();
      };
      form.addEventListener('submit', handleSubmit);
      return () => form.removeEventListener('submit', handleSubmit);
    }
  }, []);

  return (
    <Layout>
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="">
          <div className="row d-flex no-gutters w-full">
            <div className="col-lg-7 col-md-6 order-md-last d-flex align-items-stretch">
              <div className="contact-wrap w-100 p-md-5 p-4">
                <h3 className="mb-4 heading">Envoyez-moi un message</h3>
                <form ref={formRef} method="POST" id="contactForm" name="contactForm" className="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="label" htmlFor="name">Nom complet</label>
                        <input type="text" className="form-control" name="name" id="name" placeholder="Votre nom" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="label" htmlFor="email">Adresse email</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="subject">Sujet</label>
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Sujet" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="message">Message</label>
                        <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Votre message..."></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="submit" value="Envoyer le message" className="btn btn-primary" />
                        <div className="submitting"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 d-flex align-items-stretch">
              <div className="info-wrap js-fullheight bg-primary w-100 p-md-5 p-4" style={{ background: '#F96D00 !important' }}>
                <h3>Mes coordonnées</h3>
                <p className="mb-4">Disponible pour des missions freelance, CDI ou collaborations open-source.</p>
                <div className="dbox w-100 d-flex align-items-start">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-map-marker"></span>
                  </div>
                  <div className="text pl-3 mt-2">
                    <p><span>Adresse :</span> Abomey-Calavi, Bénin</p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="text pl-3">
                    <p><span>Téléphone :</span> <a href="tel://+2290152228706">+229 01 52 22 87 06</a></p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-paper-plane"></span>
                  </div>
                  <div className="text pl-3">
                    <p><span>Email :</span> <a href="mailto:mariejuliobricedjego@gmail.com">mariejuliobricedjego@gmail.com</a></p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-github"></span>
                  </div>
                  <div className="text pl-3">
                    <p><span>GitHub :</span> <a href="https://github.com/Marie-Julio">github.com/Marie-Julio</a> (sur demande)</p>
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

export default Contact;