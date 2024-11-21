import "./AllProduct.css";
import { useEffect, useState } from "react";
import { GrPowerReset, GrSearchAdvanced } from "react-icons/gr";
import useAxiosPublic from "../../../Hooks/AxiosPublic/AxiosPublic";

const AllProduct = () => {
  const axiosPublic = useAxiosPublic();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fatch = async () => {
      axiosPublic.get("/all-products").then((res) => {
        setProducts(res.data)
        setLoading(false);
      });
    };

    fatch();
  }, [axiosPublic]);

  return (
    <>
      <section>
        <div className="product_main_top_container">
          <div className="product_search_bar_outer_container">
            <div className="product_search_bar_container">
              <input
                type="text"
                name="search"
                placeholder="Search your product"
              />
              <button>
                <GrSearchAdvanced />
              </button>
            </div>

            <div className="product_sort_main_outer_container">
              <div className="product_sort_container">
                <select>
                  <option disabled selected>
                    Category
                  </option>
                  <option>Siniker</option>
                  <option>Formal</option>
                  <option>Athlact</option>
                  <option>Hiking</option>
                </select>
              </div>

              <div className="product_sort_container">
                <select>
                  <option value="ase">Low to High</option>
                  <option value="desc">High to Low</option>
                </select>
              </div>
            </div>

            <div className="product_reset_btn_container">
              <button>
                Reset
                <GrPowerReset />
              </button>
            </div>
          </div>

          <div className="product_display_and_sort_outer_container">
            {loading ? (
              <div className="w-full h-screen flex items-center justify-center">
                <h2 className="text-2xl">Loading...</h2>
              </div>
            ) : products.length === 0 ? (
              <h2 className="text-2xl text-center">No product found!</h2>
            ) : (
              <div className="product_display_and_sort_inner_container">
                <h2>so manu product</h2>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
