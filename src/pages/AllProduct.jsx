import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useCart } from "./CartContext";

export default function AllProduct() {
  const { addToCart } = useCart();

  const books = [
    {
      id: 8,
      title: "Dead of Winter",
      author: "Darcy Coates",
      price: 40,
      img: "src/images/Group 34250.svg",
    },
    {
      id: 9,
      title: "Fortune Favors the Healed",
      author: "Madeline Eve Pregulman",
      price: 25,
      img: "src/images/Group 34231.svg",
    },
    {
      id: 10,
      title: "The Power of Crystals",
      author: "Juliet Madison",
      price: 25,
      img: "src/images/Group 34234.svg",
    },
    {
      id: 11,
      title: "Bombmaker",
      author: "Daniel Davies",
      price: 25,
      img: "src/images/Group 34235.svg",
    },
    {
      id: 12,
      title: "Dead of Winter",
      author: "Darcy Coates",
      price: 40,
      img: "src/images/Group 34250.svg",
    },
    {
      id: 13,
      title: "Fortune Favors the Healed",
      author: "Madeline Eve Pregulman",
      price: 25,
      img: "src/images/Group 34231.svg",
    },
    {
      id: 14,
      title: "The Power of Crystals",
      author: "Juliet Madison",
      price: 25,
      img: "src/images/Group 34234.svg",
    },
    {
      id: 15,
      title: "Bombmaker",
      author: "Daniel Davies",
      price: 25,
      img: "src/images/Group 34235.svg",
    },
    {
      id: 16,
      title: "Dead of Winter",
      author: "Darcy Coates",
      price: 40,
      img: "src/images/Group 34250.svg",
    },
    {
      id: 17,
      title: "Fortune Favors the Healed",
      author: "Madeline Eve Pregulman",
      price: 25,
      img: "src/images/Group 34231.svg",
    },
    {
      id: 18,
      title: "The Power of Crystals",
      author: "Juliet Madison",
      price: 25,
      img: "src/images/Group 34234.svg",
    },
    {
      id: 19,
      title: "Bombmaker",
      author: "Daniel Davies",
      price: 25,
      img: "src/images/Group 34235.svg",
    },
    {
      id: 20,
      title: "Dead of Winter",
      author: "Darcy Coates",
      price: 40,
      img: "src/images/Group 34250.svg",
    },
    {
      id: 21,
      title: "Fortune Favors the Healed",
      author: "Madeline Eve Pregulman",
      price: 25,
      img: "src/images/Group 34231.svg",
    },
    {
      id: 22,
      title: "The Power of Crystals",
      author: "Juliet Madison",
      price: 25,
      img: "src/images/Group 34234.svg",
    },
    {
      id: 23,
      title: "Bombmaker",
      author: "Daniel Davies",
      price: 25,
      img: "src/images/Group 34235.svg",
    }
  ];
   return (
    <section
      className="featured-books-section py-5 m-5"
      style={{ paddingTop: "100px" }}
    >
   
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">ALL Books</h2>
          <p className="text-muted">
            What book was featured on the today show this week..!
          </p>
        </div>

        <div className="row justify-content-center">
          {books.map(
            (
              book 
            ) => (
              <div className="col-12 col-md-3 mb-4" key={book.id}>
                {" "}
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={book.img}
                    className="card-img-top"
                    alt={book.title}
                  />
                  <button className="fav position-absolute z-2">
                    <i className="fa-solid fa-heart"></i>
          
                  </button>
                  <div className="card-body text-center">
                    <h6 className="card-title mb-1">{book.title}</h6>
                    <p className="text-muted small mb-1">{book.author}</p>
                    <p className="fw-bold mb-2">${book.price.toFixed(2)}</p>
                    <button
                      className="btn btn-outline-dark btn-sm"
                      onClick={() => addToCart(book)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
   
        </div>
        
      </div>
    </section>
    
    
  );
}