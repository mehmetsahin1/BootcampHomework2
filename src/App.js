import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AddProductModal from "./components/AddProductModal";
import Product from "./components/Product";

export function App() {
  // State which controls modal is active or not
  const [modalActive, setModalActive] = React.useState(false);

  // State which controls search term
  const [term, setTerm] = React.useState("");

  // State for all products
  const [products, setProducts] = React.useState([
    {
      id: 0,
      name: "First Product",
      type: "capsules",
      stock: 10,
    },
    {
      id: 1,
      name: "Second Product",
      type: "tablets",
      stock: 15,
    },
    {
      id: 2,
      name: "Third Product",
      type: "equipment",
      stock: 15,
    },
    {
      id: 3,
      name: "Example Product Without Stock",
      type: "syrup",
      stock: 0,
    },
  ]);

  // State for filtered products
  const [showingProducts, setShowingProducts] = React.useState([]);

  // When component initialized set filtered products equals to all products
  React.useEffect(() => {
    setShowingProducts(products);
  }, []);

  // When products array is updated filter new products array
  React.useEffect(() => {
    handleSearch(term);
  }, [products]);

  // check modal is active or not
  const handleModal = (state) => {
    setModalActive(state);
  };

  // Handles selling item
  const handleSellItem = (piece, id) => {
    const _products = products.map((item) => {
      // Check item has enough stock
      if (item.id === id && item.stock >= piece) {
        item.stock = parseInt(item.stock) - parseInt(piece);
      }

      return item;
    });

    setProducts(_products);
  };
  // Handles added new stock to item
  const handleAddStockItem = (piece, id) => {
    const _products = products.map((item) => {
      if (item.id === id) {
        item.stock = parseInt(item.stock) + parseInt(piece);
      }

      return item;
    });

    setProducts(_products);
  };

  // Add new item to inventory
  const handleAddNewItem = (item) => {
    const newId = products.length;
    const _products = products;
    item.id = newId;
    _products.push(item);

    setProducts(_products);
    setModalActive(false);
  };

  // Filter items by given search term
  const handleSearch = (term) => {
    /**
     *
     * If products array is changed we will filter products with term
     * thats why we need to set term state
     */
    setTerm(term);
    // If term is an empty array do not filter products
    if (term === "") {
      setShowingProducts(products);
    } else {
      const _products = products.filter((product) => {
        return product.name.toLowerCase().includes(term.toLowerCase());
      });

      setShowingProducts(_products);
    }
  };

  // Handles delete item from products array
  const handleDeleteItem = (id) => {
    const _products = products.filter((product) => {
      return product.id !== id;
    });

    setProducts(_products);
  };

  return (
    <div>
      <Navbar />
      <Header
        openModal={() => {
          handleModal(true);
        }}
        search={(term) => {
          handleSearch(term);
        }}
      />
      {modalActive && (
        <AddProductModal
          closeModal={() => {
            handleModal(false);
          }}
          addNewItem={(item) => {
            handleAddNewItem(item);
          }}
        />
      )}
      <div className="px-32 py-10 grid overflow-hidden grid-cols-4 md:grid-cols-3 grid-rows-none gap-4">
        {showingProducts.map((product) => {
          return (
            <Product
              item={product}
              sellItem={(piece) => {
                handleSellItem(piece, product.id);
              }}
              addItem={(piece) => {
                handleAddStockItem(piece, product.id);
              }}
              onDelete={() => {
                handleDeleteItem(product.id);
              }}
              key={product.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
