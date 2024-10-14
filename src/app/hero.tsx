{/* eslint-disable-next-line react/no-unescaped-entities */}

export default function Hero() {
  return (
    
    <div className="main-div">
      <section>
      <div className="flex">
        <div className="ml-[122px] mt-10">
          <div className="flex items-center ">
            <p className="mb-3">Women&apos;s Fashion</p>
            <img
              className="w-7 h-7 flex mb-3 ml-[94px] cursor-pointer"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAcNJREFUaEPtmMFKAzEQhv+kKN4EwaN48SBsU6grCHr0AbyLaE/6UN70oODRu4ii4DXt05RCJLKFpSzuZtuZpMv02snufPNNskkUOvpTHeWCgK2bWTEmxhKpgLRiIiIapyHGGpcqkUAxloiIxmmIscalKgX2+/1TrfW+tfapzfhlxpAZGwwG5865VwBbSqlLa+3zMomGjiUBM8ZcAHgBsFEk5LjhKMC0MeYbwMlilZ1z15PJ5DG0+m3iKcCQ5/n2dDp9A3C0kBSbORIwDxMbjgysBPcJwFSYG1lrH9q0WZMxpGA+gSzLdrTW79xw5GCx4FjASnBfAA452pINzMMMh8Pd2Wz2wQHHClYHB+BuPB7fN1kc6mLYwUpw/iN+UJHg7SrgYoJVtaTnXE+wf+bZyqD8g1iNcUGxghUf6srlfpWLxnzOshiLsfsgB4sBRd6KsaBIwYpjS5SdPRlY7LMYFZi/GvgBcLy4q1BK3VCewcrvI1k8unqZ81e40vXbplLqqhPXb/OWyLLsrNfr7XFDUc2xuhMFy/8kc4wl85qXCFgKFkJyEGMh1UohVoylYCEkBzEWUq0UYsVYChZCchBjIdVKIfYXjwK6N/JD/8wAAAAASUVORK5CYII="
            />
          </div>
          <div className="flex items-center ">
            <p className="mb-3">Men&apos;s Fashion</p>
            <img
              className="w-7 h-7 flex mb-3 ml-[100px] cursor-pointer"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAcNJREFUaEPtmMFKAzEQhv+kKN4EwaN48SBsU6grCHr0AbyLaE/6UN70oODRu4ii4DXt05RCJLKFpSzuZtuZpMv02snufPNNskkUOvpTHeWCgK2bWTEmxhKpgLRiIiIapyHGGpcqkUAxloiIxmmIscalKgX2+/1TrfW+tfapzfhlxpAZGwwG5865VwBbSqlLa+3zMomGjiUBM8ZcAHgBsFEk5LjhKMC0MeYbwMlilZ1z15PJ5DG0+m3iKcCQ5/n2dDp9A3C0kBSbORIwDxMbjgysBPcJwFSYG1lrH9q0WZMxpGA+gSzLdrTW79xw5GCx4FjASnBfAA452pINzMMMh8Pd2Wz2wQHHClYHB+BuPB7fN1kc6mLYwUpw/iN+UJHg7SrgYoJVtaTnXE+wf+bZyqD8g1iNcUGxghUf6srlfpWLxnzOshiLsfsgB4sBRd6KsaBIwYpjS5SdPRlY7LMYFZi/GvgBcLy4q1BK3VCewcrvI1k8unqZ81e40vXbplLqqhPXb/OWyLLsrNfr7XFDUc2xuhMFy/8kc4wl85qXCFgKFkJyEGMh1UohVoylYCEkBzEWUq0UYsVYChZCchBjIdVKIfYXjwK6N/JD/8wAAAAASUVORK5CYII="
            />
          </div>
          <div>
            <p className="mb-3">Electronics</p>
            <p className="mb-3">Home & Lifestyle</p>
            <p className="mb-3">Medicine</p>
            <p className="mb-3">Sports & Outdoors</p>
            <p className="mb-3">Baby&apos;s & Toys</p>
            <p className="mb-3">Groceries & Pets</p>
            <p className="mb-3">Health & Beauty</p>
          </div>
        </div>
        <div className="vertical-line">
          <div className="border-l-[1px] border-gray-200 h-[410px] mx-10 ml-20"></div>
        </div>

        {/* Hero Image */}

        <div className=" text-white bg-black flex-col items-center justify-between ml-10 mt-10 mr-10">
          <div className="flex items-center mb-6 ml-20 mt-16 gap-x-5 ">
            <img
              className="h-18 w-18 ml-2"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAA81JREFUaEPtmkvIVVUUx39/yCgNJykEgWhqlIpJg7QQFMQeNnCQYERBqPgYONCBBD4mCYniRER8gDjxUZEJVhqVUSIE6ijykVommOaDKDAhkOW34Hxwu97H2udxb/fj23BHZ71+e+279zprHzFAhwYoF4NgvZbZ/03GzGw28KykLWVMYlfBzOwRYBWwDHgCuCPpsZ4GM7PpwAHgyRqQC5Ke7lkwM3sFOAR4xmrHLkmLexLMzEYBPwLDGwDMlPRdr4J9AbzWIPgTknx5ljI6unmY2UvAiSaRT5L0UylU0NkD2sx2AYsaBL9E0s6yoNxOpzP2CzCmDmCdpPfLhOoGmNUA+LJbIemrsqFKBzOzScBDwHlJd+sDNrM9wBnf6iX93P/czB4FngJGABclXS0KW2gpmpkH8jYwH5hWF4xvEp8A+yT9UfssA3kD8PPseWBCne5N4HhfifUhcLjRJLUDzw1mZpuBle0cZM8/Bfz3MPAOMCOo52I+KQslfZ6gk755mNlI4OPE4FJiaia7XtLaqKGkjGVF6+kGSyfqr6hc+FhIBdsOLCkaXU796/5flvR9RD8MZmazgK8jRiuQ8Y1krqQ/o7ZTwL4FZkYNlyjnm8dESbdTbIbAzGysny8phkuUnSPpSKq9KNgaoPSyJxCsH/TPBOQeEImCfQm8nMdBQZ1VkjblsREFuwH4+dXpMUvSsTxOo2D/AkPyOCioM1aSvxEkjyhYbVWe7KSAwhhJl/PoR8FuAY/ncVBQ50VJP+SxEQXzd6f6CjyPv1Sd5ZK2piq5fBTMKw6vPDo9jknK5TcK1s0aMdfOGAV7E9jf6XRl/rzieU7SPyn+o2DeV7+WYrhk2Y8k+Vt6eITA3JqZdWsD6Yfxlvi7kv6K0KWAfQC8FzFaoYwfOxsjZVYK2Gjg1wqDjpo+KqlRi/w/+mGwbDl+BrwejaAiuXmSvPvVcqSCvQokvxu1CyLh+SVJ4yLySWBZ1rp1WLt7b8PtrgrMO7bnulDtn89aBPcqAcuyth5YHXFQosx0Sc2uoB5wk7wUMzDv6J4EJpcYeCtTOyQtTfGVCyyDGw+canLlmhJDO1kvDF6opKRq5tnM/CLim75Dc2i76HI+99bbVEm/pernzli/o+zDk4NAq+8zLgA+85eAYYBv2T4prXTOAt56q+4Nut1smZm3yDZ4t7ZG1nfObX6V1PeJw++NbJjZVGAB8FYNpJdNewG/6fy7ne9mzwtnrNZwdmkxpS/YK81gWixr/3BlSFkX7KWC5Z3dKvQGwaqY1SptDmasytmtwvaAzdh9Zo0ORhZVsiIAAAAASUVORK5CYII="
            />
            <p className="text-lg">iPhone 14 Series</p>
          </div>
          <div className="flex gap-x-16 justify-center ">
            <div className="ml-24">
              <h1 className=" text-6xl font-semibold leading-tight -mt-5">
                Upto 10% Off Voucher
              </h1>
              <div className="flex items-center mt-5 gap-x-2">
                <h3 className="underline underline-offset-4 text-xl ml-1 hover:text-purple-400">
                  Shop Now
                </h3>

                <img
                  className="h-8 w-8"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAbxJREFUaEPtmb9KBDEQh7/pBcHCwkK0FWxs1EIU9UUsfA6t9GV8BPEPViKCjYXvIIii9XiBHCzH3rkbk8ltyMJ2SWa/+U0mk1mh0EcK5aKCDU3ZqlhVbE48UENxToTo/BlVsc6umpOBVbEYQqjqCnAFnIrIa4w1p61hppiqrgN3wCrwAeylhDMBU9UN4BZYbng4KZwV2KZXa2kidJLBmYA5GFU1hTMDs4YzBWvAPQCLLWF5KCIvMbKlOZiH2wJuWuC+RklmPwZcFjALuGxgDbh7YGEi/P6tXFYwD7cNXMeGyw6WCi4ITFXXAPfGfHaAy5YFP4EjEXnuYywU7Hx05p71MfTPsd+AOwqeuq4zFDDH0wuugjVDQFWLDcUUyWMXuGjZQz8+eTx23V9uXFAo9jHQZayqzjrLjvskjbG97GB/QAXXjVnBVNUVw2WVVB4qWYWfRbHUUFmSxwwo1/8Y5kXT9z2m3Z6jtuPMQrHIZo41lNkeK7Zh6i+TzRb3+6iBejD4Fve4zGn8lDgRkbcu5VboGLPkEfqBofMqWKjncs2riuXyfKjdqlio53LNq4rl8nyo3apYqOdyzStWsV8zP7I3QDYe1QAAAABJRU5ErkJggg=="
                />
              </div>
            </div>

            <div className="block relative w-full">
              <img className="" src="iphone.png" alt="" />
            </div>
          </div>
          <div className="flex ml-[500px] -mt-10 gap-x-3 absolute">
            <div className="p-1 w-3 h-3 bg-gray-500 rounded-full "></div>
            <div className="p-1 w-3 h-3 bg-gray-500 rounded-full "></div>
            <div className="p-1 w-3 h-3 bg-red-500 rounded-full ring-2 ring-white "></div>
            <div className="p-1 w-3 h-3 bg-gray-500 rounded-full "></div>
            <div className="p-1 w-3 h-3 bg-gray-500 rounded-full "></div>
          </div>
        </div>
      </div>
        {/* Today */}
        <div className="flex ">
          <div className="w-6 h-12 ml-[120px] rounded-md mt-32 bg-red-500 p-3"></div>
          <p className="font-bold text-red-500 ml-5 mt-[140px] text-lg">
            Today&apos;s
          </p>
        </div>
        {/* Flash Sales */}
        <div className=" flex justify-between items-center">
          <div className="left flex gap-x-5 font-semibold  ml-[120px] mt-8 text-4xl items-center">
            <div className="flashsales">
              <h3>Flash Sales</h3>
            </div>
            <div className=" ml-10">
              <p className="text-xs font-semibold">Days</p>
              <p className="text-4xl font-bold">03</p>
            </div>
            <p className=" font-semibold text-red-500">:</p>
            <div>
              <p className="text-xs font-semibold">Hours</p>
              <p className="text-4xl font-bold">23</p>
            </div>
            <p className=" font-semibold text-red-500">:</p>
            <div>
              <p className="text-xs font-semibold">Minutes</p>
              <p className="text-4xl font-bold">19</p>
            </div>
            <p className=" font-semibold text-red-500">:</p>
            <div>
              <p className="text-xs font-semibold">Seconds</p>
              <p className="text-4xl font-bold">56</p>
            </div>
          </div>
          {/* Arrows */}
          <div className="flex gap-x-4 mr-[110px] mt-5">
            <img
              className="w-12 h-12 bg-gray-100 p-2 rounded-full hover:bg-gray-300"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAglJREFUaEPtmc9KxDAQxr90vfkHfA6h24soiLiITyD4LuJJX0LwWVwE8SAelJDCInhw8eDBg7DgcduRrq2UardNmm6yJXueSeY338xskjJ09Mc6ygUHtmzKOsWcYpZkwJWiJULUDsMpVjtVlhg6xVSF6Pf7W4zoMgZOhBAfquvI+rWqWAIFojsAmwBeV6bTweNo9CYbpIp9a2AFqCy2d+Z5A875i0qwMj6tgJVAJXF9xkR7YRg+ywSpYqsdrAJqEIZhqBKorI9WsCAIAorjm7Sn8rEkSi0MKtlYG9gMKopuwdhGIbsLh9IGNgdqEhPtL6r88gltrNg8KAIOhRBPsv2hw74RmK1QjUoxCIJtiqLhPz01MalUpraSYjOon+m3ViibLwIOTJVfox7zfX+HAdcA1v/0AtEp6/UedPRIbo0x53wsu6aUYnOUkt23tj0DLrgQ57UdUsPaYCag0iHgwJR7zIRqrZdilg3f93cZMASwWqx7As48z7uX7YcK+/aHRxZAxbg/EkLonozSuao9PIor2/5fpgyWgNp8+mgElsKVXVeMHq0ag1XBLe21JTdQunfRtBFOSynmJ6YtTwTawX57rvxRZzmf3zL1OvlgWgLXjSfuAtwVAced+SghfcDT6NDK8NAYn/JSDkw5dYYcnWKGEq+8rVNMOXWGHJ1ihhKvvK1TTDl1hhy/AWjXK0bIdDnhAAAAAElFTkSuQmCC"
            />
            <img
              className="w-12 h-12 bg-gray-100 p-2 rounded-full hover:bg-gray-300"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAdxJREFUaEPtmcFKxDAQhv/ZvQqCBw8eRK9CQ+tFPYji+iIefA496cv4CKIrnkSEbhcPvoOwKHpsI4Uu1LWraUwm25BCb0km3/yT6WRK8PQhT7kQwLqmbFAsKLYgHgihuCBCKG8jKKbsqgUZGBQzIUSSJGt5nl8R0eloNHo2sea8NdgUE0JsAhgSsA5gAqJ9m3AsYEmSbBV5fgtgteZhq3AsYFEURT2iIYCVmdCxBscCVsJww7GBccOxgtXg7gEsz4Yl9XpHaZqmJrIlO1i5aSHENgE3P+CkfKd+/8AEnBMwDjhnYDW4OwBL38LPgHJOwSq4HQKuTcM5B7MFpwUWx/EGgPI19kgpdyHlZcOCb4WUg/F4/NTGmB6YEOcSOGtj6J9jP6pPwaPqOl0BK3lawQWwegjE3oaiheRRFMUeARcNZ+hTAoMsyx5Uz1c5TisU2xhQGSuE+O1bdpymqXLSmNpzDvYHlHbd6BSsKob9KqlsV/hOFLMN5SR5zIUCJp29aFZ9j8bbs+l2HFsoetnM4YZiO2PeNkyry2S9xf0KosPOt7inZc70pwSAkyzLXlTKLd0xbMlDd4O68wKYrudczQuKufK8rt2gmK7nXM0LirnyvK7doJiu51zN81axL5TW4jeAn0MfAAAAAElFTkSuQmCC"
            />
          </div>
        </div>

        {/* Cards */}
        <div className=" grid justify-around lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 mb-10 mt-20 ml-[80px] mr-[80px]">
          {/* Card 1 */}
          <div className="card group w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-full h-72" src="game.png" alt="" />
              <div className="flex justify-between -mt-72 items-center">
                <button className="p-1 px-4 text-sm rounded-md  ml-2 bg-red-500 text-white ">
                  -40%
                </button>
                <div className="flex-row mt-3 mr-3">
                  <img
                    className="w-10 h-10 p-2 bg-white rounded-full "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABWdJREFUaEPtmV1oHFUUx/9ndjYtiQ8aKFWk0ipY3GTunRoUpNBaP6ptbKtofVCL+NA+VfCzKAVfFLWK9sEPsL6IVPxClNpUazVG0ZZg1517J4laUYJokVIKCWrVbufIxKTZnZ3dmd2ZSbFm3nbmnP89v3vOPffODuEMvegM5cIs2H8ts7MZ+99lrLu7e0EemD8Bns8fLpVKh1uZBCnl+cbJk+f5vicN41et9c+t6Ez5NF2KhULh3Hw+fzszryFgedjgBOzygDe01q83Ck5KeQcxr2dgbR27fjDvZqLXtNZHmgGNDSaE6CDmLSDaAmBuzEGOgPk5Jtqutf7d95nQIboPzHcDmBdT5w8QbWtvb3/6wIEDx+P4xAKzbXshe96nABbGEQ3aMPCN6Xk3lw3DM4A+Bi5qRQfAIY95leu6P0b5R4LZtr2UPW83gLOjxCKe+xnrSKjhux9jYLXWerCRVkOw7u5ukTOMLwGcFSpCtA9APzN/bzCXPaIuAq4CcHWTAMdB9AUzDxORCc+7GETLGpS8DycbNZi6YBNNIpf7GkQTnSpwPcPAU/UW9GSD2QrmzRGARWJ+zHHd98LspJS3EvNWBkTNc+avlOteXk+/LpiU8iUwbwo4+jN7o1LqozgZsSxrlUH0LoA5Afu/wPyAct3nY+iQlPJeMD9eo0P0sFLqyTqdufZ2T6FwQdk0fwBgVj4lw7jBcZy+GMGcMlliWVd4RP4a7Zy8eczwvOtKQ0MHm9HxswfmN6t8mMfLnrdoeHj4WFArNGNSym3wW3sVFb2glIoqrdBY/c2XmF9kIg/AZqXUL81ATdkKIXYQsDEQ1yNKqUfjgQnxLYDFp4yZx+e2ty8YHBwcbyWgtHy6uro6zVzup8ruysBBrfVlkWCWZV1oEPllOH0xP6tc9/60AkyiE5Y1BuYHG1lNKdq23Tu5b50anwxjheM4A0kCSsvXtqx1TFTVRcnzljpDQ/urVk5wQNuyNjLRjkDTWOQ4zmhawSXREUJcSkCxqqCAW7TW7zQGE+IeBrZXGpn5/LxisXg0SUBp+QohFhPg94Dpi2iDUmpnVMZu80/TlUZGLtdVKpVG0gouiY5t21dOnlunl4rnrXSGhvxT0PS94CBLLGu5R1S1nhi4U2v9apKA0vK1hXjQP/VETXxN85h4rQB+C9TwHq11b1rBJdGRQmgAVoXGUaV1zetP+AZtWXtBtLLCmRm4RGv9XZKgkvpKKVeCeW9gfb2ilLorqB0KZltWzToD8InS+pqkwbXq71eSAewPHog95uWu634eC8w3Ckm5f3u30npNq8El8ZNCfADg+oBG3Xjqnu4ty1pmEH0WEsz7Sut6/1Ekib2urxCij4DVNQZEi5VSh8IcG75oSikfAvMTNY7MfWZb203FYvFEJiSToj09PflyudwH5mtrSo15k+O6L9cbP/KvASHEWwSsPx2Zk0LsAlBb+sw7letuaDSpkWCFQqGtzTTfDv2LjGifaZq9aWeuUaYAfHhOZ+eagYGBciIw33km4aKgTpTL60ZGRv6OWgKRGZsSmAm4tKD8mGODZZ25NKGaBssKLm2olsDShssCqmWwtOCygkoElhQuS6jEYK3CZQ2VClizcBFQ/SfK5VVx9qnU9rEooTj7nK9R7+znf9wYGx/vHR0d/TNqrDjPm9rH4gjWO98xsGeyRMJO6fvGxsbWpgWVWilWAjfMXPjMpJqpqSFSz1jkmquGywQqk4zFOlv+a5QZVKZgEZnLFCpzsKnsSSH6AazwfzPwcUdHx9q4X//jNKwwm0zWWNhA/gdAzuXmzNTHjRkDa3XmW/WbBWt15k6X32zGTtfMtzruGZuxfwDDHbBV2z1gwwAAAABJRU5ErkJggg=="
                  />
                  <img
                    className="w-10 h-10 p-2 mt-2 bg-white rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                    alt=""
                  />
                  
                </div>
                
              </div>
              
              <div className="mt-52 group">
              <div className="-mt-16 w-80 text-center text-lg p-3 bg-opacity-80 hidden group-hover:block bg-black text-white absolute">Add to Cart</div>
                <h4 className="text-black absolute mt-1 font-semibold">
                  HAVIT HV-G92 Gamepad
                </h4>
                <h5 className="absolute mt-6 text-red-500 font-semibold">
                  $120{" "}
                  <span className="text-gray-500 font-semibold  line-through">
                    $160
                  </span>
                </h5>
                <div className="flex gap-x-1 ">
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <p className=" mt-14 font-semibold text-gray-500">(75)</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card group  w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-full h-72" src="kb.png" alt="" />
              <div className="flex justify-between -mt-72 items-center">
                <button className="p-1 px-4 text-sm rounded-md  ml-2 bg-red-500 text-white ">
                  -35%
                </button>
                <div className="flex-row mt-3 mr-3">
                  <img
                    className="w-10 h-10 p-2 bg-white rounded-full "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABWdJREFUaEPtmV1oHFUUx/9ndjYtiQ8aKFWk0ipY3GTunRoUpNBaP6ptbKtofVCL+NA+VfCzKAVfFLWK9sEPsL6IVPxClNpUazVG0ZZg1517J4laUYJokVIKCWrVbufIxKTZnZ3dmd2ZSbFm3nbmnP89v3vOPffODuEMvegM5cIs2H8ts7MZ+99lrLu7e0EemD8Bns8fLpVKh1uZBCnl+cbJk+f5vicN41et9c+t6Ez5NF2KhULh3Hw+fzszryFgedjgBOzygDe01q83Ck5KeQcxr2dgbR27fjDvZqLXtNZHmgGNDSaE6CDmLSDaAmBuzEGOgPk5Jtqutf7d95nQIboPzHcDmBdT5w8QbWtvb3/6wIEDx+P4xAKzbXshe96nABbGEQ3aMPCN6Xk3lw3DM4A+Bi5qRQfAIY95leu6P0b5R4LZtr2UPW83gLOjxCKe+xnrSKjhux9jYLXWerCRVkOw7u5ukTOMLwGcFSpCtA9APzN/bzCXPaIuAq4CcHWTAMdB9AUzDxORCc+7GETLGpS8DycbNZi6YBNNIpf7GkQTnSpwPcPAU/UW9GSD2QrmzRGARWJ+zHHd98LspJS3EvNWBkTNc+avlOteXk+/LpiU8iUwbwo4+jN7o1LqozgZsSxrlUH0LoA5Afu/wPyAct3nY+iQlPJeMD9eo0P0sFLqyTqdufZ2T6FwQdk0fwBgVj4lw7jBcZy+GMGcMlliWVd4RP4a7Zy8eczwvOtKQ0MHm9HxswfmN6t8mMfLnrdoeHj4WFArNGNSym3wW3sVFb2glIoqrdBY/c2XmF9kIg/AZqXUL81ATdkKIXYQsDEQ1yNKqUfjgQnxLYDFp4yZx+e2ty8YHBwcbyWgtHy6uro6zVzup8ruysBBrfVlkWCWZV1oEPllOH0xP6tc9/60AkyiE5Y1BuYHG1lNKdq23Tu5b50anwxjheM4A0kCSsvXtqx1TFTVRcnzljpDQ/urVk5wQNuyNjLRjkDTWOQ4zmhawSXREUJcSkCxqqCAW7TW7zQGE+IeBrZXGpn5/LxisXg0SUBp+QohFhPg94Dpi2iDUmpnVMZu80/TlUZGLtdVKpVG0gouiY5t21dOnlunl4rnrXSGhvxT0PS94CBLLGu5R1S1nhi4U2v9apKA0vK1hXjQP/VETXxN85h4rQB+C9TwHq11b1rBJdGRQmgAVoXGUaV1zetP+AZtWXtBtLLCmRm4RGv9XZKgkvpKKVeCeW9gfb2ilLorqB0KZltWzToD8InS+pqkwbXq71eSAewPHog95uWu634eC8w3Ckm5f3u30npNq8El8ZNCfADg+oBG3Xjqnu4ty1pmEH0WEsz7Sut6/1Ekib2urxCij4DVNQZEi5VSh8IcG75oSikfAvMTNY7MfWZb203FYvFEJiSToj09PflyudwH5mtrSo15k+O6L9cbP/KvASHEWwSsPx2Zk0LsAlBb+sw7letuaDSpkWCFQqGtzTTfDv2LjGifaZq9aWeuUaYAfHhOZ+eagYGBciIw33km4aKgTpTL60ZGRv6OWgKRGZsSmAm4tKD8mGODZZ25NKGaBssKLm2olsDShssCqmWwtOCygkoElhQuS6jEYK3CZQ2VClizcBFQ/SfK5VVx9qnU9rEooTj7nK9R7+znf9wYGx/vHR0d/TNqrDjPm9rH4gjWO98xsGeyRMJO6fvGxsbWpgWVWilWAjfMXPjMpJqpqSFSz1jkmquGywQqk4zFOlv+a5QZVKZgEZnLFCpzsKnsSSH6AazwfzPwcUdHx9q4X//jNKwwm0zWWNhA/gdAzuXmzNTHjRkDa3XmW/WbBWt15k6X32zGTtfMtzruGZuxfwDDHbBV2z1gwwAAAABJRU5ErkJggg=="
                  />
                  <img
                    className="w-10 h-10 p-2 mt-2 bg-white rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-52 ">
              <div className="-mt-16 w-80 text-center text-lg p-3 bg-opacity-80 hidden group-hover:block bg-black text-white absolute">Add to Cart</div>
                <h4 className="text-black absolute -mt-2 font-semibold">
                  AK-900 Wired Keyboard
                </h4>
                <h5 className="absolute mt-6 text-red-500  font-semibold">
                  $960{" "}
                  <span className="text-gray-500 font-semibold line-through">
                    $1160
                  </span>
                </h5>
                <div className="flex gap-x-1 ">
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <p className=" mt-14 font-semibold text-gray-500">(99)</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card group  w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-full h-72" src="tv.png" alt="" />
              <div className="flex justify-between -mt-72 items-center">
                <button className="p-1 px-4 text-sm rounded-md  ml-2 bg-red-500 text-white ">
                  -30%
                </button>
                <div className="flex-row mt-3 mr-3">
                  <img
                    className="w-10 h-10 p-2 bg-white rounded-full "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABWdJREFUaEPtmV1oHFUUx/9ndjYtiQ8aKFWk0ipY3GTunRoUpNBaP6ptbKtofVCL+NA+VfCzKAVfFLWK9sEPsL6IVPxClNpUazVG0ZZg1517J4laUYJokVIKCWrVbufIxKTZnZ3dmd2ZSbFm3nbmnP89v3vOPffODuEMvegM5cIs2H8ts7MZ+99lrLu7e0EemD8Bns8fLpVKh1uZBCnl+cbJk+f5vicN41et9c+t6Ez5NF2KhULh3Hw+fzszryFgedjgBOzygDe01q83Ck5KeQcxr2dgbR27fjDvZqLXtNZHmgGNDSaE6CDmLSDaAmBuzEGOgPk5Jtqutf7d95nQIboPzHcDmBdT5w8QbWtvb3/6wIEDx+P4xAKzbXshe96nABbGEQ3aMPCN6Xk3lw3DM4A+Bi5qRQfAIY95leu6P0b5R4LZtr2UPW83gLOjxCKe+xnrSKjhux9jYLXWerCRVkOw7u5ukTOMLwGcFSpCtA9APzN/bzCXPaIuAq4CcHWTAMdB9AUzDxORCc+7GETLGpS8DycbNZi6YBNNIpf7GkQTnSpwPcPAU/UW9GSD2QrmzRGARWJ+zHHd98LspJS3EvNWBkTNc+avlOteXk+/LpiU8iUwbwo4+jN7o1LqozgZsSxrlUH0LoA5Afu/wPyAct3nY+iQlPJeMD9eo0P0sFLqyTqdufZ2T6FwQdk0fwBgVj4lw7jBcZy+GMGcMlliWVd4RP4a7Zy8eczwvOtKQ0MHm9HxswfmN6t8mMfLnrdoeHj4WFArNGNSym3wW3sVFb2glIoqrdBY/c2XmF9kIg/AZqXUL81ATdkKIXYQsDEQ1yNKqUfjgQnxLYDFp4yZx+e2ty8YHBwcbyWgtHy6uro6zVzup8ruysBBrfVlkWCWZV1oEPllOH0xP6tc9/60AkyiE5Y1BuYHG1lNKdq23Tu5b50anwxjheM4A0kCSsvXtqx1TFTVRcnzljpDQ/urVk5wQNuyNjLRjkDTWOQ4zmhawSXREUJcSkCxqqCAW7TW7zQGE+IeBrZXGpn5/LxisXg0SUBp+QohFhPg94Dpi2iDUmpnVMZu80/TlUZGLtdVKpVG0gouiY5t21dOnlunl4rnrXSGhvxT0PS94CBLLGu5R1S1nhi4U2v9apKA0vK1hXjQP/VETXxN85h4rQB+C9TwHq11b1rBJdGRQmgAVoXGUaV1zetP+AZtWXtBtLLCmRm4RGv9XZKgkvpKKVeCeW9gfb2ilLorqB0KZltWzToD8InS+pqkwbXq71eSAewPHog95uWu634eC8w3Ckm5f3u30npNq8El8ZNCfADg+oBG3Xjqnu4ty1pmEH0WEsz7Sut6/1Ekib2urxCij4DVNQZEi5VSh8IcG75oSikfAvMTNY7MfWZb203FYvFEJiSToj09PflyudwH5mtrSo15k+O6L9cbP/KvASHEWwSsPx2Zk0LsAlBb+sw7letuaDSpkWCFQqGtzTTfDv2LjGifaZq9aWeuUaYAfHhOZ+eagYGBciIw33km4aKgTpTL60ZGRv6OWgKRGZsSmAm4tKD8mGODZZ25NKGaBssKLm2olsDShssCqmWwtOCygkoElhQuS6jEYK3CZQ2VClizcBFQ/SfK5VVx9qnU9rEooTj7nK9R7+znf9wYGx/vHR0d/TNqrDjPm9rH4gjWO98xsGeyRMJO6fvGxsbWpgWVWilWAjfMXPjMpJqpqSFSz1jkmquGywQqk4zFOlv+a5QZVKZgEZnLFCpzsKnsSSH6AazwfzPwcUdHx9q4X//jNKwwm0zWWNhA/gdAzuXmzNTHjRkDa3XmW/WbBWt15k6X32zGTtfMtzruGZuxfwDDHbBV2z1gwwAAAABJRU5ErkJggg=="
                  />
                  <img
                    className="w-10 h-10 p-2 mt-2 bg-white rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-52 ">
              <div className="-mt-16 w-80 text-center text-lg p-3 bg-opacity-80 hidden group-hover:block bg-black text-white absolute">Add to Cart</div>
                <h4 className="text-black absolute -mt-2 font-semibold">
                  IPS LCD Gaming Monitor
                </h4>
                <h5 className="absolute mt-6 text-red-500 font-semibold">
                  $370{" "}
                  <span className="text-gray-500 font-semibold  line-through">
                    $400
                  </span>
                </h5>
                <div className="flex gap-x-1 ">
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <p className=" mt-14 font-semibold text-gray-500">(99)</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card group  w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-full h-72" src="chair.png" alt="" />
              <div className="flex justify-between -mt-72 items-center">
                <button className="p-1 px-4 text-sm rounded-md  ml-2 bg-red-500 text-white ">
                  -25%
                </button>
                <div className="flex-row mt-3 mr-3">
                  <img
                    className="w-10 h-10 p-2 bg-white rounded-full "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABWdJREFUaEPtmV1oHFUUx/9ndjYtiQ8aKFWk0ipY3GTunRoUpNBaP6ptbKtofVCL+NA+VfCzKAVfFLWK9sEPsL6IVPxClNpUazVG0ZZg1517J4laUYJokVIKCWrVbufIxKTZnZ3dmd2ZSbFm3nbmnP89v3vOPffODuEMvegM5cIs2H8ts7MZ+99lrLu7e0EemD8Bns8fLpVKh1uZBCnl+cbJk+f5vicN41et9c+t6Ez5NF2KhULh3Hw+fzszryFgedjgBOzygDe01q83Ck5KeQcxr2dgbR27fjDvZqLXtNZHmgGNDSaE6CDmLSDaAmBuzEGOgPk5Jtqutf7d95nQIboPzHcDmBdT5w8QbWtvb3/6wIEDx+P4xAKzbXshe96nABbGEQ3aMPCN6Xk3lw3DM4A+Bi5qRQfAIY95leu6P0b5R4LZtr2UPW83gLOjxCKe+xnrSKjhux9jYLXWerCRVkOw7u5ukTOMLwGcFSpCtA9APzN/bzCXPaIuAq4CcHWTAMdB9AUzDxORCc+7GETLGpS8DycbNZi6YBNNIpf7GkQTnSpwPcPAU/UW9GSD2QrmzRGARWJ+zHHd98LspJS3EvNWBkTNc+avlOteXk+/LpiU8iUwbwo4+jN7o1LqozgZsSxrlUH0LoA5Afu/wPyAct3nY+iQlPJeMD9eo0P0sFLqyTqdufZ2T6FwQdk0fwBgVj4lw7jBcZy+GMGcMlliWVd4RP4a7Zy8eczwvOtKQ0MHm9HxswfmN6t8mMfLnrdoeHj4WFArNGNSym3wW3sVFb2glIoqrdBY/c2XmF9kIg/AZqXUL81ATdkKIXYQsDEQ1yNKqUfjgQnxLYDFp4yZx+e2ty8YHBwcbyWgtHy6uro6zVzup8ruysBBrfVlkWCWZV1oEPllOH0xP6tc9/60AkyiE5Y1BuYHG1lNKdq23Tu5b50anwxjheM4A0kCSsvXtqx1TFTVRcnzljpDQ/urVk5wQNuyNjLRjkDTWOQ4zmhawSXREUJcSkCxqqCAW7TW7zQGE+IeBrZXGpn5/LxisXg0SUBp+QohFhPg94Dpi2iDUmpnVMZu80/TlUZGLtdVKpVG0gouiY5t21dOnlunl4rnrXSGhvxT0PS94CBLLGu5R1S1nhi4U2v9apKA0vK1hXjQP/VETXxN85h4rQB+C9TwHq11b1rBJdGRQmgAVoXGUaV1zetP+AZtWXtBtLLCmRm4RGv9XZKgkvpKKVeCeW9gfb2ilLorqB0KZltWzToD8InS+pqkwbXq71eSAewPHog95uWu634eC8w3Ckm5f3u30npNq8El8ZNCfADg+oBG3Xjqnu4ty1pmEH0WEsz7Sut6/1Ekib2urxCij4DVNQZEi5VSh8IcG75oSikfAvMTNY7MfWZb203FYvFEJiSToj09PflyudwH5mtrSo15k+O6L9cbP/KvASHEWwSsPx2Zk0LsAlBb+sw7letuaDSpkWCFQqGtzTTfDv2LjGifaZq9aWeuUaYAfHhOZ+eagYGBciIw33km4aKgTpTL60ZGRv6OWgKRGZsSmAm4tKD8mGODZZ25NKGaBssKLm2olsDShssCqmWwtOCygkoElhQuS6jEYK3CZQ2VClizcBFQ/SfK5VVx9qnU9rEooTj7nK9R7+znf9wYGx/vHR0d/TNqrDjPm9rH4gjWO98xsGeyRMJO6fvGxsbWpgWVWilWAjfMXPjMpJqpqSFSz1jkmquGywQqk4zFOlv+a5QZVKZgEZnLFCpzsKnsSSH6AazwfzPwcUdHx9q4X//jNKwwm0zWWNhA/gdAzuXmzNTHjRkDa3XmW/WbBWt15k6X32zGTtfMtzruGZuxfwDDHbBV2z1gwwAAAABJRU5ErkJggg=="
                  />
                  <img
                    className="w-10 h-10 p-2 mt-2 bg-white rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-52 ">
              <div className="-mt-16 w-80 text-center text-lg p-3 bg-opacity-80 hidden group-hover:block bg-black text-white absolute">Add to Cart</div>
                <h4 className="text-black absolute -mt-2 font-semibold">
                  S-Series Comfort Chair
                </h4>
                <h5 className="absolute mt-6 text-red-500 font-semibold">
                  $375{" "}
                  <span className="text-gray-500 font-semibold  line-through">
                    $400
                  </span>
                </h5>
                <div className="flex gap-x-1 ">
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <p className=" mt-14 font-semibold text-gray-500">(88)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-center">
          <button className="p-4 px-12 mt-10 mb-16 bg-red-500 text-white rounded-md hover:bg-red-600">
            View All Products
          </button>
        </div>
        {/* Categories */}
        <hr className="ml-[120px] mr-[120px]" />
        <div className="flex ">
          <div className="w-6 h-12 ml-[120px] rounded-md mt-20 bg-red-500 p-3"></div>
          <p className="font-bold text-red-500 ml-5 mt-[90px] text-lg">
            Categories
          </p>
        </div>
        {/* Category Cards */}
        <div className="flex justify-between">
          <h2 className="text-4xl ml-[120px] mt-7 font-semibold">
            Browse By Category
          </h2>
          {/* Arrows */}
          <div className="flex gap-x-4 mr-[110px] mt-5">
            <img
              className="w-12 h-12 bg-gray-100 p-2 rounded-full hover:bg-gray-300"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAglJREFUaEPtmc9KxDAQxr90vfkHfA6h24soiLiITyD4LuJJX0LwWVwE8SAelJDCInhw8eDBg7DgcduRrq2UardNmm6yJXueSeY338xskjJ09Mc6ygUHtmzKOsWcYpZkwJWiJULUDsMpVjtVlhg6xVSF6Pf7W4zoMgZOhBAfquvI+rWqWAIFojsAmwBeV6bTweNo9CYbpIp9a2AFqCy2d+Z5A875i0qwMj6tgJVAJXF9xkR7YRg+ywSpYqsdrAJqEIZhqBKorI9WsCAIAorjm7Sn8rEkSi0MKtlYG9gMKopuwdhGIbsLh9IGNgdqEhPtL6r88gltrNg8KAIOhRBPsv2hw74RmK1QjUoxCIJtiqLhPz01MalUpraSYjOon+m3ViibLwIOTJVfox7zfX+HAdcA1v/0AtEp6/UedPRIbo0x53wsu6aUYnOUkt23tj0DLrgQ57UdUsPaYCag0iHgwJR7zIRqrZdilg3f93cZMASwWqx7As48z7uX7YcK+/aHRxZAxbg/EkLonozSuao9PIor2/5fpgyWgNp8+mgElsKVXVeMHq0ag1XBLe21JTdQunfRtBFOSynmJ6YtTwTawX57rvxRZzmf3zL1OvlgWgLXjSfuAtwVAced+SghfcDT6NDK8NAYn/JSDkw5dYYcnWKGEq+8rVNMOXWGHJ1ihhKvvK1TTDl1hhy/AWjXK0bIdDnhAAAAAElFTkSuQmCC"
            />
            <img
              className="w-12 h-12 bg-gray-100 p-2 rounded-full hover:bg-gray-300"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAdxJREFUaEPtmcFKxDAQhv/ZvQqCBw8eRK9CQ+tFPYji+iIefA496cv4CKIrnkSEbhcPvoOwKHpsI4Uu1LWraUwm25BCb0km3/yT6WRK8PQhT7kQwLqmbFAsKLYgHgihuCBCKG8jKKbsqgUZGBQzIUSSJGt5nl8R0eloNHo2sea8NdgUE0JsAhgSsA5gAqJ9m3AsYEmSbBV5fgtgteZhq3AsYFEURT2iIYCVmdCxBscCVsJww7GBccOxgtXg7gEsz4Yl9XpHaZqmJrIlO1i5aSHENgE3P+CkfKd+/8AEnBMwDjhnYDW4OwBL38LPgHJOwSq4HQKuTcM5B7MFpwUWx/EGgPI19kgpdyHlZcOCb4WUg/F4/NTGmB6YEOcSOGtj6J9jP6pPwaPqOl0BK3lawQWwegjE3oaiheRRFMUeARcNZ+hTAoMsyx5Uz1c5TisU2xhQGSuE+O1bdpymqXLSmNpzDvYHlHbd6BSsKob9KqlsV/hOFLMN5SR5zIUCJp29aFZ9j8bbs+l2HFsoetnM4YZiO2PeNkyry2S9xf0KosPOt7inZc70pwSAkyzLXlTKLd0xbMlDd4O68wKYrudczQuKufK8rt2gmK7nXM0LirnyvK7doJiu51zN81axL5TW4jeAn0MfAAAAAElFTkSuQmCC"
            />
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-wrap grid-col-6 ml-[120px] mr-[120px] mt-16 mb-10 justify-between">
          {/* Card1 */}
          <div className="flex grid-col-6 mt-16 mb-10">
            <div className="border-[1.5px] border-gray-400 p-3 px-16 rounded-md hover:bg-red-500 relative hover:text-white group overflow-hidden  flex flex-col items-center">
              <img
                className="w-14 h-14 mt-5 transition-opacity duration-300 group-hover:opacity-0"
                src="https://cdn-icons-png.flaticon.com/128/2420/2420893.png"
                alt=""
              />
              <img
                src="smartphone.png"
                alt="Image"
                className="absolute inset-0 w-14 h-14 mt-8 ml-16 opacity-0 transition-opacity duration-0 group-hover:opacity-100"
              ></img>
              <p className="mt-5 mb-2">Phones</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex grid-col-6 mt-16 mb-10">
            <div className="border-[1.5px] border-gray-400 p-3 px-16 rounded-md hover:bg-red-500 relative hover:text-white group overflow-hidden  flex flex-col items-center">
              <img
                className="w-14 h-14 mt-5 transition-opacity duration-0 group-hover:opacity-0"
                src="https://cdn-icons-png.flaticon.com/128/3474/3474360.png"
                alt=""
              />
              <img
                src="monitor.png"
                alt="Image"
                className="absolute inset-0 w-14 h-14 mt-8 ml-16 opacity-0 transition-opacity duration-0 group-hover:opacity-100"
              ></img>
              <p className="mt-5 mb-2">Monitor</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex grid-col-6 mt-16 mb-10">
            <div className="border-[1.5px] border-gray-400 p-3 px-16 rounded-md hover:bg-red-500 relative hover:text-white group overflow-hidden flex flex-col items-center">
              <img
                className="w-14 h-14 mt-5 transition-opacity duration-0 group-hover:opacity-0"
                src="https://cdn-icons-png.flaticon.com/128/11617/11617701.png"
                alt=""
              />
              <img
                src="smart-watch.png"
                alt="Image"
                className="absolute inset-0 w-14 h-14 mt-8 ml-[86px] opacity-0 transition-opacity duration-0 group-hover:opacity-100"
              ></img>
              <p className="mt-5 mb-2">SmartWatch</p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="flex flex-col items-center flex-wrap grid-col-6 mt-16 mb-10 justify-center">
            <div className="border-[1.5px] border-gray-400 p-3 px-16 rounded-md hover:bg-red-500 relative hover:text-white group overflow-hidden flex-warp flex flex-col items-center justify-center">
              <img
                className="w-14 h-14 mt-5 transition-opacity duration-0 group-hover:opacity-0"
                src="https://cdn-icons-png.flaticon.com/128/5728/5728913.png"
                alt=""
              />
              <img
                src="earphones.png"
                alt="Image"
                className="absolute inset-0 w-14 h-14  mt-8 ml-[86px] opacity-0 transition-opacity duration-0 group-hover:opacity-100"
              ></img>
              <p className="mt-5 mb-2">HeadPhones</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="flex grid-col-6 mt-16 mb-10">
            <div className="border-[1.5px] border-gray-400 p-3 px-16 rounded-md hover:bg-red-500 relative hover:text-white group overflow-hidden  flex flex-col items-center">
              <img
                className="w-14 h-14 mt-5 transition-opacity duration-0 group-hover:opacity-0"
                src="https://cdn-icons-png.flaticon.com/128/2951/2951086.png"
                alt=""
              />
              <img
                src="camera.png"
                alt="Image"
                className="absolute inset-0 w-14 h-14 mt-8 ml-[72px] opacity-0 transition-opacity duration-0 group-hover:opacity-100"
              ></img>
              <p className="mt-5 mb-2">Cameras</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex  grid-col-6 mt-16 mb-10">
            <div className="border-[1.5px] border-gray-400 p-3 px-16 rounded-md hover:bg-red-500 relative hover:text-white group overflow-hidden  flex flex-col items-center">
              <img
                className="w-14 h-14 mt-5 transition-opacity duration-0 group-hover:opacity-0"
                src="https://cdn-icons-png.flaticon.com/128/3197/3197658.png"
                alt=""
              />
              <img
                src="game-console.png"
                alt="Image"
                className="absolute inset-0 w-14 h-14 mt-8 ml-[68px] opacity-0 transition-opacity duration-0 group-hover:opacity-100"
              ></img>
              <p className="mt-5 mb-2">Gaming</p>
            </div>
          </div>
        </div>

        <hr className="ml-[120px] mr-[120px]" />
        <div className="flex ">
          <div className="w-6 h-12 ml-[120px] rounded-md mt-20 bg-red-500 p-3"></div>
          <p className="font-bold text-red-500 ml-5 mt-[90px] text-lg">
            This Month
          </p>
        </div>
        <div className="flex justify-between">
          <h2 className="text-4xl ml-[120px] mt-7 font-semibold">
            Browse By Category
          </h2>
          {/* View All Button*/}
          <div className="flex justify-center">
            <button className="p-4 px-12 mt-10 mb-16 mr-[120px] bg-red-500 text-white rounded-md hover:bg-red-600">
              View All
            </button>
          </div>
        </div>
        {/* Cards */}
        <div className="flex justify-around grid-cols-4 mb-10 mt-5 ml-[80px] mr-[80px]">
          {/* Card 1 */}
          <div className="card  group w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-full h-72" src="hoodie.png" alt="" />
              <div className="flex justify-end -mt-72 items-center">
                <div className="flex-row mt-3 mr-3">
                  <img
                    className="w-10 h-10 p-2 bg-white rounded-full "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABWdJREFUaEPtmV1oHFUUx/9ndjYtiQ8aKFWk0ipY3GTunRoUpNBaP6ptbKtofVCL+NA+VfCzKAVfFLWK9sEPsL6IVPxClNpUazVG0ZZg1517J4laUYJokVIKCWrVbufIxKTZnZ3dmd2ZSbFm3nbmnP89v3vOPffODuEMvegM5cIs2H8ts7MZ+99lrLu7e0EemD8Bns8fLpVKh1uZBCnl+cbJk+f5vicN41et9c+t6Ez5NF2KhULh3Hw+fzszryFgedjgBOzygDe01q83Ck5KeQcxr2dgbR27fjDvZqLXtNZHmgGNDSaE6CDmLSDaAmBuzEGOgPk5Jtqutf7d95nQIboPzHcDmBdT5w8QbWtvb3/6wIEDx+P4xAKzbXshe96nABbGEQ3aMPCN6Xk3lw3DM4A+Bi5qRQfAIY95leu6P0b5R4LZtr2UPW83gLOjxCKe+xnrSKjhux9jYLXWerCRVkOw7u5ukTOMLwGcFSpCtA9APzN/bzCXPaIuAq4CcHWTAMdB9AUzDxORCc+7GETLGpS8DycbNZi6YBNNIpf7GkQTnSpwPcPAU/UW9GSD2QrmzRGARWJ+zHHd98LspJS3EvNWBkTNc+avlOteXk+/LpiU8iUwbwo4+jN7o1LqozgZsSxrlUH0LoA5Afu/wPyAct3nY+iQlPJeMD9eo0P0sFLqyTqdufZ2T6FwQdk0fwBgVj4lw7jBcZy+GMGcMlliWVd4RP4a7Zy8eczwvOtKQ0MHm9HxswfmN6t8mMfLnrdoeHj4WFArNGNSym3wW3sVFb2glIoqrdBY/c2XmF9kIg/AZqXUL81ATdkKIXYQsDEQ1yNKqUfjgQnxLYDFp4yZx+e2ty8YHBwcbyWgtHy6uro6zVzup8ruysBBrfVlkWCWZV1oEPllOH0xP6tc9/60AkyiE5Y1BuYHG1lNKdq23Tu5b50anwxjheM4A0kCSsvXtqx1TFTVRcnzljpDQ/urVk5wQNuyNjLRjkDTWOQ4zmhawSXREUJcSkCxqqCAW7TW7zQGE+IeBrZXGpn5/LxisXg0SUBp+QohFhPg94Dpi2iDUmpnVMZu80/TlUZGLtdVKpVG0gouiY5t21dOnlunl4rnrXSGhvxT0PS94CBLLGu5R1S1nhi4U2v9apKA0vK1hXjQP/VETXxN85h4rQB+C9TwHq11b1rBJdGRQmgAVoXGUaV1zetP+AZtWXtBtLLCmRm4RGv9XZKgkvpKKVeCeW9gfb2ilLorqB0KZltWzToD8InS+pqkwbXq71eSAewPHog95uWu634eC8w3Ckm5f3u30npNq8El8ZNCfADg+oBG3Xjqnu4ty1pmEH0WEsz7Sut6/1Ekib2urxCij4DVNQZEi5VSh8IcG75oSikfAvMTNY7MfWZb203FYvFEJiSToj09PflyudwH5mtrSo15k+O6L9cbP/KvASHEWwSsPx2Zk0LsAlBb+sw7letuaDSpkWCFQqGtzTTfDv2LjGifaZq9aWeuUaYAfHhOZ+eagYGBciIw33km4aKgTpTL60ZGRv6OWgKRGZsSmAm4tKD8mGODZZ25NKGaBssKLm2olsDShssCqmWwtOCygkoElhQuS6jEYK3CZQ2VClizcBFQ/SfK5VVx9qnU9rEooTj7nK9R7+znf9wYGx/vHR0d/TNqrDjPm9rH4gjWO98xsGeyRMJO6fvGxsbWpgWVWilWAjfMXPjMpJqpqSFSz1jkmquGywQqk4zFOlv+a5QZVKZgEZnLFCpzsKnsSSH6AazwfzPwcUdHx9q4X//jNKwwm0zWWNhA/gdAzuXmzNTHjRkDa3XmW/WbBWt15k6X32zGTtfMtzruGZuxfwDDHbBV2z1gwwAAAABJRU5ErkJggg=="
                  />
                  <img
                    className="w-10 h-10 p-2 mt-2 bg-white rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-52 ">
              <div className="-mt-16 w-80 text-center text-lg p-3 bg-opacity-80 hidden group-hover:block bg-black text-white absolute">Add to Cart</div>
                <h4 className="text-black absolute -mt-2 font-semibold">
                  The North Coat
                </h4>
                <h5 className="absolute mt-6 text-red-500 font-semibold">
                  $260{" "}
                  <span className="text-gray-500 font-semibold  line-through">
                    $360
                  </span>
                </h5>
                <div className="flex gap-x-1 ">
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <p className=" mt-14 font-semibold text-gray-500">(65)</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card group  w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-full h-72" src="bag.jpg" alt="" />
              <div className="flex justify-end -mt-72 items-center">
                <div className="flex-row mt-3 mr-3">
                  <img
                    className="w-10 h-10 p-2 bg-white rounded-full "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABWdJREFUaEPtmV1oHFUUx/9ndjYtiQ8aKFWk0ipY3GTunRoUpNBaP6ptbKtofVCL+NA+VfCzKAVfFLWK9sEPsL6IVPxClNpUazVG0ZZg1517J4laUYJokVIKCWrVbufIxKTZnZ3dmd2ZSbFm3nbmnP89v3vOPffODuEMvegM5cIs2H8ts7MZ+99lrLu7e0EemD8Bns8fLpVKh1uZBCnl+cbJk+f5vicN41et9c+t6Ez5NF2KhULh3Hw+fzszryFgedjgBOzygDe01q83Ck5KeQcxr2dgbR27fjDvZqLXtNZHmgGNDSaE6CDmLSDaAmBuzEGOgPk5Jtqutf7d95nQIboPzHcDmBdT5w8QbWtvb3/6wIEDx+P4xAKzbXshe96nABbGEQ3aMPCN6Xk3lw3DM4A+Bi5qRQfAIY95leu6P0b5R4LZtr2UPW83gLOjxCKe+xnrSKjhux9jYLXWerCRVkOw7u5ukTOMLwGcFSpCtA9APzN/bzCXPaIuAq4CcHWTAMdB9AUzDxORCc+7GETLGpS8DycbNZi6YBNNIpf7GkQTnSpwPcPAU/UW9GSD2QrmzRGARWJ+zHHd98LspJS3EvNWBkTNc+avlOteXk+/LpiU8iUwbwo4+jN7o1LqozgZsSxrlUH0LoA5Afu/wPyAct3nY+iQlPJeMD9eo0P0sFLqyTqdufZ2T6FwQdk0fwBgVj4lw7jBcZy+GMGcMlliWVd4RP4a7Zy8eczwvOtKQ0MHm9HxswfmN6t8mMfLnrdoeHj4WFArNGNSym3wW3sVFb2glIoqrdBY/c2XmF9kIg/AZqXUL81ATdkKIXYQsDEQ1yNKqUfjgQnxLYDFp4yZx+e2ty8YHBwcbyWgtHy6uro6zVzup8ruysBBrfVlkWCWZV1oEPllOH0xP6tc9/60AkyiE5Y1BuYHG1lNKdq23Tu5b50anwxjheM4A0kCSsvXtqx1TFTVRcnzljpDQ/urVk5wQNuyNjLRjkDTWOQ4zmhawSXREUJcSkCxqqCAW7TW7zQGE+IeBrZXGpn5/LxisXg0SUBp+QohFhPg94Dpi2iDUmpnVMZu80/TlUZGLtdVKpVG0gouiY5t21dOnlunl4rnrXSGhvxT0PS94CBLLGu5R1S1nhi4U2v9apKA0vK1hXjQP/VETXxN85h4rQB+C9TwHq11b1rBJdGRQmgAVoXGUaV1zetP+AZtWXtBtLLCmRm4RGv9XZKgkvpKKVeCeW9gfb2ilLorqB0KZltWzToD8InS+pqkwbXq71eSAewPHog95uWu634eC8w3Ckm5f3u30npNq8El8ZNCfADg+oBG3Xjqnu4ty1pmEH0WEsz7Sut6/1Ekib2urxCij4DVNQZEi5VSh8IcG75oSikfAvMTNY7MfWZb203FYvFEJiSToj09PflyudwH5mtrSo15k+O6L9cbP/KvASHEWwSsPx2Zk0LsAlBb+sw7letuaDSpkWCFQqGtzTTfDv2LjGifaZq9aWeuUaYAfHhOZ+eagYGBciIw33km4aKgTpTL60ZGRv6OWgKRGZsSmAm4tKD8mGODZZ25NKGaBssKLm2olsDShssCqmWwtOCygkoElhQuS6jEYK3CZQ2VClizcBFQ/SfK5VVx9qnU9rEooTj7nK9R7+znf9wYGx/vHR0d/TNqrDjPm9rH4gjWO98xsGeyRMJO6fvGxsbWpgWVWilWAjfMXPjMpJqpqSFSz1jkmquGywQqk4zFOlv+a5QZVKZgEZnLFCpzsKnsSSH6AazwfzPwcUdHx9q4X//jNKwwm0zWWNhA/gdAzuXmzNTHjRkDa3XmW/WbBWt15k6X32zGTtfMtzruGZuxfwDDHbBV2z1gwwAAAABJRU5ErkJggg=="
                  />
                  <img
                    className="w-10 h-10 p-2 mt-2 bg-white rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-52 ">
              <div className="-mt-16 w-80 text-center text-lg p-3 bg-opacity-80 hidden group-hover:block bg-black text-white absolute">Add to Cart</div>
                <h4 className="text-black absolute -mt-2 font-semibold">
                  Gucci Duffle Bag
                </h4>
                <h5 className="absolute mt-6 text-red-500 font-semibold">
                  $960{" "}
                  <span className="text-gray-500 font-semibold  line-through">
                    $1160
                  </span>
                </h5>
                <div className="flex gap-x-1 ">
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <p className=" mt-14 font-semibold text-gray-500">(65)</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card  group w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-full h-72" src="cooler.png" alt="" />
              <div className="flex justify-end -mt-72 items-center">
                <div className="flex-row mt-3 mr-3">
                  <img
                    className="w-10 h-10 p-2 bg-white rounded-full "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABWdJREFUaEPtmV1oHFUUx/9ndjYtiQ8aKFWk0ipY3GTunRoUpNBaP6ptbKtofVCL+NA+VfCzKAVfFLWK9sEPsL6IVPxClNpUazVG0ZZg1517J4laUYJokVIKCWrVbufIxKTZnZ3dmd2ZSbFm3nbmnP89v3vOPffODuEMvegM5cIs2H8ts7MZ+99lrLu7e0EemD8Bns8fLpVKh1uZBCnl+cbJk+f5vicN41et9c+t6Ez5NF2KhULh3Hw+fzszryFgedjgBOzygDe01q83Ck5KeQcxr2dgbR27fjDvZqLXtNZHmgGNDSaE6CDmLSDaAmBuzEGOgPk5Jtqutf7d95nQIboPzHcDmBdT5w8QbWtvb3/6wIEDx+P4xAKzbXshe96nABbGEQ3aMPCN6Xk3lw3DM4A+Bi5qRQfAIY95leu6P0b5R4LZtr2UPW83gLOjxCKe+xnrSKjhux9jYLXWerCRVkOw7u5ukTOMLwGcFSpCtA9APzN/bzCXPaIuAq4CcHWTAMdB9AUzDxORCc+7GETLGpS8DycbNZi6YBNNIpf7GkQTnSpwPcPAU/UW9GSD2QrmzRGARWJ+zHHd98LspJS3EvNWBkTNc+avlOteXk+/LpiU8iUwbwo4+jN7o1LqozgZsSxrlUH0LoA5Afu/wPyAct3nY+iQlPJeMD9eo0P0sFLqyTqdufZ2T6FwQdk0fwBgVj4lw7jBcZy+GMGcMlliWVd4RP4a7Zy8eczwvOtKQ0MHm9HxswfmN6t8mMfLnrdoeHj4WFArNGNSym3wW3sVFb2glIoqrdBY/c2XmF9kIg/AZqXUL81ATdkKIXYQsDEQ1yNKqUfjgQnxLYDFp4yZx+e2ty8YHBwcbyWgtHy6uro6zVzup8ruysBBrfVlkWCWZV1oEPllOH0xP6tc9/60AkyiE5Y1BuYHG1lNKdq23Tu5b50anwxjheM4A0kCSsvXtqx1TFTVRcnzljpDQ/urVk5wQNuyNjLRjkDTWOQ4zmhawSXREUJcSkCxqqCAW7TW7zQGE+IeBrZXGpn5/LxisXg0SUBp+QohFhPg94Dpi2iDUmpnVMZu80/TlUZGLtdVKpVG0gouiY5t21dOnlunl4rnrXSGhvxT0PS94CBLLGu5R1S1nhi4U2v9apKA0vK1hXjQP/VETXxN85h4rQB+C9TwHq11b1rBJdGRQmgAVoXGUaV1zetP+AZtWXtBtLLCmRm4RGv9XZKgkvpKKVeCeW9gfb2ilLorqB0KZltWzToD8InS+pqkwbXq71eSAewPHog95uWu634eC8w3Ckm5f3u30npNq8El8ZNCfADg+oBG3Xjqnu4ty1pmEH0WEsz7Sut6/1Ekib2urxCij4DVNQZEi5VSh8IcG75oSikfAvMTNY7MfWZb203FYvFEJiSToj09PflyudwH5mtrSo15k+O6L9cbP/KvASHEWwSsPx2Zk0LsAlBb+sw7letuaDSpkWCFQqGtzTTfDv2LjGifaZq9aWeuUaYAfHhOZ+eagYGBciIw33km4aKgTpTL60ZGRv6OWgKRGZsSmAm4tKD8mGODZZ25NKGaBssKLm2olsDShssCqmWwtOCygkoElhQuS6jEYK3CZQ2VClizcBFQ/SfK5VVx9qnU9rEooTj7nK9R7+znf9wYGx/vHR0d/TNqrDjPm9rH4gjWO98xsGeyRMJO6fvGxsbWpgWVWilWAjfMXPjMpJqpqSFSz1jkmquGywQqk4zFOlv+a5QZVKZgEZnLFCpzsKnsSSH6AazwfzPwcUdHx9q4X//jNKwwm0zWWNhA/gdAzuXmzNTHjRkDa3XmW/WbBWt15k6X32zGTtfMtzruGZuxfwDDHbBV2z1gwwAAAABJRU5ErkJggg=="
                  />
                  <img
                    className="w-10 h-10 p-2 mt-2 bg-white rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-52 ">
              <div className="-mt-16 w-80 text-center text-lg p-3 bg-opacity-80 hidden group-hover:block bg-black text-white absolute">Add to Cart</div>
                <h4 className="text-black absolute -mt-2 font-semibold">
                  RGB Liquid CPU Cooler
                </h4>
                <h5 className="absolute mt-6 text-red-500 font-semibold">
                  $160{" "}
                  <span className="text-gray-500 font-semibold  line-through">
                    $170
                  </span>
                </h5>
                <div className="flex gap-x-1 ">
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <p className=" mt-14 font-semibold text-gray-500">(65)</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card group  w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-full h-72" src="desk.png" alt="" />
              <div className="flex justify-end -mt-72 items-center">
                <div className="flex-row mt-3 mr-3">
                  <img
                    className="w-10 h-10 p-2 bg-white rounded-full hover:bg-gray-300"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABWdJREFUaEPtmV1oHFUUx/9ndjYtiQ8aKFWk0ipY3GTunRoUpNBaP6ptbKtofVCL+NA+VfCzKAVfFLWK9sEPsL6IVPxClNpUazVG0ZZg1517J4laUYJokVIKCWrVbufIxKTZnZ3dmd2ZSbFm3nbmnP89v3vOPffODuEMvegM5cIs2H8ts7MZ+99lrLu7e0EemD8Bns8fLpVKh1uZBCnl+cbJk+f5vicN41et9c+t6Ez5NF2KhULh3Hw+fzszryFgedjgBOzygDe01q83Ck5KeQcxr2dgbR27fjDvZqLXtNZHmgGNDSaE6CDmLSDaAmBuzEGOgPk5Jtqutf7d95nQIboPzHcDmBdT5w8QbWtvb3/6wIEDx+P4xAKzbXshe96nABbGEQ3aMPCN6Xk3lw3DM4A+Bi5qRQfAIY95leu6P0b5R4LZtr2UPW83gLOjxCKe+xnrSKjhux9jYLXWerCRVkOw7u5ukTOMLwGcFSpCtA9APzN/bzCXPaIuAq4CcHWTAMdB9AUzDxORCc+7GETLGpS8DycbNZi6YBNNIpf7GkQTnSpwPcPAU/UW9GSD2QrmzRGARWJ+zHHd98LspJS3EvNWBkTNc+avlOteXk+/LpiU8iUwbwo4+jN7o1LqozgZsSxrlUH0LoA5Afu/wPyAct3nY+iQlPJeMD9eo0P0sFLqyTqdufZ2T6FwQdk0fwBgVj4lw7jBcZy+GMGcMlliWVd4RP4a7Zy8eczwvOtKQ0MHm9HxswfmN6t8mMfLnrdoeHj4WFArNGNSym3wW3sVFb2glIoqrdBY/c2XmF9kIg/AZqXUL81ATdkKIXYQsDEQ1yNKqUfjgQnxLYDFp4yZx+e2ty8YHBwcbyWgtHy6uro6zVzup8ruysBBrfVlkWCWZV1oEPllOH0xP6tc9/60AkyiE5Y1BuYHG1lNKdq23Tu5b50anwxjheM4A0kCSsvXtqx1TFTVRcnzljpDQ/urVk5wQNuyNjLRjkDTWOQ4zmhawSXREUJcSkCxqqCAW7TW7zQGE+IeBrZXGpn5/LxisXg0SUBp+QohFhPg94Dpi2iDUmpnVMZu80/TlUZGLtdVKpVG0gouiY5t21dOnlunl4rnrXSGhvxT0PS94CBLLGu5R1S1nhi4U2v9apKA0vK1hXjQP/VETXxN85h4rQB+C9TwHq11b1rBJdGRQmgAVoXGUaV1zetP+AZtWXtBtLLCmRm4RGv9XZKgkvpKKVeCeW9gfb2ilLorqB0KZltWzToD8InS+pqkwbXq71eSAewPHog95uWu634eC8w3Ckm5f3u30npNq8El8ZNCfADg+oBG3Xjqnu4ty1pmEH0WEsz7Sut6/1Ekib2urxCij4DVNQZEi5VSh8IcG75oSikfAvMTNY7MfWZb203FYvFEJiSToj09PflyudwH5mtrSo15k+O6L9cbP/KvASHEWwSsPx2Zk0LsAlBb+sw7letuaDSpkWCFQqGtzTTfDv2LjGifaZq9aWeuUaYAfHhOZ+eagYGBciIw33km4aKgTpTL60ZGRv6OWgKRGZsSmAm4tKD8mGODZZ25NKGaBssKLm2olsDShssCqmWwtOCygkoElhQuS6jEYK3CZQ2VClizcBFQ/SfK5VVx9qnU9rEooTj7nK9R7+znf9wYGx/vHR0d/TNqrDjPm9rH4gjWO98xsGeyRMJO6fvGxsbWpgWVWilWAjfMXPjMpJqpqSFSz1jkmquGywQqk4zFOlv+a5QZVKZgEZnLFCpzsKnsSSH6AazwfzPwcUdHx9q4X//jNKwwm0zWWNhA/gdAzuXmzNTHjRkDa3XmW/WbBWt15k6X32zGTtfMtzruGZuxfwDDHbBV2z1gwwAAAABJRU5ErkJggg=="
                  />
                  <img
                    className="w-10 h-10 p-2 mt-2 bg-white rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-52 ">
              <div className="-mt-16 w-80 text-center text-lg p-3 bg-opacity-80 hidden group-hover:block bg-black text-white absolute">Add to Cart</div>
                <h4 className="text-black absolute -mt-2 font-semibold">
                  Small BookShelf
                </h4>
                <h5 className="absolute mt-6 text-red-500 font-semibold">
                  $360
                </h5>
                <div className="flex gap-x-1 ">
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <p className=" mt-14 font-semibold text-gray-500">(65)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Boombox Image Sale */}
        <div className="flex justify-around bg-black ml-[120px] mr-[120px] mb-32 mt-32">
          <div className="text-white bg-black flex-col justify-center items-center ">
            <div>
              <p className="text-green-500 font-semibold mt-20">Categories</p>
            </div>
            <div>
              <h4 className="text-5xl font-bold mt-10">
                Enhance Your <br /> Music Experience
              </h4>
            </div>
            <div className="flex mt-10 gap-x-5">
              <div className="flex flex-col items-center justify-center w-[70px] h-[70px] bg-white text-black font-semibold rounded-full">
                <p className="font-semibold text-lg">23</p>
                <p className="text-xs font-extralight -mt-1">Hours</p>
              </div>
              <div className="flex flex-col items-center justify-center w-[70px] h-[70px] bg-white text-black font-semibold rounded-full">
                <p className="font-semibold text-lg">05</p>
                <p className="text-xs font-extralight -mt-1">Days</p>
              </div>
              <div className="flex flex-col items-center justify-center w-[70px] h-[70px] bg-white text-black font-semibold rounded-full">
                <p className="font-semibold text-lg">59</p>
                <p className="text-xs font-extralight -mt-1">Minutes</p>
              </div>
              <div className="flex flex-col items-center justify-center w-[70px] h-[70px] bg-white text-black font-semibold rounded-full">
                <p className="font-semibold text-lg">35</p>
                <p className="text-xs font-extralight -mt-1">Seconds</p>
              </div>
            </div>

            <div className="mt-10">
              <button className="text-white p-4 px-12 rounded-md bg-green-400 bg-">
                Buy Now!
              </button>
            </div>
          </div>
          {/* Image div */}
          <div>
            <img className="w-[700px] h-[600px]" src="boombox.png" alt="" />
          </div>
        </div>
        {/* Our Products */}
        <div className="flex -mt-20">
          <div className="w-6 h-12 ml-[120px] rounded-md mt-20 bg-red-500 p-3"></div>
          <p className="font-bold text-red-500 ml-5 mt-[90px] text-lg">
            Our Products
          </p>
        </div>
        <div className="flex justify-between">
          <h2 className="text-4xl ml-[120px] mt-7 font-semibold">
            Explore Our Products
          </h2>
          {/* Arrows */}
          <div className="flex gap-x-4 mr-[110px] mt-5">
            <img
              className="w-12 h-12 bg-gray-100 p-2 rounded-full hover:bg-gray-300"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAglJREFUaEPtmc9KxDAQxr90vfkHfA6h24soiLiITyD4LuJJX0LwWVwE8SAelJDCInhw8eDBg7DgcduRrq2UardNmm6yJXueSeY338xskjJ09Mc6ygUHtmzKOsWcYpZkwJWiJULUDsMpVjtVlhg6xVSF6Pf7W4zoMgZOhBAfquvI+rWqWAIFojsAmwBeV6bTweNo9CYbpIp9a2AFqCy2d+Z5A875i0qwMj6tgJVAJXF9xkR7YRg+ywSpYqsdrAJqEIZhqBKorI9WsCAIAorjm7Sn8rEkSi0MKtlYG9gMKopuwdhGIbsLh9IGNgdqEhPtL6r88gltrNg8KAIOhRBPsv2hw74RmK1QjUoxCIJtiqLhPz01MalUpraSYjOon+m3ViibLwIOTJVfox7zfX+HAdcA1v/0AtEp6/UedPRIbo0x53wsu6aUYnOUkt23tj0DLrgQ57UdUsPaYCag0iHgwJR7zIRqrZdilg3f93cZMASwWqx7As48z7uX7YcK+/aHRxZAxbg/EkLonozSuao9PIor2/5fpgyWgNp8+mgElsKVXVeMHq0ag1XBLe21JTdQunfRtBFOSynmJ6YtTwTawX57rvxRZzmf3zL1OvlgWgLXjSfuAtwVAced+SghfcDT6NDK8NAYn/JSDkw5dYYcnWKGEq+8rVNMOXWGHJ1ihhKvvK1TTDl1hhy/AWjXK0bIdDnhAAAAAElFTkSuQmCC"
            />
            <img
              className="w-12 h-12 bg-gray-100 p-2 rounded-full hover:bg-gray-300"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAdxJREFUaEPtmcFKxDAQhv/ZvQqCBw8eRK9CQ+tFPYji+iIefA496cv4CKIrnkSEbhcPvoOwKHpsI4Uu1LWraUwm25BCb0km3/yT6WRK8PQhT7kQwLqmbFAsKLYgHgihuCBCKG8jKKbsqgUZGBQzIUSSJGt5nl8R0eloNHo2sea8NdgUE0JsAhgSsA5gAqJ9m3AsYEmSbBV5fgtgteZhq3AsYFEURT2iIYCVmdCxBscCVsJww7GBccOxgtXg7gEsz4Yl9XpHaZqmJrIlO1i5aSHENgE3P+CkfKd+/8AEnBMwDjhnYDW4OwBL38LPgHJOwSq4HQKuTcM5B7MFpwUWx/EGgPI19kgpdyHlZcOCb4WUg/F4/NTGmB6YEOcSOGtj6J9jP6pPwaPqOl0BK3lawQWwegjE3oaiheRRFMUeARcNZ+hTAoMsyx5Uz1c5TisU2xhQGSuE+O1bdpymqXLSmNpzDvYHlHbd6BSsKob9KqlsV/hOFLMN5SR5zIUCJp29aFZ9j8bbs+l2HFsoetnM4YZiO2PeNkyry2S9xf0KosPOt7inZc70pwSAkyzLXlTKLd0xbMlDd4O68wKYrudczQuKufK8rt2gmK7nXM0LirnyvK7doJiu51zN81axL5TW4jeAn0MfAAAAAElFTkSuQmCC"
            />
          </div>
        </div>

        {/* Cards 1234 */}
        <div className="flex justify-around grid-cols-4 mb-10 mt-5 ml-[80px] mr-[80px]">
          {/* Card 1 */}
          <div className="card  group w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-full h-72" src="cesar.png" alt="" />
              <div className="flex justify-end -mt-72 items-center">
                <div className="flex-row mt-3 mr-3">
                  <img
                    className="w-10 h-10 p-2 bg-white rounded-full "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABWdJREFUaEPtmV1oHFUUx/9ndjYtiQ8aKFWk0ipY3GTunRoUpNBaP6ptbKtofVCL+NA+VfCzKAVfFLWK9sEPsL6IVPxClNpUazVG0ZZg1517J4laUYJokVIKCWrVbufIxKTZnZ3dmd2ZSbFm3nbmnP89v3vOPffODuEMvegM5cIs2H8ts7MZ+99lrLu7e0EemD8Bns8fLpVKh1uZBCnl+cbJk+f5vicN41et9c+t6Ez5NF2KhULh3Hw+fzszryFgedjgBOzygDe01q83Ck5KeQcxr2dgbR27fjDvZqLXtNZHmgGNDSaE6CDmLSDaAmBuzEGOgPk5Jtqutf7d95nQIboPzHcDmBdT5w8QbWtvb3/6wIEDx+P4xAKzbXshe96nABbGEQ3aMPCN6Xk3lw3DM4A+Bi5qRQfAIY95leu6P0b5R4LZtr2UPW83gLOjxCKe+xnrSKjhux9jYLXWerCRVkOw7u5ukTOMLwGcFSpCtA9APzN/bzCXPaIuAq4CcHWTAMdB9AUzDxORCc+7GETLGpS8DycbNZi6YBNNIpf7GkQTnSpwPcPAU/UW9GSD2QrmzRGARWJ+zHHd98LspJS3EvNWBkTNc+avlOteXk+/LpiU8iUwbwo4+jN7o1LqozgZsSxrlUH0LoA5Afu/wPyAct3nY+iQlPJeMD9eo0P0sFLqyTqdufZ2T6FwQdk0fwBgVj4lw7jBcZy+GMGcMlliWVd4RP4a7Zy8eczwvOtKQ0MHm9HxswfmN6t8mMfLnrdoeHj4WFArNGNSym3wW3sVFb2glIoqrdBY/c2XmF9kIg/AZqXUL81ATdkKIXYQsDEQ1yNKqUfjgQnxLYDFp4yZx+e2ty8YHBwcbyWgtHy6uro6zVzup8ruysBBrfVlkWCWZV1oEPllOH0xP6tc9/60AkyiE5Y1BuYHG1lNKdq23Tu5b50anwxjheM4A0kCSsvXtqx1TFTVRcnzljpDQ/urVk5wQNuyNjLRjkDTWOQ4zmhawSXREUJcSkCxqqCAW7TW7zQGE+IeBrZXGpn5/LxisXg0SUBp+QohFhPg94Dpi2iDUmpnVMZu80/TlUZGLtdVKpVG0gouiY5t21dOnlunl4rnrXSGhvxT0PS94CBLLGu5R1S1nhi4U2v9apKA0vK1hXjQP/VETXxN85h4rQB+C9TwHq11b1rBJdGRQmgAVoXGUaV1zetP+AZtWXtBtLLCmRm4RGv9XZKgkvpKKVeCeW9gfb2ilLorqB0KZltWzToD8InS+pqkwbXq71eSAewPHog95uWu634eC8w3Ckm5f3u30npNq8El8ZNCfADg+oBG3Xjqnu4ty1pmEH0WEsz7Sut6/1Ekib2urxCij4DVNQZEi5VSh8IcG75oSikfAvMTNY7MfWZb203FYvFEJiSToj09PflyudwH5mtrSo15k+O6L9cbP/KvASHEWwSsPx2Zk0LsAlBb+sw7letuaDSpkWCFQqGtzTTfDv2LjGifaZq9aWeuUaYAfHhOZ+eagYGBciIw33km4aKgTpTL60ZGRv6OWgKRGZsSmAm4tKD8mGODZZ25NKGaBssKLm2olsDShssCqmWwtOCygkoElhQuS6jEYK3CZQ2VClizcBFQ/SfK5VVx9qnU9rEooTj7nK9R7+znf9wYGx/vHR0d/TNqrDjPm9rH4gjWO98xsGeyRMJO6fvGxsbWpgWVWilWAjfMXPjMpJqpqSFSz1jkmquGywQqk4zFOlv+a5QZVKZgEZnLFCpzsKnsSSH6AazwfzPwcUdHx9q4X//jNKwwm0zWWNhA/gdAzuXmzNTHjRkDa3XmW/WbBWt15k6X32zGTtfMtzruGZuxfwDDHbBV2z1gwwAAAABJRU5ErkJggg=="
                  />
                  <img
                    className="w-10 h-10 p-2 mt-2 bg-white rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-52 ">
              <div className="-mt-16 w-80 text-center text-lg p-3 bg-opacity-80 hidden group-hover:block bg-black text-white absolute">Add to Cart</div>
                <h4 className="text-black absolute -mt-2 font-semibold">
                  Breed Dry Dog Food
                </h4>
                <h5 className="absolute mt-6 text-red-500 font-semibold">
                  $100
                </h5>
                <div className="flex gap-x-1 ">
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <p className=" mt-14 font-semibold text-gray-500">(35)</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card group  w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-full h-72" src="canon.png" alt="" />
              <div className="flex justify-end -mt-72 items-center">
                <div className="flex-row mt-3 mr-3">
                  <img
                    className="w-10 h-10 p-2 bg-white rounded-full "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABWdJREFUaEPtmV1oHFUUx/9ndjYtiQ8aKFWk0ipY3GTunRoUpNBaP6ptbKtofVCL+NA+VfCzKAVfFLWK9sEPsL6IVPxClNpUazVG0ZZg1517J4laUYJokVIKCWrVbufIxKTZnZ3dmd2ZSbFm3nbmnP89v3vOPffODuEMvegM5cIs2H8ts7MZ+99lrLu7e0EemD8Bns8fLpVKh1uZBCnl+cbJk+f5vicN41et9c+t6Ez5NF2KhULh3Hw+fzszryFgedjgBOzygDe01q83Ck5KeQcxr2dgbR27fjDvZqLXtNZHmgGNDSaE6CDmLSDaAmBuzEGOgPk5Jtqutf7d95nQIboPzHcDmBdT5w8QbWtvb3/6wIEDx+P4xAKzbXshe96nABbGEQ3aMPCN6Xk3lw3DM4A+Bi5qRQfAIY95leu6P0b5R4LZtr2UPW83gLOjxCKe+xnrSKjhux9jYLXWerCRVkOw7u5ukTOMLwGcFSpCtA9APzN/bzCXPaIuAq4CcHWTAMdB9AUzDxORCc+7GETLGpS8DycbNZi6YBNNIpf7GkQTnSpwPcPAU/UW9GSD2QrmzRGARWJ+zHHd98LspJS3EvNWBkTNc+avlOteXk+/LpiU8iUwbwo4+jN7o1LqozgZsSxrlUH0LoA5Afu/wPyAct3nY+iQlPJeMD9eo0P0sFLqyTqdufZ2T6FwQdk0fwBgVj4lw7jBcZy+GMGcMlliWVd4RP4a7Zy8eczwvOtKQ0MHm9HxswfmN6t8mMfLnrdoeHj4WFArNGNSym3wW3sVFb2glIoqrdBY/c2XmF9kIg/AZqXUL81ATdkKIXYQsDEQ1yNKqUfjgQnxLYDFp4yZx+e2ty8YHBwcbyWgtHy6uro6zVzup8ruysBBrfVlkWCWZV1oEPllOH0xP6tc9/60AkyiE5Y1BuYHG1lNKdq23Tu5b50anwxjheM4A0kCSsvXtqx1TFTVRcnzljpDQ/urVk5wQNuyNjLRjkDTWOQ4zmhawSXREUJcSkCxqqCAW7TW7zQGE+IeBrZXGpn5/LxisXg0SUBp+QohFhPg94Dpi2iDUmpnVMZu80/TlUZGLtdVKpVG0gouiY5t21dOnlunl4rnrXSGhvxT0PS94CBLLGu5R1S1nhi4U2v9apKA0vK1hXjQP/VETXxN85h4rQB+C9TwHq11b1rBJdGRQmgAVoXGUaV1zetP+AZtWXtBtLLCmRm4RGv9XZKgkvpKKVeCeW9gfb2ilLorqB0KZltWzToD8InS+pqkwbXq71eSAewPHog95uWu634eC8w3Ckm5f3u30npNq8El8ZNCfADg+oBG3Xjqnu4ty1pmEH0WEsz7Sut6/1Ekib2urxCij4DVNQZEi5VSh8IcG75oSikfAvMTNY7MfWZb203FYvFEJiSToj09PflyudwH5mtrSo15k+O6L9cbP/KvASHEWwSsPx2Zk0LsAlBb+sw7letuaDSpkWCFQqGtzTTfDv2LjGifaZq9aWeuUaYAfHhOZ+eagYGBciIw33km4aKgTpTL60ZGRv6OWgKRGZsSmAm4tKD8mGODZZ25NKGaBssKLm2olsDShssCqmWwtOCygkoElhQuS6jEYK3CZQ2VClizcBFQ/SfK5VVx9qnU9rEooTj7nK9R7+znf9wYGx/vHR0d/TNqrDjPm9rH4gjWO98xsGeyRMJO6fvGxsbWpgWVWilWAjfMXPjMpJqpqSFSz1jkmquGywQqk4zFOlv+a5QZVKZgEZnLFCpzsKnsSSH6AazwfzPwcUdHx9q4X//jNKwwm0zWWNhA/gdAzuXmzNTHjRkDa3XmW/WbBWt15k6X32zGTtfMtzruGZuxfwDDHbBV2z1gwwAAAABJRU5ErkJggg=="
                  />
                  <img
                    className="w-10 h-10 p-2 mt-2 bg-white rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-52 ">
              <div className="-mt-16 w-80 text-center text-lg p-3 bg-opacity-80 hidden group-hover:block bg-black text-white absolute">Add to Cart</div>
                <h4 className="text-black absolute -mt-2 font-semibold">
                  Canon EOS DSLR Camera
                </h4>
                <h5 className="absolute mt-6 text-red-500 font-semibold">
                  $360
                </h5>
                <div className="flex gap-x-1 ">
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <p className=" mt-14 font-semibold text-gray-500">(95)</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card group  w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-full h-72" src="asus.png" alt="" />
              <div className="flex justify-end -mt-72 items-center">
                <div className="flex-row mt-3 mr-3">
                  <img
                    className="w-10 h-10 p-2 bg-white rounded-full "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABWdJREFUaEPtmV1oHFUUx/9ndjYtiQ8aKFWk0ipY3GTunRoUpNBaP6ptbKtofVCL+NA+VfCzKAVfFLWK9sEPsL6IVPxClNpUazVG0ZZg1517J4laUYJokVIKCWrVbufIxKTZnZ3dmd2ZSbFm3nbmnP89v3vOPffODuEMvegM5cIs2H8ts7MZ+99lrLu7e0EemD8Bns8fLpVKh1uZBCnl+cbJk+f5vicN41et9c+t6Ez5NF2KhULh3Hw+fzszryFgedjgBOzygDe01q83Ck5KeQcxr2dgbR27fjDvZqLXtNZHmgGNDSaE6CDmLSDaAmBuzEGOgPk5Jtqutf7d95nQIboPzHcDmBdT5w8QbWtvb3/6wIEDx+P4xAKzbXshe96nABbGEQ3aMPCN6Xk3lw3DM4A+Bi5qRQfAIY95leu6P0b5R4LZtr2UPW83gLOjxCKe+xnrSKjhux9jYLXWerCRVkOw7u5ukTOMLwGcFSpCtA9APzN/bzCXPaIuAq4CcHWTAMdB9AUzDxORCc+7GETLGpS8DycbNZi6YBNNIpf7GkQTnSpwPcPAU/UW9GSD2QrmzRGARWJ+zHHd98LspJS3EvNWBkTNc+avlOteXk+/LpiU8iUwbwo4+jN7o1LqozgZsSxrlUH0LoA5Afu/wPyAct3nY+iQlPJeMD9eo0P0sFLqyTqdufZ2T6FwQdk0fwBgVj4lw7jBcZy+GMGcMlliWVd4RP4a7Zy8eczwvOtKQ0MHm9HxswfmN6t8mMfLnrdoeHj4WFArNGNSym3wW3sVFb2glIoqrdBY/c2XmF9kIg/AZqXUL81ATdkKIXYQsDEQ1yNKqUfjgQnxLYDFp4yZx+e2ty8YHBwcbyWgtHy6uro6zVzup8ruysBBrfVlkWCWZV1oEPllOH0xP6tc9/60AkyiE5Y1BuYHG1lNKdq23Tu5b50anwxjheM4A0kCSsvXtqx1TFTVRcnzljpDQ/urVk5wQNuyNjLRjkDTWOQ4zmhawSXREUJcSkCxqqCAW7TW7zQGE+IeBrZXGpn5/LxisXg0SUBp+QohFhPg94Dpi2iDUmpnVMZu80/TlUZGLtdVKpVG0gouiY5t21dOnlunl4rnrXSGhvxT0PS94CBLLGu5R1S1nhi4U2v9apKA0vK1hXjQP/VETXxN85h4rQB+C9TwHq11b1rBJdGRQmgAVoXGUaV1zetP+AZtWXtBtLLCmRm4RGv9XZKgkvpKKVeCeW9gfb2ilLorqB0KZltWzToD8InS+pqkwbXq71eSAewPHog95uWu634eC8w3Ckm5f3u30npNq8El8ZNCfADg+oBG3Xjqnu4ty1pmEH0WEsz7Sut6/1Ekib2urxCij4DVNQZEi5VSh8IcG75oSikfAvMTNY7MfWZb203FYvFEJiSToj09PflyudwH5mtrSo15k+O6L9cbP/KvASHEWwSsPx2Zk0LsAlBb+sw7letuaDSpkWCFQqGtzTTfDv2LjGifaZq9aWeuUaYAfHhOZ+eagYGBciIw33km4aKgTpTL60ZGRv6OWgKRGZsSmAm4tKD8mGODZZ25NKGaBssKLm2olsDShssCqmWwtOCygkoElhQuS6jEYK3CZQ2VClizcBFQ/SfK5VVx9qnU9rEooTj7nK9R7+znf9wYGx/vHR0d/TNqrDjPm9rH4gjWO98xsGeyRMJO6fvGxsbWpgWVWilWAjfMXPjMpJqpqSFSz1jkmquGywQqk4zFOlv+a5QZVKZgEZnLFCpzsKnsSSH6AazwfzPwcUdHx9q4X//jNKwwm0zWWNhA/gdAzuXmzNTHjRkDa3XmW/WbBWt15k6X32zGTtfMtzruGZuxfwDDHbBV2z1gwwAAAABJRU5ErkJggg=="
                  />
                  <img
                    className="w-10 h-10 p-2 mt-2 bg-white rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-52 ">
              <div className="-mt-16 w-80 text-center text-lg p-3 bg-opacity-80 hidden group-hover:block bg-black text-white absolute">Add to Cart</div>
                <h4 className="text-black absolute -mt-2 font-semibold">
                  ASUS FHD Gaming Laptop
                </h4>
                <h5 className="absolute mt-6 text-red-500 font-semibold">
                  $700
                </h5>
                <div className="flex gap-x-1 ">
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <p className=" mt-14 font-semibold text-gray-500">(325)</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card group  w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-full h-72" src="curology.png" alt="" />
              <div className="flex justify-end -mt-72 items-center">
                <div className="flex-row mt-3 mr-3">
                  <img
                    className="w-10 h-10 p-2 bg-white rounded-full "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABWdJREFUaEPtmV1oHFUUx/9ndjYtiQ8aKFWk0ipY3GTunRoUpNBaP6ptbKtofVCL+NA+VfCzKAVfFLWK9sEPsL6IVPxClNpUazVG0ZZg1517J4laUYJokVIKCWrVbufIxKTZnZ3dmd2ZSbFm3nbmnP89v3vOPffODuEMvegM5cIs2H8ts7MZ+99lrLu7e0EemD8Bns8fLpVKh1uZBCnl+cbJk+f5vicN41et9c+t6Ez5NF2KhULh3Hw+fzszryFgedjgBOzygDe01q83Ck5KeQcxr2dgbR27fjDvZqLXtNZHmgGNDSaE6CDmLSDaAmBuzEGOgPk5Jtqutf7d95nQIboPzHcDmBdT5w8QbWtvb3/6wIEDx+P4xAKzbXshe96nABbGEQ3aMPCN6Xk3lw3DM4A+Bi5qRQfAIY95leu6P0b5R4LZtr2UPW83gLOjxCKe+xnrSKjhux9jYLXWerCRVkOw7u5ukTOMLwGcFSpCtA9APzN/bzCXPaIuAq4CcHWTAMdB9AUzDxORCc+7GETLGpS8DycbNZi6YBNNIpf7GkQTnSpwPcPAU/UW9GSD2QrmzRGARWJ+zHHd98LspJS3EvNWBkTNc+avlOteXk+/LpiU8iUwbwo4+jN7o1LqozgZsSxrlUH0LoA5Afu/wPyAct3nY+iQlPJeMD9eo0P0sFLqyTqdufZ2T6FwQdk0fwBgVj4lw7jBcZy+GMGcMlliWVd4RP4a7Zy8eczwvOtKQ0MHm9HxswfmN6t8mMfLnrdoeHj4WFArNGNSym3wW3sVFb2glIoqrdBY/c2XmF9kIg/AZqXUL81ATdkKIXYQsDEQ1yNKqUfjgQnxLYDFp4yZx+e2ty8YHBwcbyWgtHy6uro6zVzup8ruysBBrfVlkWCWZV1oEPllOH0xP6tc9/60AkyiE5Y1BuYHG1lNKdq23Tu5b50anwxjheM4A0kCSsvXtqx1TFTVRcnzljpDQ/urVk5wQNuyNjLRjkDTWOQ4zmhawSXREUJcSkCxqqCAW7TW7zQGE+IeBrZXGpn5/LxisXg0SUBp+QohFhPg94Dpi2iDUmpnVMZu80/TlUZGLtdVKpVG0gouiY5t21dOnlunl4rnrXSGhvxT0PS94CBLLGu5R1S1nhi4U2v9apKA0vK1hXjQP/VETXxN85h4rQB+C9TwHq11b1rBJdGRQmgAVoXGUaV1zetP+AZtWXtBtLLCmRm4RGv9XZKgkvpKKVeCeW9gfb2ilLorqB0KZltWzToD8InS+pqkwbXq71eSAewPHog95uWu634eC8w3Ckm5f3u30npNq8El8ZNCfADg+oBG3Xjqnu4ty1pmEH0WEsz7Sut6/1Ekib2urxCij4DVNQZEi5VSh8IcG75oSikfAvMTNY7MfWZb203FYvFEJiSToj09PflyudwH5mtrSo15k+O6L9cbP/KvASHEWwSsPx2Zk0LsAlBb+sw7letuaDSpkWCFQqGtzTTfDv2LjGifaZq9aWeuUaYAfHhOZ+eagYGBciIw33km4aKgTpTL60ZGRv6OWgKRGZsSmAm4tKD8mGODZZ25NKGaBssKLm2olsDShssCqmWwtOCygkoElhQuS6jEYK3CZQ2VClizcBFQ/SfK5VVx9qnU9rEooTj7nK9R7+znf9wYGx/vHR0d/TNqrDjPm9rH4gjWO98xsGeyRMJO6fvGxsbWpgWVWilWAjfMXPjMpJqpqSFSz1jkmquGywQqk4zFOlv+a5QZVKZgEZnLFCpzsKnsSSH6AazwfzPwcUdHx9q4X//jNKwwm0zWWNhA/gdAzuXmzNTHjRkDa3XmW/WbBWt15k6X32zGTtfMtzruGZuxfwDDHbBV2z1gwwAAAABJRU5ErkJggg=="
                  />
                  <img
                    className="w-10 h-10 p-2 mt-2 bg-white rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-52 ">
              <div className="-mt-16 w-80 text-center text-lg p-3 bg-opacity-80 hidden group-hover:block bg-black text-white absolute">Add to Cart</div>
                <h4 className="text-black absolute -mt-2 font-semibold">
                  Curology Product Set
                </h4>
                <h5 className="absolute mt-6 text-red-500 font-semibold">
                  $500
                </h5>
                <div className="flex gap-x-1 ">
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <p className=" mt-14 font-semibold text-gray-500">(145)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards 5678 */}
        <div className="flex justify-around grid-cols-4 mb-10 mt-5 ml-[80px] mr-[80px]">
          {/* Card 5 */}
          <div className="card group  w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-full h-72" src="car.png" alt="" />
              <div className="flex justify-end -mt-72 items-center">
                <div className="flex-row mt-3 mr-3">
                  <img
                    className="w-10 h-10 p-2 bg-white rounded-full "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABWdJREFUaEPtmV1oHFUUx/9ndjYtiQ8aKFWk0ipY3GTunRoUpNBaP6ptbKtofVCL+NA+VfCzKAVfFLWK9sEPsL6IVPxClNpUazVG0ZZg1517J4laUYJokVIKCWrVbufIxKTZnZ3dmd2ZSbFm3nbmnP89v3vOPffODuEMvegM5cIs2H8ts7MZ+99lrLu7e0EemD8Bns8fLpVKh1uZBCnl+cbJk+f5vicN41et9c+t6Ez5NF2KhULh3Hw+fzszryFgedjgBOzygDe01q83Ck5KeQcxr2dgbR27fjDvZqLXtNZHmgGNDSaE6CDmLSDaAmBuzEGOgPk5Jtqutf7d95nQIboPzHcDmBdT5w8QbWtvb3/6wIEDx+P4xAKzbXshe96nABbGEQ3aMPCN6Xk3lw3DM4A+Bi5qRQfAIY95leu6P0b5R4LZtr2UPW83gLOjxCKe+xnrSKjhux9jYLXWerCRVkOw7u5ukTOMLwGcFSpCtA9APzN/bzCXPaIuAq4CcHWTAMdB9AUzDxORCc+7GETLGpS8DycbNZi6YBNNIpf7GkQTnSpwPcPAU/UW9GSD2QrmzRGARWJ+zHHd98LspJS3EvNWBkTNc+avlOteXk+/LpiU8iUwbwo4+jN7o1LqozgZsSxrlUH0LoA5Afu/wPyAct3nY+iQlPJeMD9eo0P0sFLqyTqdufZ2T6FwQdk0fwBgVj4lw7jBcZy+GMGcMlliWVd4RP4a7Zy8eczwvOtKQ0MHm9HxswfmN6t8mMfLnrdoeHj4WFArNGNSym3wW3sVFb2glIoqrdBY/c2XmF9kIg/AZqXUL81ATdkKIXYQsDEQ1yNKqUfjgQnxLYDFp4yZx+e2ty8YHBwcbyWgtHy6uro6zVzup8ruysBBrfVlkWCWZV1oEPllOH0xP6tc9/60AkyiE5Y1BuYHG1lNKdq23Tu5b50anwxjheM4A0kCSsvXtqx1TFTVRcnzljpDQ/urVk5wQNuyNjLRjkDTWOQ4zmhawSXREUJcSkCxqqCAW7TW7zQGE+IeBrZXGpn5/LxisXg0SUBp+QohFhPg94Dpi2iDUmpnVMZu80/TlUZGLtdVKpVG0gouiY5t21dOnlunl4rnrXSGhvxT0PS94CBLLGu5R1S1nhi4U2v9apKA0vK1hXjQP/VETXxN85h4rQB+C9TwHq11b1rBJdGRQmgAVoXGUaV1zetP+AZtWXtBtLLCmRm4RGv9XZKgkvpKKVeCeW9gfb2ilLorqB0KZltWzToD8InS+pqkwbXq71eSAewPHog95uWu634eC8w3Ckm5f3u30npNq8El8ZNCfADg+oBG3Xjqnu4ty1pmEH0WEsz7Sut6/1Ekib2urxCij4DVNQZEi5VSh8IcG75oSikfAvMTNY7MfWZb203FYvFEJiSToj09PflyudwH5mtrSo15k+O6L9cbP/KvASHEWwSsPx2Zk0LsAlBb+sw7letuaDSpkWCFQqGtzTTfDv2LjGifaZq9aWeuUaYAfHhOZ+eagYGBciIw33km4aKgTpTL60ZGRv6OWgKRGZsSmAm4tKD8mGODZZ25NKGaBssKLm2olsDShssCqmWwtOCygkoElhQuS6jEYK3CZQ2VClizcBFQ/SfK5VVx9qnU9rEooTj7nK9R7+znf9wYGx/vHR0d/TNqrDjPm9rH4gjWO98xsGeyRMJO6fvGxsbWpgWVWilWAjfMXPjMpJqpqSFSz1jkmquGywQqk4zFOlv+a5QZVKZgEZnLFCpzsKnsSSH6AazwfzPwcUdHx9q4X//jNKwwm0zWWNhA/gdAzuXmzNTHjRkDa3XmW/WbBWt15k6X32zGTtfMtzruGZuxfwDDHbBV2z1gwwAAAABJRU5ErkJggg=="
                  />
                  <img
                    className="w-10 h-10 p-2 mt-2 bg-white rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-52 ">
              <div className="-mt-16 w-80 text-center text-lg p-3 bg-opacity-80 hidden group-hover:block bg-black text-white absolute">Add to Cart</div>
                <h4 className="text-black absolute -mt-2 font-semibold">
                  Kids Electric Car
                </h4>
                <h5 className="absolute mt-6 text-red-500 font-semibold">
                  $960
                </h5>
                <div className="flex gap-x-1 ">
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <p className=" mt-14 font-semibold text-gray-500">(65)</p>
                </div>
                <div className="flex gap-x-3 mt-3">
                  <div
                    className="w-5 h-5 bg-red-800 rounded-full cursor-pointer outline-none focus:border-[3px] focus:border-white focus:ring-2 focus:ring-black "
                    tabIndex={0}
                  ></div>
                  <div
                    className="w-5 h-5 bg-red-400 rounded-full cursor-pointer outline-none focus:ring-2 focus:ring-black focus:border-[3px] focus:border-white "
                    tabIndex={0}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="card group  w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-full h-72" src="toes.png" alt="" />
              <div className="flex justify-end -mt-72 items-center">
                <div className="flex-row mt-3 mr-3">
                  <img
                    className="w-10 h-10 p-2 bg-white rounded-full "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABWdJREFUaEPtmV1oHFUUx/9ndjYtiQ8aKFWk0ipY3GTunRoUpNBaP6ptbKtofVCL+NA+VfCzKAVfFLWK9sEPsL6IVPxClNpUazVG0ZZg1517J4laUYJokVIKCWrVbufIxKTZnZ3dmd2ZSbFm3nbmnP89v3vOPffODuEMvegM5cIs2H8ts7MZ+99lrLu7e0EemD8Bns8fLpVKh1uZBCnl+cbJk+f5vicN41et9c+t6Ez5NF2KhULh3Hw+fzszryFgedjgBOzygDe01q83Ck5KeQcxr2dgbR27fjDvZqLXtNZHmgGNDSaE6CDmLSDaAmBuzEGOgPk5Jtqutf7d95nQIboPzHcDmBdT5w8QbWtvb3/6wIEDx+P4xAKzbXshe96nABbGEQ3aMPCN6Xk3lw3DM4A+Bi5qRQfAIY95leu6P0b5R4LZtr2UPW83gLOjxCKe+xnrSKjhux9jYLXWerCRVkOw7u5ukTOMLwGcFSpCtA9APzN/bzCXPaIuAq4CcHWTAMdB9AUzDxORCc+7GETLGpS8DycbNZi6YBNNIpf7GkQTnSpwPcPAU/UW9GSD2QrmzRGARWJ+zHHd98LspJS3EvNWBkTNc+avlOteXk+/LpiU8iUwbwo4+jN7o1LqozgZsSxrlUH0LoA5Afu/wPyAct3nY+iQlPJeMD9eo0P0sFLqyTqdufZ2T6FwQdk0fwBgVj4lw7jBcZy+GMGcMlliWVd4RP4a7Zy8eczwvOtKQ0MHm9HxswfmN6t8mMfLnrdoeHj4WFArNGNSym3wW3sVFb2glIoqrdBY/c2XmF9kIg/AZqXUL81ATdkKIXYQsDEQ1yNKqUfjgQnxLYDFp4yZx+e2ty8YHBwcbyWgtHy6uro6zVzup8ruysBBrfVlkWCWZV1oEPllOH0xP6tc9/60AkyiE5Y1BuYHG1lNKdq23Tu5b50anwxjheM4A0kCSsvXtqx1TFTVRcnzljpDQ/urVk5wQNuyNjLRjkDTWOQ4zmhawSXREUJcSkCxqqCAW7TW7zQGE+IeBrZXGpn5/LxisXg0SUBp+QohFhPg94Dpi2iDUmpnVMZu80/TlUZGLtdVKpVG0gouiY5t21dOnlunl4rnrXSGhvxT0PS94CBLLGu5R1S1nhi4U2v9apKA0vK1hXjQP/VETXxN85h4rQB+C9TwHq11b1rBJdGRQmgAVoXGUaV1zetP+AZtWXtBtLLCmRm4RGv9XZKgkvpKKVeCeW9gfb2ilLorqB0KZltWzToD8InS+pqkwbXq71eSAewPHog95uWu634eC8w3Ckm5f3u30npNq8El8ZNCfADg+oBG3Xjqnu4ty1pmEH0WEsz7Sut6/1Ekib2urxCij4DVNQZEi5VSh8IcG75oSikfAvMTNY7MfWZb203FYvFEJiSToj09PflyudwH5mtrSo15k+O6L9cbP/KvASHEWwSsPx2Zk0LsAlBb+sw7letuaDSpkWCFQqGtzTTfDv2LjGifaZq9aWeuUaYAfHhOZ+eagYGBciIw33km4aKgTpTL60ZGRv6OWgKRGZsSmAm4tKD8mGODZZ25NKGaBssKLm2olsDShssCqmWwtOCygkoElhQuS6jEYK3CZQ2VClizcBFQ/SfK5VVx9qnU9rEooTj7nK9R7+znf9wYGx/vHR0d/TNqrDjPm9rH4gjWO98xsGeyRMJO6fvGxsbWpgWVWilWAjfMXPjMpJqpqSFSz1jkmquGywQqk4zFOlv+a5QZVKZgEZnLFCpzsKnsSSH6AazwfzPwcUdHx9q4X//jNKwwm0zWWNhA/gdAzuXmzNTHjRkDa3XmW/WbBWt15k6X32zGTtfMtzruGZuxfwDDHbBV2z1gwwAAAABJRU5ErkJggg=="
                  />
                  <img
                    className="w-10 h-10 p-2 mt-2 bg-white rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-52 ">
              <div className="-mt-16 w-80 text-center text-lg p-3 bg-opacity-80 hidden group-hover:block bg-black text-white absolute">Add to Cart</div>
                <h4 className="text-black absolute -mt-2 font-semibold">
                  Jr. Zoom Soccer Cleats
                </h4>
                <h5 className="absolute mt-6 text-red-500 font-semibold">
                  $1160
                </h5>
                <div className="flex gap-x-1 ">
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <p className=" mt-14 font-semibold text-gray-500">(35)</p>
                </div>
                <div className="flex gap-x-3 mt-3">
                  <div
                    className="w-5 h-5 bg-lime-200 rounded-full cursor-pointer outline-none focus:border-[3px] focus:border-white focus:ring-2 focus:ring-black "
                    tabIndex={0}
                  ></div>
                  <div
                    className="w-5 h-5 bg-green-300 rounded-full cursor-pointer outline-none focus:ring-2 focus:ring-black focus:border-[3px] focus:border-white "
                    tabIndex={0}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 7 */}
          <div className="card  group w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-full h-72" src="gamepad.png" alt="" />
              <div className="flex justify-end -mt-72 items-center">
                <div className="flex-row mt-3 mr-3">
                  <img
                    className="w-10 h-10 p-2 bg-white rounded-full "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABWdJREFUaEPtmV1oHFUUx/9ndjYtiQ8aKFWk0ipY3GTunRoUpNBaP6ptbKtofVCL+NA+VfCzKAVfFLWK9sEPsL6IVPxClNpUazVG0ZZg1517J4laUYJokVIKCWrVbufIxKTZnZ3dmd2ZSbFm3nbmnP89v3vOPffODuEMvegM5cIs2H8ts7MZ+99lrLu7e0EemD8Bns8fLpVKh1uZBCnl+cbJk+f5vicN41et9c+t6Ez5NF2KhULh3Hw+fzszryFgedjgBOzygDe01q83Ck5KeQcxr2dgbR27fjDvZqLXtNZHmgGNDSaE6CDmLSDaAmBuzEGOgPk5Jtqutf7d95nQIboPzHcDmBdT5w8QbWtvb3/6wIEDx+P4xAKzbXshe96nABbGEQ3aMPCN6Xk3lw3DM4A+Bi5qRQfAIY95leu6P0b5R4LZtr2UPW83gLOjxCKe+xnrSKjhux9jYLXWerCRVkOw7u5ukTOMLwGcFSpCtA9APzN/bzCXPaIuAq4CcHWTAMdB9AUzDxORCc+7GETLGpS8DycbNZi6YBNNIpf7GkQTnSpwPcPAU/UW9GSD2QrmzRGARWJ+zHHd98LspJS3EvNWBkTNc+avlOteXk+/LpiU8iUwbwo4+jN7o1LqozgZsSxrlUH0LoA5Afu/wPyAct3nY+iQlPJeMD9eo0P0sFLqyTqdufZ2T6FwQdk0fwBgVj4lw7jBcZy+GMGcMlliWVd4RP4a7Zy8eczwvOtKQ0MHm9HxswfmN6t8mMfLnrdoeHj4WFArNGNSym3wW3sVFb2glIoqrdBY/c2XmF9kIg/AZqXUL81ATdkKIXYQsDEQ1yNKqUfjgQnxLYDFp4yZx+e2ty8YHBwcbyWgtHy6uro6zVzup8ruysBBrfVlkWCWZV1oEPllOH0xP6tc9/60AkyiE5Y1BuYHG1lNKdq23Tu5b50anwxjheM4A0kCSsvXtqx1TFTVRcnzljpDQ/urVk5wQNuyNjLRjkDTWOQ4zmhawSXREUJcSkCxqqCAW7TW7zQGE+IeBrZXGpn5/LxisXg0SUBp+QohFhPg94Dpi2iDUmpnVMZu80/TlUZGLtdVKpVG0gouiY5t21dOnlunl4rnrXSGhvxT0PS94CBLLGu5R1S1nhi4U2v9apKA0vK1hXjQP/VETXxN85h4rQB+C9TwHq11b1rBJdGRQmgAVoXGUaV1zetP+AZtWXtBtLLCmRm4RGv9XZKgkvpKKVeCeW9gfb2ilLorqB0KZltWzToD8InS+pqkwbXq71eSAewPHog95uWu634eC8w3Ckm5f3u30npNq8El8ZNCfADg+oBG3Xjqnu4ty1pmEH0WEsz7Sut6/1Ekib2urxCij4DVNQZEi5VSh8IcG75oSikfAvMTNY7MfWZb203FYvFEJiSToj09PflyudwH5mtrSo15k+O6L9cbP/KvASHEWwSsPx2Zk0LsAlBb+sw7letuaDSpkWCFQqGtzTTfDv2LjGifaZq9aWeuUaYAfHhOZ+eagYGBciIw33km4aKgTpTL60ZGRv6OWgKRGZsSmAm4tKD8mGODZZ25NKGaBssKLm2olsDShssCqmWwtOCygkoElhQuS6jEYK3CZQ2VClizcBFQ/SfK5VVx9qnU9rEooTj7nK9R7+znf9wYGx/vHR0d/TNqrDjPm9rH4gjWO98xsGeyRMJO6fvGxsbWpgWVWilWAjfMXPjMpJqpqSFSz1jkmquGywQqk4zFOlv+a5QZVKZgEZnLFCpzsKnsSSH6AazwfzPwcUdHx9q4X//jNKwwm0zWWNhA/gdAzuXmzNTHjRkDa3XmW/WbBWt15k6X32zGTtfMtzruGZuxfwDDHbBV2z1gwwAAAABJRU5ErkJggg=="
                  />
                  <img
                    className="w-10 h-10 p-2 mt-2 bg-white rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-52 ">
              <div className="-mt-16 w-80 text-center text-lg p-3 bg-opacity-80 hidden group-hover:block bg-black text-white absolute">Add to Cart</div>
                <h4 className="text-black absolute -mt-2 font-semibold">
                  GP11 Shooter USB Gamepad
                </h4>
                <h5 className="absolute mt-6 text-red-500 font-semibold">
                  $660
                </h5>
                <div className="flex gap-x-1 ">
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <p className=" mt-14 font-semibold text-gray-500">(55)</p>
                </div>
                <div className="flex gap-x-3 mt-3">
                  <div
                    className="w-5 h-5 bg-black rounded-full cursor-pointer outline-none focus:border-[3px] focus:border-white focus:ring-2 focus:ring-black "
                    tabIndex={0}
                  ></div>
                  <div
                    className="w-5 h-5 bg-blue-900 rounded-full cursor-pointer outline-none focus:ring-2 focus:ring-black focus:border-[3px] focus:border-white "
                    tabIndex={0}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 8 */}
          <div className="card group  w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-full h-72" src="jacket.png" alt="" />
              <div className="flex justify-end -mt-72 items-center">
                <div className="flex-row mt-3 mr-3">
                  <img
                    className="w-10 h-10 p-2 bg-white rounded-full "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAABWdJREFUaEPtmV1oHFUUx/9ndjYtiQ8aKFWk0ipY3GTunRoUpNBaP6ptbKtofVCL+NA+VfCzKAVfFLWK9sEPsL6IVPxClNpUazVG0ZZg1517J4laUYJokVIKCWrVbufIxKTZnZ3dmd2ZSbFm3nbmnP89v3vOPffODuEMvegM5cIs2H8ts7MZ+99lrLu7e0EemD8Bns8fLpVKh1uZBCnl+cbJk+f5vicN41et9c+t6Ez5NF2KhULh3Hw+fzszryFgedjgBOzygDe01q83Ck5KeQcxr2dgbR27fjDvZqLXtNZHmgGNDSaE6CDmLSDaAmBuzEGOgPk5Jtqutf7d95nQIboPzHcDmBdT5w8QbWtvb3/6wIEDx+P4xAKzbXshe96nABbGEQ3aMPCN6Xk3lw3DM4A+Bi5qRQfAIY95leu6P0b5R4LZtr2UPW83gLOjxCKe+xnrSKjhux9jYLXWerCRVkOw7u5ukTOMLwGcFSpCtA9APzN/bzCXPaIuAq4CcHWTAMdB9AUzDxORCc+7GETLGpS8DycbNZi6YBNNIpf7GkQTnSpwPcPAU/UW9GSD2QrmzRGARWJ+zHHd98LspJS3EvNWBkTNc+avlOteXk+/LpiU8iUwbwo4+jN7o1LqozgZsSxrlUH0LoA5Afu/wPyAct3nY+iQlPJeMD9eo0P0sFLqyTqdufZ2T6FwQdk0fwBgVj4lw7jBcZy+GMGcMlliWVd4RP4a7Zy8eczwvOtKQ0MHm9HxswfmN6t8mMfLnrdoeHj4WFArNGNSym3wW3sVFb2glIoqrdBY/c2XmF9kIg/AZqXUL81ATdkKIXYQsDEQ1yNKqUfjgQnxLYDFp4yZx+e2ty8YHBwcbyWgtHy6uro6zVzup8ruysBBrfVlkWCWZV1oEPllOH0xP6tc9/60AkyiE5Y1BuYHG1lNKdq23Tu5b50anwxjheM4A0kCSsvXtqx1TFTVRcnzljpDQ/urVk5wQNuyNjLRjkDTWOQ4zmhawSXREUJcSkCxqqCAW7TW7zQGE+IeBrZXGpn5/LxisXg0SUBp+QohFhPg94Dpi2iDUmpnVMZu80/TlUZGLtdVKpVG0gouiY5t21dOnlunl4rnrXSGhvxT0PS94CBLLGu5R1S1nhi4U2v9apKA0vK1hXjQP/VETXxN85h4rQB+C9TwHq11b1rBJdGRQmgAVoXGUaV1zetP+AZtWXtBtLLCmRm4RGv9XZKgkvpKKVeCeW9gfb2ilLorqB0KZltWzToD8InS+pqkwbXq71eSAewPHog95uWu634eC8w3Ckm5f3u30npNq8El8ZNCfADg+oBG3Xjqnu4ty1pmEH0WEsz7Sut6/1Ekib2urxCij4DVNQZEi5VSh8IcG75oSikfAvMTNY7MfWZb203FYvFEJiSToj09PflyudwH5mtrSo15k+O6L9cbP/KvASHEWwSsPx2Zk0LsAlBb+sw7letuaDSpkWCFQqGtzTTfDv2LjGifaZq9aWeuUaYAfHhOZ+eagYGBciIw33km4aKgTpTL60ZGRv6OWgKRGZsSmAm4tKD8mGODZZ25NKGaBssKLm2olsDShssCqmWwtOCygkoElhQuS6jEYK3CZQ2VClizcBFQ/SfK5VVx9qnU9rEooTj7nK9R7+znf9wYGx/vHR0d/TNqrDjPm9rH4gjWO98xsGeyRMJO6fvGxsbWpgWVWilWAjfMXPjMpJqpqSFSz1jkmquGywQqk4zFOlv+a5QZVKZgEZnLFCpzsKnsSSH6AazwfzPwcUdHx9q4X//jNKwwm0zWWNhA/gdAzuXmzNTHjRkDa3XmW/WbBWt15k6X32zGTtfMtzruGZuxfwDDHbBV2z1gwwAAAABJRU5ErkJggg=="
                  />
                  <img
                    className="w-10 h-10 p-2 mt-2 bg-white rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-52 ">
              <div className="-mt-16 w-80 text-center text-lg p-3 bg-opacity-80 hidden group-hover:block bg-black text-white absolute">Add to Cart</div>
                <h4 className="text-black absolute -mt-2 font-semibold">
                  Quilted Satin Jacket
                </h4>
                <h5 className="absolute mt-6 text-red-500 font-semibold">
                  $660
                </h5>
                <div className="flex gap-x-1 ">
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 mt-14"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                  />
                  <p className=" mt-14 font-semibold text-gray-500">(55)</p>
                </div>
                <div className="flex gap-x-3 mt-3">
                  <div
                    className="w-5 h-5 bg-green-950 rounded-full cursor-pointer outline-none focus:border-[3px] focus:border-white focus:ring-2 focus:ring-black "
                    tabIndex={0}
                  ></div>
                  <div
                    className="w-5 h-5 bg-red-700 rounded-full cursor-pointer outline-none focus:ring-2 focus:ring-black focus:border-[3px] focus:border-white "
                    tabIndex={0}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-center">
          <button className="p-4 px-12 mt-10 mb-16 bg-red-500 text-white rounded-md hover:bg-red-600 hover:text-gray-300">
            View All Products
          </button>
        </div>
        {/* Featured */}
        <div className="flex ">
          <div className="w-6 h-12 ml-[120px] rounded-md mt-20 bg-red-500 p-3"></div>
          <p className="font-bold text-red-500 ml-5 mt-[90px] text-lg">
            Featured
          </p>
        </div>
        <h2 className="text-[35px] ml-[120px] mt-7 font-semibold">
          New Arrival
        </h2>
        {/* Big Cards */}
        <div className="main flex gap-x-10 ml-[120px] mr-[120px] mt-10">
          <div className="left relative">
            <img
              className="w-[700px] h-[750px] rounded-md"
              src="ps5.png"
              alt="PlayStation 5"
            />
            <div className="absolute bottom-5 left-5 text-white ml-3">
              <h5 className="text-2xl -mt-48 font-semibold">PlayStation 5</h5>
              <p className="text-sm font-extralight mt-5">Black and White version of the PS5 <br /> coming out on sale.</p>
              <button className="mt-5 text-md border-b-[1px] hover:text-blue-400 hover:border-blue-400">Shop Now</button>
            </div>
          </div>

          <div className="right flex flex-col space-y-[50px] mb-10 relative">
            <img
              className="w-[720px] h-auto object-contain rounded-md"
              src="women.png"
              alt="Women's Collections"
            />
            <div className="absolute bottom-5 left-5 text-white ml-3">
              <h5 className="text-2xl -mt-[550px] font-semibold">Women&apos;s Collection</h5>
              <p className="text-sm font-extralight mt-5">Featured women&apos;s collection that<br /> gives you another vibe.</p>
              <button className="mt-5 text-md border-b-[1px] hover:text-blue-400 hover:border-blue-400">Shop Now</button>
            </div>

            <div className="flex space-x-8">
              <img
                className="w-[342px] rounded-md"
                src="speakers.png"
                alt="Speakers"
              />
              <div className="absolute bottom-5  text-white mr-5 -ml-3">
              <h5 className="text-2xl -mt-[100px] font-semibold">Speakers</h5>
              <p className="text-sm font-extralight mt-2">Amazon wireless speakers.</p>
              <button className="mt-2 text-md border-b-[1px] hover:text-blue-400 hover:border-blue-400">Shop Now</button>
            </div>

              <img
                className="w-[342px] rounded-md "
                src="gucci.png"
                alt="Gucci Perfume"
              />
              <div className="absolute text-white mt-80  pl-[370px]">
              <h5 className="text-2xl -mt-[100px] font-semibold">Perfume</h5>
              <p className="text-sm font-extralight mt-2">GUCCI INTENSE OUD EDP.</p>
              <button className="mt-2 text-md border-b-[1px] hover:text-blue-400 hover:border-blue-400">Shop Now</button>
            </div>
            </div>
          </div>
        </div>
        {/* Last Section */}
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
      </section>
    </div>
  );
}
