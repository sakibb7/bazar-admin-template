import { useState } from "react";
import { products } from "../data/productData";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const Products = () => {
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);

  const nPage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  console.log(nPage);

  // Product sorting
  const [data, setData] = useState(records);
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

  const prePage = () => {
    if (currentPage !== firstIndex - 1) {
      setData(records);
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== nPage) {
      setData(records);
      setCurrentPage(currentPage + 1);
    }
  };
  const changeCPage = (id) => {
    setData(records);
    setCurrentPage(id);
  };

  return (
    <div className="p-8 w-full bg-slate-50">
      <div>
        <h1 className="text-3xl text-slate-800 font-[600]">Products</h1>
      </div>
      <div className="w-full">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search product"
          className="input input-bordered w-full max-w-xs my-5 mx-2 float-left"
        />
        <div className=" w-full">
          <table className="table my-8 w-full">
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

                <th
                  className="cursor-pointer w-[30%]"
                  onClick={() => sorting("title")}
                >
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
                <th></th>
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
                    <td>
                      <button className="pr-4">Edit</button>{" "}
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <nav>
            <ul className="flex gap-4">
              <li className="cursor-pointer">
                <a href="#" onClick={() => prePage()}>
                  Prev
                </a>
              </li>
              {numbers.map((n, i) => (
                <li className="cursor-pointer" key={i}>
                  <a onClick={() => changeCPage(n)}>{n}</a>
                </li>
              ))}
              <li className="cursor-pointer">
                <a href="#" onClick={() => nextPage()}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Products;
