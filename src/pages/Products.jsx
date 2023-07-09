import { products } from "../data/productData";

const Products = () => {
  return (
    <div className="p-8 w-full">
      <div>
        <h1 className="text-3xl text-slate-800 font-[600]">Products</h1>
      </div>
      <div className="w-full">
        <div>
          <button
            className="py-4"
            onClick={() => products.sort((a, b) => a.price - b.price)}
          >
            Sort by name
          </button>
        </div>

        {products.map(({ id, title, category, price, quantity }) => (
          <div key={id} className="grid grid-cols-3">
            <div>{title}</div>
            <div>{category}</div>
            <div>{price}</div>
            <div>{quantity}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
