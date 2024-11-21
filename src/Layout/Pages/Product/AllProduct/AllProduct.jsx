import "./AllProduct.css";
import { useEffect, useState } from "react";
import { GrPowerReset, GrSearchAdvanced } from "react-icons/gr";
import useAxiosPublic from "../../../Hooks/AxiosPublic/AxiosPublic";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const AllProduct = () => {
  const axiosPublic = useAxiosPublic();
  const [products, setProducts] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("asc");

  // Fatching all products__ __ __!
  useEffect(() => {
    setLoading(true);
    const fatch = async () => {
      await axiosPublic.get(`/all-products?name=${search}&category=${category}&sort=${sort}`).then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
    };

    fatch();
  }, [axiosPublic, search, category, sort ]);

  // Fatching all categorys__ __ __!
  useEffect(() => {
    axiosPublic.get("/all-categorys").then((res) => {
      setCategoryNames(res.data);
    });
  }, [axiosPublic]);

  // Handle search input value__ __ __!
  const handleSearchBar = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    setSearch(value);
    e.target.search.value = "";
  };

  // Handle reset__ __ __!
  const handleReset = () => {
    setSearch("")
    setCategory("");
    setSort("asc");
    window.location.reload();
  }

  return (
    <>
      <section>
        <div className="product_main_top_container">
          <div className="product_search_bar_outer_container">
            <form onSubmit={handleSearchBar}>
              <div className="prusuct_handle_width_container">
                <div className="product_search_bar_container">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search your product"
                  />
                  <button type="submit">
                    <GrSearchAdvanced />
                  </button>
                </div>
              </div>
            </form>

            <div className="product_sort_main_outer_container">
              <div className="product_sort_container">
                <select onChange={(e) => setCategory(e.target.value)}>
                  <option disabled selected>
                    Category
                  </option>
                  {categoryNames.map((categoryName) => (
                    <option key={categoryName.category}>{categoryName.category}</option>
                  ))}
                </select>
              </div>

              <div className="product_sort_container">
                <select onChange={(e) => setSort(e.target.value)}>
                  <option value="asc">Low to High</option>
                  <option value="desc">High to Low</option>
                </select>
              </div>
            </div>

            <div className="product_reset_btn_container">
              <button onClick={handleReset}>
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
                {products.map((product) => (
                  <ProductCard
                    key={product._id}
                    cardItem={product}
                  ></ProductCard>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
