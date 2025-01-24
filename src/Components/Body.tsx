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
            <Product
              heading={
                "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses: How Relentless Change Creates Radically Successful Businesses"
              }
              price={29.99}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
              }
              rating={"⭐⭐⭐⭐"}
              quantity={1}
            />
            <Product
              heading={
                "Kenwood Mix Stand Mixer for Baking, Stylish Kitchen Mixer with K—beater, Dough Hook and Whisk, 5 Litre Glass Bowl!"
              }
              price={239.99}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/61FJtVQh9bL._AC_SX425_.jpg"
              }
              rating={"⭐⭐⭐"}
              quantity={1}
            />
            <Product
              heading={"Samasung Smart Watch"}
              price={199.99}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
              }
              rating={"⭐⭐⭐"}
              quantity={1}
            />
            <Product
              heading={
                "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              }
              price={98.99}
              image={
                "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
              }
              rating={"⭐⭐⭐⭐⭐"}
              quantity={1}
            />
            <Product
              heading={
                "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              }
              price={598.99}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
              }
              rating={"⭐⭐⭐⭐"}
              quantity={1}
            />
            <Product
              heading={
                "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              }
              price={1094.99}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
              }
              rating={"⭐⭐⭐⭐"}
              quantity={1}
            />
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
