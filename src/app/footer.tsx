{/* eslint-disable-next-line react/no-unescaped-entities */}
export default function Footer() {
    return (
      <footer className="mt-40 pt-20 bg-black text-white ">
          <div className="flex justify-around">
        {/* Main */}
        <div className="flex ">
          <div className=" flex flex-col gap-y-4">
            <h3 className="text-2xl font-bold">Exclusive</h3>
            <h4 className="text-xl font-semibold">Subscribe</h4>
            <p className="font-extralight">Get 10% Off your first order</p>
            <div className="flex border-[1px] w-56 h-12 justify-around items-center rounded-md">
              <button className="text-md opacity-50">Enter your email</button>
              <img className="w-6 h-6 " src="send.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 ">
          <h4 className="text-xl font-semibold">Support</h4>
          <p>
            111 Bijoy Sorani, Dhaka, <br />
            DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="flex flex-col gap-y-4 ">
          <h4 className="text-xl font-semibold">Account</h4>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="flex flex-col gap-y-4 ">
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col gap-y-4 ">
          <h4 className="text-xl font-semibold">Download App</h4>
          <p className="text-sm">Save $3 with App New User Only.</p>
          <div>
            <div className="flex">
              <img
                className="w-20"
                src="https://images.squarespace-cdn.com/content/v1/5d3f241fa4e0350001fa20d5/1636491460338-AIZAXV2978MGIDQE0GT7/qr-code.png"
                alt=""
              />
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center border-[1px] ml-2 w-36 h-10 rounded-lg">
                  <img className="w-8 h-8" src="google-play.png" alt="" />
                  <div>
                    <p className="text-xxs">GET IT ON</p>
                    <p>Google Play</p>
                  </div>
                </div>
                <div className="flex items-center border-[1px] ml-2 w-36 h-10 rounded-lg">
                  <img className="w-8 h-8" src="apple-black-logo.png" alt="" />
                  <div>
                    <p className="text-xxs">Download on the</p>
                    <p>App Store</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-around mt-10">
              <img className="w-8 h-8" src="social.png" alt="" />
              <img className="w-8 h-8" src="twitter.png" alt="" />
              <img className="w-7 h-7" src="video.png" alt="" />
              <img className="w-7 h-7" src="linkedin.png" alt="" />
            </div>
          </div>
        </div>
        
        </div>
        <div className="text-center pt-16 pb-5">
        <p className="text-white opacity-35">© Copyright Maryam 2024. All Rights Reserved</p>
        </div>
      </footer>
    );
  }