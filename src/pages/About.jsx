import "bootstrap/dist/css/bootstrap.min.css";
import "../style/about.css";

export default function About() {
  return (
    <>
      <section className="about-section d-flex align-items-center">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">About Our Store</h2>
            <p className="text-muted w-75 mx-auto">
              Welcome to <strong>Read & Relax</strong> 📚 — your trusted online
              bookstore. We provide a wide collection of books across different
              genres, making it easy for readers to explore, discover, and order
              their favorite titles. Our goal is to make reading more accessible
              and enjoyable for everyone.
            </p>
          </div>

          <div className="text-center">
            <h3 className="fw-bold mb-4">Meet the Team</h3>
            <div className="row justify-content-center">
              
              <div className="col-12 col-md-4 mb-4">
                <div className="card border-0 shadow-sm h-100 team-card">
                  <img
                    src="src/images/shehab.jpg"
                    alt="Shehab"
                    className="card-img-top rounded-circle p-3"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Shehab Hany</h5>
                    <p className="text-muted">Front-End Developer</p>
                    <div className="social-icons d-flex justify-content-center gap-3">
                      <a href="http://linkedin.com/in/shehab-hany-891a41327" className="text-primary fs-5" target="_blank">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://github.com/shehabhany4" className="text-black fs-5" target="_blank">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="https://www.facebook.com/shehab.alshbeny" className="text-primary fs-5" target="_blank">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-4">
                <div className="card border-0 shadow-sm h-100 team-card">
                  <img
                    src="src/images/abdelrhman.png"
                    alt="Abdelrahman"
                    className="card-img-top rounded-circle p-3"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Abdelrahman Gamal</h5>
                    <p className="text-muted">Front-End Developer</p>
                    <div className="social-icons d-flex justify-content-center gap-3">
                      <a href="https://www.linkedin.com/in/abdelrahman-gamal-a9635222a/" className="text-primary fs-5" target="_blank">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://github.com/Abdo8771" className="text-black fs-5" target="_blank">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="https://www.facebook.com/abdelrhman.gamal.643315" className="text-primary fs-5" target="_blank">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
