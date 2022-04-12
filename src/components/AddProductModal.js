import React from "react";

function AddProductModal(props) {
  // State for new product name
  const [name, setName] = React.useState("");
  // State for new product type
  const [type, setType] = React.useState("capsules");
  // State for new product stock
  const [stock, setStock] = React.useState(0);
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          onClick={props.closeModal}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h1 className="text-center text-lg mb-4 font-bold">
              Add New Product
            </h1>
            <div className="block mb-4">
              <label>Product Name:</label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="px-2 py-1 w-full rounded-md border border-slate-300"
              ></input>
            </div>
            <div className="block mb-4">
              <label>Product Type</label>
              <select
                value={type}
                className="px-2 py-1 w-full rounded-md border border-slate-300"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option value="capsules">Capsules</option>
                <option value="tablets">Tablet</option>
                <option value="syrup">Syrup</option>
                <option value="equipment">Equipment</option>
              </select>
            </div>
            <div className="block mb-4">
              <label>Product Stock</label>
              <input
                value={stock}
                onChange={(e) => {
                  setStock(e.target.value);
                }}
                type="number"
                className="px-2 py-1 w-full rounded-md border border-slate-300"
              ></input>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => {
                // Create new product object and pass it to event
                const product = {
                  name,
                  type,
                  stock,
                };
                props.addNewItem(product);
              }}
            >
              Add New Item
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={props.closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductModal;
