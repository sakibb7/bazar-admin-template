import { useState } from "react";

const Modal = ({ closeModal, onSubmit }) => {
  const [formState, setFormState] = useState({
    title: "",
    price: "",
    quantity: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formState);
    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="p-8 bg-white rounded-2xl">
        <form action=" flex flex-start flex-col gap-4">
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="title" className="w-1/2">
              Product Name:
            </label>
            <input
              type="text"
              value={formState.title}
              name="title"
              className="border py-1 rounded-lg"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-8 py-8">
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="price" className="w-1/2">
                Price:
              </label>
              <input
                type="text"
                name="price"
                className="border py-1 rounded-lg"
                value={formState.price}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="quantity" className="w-1/2">
                Quantity:
              </label>
              <input
                type="text"
                name="quantity"
                className="border py-1 rounded-lg"
                value={formState.quantity}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="category" className=" pr-8">
              Category
            </label>
            <select
              name="category"
              className="bg-white border py-1 px-2"
              value={formState.category}
              onChange={handleChange}
            >
              <option value="Personal Care">Personal Care</option>
              <option value="Food">Food</option>
              <option value="Household">Household</option>
              <option value="Bavegers">Bavegers</option>
            </select>
          </div>
          <button
            type="submit"
            className="border bg-slate-100 text-slate-700 px-4 py-2 rounded-lg mt-8"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
