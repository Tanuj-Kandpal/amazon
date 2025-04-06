import productList from "../Helper/productList";
import Product from "./Product";

function Body() {
  return (
    <>
      <div className="flex justify-center w-screen ">
        <div className="flex  flex-col items-center flex-wrap">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="Banner Image"
            className="max-h-fit max-w-fit object-cover "
          />
          <div className="flex flex-wrap justify-between gap-9 mt-7 ml-40 mr-40">
            {productList.map(function (product) {
              return (
                <>
                  <Product
                    heading={product.heading}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                    quantity={product.quantity}
                    index={product.index}
                  />
                </>
              );
            })}
          </div>

          {/* This can be used for playing video */}
          {/* <ReactPlayer
            playing={true}
            autoplay={true}
            // loop={true}
            url="https://www.youtube.com/watch?v=VrvNmEKzXA0"
            controls
            width="100vw"
            height="100vh"

            // Adjust the height as needed
          /> */}
        </div>
      </div>
    </>
  );
}

export default Body;
