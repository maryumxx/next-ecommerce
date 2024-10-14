// src/app/signup/page.tsx
import PrivateHeader from "../private-header";
import Footer from "../footer";
import Link from "next/link";

function SignupPage() {
  return (
    <div>
      <PrivateHeader />
      <div className="flex mt-16 justify-between mr-20">
        <div>
          <img className="w-[800px]" src="signuppage.jpg" alt="" />
        </div>
        <div className="flex flex-col justify-center mr-64">
          <h1 className="text-5xl font-semibold">Create an account</h1>
          <h5 className="text-lg font-semibold mt-5">
            Enter your details below
          </h5>
          <div className="mb-4">
            <h6 className="text-gray-500 text-lg mt-2 mb-2"></h6>
            <input
              type="text"
              placeholder="Name"
              className="w-full focus:outline-none text-gray-500 text-lg mt-10  "
              required
            />
            <hr className="my-2" />
          </div>
          <div className="mb-4">
            <h6 className="text-gray-500 text-lg mt-4 mb-2"></h6>
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
          <Link href="./registered">
          <div className="p-4  bg-red-500 text-white flex flex-col justify-center items-center mt-10 rounded-md hover:bg-red-600">
            Create Account
          </div>
          </Link>
          <div className="flex justify-center p-4 bg-white gap-x-4 items-center border-[1px] border-black rounded-md mt-3 hover:bg-gray-100">
            <img className="w-7 h-7" src="search.png" alt="google-logo" />
            <div>Sign up with Google</div>
          </div>
          <div className="mt-10 flex justify-center">
            <p>
              Already have an account?
              <Link href="/login" passHref>
                <span className="font-semibold underline underline-offset-4 hover:text-red-500 cursor-pointer ml-2">
                  Log In
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

export default SignupPage;
