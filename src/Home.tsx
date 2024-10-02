
export function Home() {
  return (
    <div className="w-full mt-[85px] min-h-screen flex flex-col justify-start items-center px-6 mb-20 font-raleway">
      {/* searchbar */}
      <div className="w-full flex flex-row justify-between items-center h-16 ">
        <input
          name="search"
          type="text"
          placeholder="search for menus"
          className="w-[85%] h-[70%] bg-white rounded-xl px-4 focus:border-0 shadow-md placeholder-darkGreen focus:outline-none text-darkGreen font-bold  text-[14px]"
        />
        <img src="./profile.png" className="w-12 h-12 " alt="" />
      </div>

      {/* welcome greetings */}
      <div className="mt-4 w-full h-28 flex flex-col justify-between items-start font-kanit">
        <div className="text-[24px] font-extrabold text-darkGreen ">WELCOME!</div>
        <div className="text-[24px] font-extrabold text-darkGreen ">SEARCH YOUR NEXT</div>
        <div className="text-[24px] font-extrabold text-darkGreen ">MEAL <b className="text-mainGreen italic">WITH US!</b></div>
      </div>

      {/* cards */}
      <div className="mt-6 w-full h-auto  flex flex-wrap flex-row justify-between items-start gap-y-4">
        <div className="w-[48%] h-60 bg-darkGreen rounded-xl shadow-md">card1</div>
        <div className="w-[48%] h-60 bg-darkGreen rounded-xl shadow-md">card1</div>
        <div className="w-[48%] h-60 bg-darkGreen rounded-xl shadow-md">card1</div>
        <div className="w-[48%] h-60 bg-darkGreen rounded-xl shadow-md">card1</div>
      </div>
    </div>
  );
}