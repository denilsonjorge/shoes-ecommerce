import img5 from "./assets/shoes-5.png"
import img6 from "./assets/shoes-6.png"
import img1 from "./assets/shoes-1.png" 
import img2 from "./assets/shoes-2.png" 
import img3 from "./assets/shoes-3.png" 
import img4 from "./assets/shoes-4.png" 

export const Banner=()=>{

  return(
    <div className="">
    <div className="flex rounded-lg bg-cover bg-no-repeat bg-center bg-image-banner justify-between items-end bg-gray-400 md:h-[70vh]">
      <div className="p-5">
        <h1 className="text-white mb-2 font-bold text-5xl">NIKE AIR MAX</h1>
        <p className="text-zinc-300 mb-2 text-lg">Kike introducing the new air max for <br /> everyone comfort</p>
        <button className="bg-blue-500 hover:bg-blue-700 px-5 py-2 text-white uppercase font-bold rounded">shop now</button>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <img className="w-20 hover:scale-110 cursor-pointer transition-all" src={img5} alt="" />
        <img className="w-20 hover:scale-110 cursor-pointer transition-all" src={img6} alt="" />
      </div>
    </div>
    
    <div className="flex gap-4 justify-around items-center my-10">

        <div className="relative">
        <img src={img1} alt="" />
        <span className="bg-blue-500 text-white absolute top-0 left-0 px-5 rounded-ss-3xl rounded-ee-3xl">New</span>
        </div>
        <div className="relative">
        <img src={img2} alt="" />
        <span className="bg-blue-500 text-white  absolute top-0 left-0 px-5 rounded-ss-3xl rounded-ee-3xl">New</span>
        </div>
        <div className="relative">
        <img src={img3} alt="" />
        <span className="bg-blue-500 text-white absolute top-0 left-0 px-5 rounded-ss-3xl rounded-ee-3xl">New</span>
        </div>
        <div className="relative ">
        <img src={img4} alt="" />
        <span className="bg-blue-500  text-white  absolute top-0 left-0 px-5 rounded-ss-3xl rounded-ee-3xl">New</span>
        </div>
    </div>
    </div>
  )
}