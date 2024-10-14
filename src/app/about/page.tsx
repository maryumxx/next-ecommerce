import Header from "../header";
import Footer from "../footer";

export default function About(){
    return(
        <section>
            <Header/>
            <div className="mt-16 ml-28">
            <p>Home / <span className="text-md text-gray-500 text-opacity-80">About</span></p>
            </div>
            <div className="flex justify-between items-center">
                <div className="ml-32 mr-10">
                    <h1 className="text-6xl font-semibold mb-10">Our Story</h1>
                    <p className="text-md">Launced in 2022, Exclusive is premier online shopping <br /> makterplace with an active presense in United kingdom. Supported <br /> by wide range of tailored marketing, data and service solutions, <br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br />millioons customers across the region. <br />
                    <br />

Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging from consumer.</p>
                </div>
                <div>
                    <img className="w-max" src="https://primetouch.store/_next/image?url=%2Fimages%2FaboutHeroSection.webp&w=1080&q=75" alt="" />
                </div>
            </div>

            <div className="flex flex-wrap grid-col-6 ml-[120px] mr-[120px] mt-16 mb-10 justify-between">
          {/* Card1 */}
          <div className="flex grid-col-6 mt-16 mb-10">
            <div className="border-[2px] w-[350px] border-gray-400 border-opacity-30 p-3 px-16 rounded-md hover:bg-red-500 relative hover:text-white group overflow-hidden flex flex-col items-center">
              <img
                className="w-16 h-16 mt-5 transition-opacity duration-300 group-hover:opacity-0  bg-black p-3 rounded-full ring-8 ring-gray-300 "
                src="shop-white.png"
                alt=""
              />
              <img
                src="shop.png"
                alt="Image"
                className="absolute inset-0 w-16 h-16  mt-8 ml-[141px] opacity-0 transition-opacity duration-0 group-hover:opacity-100 bg-white p-3 rounded-full   ring-opacity-70  ring-8 ring-gray-100"
              ></img>
              <h4 className="font-semibold text-3xl mt-5">10.5k</h4>
              <p className="mb-2 text-sm">Sellers active in our site</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex grid-col-6 mt-16 mb-10">
            <div className="border-[2px] w-[350px] border-gray-400 border-opacity-30  p-3 px-16 rounded-md hover:bg-red-500 relative hover:text-white group overflow-hidden flex flex-col items-center">
              <img
                className="w-16 h-16 mt-5 transition-opacity duration-0 group-hover:opacity-0 bg-black p-3 rounded-full ring-8 ring-gray-300 "
                src="coin-white.png"
                alt=""
              />
              <img
                src="coin.png"
                alt="Image"
                className="absolute inset-0 w-16 h-16  mt-8 ml-[141px] opacity-0 transition-opacity duration-0 group-hover:opacity-100 bg-white p-3 rounded-full  ring-opacity-70  ring-8 ring-gray-100"
              ></img>
              <h4 className="font-semibold text-3xl mt-5">33k</h4>
              <p className=" mb-2 text-sm">Monthly Product Sale</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex grid-col-6 mt-16 mb-10">
            <div className="border-[2px] w-[350px] border-gray-400 border-opacity-30  p-3 px-16 rounded-md hover:bg-red-500 relative hover:text-white group overflow-hidden flex flex-col items-center">
              <img
                className="w-16 h-16 mt-5 transition-opacity duration-0 group-hover:opacity-0 bg-black p-3 rounded-full ring-8 ring-gray-300 "
                src="bag-white.png"
                alt=""
              />
              <img
                src="bag.png"
                alt="Image"
                className="absolute inset-0 w-16 h-16  mt-8 ml-[141px] opacity-0 transition-opacity duration-0 group-hover:opacity-100 bg-white p-3 rounded-full  ring-opacity-70  ring-8 ring-gray-100"
              ></img>
              <h4 className="font-semibold text-3xl mt-5">45.5k</h4>
              <p className=" mb-2 text-sm">Customers active in our site</p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="flex flex-col items-center flex-wrap grid-col-6 mt-16 mb-10 justify-center">
            <div className="border-[2px] w-[350px] border-gray-400 border-opacity-30  p-3 px-16 rounded-md hover:bg-red-500 relative hover:text-white group overflow-hidden flex flex-col items-center">
              <img
                className="w-16 h-16 mt-5 transition-opacity duration-0 group-hover:opacity-0 bg-black p-3 rounded-full ring-8 ring-gray-300 "
                src="money-white.png"
                alt=""
              />
              <img
                src="money.png"
                alt="Image"
                className="absolute inset-0  w-16 h-16  mt-8 ml-[141px] opacity-0 transition-opacity duration-0 group-hover:opacity-100 bg-white p-3 rounded-full   ring-opacity-70 ring-8 ring-gray-100"
              ></img>
              <h4 className="font-semibold text-3xl mt-5">25k</h4>
              <p className="mb-2 text-sm">Annual gross sale in out site</p>
            </div>
          </div>
          </div>
          <div className="flex justify-center gap-x-28 items-center">
            <div>
                <img className="w-[300px] bg-slate-100 pt-5 px-10" src="https://www.damsole.co.uk/wp-content/uploads/2021/05/unnamed.png" alt="" />
                <h3 className="text-2xl font-semibold mt-5">Tom Cruise</h3>
                <p  className="mt-3">Founder & Chairman</p>
                <div className="flex  gap-x-5 mt-2 " >
                    <img className="w-5 h-5" src="twitter-black.png" alt="" />
                    <img className="w-5 h-5 " src="instagram-black.png" alt="" />
                    <img className="w-5 h-5 " src="linkedin-black.png" alt="" />
                </div>
            </div>
            <div>
                <img className="w-[300px] bg-slate-100 pt-5 px-10" src="https://www.insensys.com/wp-content/uploads/woman.png" alt="" />
                <h3 className="text-2xl font-semibold mt-5">Emma Watson</h3>
                <p className="mt-3">Managing Director</p>
                <div className="flex gap-x-5 mt-2  ">
                    <img className="w-5 h-5 " src="twitter-black.png" alt="" />
                    <img className="w-5 h-5 " src="instagram-black.png" alt="" />
                    <img className="w-5 h-5 " src="linkedin-black.png" alt="" />
                </div>
            </div>
            <div>
                <img className="w-[300px] bg-slate-100 pt-5 px-10" src="https://freepngimg.com/thumb/man/2-2-man-transparent.png" alt="" />
                <h3 className="text-2xl font-semibold mt-5">Will Smith</h3>
                <p className="mt-3">Product Designer</p>
                <div className="flex gap-x-5 mt-2  ">
                    <img className="w-5 h-5" src="twitter-black.png" alt="" />
                    <img className="w-5 h-5 " src="instagram-black.png" alt="" />
                    <img className="w-5 h-5 " src="linkedin-black.png" alt="" />
                </div>
            </div>
            
          </div>
          <div className="flex justify-center gap-x-5 mt-10">
            <div className="p-1 w-3 h-3 bg-gray-500 rounded-full "></div>
            <div className="p-1 w-3 h-3 bg-gray-500 rounded-full "></div>
            <div className="p-1 w-3 h-3 bg-red-500 rounded-full ring-2 ring-black "></div>
            <div className="p-1 w-3 h-3 bg-gray-500 rounded-full "></div>
            <div className="p-1 w-3 h-3 bg-gray-500 rounded-full "></div>
          </div>
          <div className="flex justify-center gap-x-20 items-center mt-32">
          <div className="flex flex-col items-center text-center">
            <img className="p-3 bg-black w-20 h-20 rounded-full border-8 border-gray-500" src="delivery.png" alt="" />
            <h4 className="font-semibold text-2xl mt-8">FREE AND FAST DELIVERY</h4>
            <p className="mt-4">Free delivery for all orders over $140</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img className="p-3 bg-black w-20 h-20 rounded-full border-8 border-gray-500" src="customer.png" alt="" />
            <h4 className="font-semibold text-2xl mt-8">FREE AND FAST DELIVERY</h4>
            <p className="mt-4">24/7 CUSTOMER SERVUCE</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img className="p-3 bg-black w-20 h-20 rounded-full border-8 border-gray-500" src="security.png" alt="" />
            <h4 className="font-semibold text-2xl mt-8">MONEY BACK GUARANTEE</h4>
            <p className="mt-4">We return money within 30 days</p>
          </div>
        </div>
          
            <Footer/>
        </section>
    )
}