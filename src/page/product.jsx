import axios from "axios";
import { useEffect, useState } from "react";
import Productcard from "../compnents/productcard";

const Product = () => {
  const [productlist, setproductlist] = useState([]);
  const [search, setsearch] = useState("");

  const fetchData = async () => {
    try {
      const responce = await axios.get("https://fakestoreapi.com/products");
      setproductlist(responce.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleinput = (event) => {
    setsearch(event.target.value);
  };

  const newData = productlist.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const handlesort = (type) => {
    let sortedproducts = [...productlist];
    switch (type) {
      case "price_ass":
        sortedproducts.sort((a, b) => a.price - b.price);
        break;
      case "price_des":
        sortedproducts.sort((a, b) => b.price - a.price);
        break;
      case "alphabet_ass":
        sortedproducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "alphabet_des":
        sortedproducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }
    setproductlist(sortedproducts);
  };

  return (
    <>
      <button onClick={() => handlesort("price_ass")}>Sort Low to High</button>
      <button onClick={() => handlesort("price_des")}>Sort High to Low</button>
      <input type="text" placeholder="search" onChange={handleinput} />
      <button onClick={() => handlesort("alphabet_ass")}>
        Sort Low to High
      </button>
      <button onClick={() => handlesort("alphabet_des")}>
        Sort High to Low
      </button>

      {newData.map((productlist) => {
        return (
          <Productcard
            key={productlist.id}
            title={productlist.title}
            price={productlist.price}
            category={productlist.category}
            description={productlist.description}
            image={productlist.image}
          />
        );
      })}
    </>
  );
};

export default Product;
