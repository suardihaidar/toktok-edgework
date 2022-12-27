import React from "react";

function ListCategories({ categories, fetchItems, activeItem }) {
  return (
    <>
      {categories?.map(
        (val) =>
          val.itemType === "CATEGORY" && (
            <li
              data-testid="list-categories"
              key={val.id}
              onClick={() => fetchItems(val.id)}
              className={`flex cursor-pointer items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 ${
                activeItem === val.id && "bg-gray-200 hover:bg-gray-200"
              }`}
            >
              <span className="ml-3 capitalize">{val.name.toLowerCase()}</span>
            </li>
          )
      )}
    </>
  );
}

export default ListCategories;
