import React from "react";
import ProductIcon from "./ProductIcon";

function Product(props) {
  // State for piece counter
  const [piece, setPiece] = React.useState(1);
  // Handles Sell Item Button
  const handleSellItemButton = () => {
    // Check piece is a valid number
    if (!isNaN(parseInt(piece))) {
      props.sellItem(piece);
    }
  };

  // Handles Add Stock To Item Button
  const handleAddStockButton = () => {
    // Check piece is a valid number
    if (!isNaN(parseInt(piece))) {
      props.addItem(piece);
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex items-center flex-col relative">
      <ProductIcon type={props.item.type} />
      <div className="px-6 py-4 flex items-center justify-center flex-col">
        <div className="font-bold text-xl mb-2 whitespace-nowrap">
          {props.item.name}
        </div>
        <p>
          Stock:{" "}
          <span className="font-bold text-blue-500">{props.item.stock}</span>
        </p>
        <input
          value={piece}
          onChange={(e) => {
            setPiece(e.target.value);
          }}
          className="border text-center border-slate-400 rounded-md pl-5 pr-2 py-1 w-16 mt-2"
          type="number"
        ></input>
      </div>
      <div className="px-6 pb-4 flex items-center justify-center">
        <button
          className="bg-green-500 w-96 px-8 text-white flex items-center justify-center"
          onClick={handleAddStockButton}
        >
          <i className="las la-plus-circle text-2xl mr-2"></i>
          <span> Add Stock </span>
        </button>
      </div>
      <div className="px-6 pb-4 flex items-center justify-center">
        <button
          className="bg-yellow-400 px-8 w-96 text-white flex items-center justify-center"
          onClick={handleSellItemButton}
        >
          <i className="las la-minus-circle text-2xl mr-2"></i>
          <span> Sell the Product </span>
        </button>
      </div>
      <div className="px-6 pb-4 flex items-center justify-center">
        <button
          className="bg-red-500 px-8 w-96 text-white flex items-center justify-center"
          onClick={props.onDelete}
        >
          <i className="las la-trash text-2xl mr-2"></i>
          <span> Delete the Product </span>
        </button>
      </div>
      {props.item.stock === 0 && (
        <div className="absolute top-1 right-1 flex items-center justify-center flex-col text-red-600">
          <i className="las la-exclamation-circle text-4xl"></i>
          No Stock
        </div>
      )}
    </div>
  );
}

export default Product;
