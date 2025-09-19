import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useCart } from "../pages/CartContext"; 

export default function Offer() {
  const { addToCart } = useCart(); 

  const books = [
    {
      id: 5, 
      title: "The Power of Your Subconscious Mind",
      author: "Joseph Murphy",
      desc: "The Power of Your Subconscious Mind is one of the most promising self improvement books that ",
      img: "/src/images/power of mind 1.svg",
      price: 40,
      oldPrice: "$60.00",
    },
    {
      id: 6, 
      title: "Deep Work: Rules for Focused Success in a Distracted World",
      author: "Cal Newport",
      desc: "Deep work is the ability to focus without distraction on a cognitively demanding task.",
      img: "/src/images/power of mind 2.svg",
      price: 30, 
      oldPrice: "$45.00",
    },
    {
      id: 7, 
      title: "Can't Hurt Me",
      author: "David Goggins",
      desc: "For David Goggins, childhood was a nightmare—poverty, prejudice, and physical abuse colored his days and haunted his nights.",
      img: "/src/images/power of mind 3.svg",
      price: 60, 
      oldPrice: "$75.00",
    },
  ];

  return (
    <section className="special-offer-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Special offer</h2>
          <p className="text-muted">There are discounts of up to 75%</p>
        </div>

        <div className="row justify-content-center">
          {books.map((book) => (
            <div className="col-12 col-md-4 mb-4" key={book.id}>
              <div className="card h-100 border-0 text-center shadow-sm p-1">
                <img
                  src={book.img}
                  className="d-block mx-auto"
                  alt={book.title}
                  style={{ width: "50%" }}

                />
                
                <div className="card-body">
                  <h6 className="fw-bold">{book.title}</h6>
                  

                  <p className="text-muted small">{book.desc}</p>

                  <p className="fw-semibold mb-2">{book.author}</p>

                  <div className="d-flex align-items-center justify-content-between">

                    <button
                      className="btn btn-outline-dark btn-sm"
                      onClick={() => addToCart(book)}
                    >
  
                      Add to cart
                    </button>
                    
                    <div>
                      <span className="fw-bold">${book.price.toFixed(2)}</span>{" "}
                      <span className="text-muted text-decoration-line-through">
                        {book.oldPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}