import React from "react";
import xbox from "../../assets/xbox-series.jpg"
import surface5 from "../../assets/Surface Laptop 5.webp"
import seriesS from "../../assets/$60 off Xbox Series.jpg"
import surface9 from "../../assets/surface pro 9.jpg"
import { FaGreaterThan} from "react-icons/fa";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
      {/* x box series */}
      <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="rounded-t-lg"
              src={xbox}
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Xbox Series X</h5>
            <p class="text-gray-700 text-base mb-4 h-[130px]">
            Give thrills that’ll last all year with the fastest, most powerful Xbox ever.
            </p>
            <button
              type="button"
              className=" inline-block  px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
            >
              Shop Xbox Series X
              {/* <FaGreaterThan/> */}
            </button>
          </div>
        </div>
      </div>

      {/* surface laptop 5 */}

      <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="rounded-t-lg"
              src={surface5}
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Up to $300 off Surface Laptop 5</h5>
            <p class="text-gray-700 text-base mb-4 h-[130px]">
            Sophisticated style and multitasking speed powered by 12th Gen Intel® Core™ i5/i7 processors built on the Intel® Evo™ platform make this the perfect gift. Offer ends 12/2.
            </p>
            <button
              type="button"
              className=" inline-block  px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
            >
              Shop Surface Laptop 5
              {/* <FaGreaterThan/> */}
            </button>
          </div>
        </div>
      </div>

      {/* xbox series S */}

      <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="rounded-t-lg"
              src={seriesS}
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">$60 off Xbox Series S</h5>
            <p class="text-gray-700 text-base mb-4 h-[130px] ">
            Score Cyber Week savings on the smallest, sleekest Xbox yet. Only $239.99, while supplies last. Offer ends 12/9.
            </p>
            <button
              type="button"
              className=" inline-block  px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  bottom-0  "
            >
              Shop Surface Pro 9
              {/* <FaGreaterThan/> */}
            </button>
          </div>
        </div>
      </div>

      {/* series X xbox */}
      <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="rounded-t-lg"
              src={surface9}
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Xbox Series X</h5>
            <p class="text-gray-700 text-base mb-4 h-[130px]">
            Keep spirits bright with a game-changing combo of laptop power and tablet flexibility—all in one ultra-portable device. Offer ends 12/2.
            </p>
            <button
              type="button"
              className=" inline-block  px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
            >
               Shop Surface Pro 9
              {/* <FaGreaterThan/> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
