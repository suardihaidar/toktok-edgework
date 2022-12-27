import React from "react";

import convertCurrency from "utils/convertCurrency";

function ItemDetails({ setItemDetails, itemDetails }) {
  return (
    <div data-testid="item-details" className="w-1/3 p-2 bg-gray-100">
      <div className="bg-white rounded-lg flex-1 h-full p-2 flex flex-col items-center shadow-lg">
        <button
          onClick={() => setItemDetails({})}
          type="button"
          className="bg-white rounded-full p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none self-start"
        >
          <span className="sr-only">Close menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {itemDetails?.product?.defaultImageURL ? (
          <img
            src={itemDetails?.product?.defaultImageURL}
            alt={itemDetails?.name}
            className="w-32 h-32 object-contain"
          />
        ) : (
          <div className="flex justify-center items-center mb-4 h-48 w-48 bg-gray-300 rounded dark:bg-gray-700">
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
        )}

        <div className="font-bold text-xl capitalize">{itemDetails?.name}</div>
        <span className="font-bold text-2xl my-3">
          {convertCurrency(itemDetails?.product?.retailPrice)}
        </span>
        <span className="font-bold text-green-400 text-sm">
          {itemDetails?.product?.orderingStatus}
        </span>
        <p className="mt-2 self-start text-gray-600 font-semibold">Detail</p>
        <p className="text-sm mb-3 self-start">
          {itemDetails?.product?.description || "-"}
        </p>
      </div>
    </div>
  );
}

export default ItemDetails;
