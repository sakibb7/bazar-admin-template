import { useState } from "react";
import { products } from "../data/productData";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const Products = () => {
  const [data, setData] = useState(products);
  const [order, setOrder] = useState("ASC");
  const [search, setSearch] = useState("");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  const sorByNumber = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setData(sorted);
      setOrder("ASC");
    }
  };
  return (
    <div className="p-8 w-full bg-slate-50">
      <div>
        <h1 className="text-3xl text-slate-800 font-[600]">Products</h1>
      </div>
      <div className="w-full">
        <div className="overflow-x-auto">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search product"
            className="input input-bordered w-full max-w-xs my-5 mx-2 float-right"
          />
          <table className="table my-8 w-full">
            {/* head */}
            <thead className="bg-slate-200 text-[16px] text-slate-800 w-full">
              <tr>
                <th
                  className="cursor-pointer flex items-center"
                  onClick={() => sorByNumber("id")}
                >
                  <p>No</p>
                  {order === "ASC" ? (
                    <MdOutlineArrowDropDown />
                  ) : (
                    <MdOutlineArrowDropUp />
                  )}
                </th>

                <th className="cursor-pointer" onClick={() => sorting("title")}>
                  Name
                  {order === "ASC" ? (
                    <MdOutlineArrowDropDown />
                  ) : (
                    <MdOutlineArrowDropUp />
                  )}
                </th>
                <th
                  className="cursor-pointer"
                  onClick={() => sorting("category")}
                >
                  Category
                  {order === "ASC" ? (
                    <MdOutlineArrowDropDown />
                  ) : (
                    <MdOutlineArrowDropUp />
                  )}
                </th>
                <th
                  className="cursor-pointer flex items-center"
                  onClick={() => sorByNumber("price")}
                >
                  Price
                  {order === "ASC" ? (
                    <MdOutlineArrowDropDown />
                  ) : (
                    <MdOutlineArrowDropUp />
                  )}
                </th>
                <th
                  className="cursor-pointer"
                  onClick={() => sorByNumber("quantity")}
                >
                  Quantity
                  {order === "ASC" ? (
                    <MdOutlineArrowDropDown />
                  ) : (
                    <MdOutlineArrowDropUp />
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.title.toLowerCase().includes(search);
                })
                .map(({ id, title, category, price, quantity }) => (
                  <tr key={id} className="border-b">
                    <td className="">{id}</td>
                    <td className="">{title}</td>
                    <td>{category}</td>
                    <td>${price}</td>
                    <td>{quantity ? quantity : "Out of stock"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
