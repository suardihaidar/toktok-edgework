import React, { useState, useEffect } from "react";

import api from "services/api";
import convertCurrency from "utils/convertCurrency";
import SkeletonCategories from "components/SkeletonCategories";
import SkeletonItems from "components/SkeletonItems";
import Navbar from "layouts/Navbar";

function Dashboard() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [loadingItems, setLoadingItems] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoadingCategories(true);
    const { data } = await api.categoriesPost();
    setCategories(data);
    setLoadingCategories(false);
  };

  const fetchItems = async (id) => {
    setLoadingItems(true);
    setActiveItem(id);
    const { data } = await api.itemsPost(id);
    setItems(data);
    setLoadingItems(false);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex h-full overflow-hidden">
        {/* sidebar */}
        <aside className="w-64 h-full" aria-label="Sidebar">
          <div className="overflow-y-auto p-4 bg-gray-50 rounded dark:bg-gray-800 h-full">
            <span className="text-lg font-bold mb-3 block">Category</span>
            <ul className="space-y-1">
              {loadingCategories ? (
                <SkeletonCategories />
              ) : (
                categories?.map(
                  (val) =>
                    val.itemType === "CATEGORY" && (
                      <li
                        key={val.id}
                        onClick={() => fetchItems(val.id)}
                        className={`flex cursor-pointer items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 ${
                          activeItem === val.id &&
                          "bg-gray-200 hover:bg-gray-200"
                        }`}
                      >
                        <span className="ml-3 capitalize">
                          {val.name.toLowerCase()}
                        </span>
                      </li>
                    )
                )
              )}
            </ul>
          </div>
        </aside>
        {/* content */}
        <div className="container p-4 overflow-auto">
          {!loadingItems && !items.length && (
            <div className="text-gray-500">
              <span>Welcome, </span>
              <span>Select the available categories to load the items</span>
            </div>
          )}
          <div className="flex flex-wrap">
            {loadingItems ? (
              <SkeletonItems />
            ) : (
              items?.map((item) => (
                <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                  <div className="cursor-pointer block bg-white shadow-md hover:shadow-xl rounded-lg">
                    <div className="relative pb-48">
                      <img
                        className="absolute inset-0 h-full w-full object-contain"
                        src={`${
                          item.product.defaultImageURL ||
                          "https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/e902cee7-6650-447e-989a-9209944192fc/product/86340c34-e4e2-4a94-90e2-0c1d00c6562a.jpg"
                        }`}
                        alt="product_image"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="mt-2 mb-2 font-bold">{item.name}</h2>
                      <p className="text-sm mb-3 truncate">
                        {item.product.description}
                      </p>
                    </div>
                    <div className="p-4 border-t border-b text-xs text-gray-700">
                      <span className="font-bold text-xl">
                        {convertCurrency(item.product.retailPrice)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
