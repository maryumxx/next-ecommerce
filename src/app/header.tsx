import Link from 'next/link';
{/* eslint-disable-next-line react/no-unescaped-entities */}
export default function Header() {
  return (
    <header className="">
      <div className="bg-black text-white flex items-center  justify-around">
        <div>
          <p className="text-black">saaa</p>
        </div>
        <p className=" text-white text-sm flex justify-center p-3 font-extralight ml-16">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="ml-2 font-semibold underline underline-offset-4">
            ShopNow
          </span>
        </p>
        <div className="flex justify-end">
          <label className="p-3 " htmlFor="dropdown">
            English
          </label>
          <img
            className="w-7 h-7 flex mt-2 -ml-2 "
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAjVJREFUaEPtlrFrFEEUh7+fBOwEQbCwEG0sbFIriWJnIVbBQrQwNrHSTiFpBNFOK23UQtFKFP8AJSYqKW0sbBQLCyEg2FgE8nILE1iXuXOys3M7HnPd3b2Z9773vX2smNCPJpSLAva/mS3GirFMOlBGMRMRwWUUY8GtyiSwGMtERHAZxVhwqzIJLMYyERFcRjEW3KpMAouxTEQElxFtzMxmgJvAWUm/gzN7As1sD/ASWJS0FnNXFJiZnQZeAbuBT8CJtnBmthd4C0wDf4Azkt60hWsNZmZzwHNgqpa8gjsl6ddOCnJQq8DR2rkNYE7S653ctR0bA3YeeDIYw12NxJ+BmVA4M9sHLDegqis3gXOSXowVrEpmZqPgTkpaH1WUg3oPHGnEVVAXJT1rA1WdaW1sO6GDe+q564t75n76ijOz/cA7D5QBF2KgOgFz5i4BDz1wX4Fjkv6Cc1AfB6N8uAFdQV2W9LitqehnrJnYzEbBzUr64ZpwYLBgVlJCdWasNpYV3CNPt78Dx93vH4CDnpj5Lkx1bqwGtwDc9xT+zf12yPPfFUkPYsevfj56eQxZDMPgfOGdQ3U+ivWqzewqcPcfFpJAJQVzi2IU3DVJ97ocv+SjGGAuKVRyY7WFcn3wonzbfb8h6U4qU8m24rCCzWypev+TdCs11NiMjQOkmSPJuu8DpIDl0PWYGsooxnSvj7PFWB9dj8lZjMV0r4+zxVgfXY/JWYzFdK+Ps8VYH12PyTmxxrYAa8WJN8+9rnUAAAAASUVORK5CYII="
          />
        </div>
      </div>
      <div className="flex justify-around mt-10 items-center">
        <h2 className="font-bold text-2xl">Exclusive</h2>
        <div className="flex justify-between gap-x-20 font-extralight items-center ">
        <Link href="/">
                <p className="hover:border-b-2 hover:border-red-500 cursor-pointer">
                    Home
                </p>
            </Link>
            <Link href="/contact" passHref>
          <p className="hover:border-b-2 hover:border-red-500">Contact</p>
          </Link>
          <Link href="/about" passHref>
          <p className="hover:border-b-2 hover:border-red-500">About</p>
          </Link>
          <Link href="/signup">
                <p className="hover:border-b-2 hover:border-red-500 cursor-pointer">
                    Sign Up
                </p>
            </Link>

          
        </div>
        <div className="flex bg-gray-300 p-2 px-4 gap-x-8 text-gray-700 bg-opacity-25 text-sm items-center">
          <input 
          type="input"
          placeholder='What are you looking for?'
          className=' focus:outline-none w-52 p-2 bg-gray-100
          ' />
          <img
            className="w-7 h-7"
            src="data:image/png;base64,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"
          />
        </div>


        {/* <div>
            <div className="mb-4 flex justify-start">
              <input
                type="input"
                placeholder="Your Message *"
                className="w-full focus:outline-none h-96  text-lg mt-4 p-4 bg-black bg-opacity-10 rounded-md "
                required
              />
            </div>
          </div> */}


        <div className="flex gap-x-9 -ml-48">
          <img
            className="w-8 h-8 cursor-pointer"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABUZJREFUaEPtmV1oHFUUx/9n1myF7oM0lCpSaRUM7s6dBIuCFKz1I5rGpoofD2oRH+xTBb9RBF8UtRXtgx+gvoi0+IUo2taPaIyiBrFrknvvxq8oQbSIlDwkajR295hbduNkdnZmdmcmxZgLecjOPf97fvece+69M4Ql2miJcmEZ7L8W2eWI/e8iZtv2WgBrDHhbW9vh4eHhw61MQmdn56nlcvkUY2tZ1i9Syp9a0anZNJ2K+Xz+ZMuyrieirQA2NRj8TSJ6SUr5YpBztm3fQETXAOhr0G8AwH4i2iel/LUZ0MhgjuOsZOa7AZi/EyMOYpx5goj2SCl/NzZVndsB3AJgdUSdPwDsyuVyjw4NDc1EsYkE1tXVta5cLn8IYF0UUZ8+XzHzVZZlVZj5AIAzWtT5FkCPUuqHMPtQsEKhsNGyrP0ATgoTC3luIrYypoYxnySiLVLKz4O0AsFs23aI6FMAuQYi/QAGiOg7Zj5KRAVmvhDARU0CmPT6BEAJwAkAzpzTPT8g5Q1cZ1CBaQhmikQmk/kSwLFK5W5E9BiA3Y0WdNX2PgA7QwCLcyAPKqXe8Otn2/a1RGR0HJ/nXyilzm2k3xBMCPEMgB0ewxlmvkJr/V6UiAghegC8DmCFp/9fAO5USj0ZQYeEELcBeMhH516l1CN+Gr5g+Xz+tEwm8301LebtmPlyrbVZ/JGbEOI8U7IBrKoaTTLzpVrrQ5FFAFSj97LHZqpSqawvlUqTdVnlJy6E2FUt6+7HTymlwlLL11ez+VYqlacBVCzL2jk6OvpzM1C1vkKIZwHc7LG9Xyn1QFSwrwF0uDpPzczMrB0fH59qxaGkbAqFwirLsn70VNdDSqlzQsGEEKcDMGnobo8rpe5IysE4On5RI6I13kJWt8Zs2+4lIrMm3Gtrs9Z6MI5DSdkKIbYBWFBFmXmj1voz9xh1YEIIk8Mml+dbJpNZPzIyMpGUc3F0HMc5m5nNNjHfiOhqKeVrgWCO49zKzHvcnbLZ7OpisXgkjkNJ2TqO08HMpga4M2q71npvWMSuA7DP3alSqRRKpdJYUs7F0bFt+wIiMudWN1i31tqcgv6NoncQIYS5iixYT0R0o5TyhTgOJWXrOM5dzLw7bOLr1lj1WvGbx5GDSqnepJyLoyOEkABETYOZj2it664/viePudPCuwC63dEmorOklN/EcSqurW3b3URkfHO355VSN3m1G4HVrTMAHyilLo7rXKv21UwyJd17IN6klPo4Epjp5A25+c3sb1JK80pg0ZsQ4m0Aly0oEAH+BJ3uzX3oIy8BM7+ltW70jiIVYCGEOXhv8YpbltUxOjpqbtV1LfCiKYS4Z+6q8LCP3YFsNntlsVj8OxWSquiGDRvaZmdnDdQlPuPsUEo912j80FcDQohX5m625k3SgrYYkbNt27zt8kv9vUqp7UGTGgqWz+ezmUzm1QavyPqz2Wxv0pELidQ77e3tWwcHB4/GAjPGiwkXBlUul7eNjY3Nhi2B0IjVBBYDLimoYxU8jNz9PE24JKGaBksrLZOGagksabg0oFoGSwouLahYYHHh0oSKDdYqXNpQiYA1CxcCNVAul3ui7FNh1bypch8kFmUrMPYBZ7+B6enp3omJiT/DnI7yPDGw2mAB57uD1T51p3QA/dPT031JQSWWik1s4n6TnWikagMkHrEIa84NlwpUKhGLeLY03VKDShUsJHKpQqUOVoue4zgDzLy5+v/7uVyuL+rX/ygV0K9PKmvMbyDzAZCZVyzWx41FA2t15lu1WwZrdeaOl91yxI7XzLc67pKN2D9iamtVOHrizgAAAABJRU5ErkJggg=="
          />
          <img
            className="w-8 h-8  cursor-pointer"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABKBJREFUaEPtmF1oHFUUx8+ZoUhrwKKp3wqlUkP23tlsF0RqkKIIVkUrgg/2qQj1A6OliA8qpoqf+FBqLX68aMHvoNYXbQUlRSX6UNy9Z7IlNdaAVbCCbVRIO+7MsRcmZTKd7M7u3tlNw97Xe+d//r977seZi7BIGy5SLuiCnW2Z7Wasm7EFMgPdpbhAEpHaxhkZcxxnGzMPp1bo8EBE/JCZHyCiY1ErZz2YhmHmHa7rbll0YIj4glLq8UUHBgC3ENEXNcGEEOssy1oXHcTMVwLApth2+h4R97V7izHz/QBwUTRuT0/PsrGxsZmaYElGi8XiEs/z/gKAnkj/QSLqbydYsVhc5nne3wBgR+LuJaL1cR+p7zEp5RsAsDkqYFnWmnK5/GO74KSUGwDg09hqesR13VeaBsvn84NBEHwTE9hORFvbCHbG5Nq2vbpUKv3UNJj+UEp5BAAui4j82dfXd8nIyIjfDjgp5a8AcHkk1s9EdFVS7NRLMQR7GgCemrNJEdcrpfZmDZbP53NBELixOK8S0VDLYI7jrGTmwzGh94hoY9ZgQohHEfHlWJxbiejzlsHCrI0BwLURsRO+76+oVCr/ZgknpfwKAG6IxDg5MzNz3uTk5EkjYI7jPMjMu2Jim4jo7azAko55Zt7nuu7N88VsaI9pkYGBgeW+7x8FgCUR0a+J6MaswBzHuZ2ZP4vt7S1KqR3GwMLlqO8SfafMNrYs64pyufxbFnCO47wWVhyn5S3LurpcLh8yCiaEuBMRP4mK6gr7VEL3ZAGGiLsBQJd1s+0wEa2qFavhpajFwhJLL8flWYCk0NxFRA8ZB9OCScsjhSEjQxDxeqVUvAqao91UxrSCEGItIn5nxGkDIjqmUmqw3idNg4WHiL6sV9YLYrD/Hdu2h0ql0vF6mq2C6fJKl1nR9qK+Y+oFbqTftu3p6enpg1NTUyfSftcSWFKJpU9LpdRdaQ1kNa4lsHA56n22NmLwP8/zLpiYmPgnK9NpdE2A3QcAr8eCDRPRM2kMZDWmZbCwxJrzpheafZOZPwYAz4T5IAiOVyqVUlqtlsHC5bgTAGpemGkN1Ri3n4jmPDLV0jQCVigULq1Wq7puO9cAwHwS7QfTTvr7+wds29b/TOdnBNcZMA1TKBRWVKvVZwHg3tgTmQnWzoFF3efz+dVBEFzMzJYJqo4cHiaMm9YwcngkmdL/bPonAACO9Pb27h4dHa3WMx9WMhsQcanv+/vHx8ebLrIzAZNS6h/OOyIgh2zbvi3pYXN2jBDibkT84FTtedoTMz/nuu6T9SYkqd84mJTyMQB4KSHYHiLSWUxsUso/AODCeGcQBIPNZC4LsC8B4KYE9x4RnZNElcvlrrMs69vEmUd8Qin1fKNZywIs/tAz6+kYESXecY7jrGHmA/OY30pE2xcC2D0A8G6CkZ1E9PB8BoUQPyDiNbF+RsRVSqlfOg6mDQghhhFxW8TM+0SkgedtuVyuHxHfisAdZeYh13U/ahRKjze+FGdNFIvFXs/zcrZt/17rNIyb1svS9/2lzRwYUa3MwJqZZZPfdMFMzmY7tLoZa8csm4yxaDP2Pz/ss0aNEx6hAAAAAElFTkSuQmCC"
          />
        </div>
      </div>
      <hr className="w-[100%] mt-5"/>
      
    </header>
  );
}
