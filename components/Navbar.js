import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[7.5vh] flex justify-between items-center py-0 px-6" >
        <Image src="/images/airbnb-logo.jpg" width={"50px"} height={"50px"} alt="airbnb logo" />
        <div className="flex gap-4 leading-relaxed  ">
            <span className="px-[6px] py-1 text-[14px]"> Help </span>
            <span className="px-[6px] py-1 text-[14px]"> Sign up </span>
            <span className="px-[6xpx] py-1 text-[14px] "> Log in </span>
        </div>  
    </div>
  )
}

export default Navbar