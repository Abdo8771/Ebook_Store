import "bootstrap/dist/css/bootstrap.min.css";
import toast from "react-hot-toast";

export default function Contact() {
  return (
    <>
      <div className="contact-us-container p-5">
        <div className="container mt-5">
          <div className="text-center mb-4">
            <h1 className="contact-title text-black">Contact Us</h1>
            <p className="lead text-black">
              We'd love to hear from you! Please fill out the form below.
            </p>
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              toast("Message Sent✅");
              e.target.reset();
            }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary btn-lg submit-btn"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
