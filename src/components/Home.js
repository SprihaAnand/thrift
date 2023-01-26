import "./Home.css";
import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img alt="" src={require("./home-img.jpg")} className="home-image" />
        <div className="home-row">
          <Product
            title="It Starts With Us"
            price={29.99}
            rating={5}
            image="https://kbimages1-a.akamaihd.net/3bd62b0a-0350-4f99-9369-255951d262ba/166/300/False/it-starts-with-us-1.jpg"
          />

          <Product
            title="The Shining"
            price={23.99}
            image="https://m.media-amazon.com/images/I/81QckmGleYL.jpg"
            rating={5}
          />
          <Product
            title="Carrie"
            price={23.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNrNXeXvZ1aUzJDUxirsZ8eD1RjVgRLuke-iJvd-7N3pz6X6ztzKUF-9LkTAQX54msXs&usqp=CAU"
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            title="Pride And Prejudice"
            price={23.99}
            image="https://m.media-amazon.com/images/I/51zj+e-O+pL._AC_SY780_.jpg"
            rating={5}
          />
          <Product
            title="The Shining"
            price={23.99}
            image="https://m.media-amazon.com/images/I/81QckmGleYL.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
