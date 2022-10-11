import Image from "next/image"

const DatePickerForm = () => {

  return (
    <div>
      <form className=" max-w-sm relative">
          <h1 className=" font-bold text-[22px] mt-2 tracking-widest "> Find places to stay on Airbnb </h1>
          <p className=" leading-5 mt-1 text-[#717171] tracking-wider "> Discover entire homes and private rooms perfect for any trip. </p>

          <div className=" outline outline-1 outline-gray-400 py-2 px-4 mt-4 rounded-lg">
            <label className="block text-[10px] font-[800] leading-3 text-[#222222] tracking-wide uppercase "> location </label>
            <input className=" text-[#717171] outline-none" placeholder="Anywhere"/>
          </div>

          <div className=" outline outline-1 outline-gray-400 py-2 px-4 mt-4 rounded-lg w-full grid grid-cols-2 divide-x-2 ">
            <div className=" self-center">
              <label className="block text-[10px] font-[800] leading-3 text-[#222222] tracking-wide uppercase "> check in </label>
              <input className=" text-[#717171] outline-none" placeholder="Add Date" />
            </div>
            <div className=" px-3">
              <label className="block text-[10px] font-[800] leading-3 text-[#222222] tracking-wide uppercase "> check out </label>
              <input className=" text-[#717171] outline-none" placeholder="Add Date"/>
            </div>
          </div>
          
          <div className=" outline outline-1 outline-gray-400 py-2 px-4 mt-4 rounded-lg w-full grid grid-cols-2 divide-x-2 ">
            <div className="">
              <label htmlFor="adults" className="block text-[10px] leading-3 text-[#222222] tracking-wide uppercase"> adults </label>
              <select className="w-40 border-none" defaultValue="5"  id="adults">
                <option className=" border-none" value={"1"} > 1 </option>
                <option className="" value={"2"} > 2 </option>
                <option className="" value={"3"} > 3 </option>
                <option className="" value={"4"} > 4 </option>
                <option className="" value={"5"} > 5 </option>
                <option className="" value={"6"} > 6 </option>
                <option className="" value={"7"} > 7 </option>
                <option className="" value={"8"} > 8 </option>
                <option className="" value={"9"} > 9 </option>
                <option className="" value={"10"} > 10 </option>
                <option className="" value={"11"} > 11 </option>
                <option className="" value={"12"} > 12 </option>
                <option className="" value={"13"} > 13 </option>
                <option className="" value={"14"} > 14 </option>
                <option className="" value={"15"} > 15 </option>
              </select>
            </div> 
            <div className=" pl-4">
              <label htmlFor="children" className="block text-[10px] font-semibold leading-3 text-[#222222] tracking-wide uppercase"> children </label>
              <select className="w-40" id="children" defaultValue={"0"} >
                <option className="" value={"1"} > 0 </option>
                <option className="" value={"2"} > 1 </option>
                <option className="" value={"3"} > 2 </option>
                <option className="" value={"4"} > 3 </option>
                <option className="" value={"5"} > 4 </option>
                <option className="" value={"6"} > 5 </option>
                <option className="" value={"7"} > 6 </option>
              </select>
            </div> 
          </div>

          <div className="my-2 ml-2">
          <span className=" text-[10px] font-semibold leading-3 text-[#222222] tracking-wide uppercase"> amenities </span>
          </div>
          <div className="flex gap-2  ">
            <button className=" tracking-wide text-[14px] text-[#222222] outline outline-1 px-4 py-2 rounded-[25px] "> Hot tub </button>
            <button className="text-[14px] text-[#222222] outline outline-1 px-4 py-2 rounded-[25px] "> Pool </button>
            <button className="text-[14px] text-[#222222] outline outline-1 px-4 py-2 rounded-[25px] "> Wifi </button>
          </div>

          <button type="submit" className=" font-bold bg-gradient-to-tr from-[rgb(243,43,86)] to-[#ff0634dc] text-white rounded-lg my-8 w-full py-3 grad flex justify-center items-center gap-1 hover:bg-gradient-to-tr hover:from-[rgb(245,85,119)] hover:to-[rgb(248,57,98)] ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg> Search
          </button>
      </form>
      <div className=" bg-gray-900 text-white pt-6 mx-auto grid grid-cols-1 rounded-xl">
        <h1 className="text-3xl font-semibold tracking-wider m-auto"> Try hosting </h1>
        <p className=" m-auto text-white"> Earn up tp $2,134/month by sharing  </p>
        <p className=" m-auto text-white">your space in Utica. <span className="bg-white px-[5px] text-xs text-black rounded-[100%] "> ? </span></p>
        <button className="bg-white mx-auto mt-4 mb-12 text-gray-600 font-semibold px-4 py-1 rounded-xl " > Learn more </button>
        <Image className=" object-cover" src={"/images/try_hosting1.png"} alt="try hosting image" width={"400px"} height={"280px"} />
      </div>
    </div>
  )
}

export default DatePickerForm