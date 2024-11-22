import "./ProductCard.css";
import PropTypes from "prop-types";

const ProductCard = ({ cardItem }) => {
  return (
    <>
      <section>
        <div className="main_container">
          <div className="all_cart_section_outer_container">
            <div className="main_all_cart_section_container">
              <div className="ptodict_cart_image_container">
                <img src={cardItem.image} alt="Prodict image" />
              </div>

              <div className="product_item_info_container">
                <div className="product_cart_header_container">
                  <h2>{cardItem.name}</h2>
                  <h4>{cardItem.category}</h4>
                </div>

                <div className="product_cart_footer_container">
                  <h2>${cardItem.newPrice}</h2>
                  <h3>${cardItem.oldPrice}</h3>
                  <h4>{cardItem.savings}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ProductCard.propTypes = {
  cardItem: PropTypes.object,
};

export default ProductCard;