import React, { useEffect } from "react";
import "./MainPage.css";
import axios from "axios";

const MainPage = () => {
  let [products, setProducts] = React.useState([]);
  useEffect(() => {
    axios
      .get(
        "https://38296b07-33cb-460f-80bc-e30368fe0bd9.mock.pstmn.io/products"
      )
      .then((res) => {
        products = res.data.products;
        setProducts(products);
      })
      .catch((err) => {
        return console.log(err);
      });
  }, []);

  return (
    <>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="logo" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="" />
        </div>
        <h2>Products</h2>
        <div id="product-list">
          {products.map((product, idx) => {
            return (
              <div class="product-card" key={idx}>
                <div>
                  <img
                    class="product-img"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                </div>
                <div class="product-content">
                  <span class="product-name">{product.name}</span>
                  <span class="product-price">{product.price}원</span>
                  <div class="product-seller">
                    <img
                      class="product-avatar"
                      src="images/icons/avatar.png"
                      alt=""
                    />
                    <span>내추럴코어</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer">
        <a href="#">회사소개</a>
        <a href="#">이용약관</a>
        <a href="#">통신판매업:123-1234</a>
        <a href="#">사업자등록번호:456-4567</a>
        <a href="#">개인정보...</a>
      </div>
    </>
  );
};
export default MainPage;
