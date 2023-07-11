const Modal = ({ closeModal }) => {
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
            <label htmlFor="page" className="w-1/2">
              Product Name:
            </label>
            <input type="text" name="page" className="border py-1 rounded-lg" />
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
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="category" className=" pr-8">
              Category
            </label>
            <select name="status" className="bg-white border py-1 px-2">
              <option value="live">Personal Care</option>
              <option value="draft">Food</option>
              <option value="error">Household</option>
              <option value="error">Bavegers</option>
            </select>
          </div>
          <button
            type="submit"
            className="border bg-slate-100 text-slate-700 px-4 py-2 rounded-lg mt-8"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
