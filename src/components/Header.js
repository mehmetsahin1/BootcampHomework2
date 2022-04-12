import React from "react";

function Header(props) {
  return (
    <div className="px-32 bg-slate-200 h-12 flex items-center justify-between">
      <div className="flex items-center">
        <input
          placeholder="Search Product"
          onChange={(e) => {
            props.search(e.target.value);
          }}
          className="px-2 py-1 w-full rounded-md border border-slate-300"
        ></input>
      </div>
      <button
        title="Add Product to the inventory"
        className="bg-green-500 px-8 rounded-lg text-white"
        onClick={props.openModal}
      >
        <i className="las la-cart-plus text-2xl"></i>
      </button>
    </div>
  );
}

export default Header;
