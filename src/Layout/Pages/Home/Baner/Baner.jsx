import "./Baner.css";

function Baner() {
  return (
    <>
      <section>
        <div className="baner_top_main_container">
          <div className="baner_bg_image_comtainer">
            <img
              src="https://i.ibb.co.com/F8hj7YT/domino-studio-164-6w-VEHf-I-unsplash-min.jpg"
              alt="image"
            />
          </div>

          <div className="baner_bg_image_over_flow_contaienr"></div>

          <div className="baner_over_flow_text_content_container">
            <h2>
              FIND CLOTHES THAT <br /> MATCHES YOUR STYLE
            </h2>
            <p>
              Browse through our diverse range of meticulously crafted garments,{" "}
              <br /> designed to bring out your individuality and cater to your
              sense of style.
            </p>
            <button>Shop Now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Baner;