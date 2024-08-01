
export const Header=()=>{
  return(
    <header className="flex px-5 items-center justify-between h-20">
      <nav className="flex text-black items-center gap-8 font-semibold">
          <a href="#">New Drop 🔥</a>
          <a href="#">Men</a>
          <a href="#">Woman</a>
      </nav>
      <img className="h-10" src="/public/Logo.png" alt="logo" />
      <div className="flex items-center gap-10">
        <img className="cursor-pointer h-5" src="/public/Search.png" alt="search" />
        <img className="cursor-pointer h-5" src="/public/User.png" alt="" />
        <div className="bg-orange-400 cursor-pointer text-lg flex items-center justify-center font-medium w-10 h-10 rounded-full text-center"><span>0</span></div>
      </div>
    </header>
  );
}