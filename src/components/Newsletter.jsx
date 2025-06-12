
const Newsletter = () => {
  return (
    <div className="w-full bg-[#f6f1eb]">
      {/* Navigation Bar */}
     

      {/* Main Content */}
      <div className="grid md:grid-cols-2 p-6 md:p-12 gap-4 items-center">
        {/* Left Image */}
        <div>
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Living Room"
            className="w-full h-auto  shadow-md"
          />
        </div>

        {/* Right Subscription Box */}
        <div className="bg-[#b1794f]  h-full text-white p-8  shadow-md">
        <span className="uppercase mt-7 tracking-wider font-medium text-sm inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-white"></div>
              Faq
            </span>
          <h1 className="text-3xl mt-5  font-medium mb-6">Excited to collaborate <br /> with you!</h1>
          <div className="flex flex-col mt-5 sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="ENTER YOUR E-MAIL"
              className="flex-1 px-6 py-3 text-black  w-full sm:w-auto"
            />
            <button className="bg-black  text-white px-6 py-3 uppercase  hover:bg-gray-800">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
