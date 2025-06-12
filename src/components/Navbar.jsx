import profile from "../assets/Lucid.jpg"; // Replace with your image

const Navbar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[50%] max-w-6xl rounded-full bg-[#402e2e]/90 backdrop-blur-md shadow-md px-6 py-3 flex items-center justify-between">
      
      {/* Profile Image */}
      <img
        src={profile}
        alt="profile"
        className="w-14 h-14 object-cover rounded-2xl"
      />

      {/* Navigation Links */}
      <div className="flex-1 flex justify-center gap-2 text-white font-glitch text-xm ">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">PROJECTS</a>
        <a href="#">JOURNAL</a>
      </div>

      {/* Contact Button */}
      <button className="bg-white text-black font-mono text-sm px-6 py-3 rounded-[2rem] shadow hover:bg-black hover:text-white transition">
        CONTACT <span className="ml-1">+</span>
      </button>
    </div>
  );
};

export default Navbar;
