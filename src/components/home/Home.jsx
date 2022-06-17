import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { homedata } from "../../data/data";
import { addprice, addtocart } from "../../refactors/cart/cartAction";
import "./Home.css";
const Home = () => {
  const { Offer, explore, product } = homedata;
  // console.log(homedata);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  return (
    <div>
      <img
        className="bannerhome"
        src="https://www.reliancedigital.in/medias/Boot-Up-Carousel-Banner-14-06-2022-01.jpg?context=bWFzdGVyfGltYWdlc3wxNTU0NDh8aW1hZ2UvanBlZ3xpbWFnZXMvaDgwL2g5Mi85ODQzMzM2NjQyNTkwLmpwZ3wzNDI0NDg3N2QyMzNjY2EzZmM1Yzc3ZWVlOGE1ZTQzYzJmYWE1MzE4NjMwOTY2MzQyZTRkYjFiYzE5MjhiMTY5"
        alt="img"
      />
      <img
        className="bannerhome"
        src="https://www.reliancedigital.in/medias/Father-s-day-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5NzQwM3xpbWFnZS9qcGVnfGltYWdlcy9oZDUvaDg2Lzk4NDQ4NjQ5NDIxMTAuanBnfDY4NDYxMzRjNGU0NWM0ZDdiZjNiMjE3MzhlMzRmN2E5OTQ5Yzc5ZWI5MDJmYzk1NDdkNjMxNGU4NTlkOTgyMTM"
        alt="img"
      />
      <div className="offerhome">
        <h2>OFFERS YOU CANNOT MISS!!</h2>
        <div className="offerpro">
          {Offer.map((e, i) => (
            <img key={i} className="offerimg" src={e.img} alt="img" />
          ))}
        </div>
        <img
          className="bannerhome"
          src="https://www.reliancedigital.in/medias/Motorola-edge30-NPI-Banner-20-05-2022.jpg?context=bWFzdGVyfGltYWdlc3w2MzU4M3xpbWFnZS9qcGVnfGltYWdlcy9oNDYvaGEwLzk4MzMwNTAxNzc1NjYuanBnfDcxNGUwYTczMTE2ZGQ0YWMxMmZmZDc4MGI1MmI4Yjc0MjMwYjU0MmZjNDRjZWZmYjI0MGFjYTZjMTRjYmU4YjU"
          alt="img"
        />
      </div>
      <div className="explorehome">
        <h2>EXPLORE OUR RANGE OF PRODUCTS</h2>
        <div className="explorepro">
          {explore.map((e, i) => (
            <div key={i}>
              <img src={e.img} alt="img" />
              <h3>{e.title}</h3>
            </div>
          ))}
        </div>
        <button className="explorebtn"><h5>View All</h5></button>
      </div>
      <div className="bestmobile-main">
        <h2>BEST SELLING MOBILES</h2>
        <div className="bestmobile">
          <img
            className="boximg"
            src="https://www.reliancedigital.in/medias/Best-Selling-Mobiles.jpg?context=bWFzdGVyfGltYWdlc3wxMDMyODF8aW1hZ2UvanBlZ3xpbWFnZXMvaDRmL2hhMS85ODQyMjU1MTY3NTE4LmpwZ3w1YzI5NmI5ZDkzYTI0NTBlZDA5YzExZmMyNWIwYjExMzQ5YmY2Y2RhMDE0YjVlNDkzMjhjYjBmOWYzNGM0MjVm"
            alt="img"
          />

          {product.bestphone.map((e) => (
            <div key={e.id} className="bestmobilebox">
              <img id="struc" className="bestmobileimg" src={e.img} alt="" />
              <p className="onhovertitle">{e.title}</p>
              <h5 className="bestphonedis">
                Offer Price:<>₹{e.price}.00</>
              </h5>
              <p className="bestphonediscount">M.R.P: ₹{e.Dprice}.00</p>
              <div className="btn">
                {" "}
                <button onClick={() => dispatch(addprice(e.price))} className="bestphonebutton">Buy Now</button>
                <button
                  onClick={() => {
                    dispatch(addtocart(e));
                    dispatch(addprice(e.price));
                  }}
                  className="bestphonebutton"
                >
                  Add to Cart
                </button>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="bestmobile-main">
        <h2>LAPTOPS WITH SSD</h2>
        <div className="bestmobile">
          {product.bestlaptop.map((e) => (
            <div key={e.id} className="bestmobilebox">
              <img id="struc" className="bestmobileimg" src={e.img} alt="" />
              <p className="onhovertitle">{e.title}</p>
              <h5 className="bestphonedis">
                Offer Price:<>₹{e.price}.00</>
              </h5>
              <p className="bestphonediscount">M.R.P: ₹{e.Dprice}.00</p>
              <div className="btn">
                {" "}
                <button onClick={() => {dispatch(addprice(e.price)); navigate("/checkout",{replace:true})}} className="bestphonebutton">Buy Now</button>
                <button
                  onClick={() => {
                    dispatch(addtocart(e));
                    dispatch(addprice(e.price));
                  }}
                  className="bestphonebutton"
                >
                  Add to Cart
                </button>
              </div>{" "}
            </div>
          ))}
          <img
            className="boximg"
            src="https://www.reliancedigital.in/medias/Laptops-with-SSD.jpg?context=bWFzdGVyfGltYWdlc3wxMDQ5ODN8aW1hZ2UvanBlZ3xpbWFnZXMvaDVjL2hhZS85ODM3MjgzMTgwNTc0LmpwZ3w1NzM1ZmZiZmU4OTlmZTE3MjVmYjdkNTY3NDhmNzI5MDA5Yzk5YjQzOWQwODdlYjJjNTRiYzAxNTJkYTFhNzE0"
            alt="img"
          />
        </div>
      </div>
      <hr />
      <div className="bestmobile-main">
        <h2>TOP DEALS IN WASHING MACHINE</h2>
        <div className="bestmobile">
          <img
            className="boximg"
            src="https://www.reliancedigital.in/medias/Top-Deals-In-Washing-Machine.jpg?context=bWFzdGVyfGltYWdlc3wxMDQ0MTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDdiL2g0NS85ODM3MjgzMjQ2MTEwLmpwZ3xiYWYzNTI4ZDRkYTZlNmUzMDhjYzA0OTQ3MmYyNWM2MWEzNGMzNGZkM2E2NDk2MTI3MjAyOTkwYjVjZTZlYzcz"
            alt="img"
          />
          {product.bestwashing.map((e) => (
            <div key={e.id} className="bestmobilebox">
              <img id="struc" className="bestmobileimg" src={e.img} alt="" />
              <p className="onhovertitle">{e.title}</p>
              <h5 className="bestphonedis">
                Offer Price:<>₹{e.price}.00</>
              </h5>
              <p className="bestphonediscount">M.R.P: ₹{e.Dprice}.00</p>
              <div className="btn">
                {" "}
                <button onClick={() => {dispatch(addprice(e.price)); navigate("/checkout",{replace:true})}} className="bestphonebutton">Buy Now</button>
                <button
                  onClick={() => {
                    dispatch(addtocart(e));
                    dispatch(addprice(e.price));
                  }}
                  className="bestphonebutton"
                >
                  Add to Cart
                </button>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="bestmobile-main">
        <h2>XIAOMI HD SMART LED TV</h2>
        <div className="bestmobile">
          {product.besttv.map((e) => (
            <div key={e.id} className="bestmobilebox">
              <img id="struc" className="bestmobileimg" src={e.img} alt="" />
              <p className="onhovertitle">{e.title}</p>
              <h5 className="bestphonedis">
                Offer Price:<>₹{e.price}.00</>
              </h5>
              <p className="bestphonediscount">M.R.P: ₹{e.Dprice}.00</p>
              <div className="btn">
                {" "}
                <button onClick={() => dispatch(addprice(e.price))} className="bestphonebutton">Buy Now</button>
                <button
                  onClick={() => {
                    dispatch(addtocart(e));
                    dispatch(addprice(e.price));
                  }}
                  className="bestphonebutton"
                >
                  Add to Cart
                </button>
              </div>{" "}
            </div>
          ))}
          <img
            className="boximg"
            src="https://www.reliancedigital.in/medias/Xiaomi-HD-Smart-LED-TV-Products-Carousel.jpg?context=bWFzdGVyfGltYWdlc3wxMjU2ODV8aW1hZ2UvanBlZ3xpbWFnZXMvaGQxL2g0Ny85ODM5ODA1MzMzNTM0LmpwZ3w4NTAxN2Q3ZDNlMTZiMGYwMTZlMjg5YWIwMmQxODkwMzkzMDE4OTIzOTFlYTA2NmZjZTQ4NGMxNWUzNTU0ZGM3"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
