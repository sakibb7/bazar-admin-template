import { useEffect, useState } from "react";
import { products } from "../data/productData";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import Modal from "../layers/products/Modal";

const Products = () => {
  const [product, setProduct] = useState(products);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const records = product.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(product.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

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

  useEffect(() => {
    setData(records);
  }, [currentPage]);

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
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      // console.log(currentPage);
      // setData(records);
    }
  };

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage((prevPage) => prevPage + 1);
      // console.log(currentPage);
      // setData(records);
    }
  };

  const changeCPage = (n) => {
    setCurrentPage(n);
    setData(records);
  };

  //product add, delete
  const [modalOpen, setModalOpen] = useState(false);

  const handleDeleteProducts = (id) => {
    setData(records.filter((idx) => idx.id !== id));
  };

  const handleSubmit = (newProducts) => {
    setProduct([...products, newProducts]);
  };

  return (
    <div className="p-8 w-full bg-slate-50">
      <div>
        <h1 className="text-3xl text-slate-800 font-[600]">Products</h1>
      </div>
      <div className="w-full flex flex-col gap-4 pt-8">
        <div className=" flex justify-between items-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search product"
            className="input input-bordered"
          />
          <button
            className="bg-sky-400 px-6 py-2 text-slate-50 font-[500] rounded-xl drop-shadow-2xl"
            onClick={() => setModalOpen(true)}
          >
            Add Product
          </button>
          {modalOpen && (
            <Modal
              closeModal={() => setModalOpen(false)}
              onSubmit={handleSubmit}
            />
          )}
        </div>

        <div className=" w-full">
          <table className="table w-full">
            <thead className="bg-slate-200 text-[16px] text-slate-800 w-full">
              <tr className="">
                <th
                  className="cursor-pointer flex items-center"
                  onClick={() => sorByNumber("id")}
                >
                  {order === "ASC" ? (
                    <div className="flex">
                      No <MdOutlineArrowDropDown />
                    </div>
                  ) : (
                    <div className="flex">
                      No <MdOutlineArrowDropUp />
                    </div>
                  )}
                </th>

                <th className="cursor-pointer" onClick={() => sorting("title")}>
                  {order === "ASC" ? (
                    <div className="flex">
                      Name <MdOutlineArrowDropDown />
                    </div>
                  ) : (
                    <div className="flex">
                      Name <MdOutlineArrowDropUp />
                    </div>
                  )}
                </th>
                <th
                  className="cursor-pointer"
                  onClick={() => sorting("category")}
                >
                  {order === "ASC" ? (
                    <div className="flex">
                      Category <MdOutlineArrowDropDown />
                    </div>
                  ) : (
                    <div className="flex">
                      Category <MdOutlineArrowDropUp />
                    </div>
                  )}
                </th>
                <th
                  className="cursor-pointer flex items-center"
                  onClick={() => sorByNumber("price")}
                >
                  {order === "ASC" ? (
                    <div className="flex">
                      Price <MdOutlineArrowDropDown />
                    </div>
                  ) : (
                    <div className="flex">
                      Price <MdOutlineArrowDropUp />
                    </div>
                  )}
                </th>
                <th
                  className="cursor-pointer"
                  onClick={() => sorByNumber("quantity")}
                >
                  {order === "ASC" ? (
                    <div className="flex">
                      Quantity <MdOutlineArrowDropDown />
                    </div>
                  ) : (
                    <div className="flex">
                      Quantity <MdOutlineArrowDropUp />
                    </div>
                  )}
                </th>
                <th>Actions</th>
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
                      <button className="bg-green-400 px-4 py-2 text-slate-50 rounded-xl font-bold">
                        Edit
                      </button>{" "}
                      <button
                        className="bg-red-400 px-4 py-2 text-slate-50 rounded-xl font-bold"
                        onClick={() => handleDeleteProducts(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <nav className="pt-8">
            <ul className="flex gap-8 justify-start items-center">
              <a onClick={() => prePage()}>
                <li className="bg-sky-400 px-6 py-2 text-slate-50 font-[500]  drop-shadow-2xl cursor-pointer">
                  Prev
                </li>
              </a>
              {numbers.map((n, i) => (
                <li className="cursor-pointer" key={i}>
                  <a onClick={() => changeCPage(n)}>{n}</a>
                </li>
              ))}
              <a onClick={nextPage}>
                <li className="bg-sky-400 px-6 py-2 text-slate-50 font-[500] drop-shadow-2xl cursor-pointer">
                  Next
                </li>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Products;
