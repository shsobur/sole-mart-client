import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="md_flex">
            <h1 className="heading">Subscribe our newsletter to get update.</h1>

            <div className="sign_up_container">
              <a href="#" className="sign_up_button">
                <span>Sign Up Now</span>
              </a>
            </div>
          </div>

          <hr className="separator" />

          <div className="grid_container">
            <div>
              <p className="font_semibold">Quick Link</p>

              <div className="link_container">
                <a href="#" className="link">
                  Home
                </a>
                <a href="#" className="link">
                  Who We Are
                </a>
                <a href="#" className="link">
                  Our Philosophy
                </a>
              </div>
            </div>

            <div>
              <p className="font_semibold">Industries</p>

              <div className="link_container">
                <a href="#" className="link">
                  Retail & E-Commerce
                </a>
                <a href="#" className="link">
                  Information Technology
                </a>
                <a href="#" className="link">
                  Finance & Insurance
                </a>
              </div>
            </div>

            <div>
              <p className="font_semibold">Services</p>

              <div className="link_container">
                <a href="#" className="link">
                  Translation
                </a>
                <a href="#" className="link">
                  Proofreading & Editing
                </a>
                <a href="#" className="link">
                  Content Creation
                </a>
              </div>
            </div>

            <div>
              <p className="font_semibold">Contact Us</p>

              <div className="link_container">
                <a href="#" className="link">
                  +880 768 473 4978
                </a>
                <a href="#" className="link">
                  info@solemart.com
                </a>
              </div>
            </div>
          </div>

          <hr className="separator" />

          <div className="footer_bottom">
            <a href="#">
              <h2>SoleMart</h2>
            </a>

            <p className="copyright">© Copyright 2021. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
