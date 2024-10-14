// src/app/signup/page.tsx
import PrivateHeader from "../private-header";
import Footer from "../footer";
import Link from "next/link";

function LoginPage() {
  return (
    <div>
      <PrivateHeader />
      <div className="flex mt-16 justify-between mr-20">
        <div>
          <img className="w-[800px]" src="signuppage.jpg" alt="" />
        </div>
        <div className="flex flex-col justify-center mr-64">
          <h1 className="text-5xl font-semibold">Log in with Exclusive</h1>
          <h5 className="text-lg font-semibold mt-5">
            Enter your details below
          </h5>
          
          <div className="mb-4">
            <h6 className="text-gray-500 text-lg mt-20 mb-2"></h6>
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full focus:outline-none text-gray-500 text-lg mt-4 "
              required
            />
            <hr className="my-2" />
          </div>
          <div className="mb-4">
            <h6 className="text-gray-500 text-lg mt-4 mb-2"></h6>
            <input
              type="password"
              placeholder="Password"
              className="w-full focus:outline-none text-gray-500 text-lg mt-4"
              required
            />
            <hr className="my-2" />
          </div>
          <div className="flex justify-between items-center mt-10">
            <Link href="/registered" passHref>
            <div className="p-4 px-10 bg-red-500 text-white rounded-md hover:bg-red-600">Log In</div>
            </Link>
            <h6 className="text-red-500 font-semibold hover:bg-slate-50 p-4 rounded-md">Forgot Password?</h6>
          </div>
          <div className="mt-10 flex justify-center">
            <p>
              Dont have an account?
              <Link href="/signup" passHref>
                <span className="font-semibold underline underline-offset-4 hover:text-red-500 cursor-pointer ml-2">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LoginPage;
