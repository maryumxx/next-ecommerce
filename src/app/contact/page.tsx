import Header from "../header";
import Footer from "../footer";
export default function Contact() {
  return (
    <div className="">
      <Header />

      <div className="mt-16 ml-28">
        <p>
          Home /{" "}
          <span className="text-md text-gray-500 text-opacity-80">Contact</span>
        </p>
      </div>
      <div className="flex justify-center items-center gap-x-20 mt-28">
        {/* Contact Section */}
        <section className="  bg-white w-[350px] py-10 justify-center px-10 shadow-lg">
          <div>
            <div className="flex gap-x-3 items-center ">
              <img className="w-12 h-12" src="contact.png" alt="contact-logo" />
              <p>Contact Us</p>
            </div>
            <div className="flex flex-col gap-y-5 mt-5 mb-5">
              <p>We are available 24/7, 7 Days a week.</p>
              <p>+810009999876</p>
            </div>
          </div>

          <hr className="w-80 -ml-6 bg-black p-[0.3px]" />
          <div className="flex gap-x-3 items-center mt-10">
            <img className="w-12 h-12" src="envelope.png" alt="contact-logo" />
            <p>Write to Us</p>
          </div>
          <div className="flex flex-col gap-y-5 mt-5 mb-5">
            <p>
              Fill out our form and we will contact <br /> you with in 24 hours.
            </p>
            <p>customer@exclusive.com</p>
            <p>support@exclusive.com</p>
          </div>
        </section>
        {/* Form */}
        <section className="">
          <div className="flex gap-x-5">
            <div className="mb-4">
              <input
                type="input"
                placeholder="Your Name *"
                className="w-80 focus:outline-none text-lg mt-4 p-4 bg-black bg-opacity-5 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="input"
                placeholder="Your Email *"
                className="w-80 focus:outline-none text-lg mt-4 p-4 bg-black bg-opacity-5 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="input"
                placeholder="Your Phone *"
                className="w-80 focus:outline-none text-lg mt-4 p-4 bg-black bg-opacity-5 rounded-md"
                required
              />
            </div>
          </div>
          <div>
            <div className="mb-4 flex justify-start">
              <input
                type="input"
                placeholder="Your Message *"
                className="w-full focus:outline-none h-96  text-lg mt-4 p-4 bg-black bg-opacity-5 rounded-md "
                required
              />
            </div>
          </div>
          <div className="p-4 px-7 bg-red-500 w-52 rounded-md text-center text-white ml-[789px] hover:bg-red-600">
            Send Message
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
