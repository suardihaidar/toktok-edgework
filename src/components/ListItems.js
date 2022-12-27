import React from "react";

import convertCurrency from "utils/convertCurrency";

function ListItems({ items, itemDetails, setItemDetails }) {
  return (
    <>
      {items?.map((item) => (
        <div
          className={`sm:w-full md:w-1/2 lg:w-1/3 p-4 xl:${
            itemDetails.id ? "w-1/3" : "w-1/4"
          }`}
          key={item.id}
          data-testid="list-items"
        >
          <div
            className="cursor-pointer block bg-white shadow-md hover:shadow-xl rounded-lg"
            onClick={() => setItemDetails(item)}
          >
            <div className="relative pb-48">
              {item?.product?.defaultImageURL ? (
                <img
                  src={item?.product?.defaultImageURL}
                  alt={item?.name}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              ) : (
                <div className="absolute h-full w-full">
                  <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
                    <svg
                      className="w-12 h-12 text-gray-200 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <h2 className="mt-2 mb-2 font-bold truncate">{item.name}</h2>
              <p className="text-sm mb-3 truncate">
                {item?.product?.description || "-"}
              </p>
            </div>
            <div className="p-4 border-t border-b text-xs text-gray-700">
              <span className="font-bold text-xl">
                {convertCurrency(item?.product?.retailPrice)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ListItems;
