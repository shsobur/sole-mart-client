import PropTypes from "prop-types";
import "./CartItemCard.css";

const CartItemCard = ({ cartItem, handleCartDelete }) => {
  return (
    <>
      <div>
        <section>
          <div className="main_container">
            <div className="all_cart_section_outer_container">
              <div className="main_all_cart_section_container">
                <div className="ptodict_cart_image_container">
                  <img src={cartItem.image} alt="Prodict image" />
                </div>

                <div className="product_item_info_container">
                  <div className="product_cart_header_container">
                    <h2>{cartItem.name}</h2>
                    <h4>{cartItem.category}</h4>
                  </div>

                  <div className="product_cart_footer_container">
                    <h2>${cartItem.newPrice}</h2>
                    <h3>${cartItem.oldPrice}</h3>
                    <h4>{cartItem.savings}</h4>
                  </div>

                  <div className="cart_btn_container">
                    <button onClick={() => handleCartDelete(cartItem._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

CartItemCard.propTypes = {
  cartItem: PropTypes.object,
  handleCartDelete: PropTypes.func,
};

export default CartItemCard;
