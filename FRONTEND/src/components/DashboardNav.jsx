import StatsCard from "./Statscard";

const Navbar = () => {
  
  return (
    <div className="h-screen">
      <header className="bg-white shadow px-6 py-4 flex justify-between ">
      <h1 className="text-2xl font-semibold">
        Dashboard
      </h1>

      <div className="flex items-center gap-3">
        <img
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
          className="w-10 h-10 rounded-full"
        />

        <span className="font-medium">
          Admin
        </span>
        
      </div>
    </header>
    <StatsCard/>
    </div>
    
  );
};

export default Navbar;