import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Home.css";
import Books from "./Books";
import Offer from "./Offer";

export default function Home() {
  return (
    <>
      <div className="home-split">
        <div className="left-side d-flex flex-column justify-content-center">
          <p className="branding">Book Store</p>

          <div className="read-card mt-3">
            <span className="read-main">Read&</span>{" "}
            <span className="read-sub">Relax</span>
          </div>

          <h2 className="title mt-4">UI-UX Case Study</h2>

          <p className="desc">
            Welcome to our Bookstore Website – your online gateway to a world of
            literary wonders. Explore diverse genres, discover new releases, and
            shop from the comfort of your home. With user-friendly navigation
            and secure transactions, our website is designed to make your
            book-buying experience seamless. Start your virtual book.
          </p>
        </div>

        <div className="right-side d-flex align-items-center justify-content-center">
          <div className="laptops">
            <img src="src/images/MacBook Pro 16.svg" className="laptop two" />
            <img src="src/images/MacBook Pro 17.svg" className="laptop one" />
          </div>
        </div>
      </div>
      <div id="products">
        <Books />
      </div>

      <div id="offers">
        <Offer />
      </div>

     
    </>
  );
}
