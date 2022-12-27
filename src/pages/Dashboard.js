import React, { useState, useEffect } from "react";

import api from "services/api";
import SkeletonCategories from "components/SkeletonCategories";
import SkeletonItems from "components/SkeletonItems";
import Navbar from "layouts/Navbar";
import ItemDetails from "components/ItemDetails";
import ListItems from "components/ListItems";
import ListCategories from "components/ListCategories";

function Dashboard() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [loadingItems, setLoadingItems] = useState(false);
  const [itemDetails, setItemDetails] = useState({});

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
    setItemDetails({});
    const { data } = await api.itemsPost(id);
    setItems(data);
    setLoadingItems(false);
  };

  return (
    <div
      data-testid="dashboard"
      className="flex flex-col h-screen overflow-hidden"
    >
      <Navbar />
      <div className="flex h-full overflow-hidden">
        {/* sidebar */}
        <aside className="w-64 h-full" aria-label="Sidebar">
          <div className="w-64 overflow-y-auto p-4 bg-gray-50 rounded dark:bg-gray-800 h-full">
            <span className="text-lg font-bold mb-3 block">Category</span>
            <ul className="space-y-1">
              {loadingCategories ? (
                <SkeletonCategories />
              ) : (
                <ListCategories
                  activeItem={activeItem}
                  categories={categories}
                  fetchItems={(val) => fetchItems(val)}
                />
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
              <ListItems
                items={items}
                itemDetails={itemDetails}
                setItemDetails={setItemDetails}
              />
            )}
          </div>
        </div>
        {/* details */}
        {itemDetails.id && (
          <ItemDetails
            setItemDetails={setItemDetails}
            itemDetails={itemDetails}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
