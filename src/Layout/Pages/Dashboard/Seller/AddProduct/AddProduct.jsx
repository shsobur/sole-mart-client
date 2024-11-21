const AddProduct = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full bg-[#f0f0f0]">
        <section className="p-6 w-full max-w-5xl bg-white rounded-md shadow-md">
          
          <h2 className="text-lg font-semibold text-[#563eb] capitalize">
            Add Product
          </h2>

          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700" htmlFor="username">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your product name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700">
                  Category
                </label>
                <select 
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                    <option disabled selected>Product category</option>
                    <option value="Athletic">Athletic</option>
                    <option value="Hiking">Hiking </option>
                    <option value="Formal">Formal</option>
                    <option value="Sneakers">Sneakers</option>
                </select>
              </div>

              <div>
                <label className="text-gray-700">
                  Old Price
                </label>
                <input
                  name="oldPrice"
                  type="text"
                  placeholder="$***"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700">
                  New Price
                </label>
                <input
                  name="newPrice"
                  type="text"
                  placeholder="$***"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700">
                  Color
                </label>
                <input
                  name="color"
                  type="text"
                  placeholder="Black"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700">
                  Status
                </label>
                <select 
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                    <option disabled selected>Product status</option>
                    <option value="topSell">Top sell</option>
                    <option value="new">New Arrivel</option>
                </select>
              </div>

              <div>
                <label className="text-gray-700">
                  Image url
                </label>
                <input
                  name="image"
                  type="text"
                  placeholder="https://example.com/5vxYDpF/sole-mart.jpg"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700">
                  Description
                </label>
                <textarea
                  type="password"
                  rows="4" 
                  cols="50" 
                  placeholder="Write between 15 to 20 words."
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#2563eb] rounded-md focus:outline-none"
              >
                Add
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddProduct;