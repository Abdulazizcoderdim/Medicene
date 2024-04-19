const Home = () => {
  return (
    <div className="border">
      <div className="lg:container px-5">
        <div className="md:py-44 py-28">
          <h1 className="md:text-5xl text-4xl font-medium">Echo - Friendly Smile</h1>
          <p className="md:text-lg text-base font-normal md:mt-5 mt-3">
            Transform Your Dental Routine with Eco-Friendly Toothbrushes
          </p>
          <button className="md:mt-14 mt-7 text-white group bg-gray-900 rounded-md font-medium md:px-14 px-7 md:py-3 py-2 hover:bg-gray-950">
            SHOP NOW <span className="group-hover:">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
