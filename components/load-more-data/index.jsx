import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData({ limit, skip }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableBtn(true);
  });

  if (loading) {
    return <div className="data-styles">Loading Data! Please Wait... </div>;
  }

  return (
    <>
      <div className="load-more-container">
        <div className="product-container">
          {products && products.length ? (
            products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          ) : (
            <h5 className="data-styles">Check Your Network...</h5>
          )}
        </div>
        {disableBtn ? <p className="data-style">no more products</p> : null}
      </div>
      <button disabled={disableBtn} onClick={() => setCount(count + 1)}>
          Load more products
        </button>
    </>
  );
}
