"use client";

import { HiShoppingCart } from "react-icons/hi";

export function ProductCard({ data, isNew = false }) {
  return (
    <div className="border rounded-lg shadow-sm px-4 py-4 md:py-6">
      <a href="#">
        <div className="h-44 md:h-56 relative mb-4 overflow-hidden group">
          <img
            src={
              data.img ??
              "https://images.samsung.com/is/image/samsung/p6pim/id/sm-r861nzkaxse/gallery/id-galaxy-watch-fe-r861-sm-r861nzkaxse-thumb-542345719?$344_344_PNG$"
            }
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          {isNew && (
            <span className="absolute bottom-2 text-sm bg-red-200 bg-opacity-50 left-2 px-2 py-1 rounded-md border border-red-500 text-red-500">
              New
            </span>
          )}
          <button
            onClick={() => alert("Test")}
            className="absolute top-1 text-sm bg-slate-200 bg-opacity-50 right-1 p-2 rounded-md border border-slate-500 text-slate-500"
          >
            <HiShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </a>
      <span className="bg-slate-500 text-white px-3 py-2 rounded-full text-sm font-medium">
        {data.category ?? "Uncategorize"}
      </span>
      <a href="#">
        <h5 className="text-base lg:text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-5 line-clamp-2">
          {data.title ?? "Unilited Products"}
        </h5>
      </a>
      <div className="mt-2 md:mt-5">
        {data.price && (
          <span className="text-sm text-red-400 line-through">
            {data.price}
          </span>
        )}
        <h5 className="text-base md:text-xl font-medium text-gray-900 dark:text-white">
          {data.salePrice ?? "Rp -"}
        </h5>
      </div>
    </div>
  );
}
