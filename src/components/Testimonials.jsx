import { useState } from "react"

const data = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum excepturi voluptates nostrum impedit maxime minus quia ea dolorum et aspernatur!",
    img: "../asstes/logo.png",
    name: "Courtney Henry",
    job: "Costomer"
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum excepturi voluptates nostrum impedit maxime minus quia ea dolorum et aspernatur!",
    img: "../asstes/logo.png",
    name: "Ronald Richards",
    job: "Costomer"
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum excepturi voluptates nostrum impedit maxime minus quia ea dolorum et aspernatur!",
    img: "../asstes/logo.png",
    name: "Jenny Wilson",
    job: "Costomer"
  },
]

const data2 = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum excepturi voluptates nostrum impedit maxime minus quia ea dolorum et aspernatur!",
    img: "../asstes/logo.png",
    name: "DATA 2",
    job: "Costomer"
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum excepturi voluptates nostrum impedit maxime minus quia ea dolorum et aspernatur!",
    img: "../asstes/logo.png",
    name: "DATA 2",
    job: "Costomer"
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum excepturi voluptates nostrum impedit maxime minus quia ea dolorum et aspernatur!",
    img: "../asstes/logo.png",
    name: "DATA 2",
    job: "Costomer"
  },
]

const data3 = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum excepturi voluptates nostrum impedit maxime minus quia ea dolorum et aspernatur!",
    img: "../asstes/logo.png",
    name: "DATA 3",
    job: "Costomer"
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum excepturi voluptates nostrum impedit maxime minus quia ea dolorum et aspernatur!",
    img: "../asstes/logo.png",
    name: "DATA 3",
    job: "Costomer"
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum excepturi voluptates nostrum impedit maxime minus quia ea dolorum et aspernatur!",
    img: "../asstes/logo.png",
    name: "DATA 3",
    job: "Costomer"
  },
]

const data4 = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum excepturi voluptates nostrum impedit maxime minus quia ea dolorum et aspernatur!",
    img: "../asstes/logo.png",
    name: "DATA 4",
    job: "Costomer"
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum excepturi voluptates nostrum impedit maxime minus quia ea dolorum et aspernatur!",
    img: "../asstes/logo.png",
    name: "DATA 4",
    job: "Costomer"
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum excepturi voluptates nostrum impedit maxime minus quia ea dolorum et aspernatur!",
    img: "../asstes/logo.png",
    name: "DATA 4",
    job: "Costomer"
  },
]

const Testimonials = () => {
  const [text, setText] = useState(data)

  return (
    <div className="bg-white py-20">
        <div className="lg:container px-5 gap-10 flex flex-col">
          <div className="flex flex-col gap-5 items-center justify-center">
            <h1 className="text-5xl font-medium">Testimonials</h1>
            <p className="font-medium">Hear what our customers say</p>
          </div>

          <div className="flex gap-5 flex-wrap justify-center">
           {text.map(item => (
            <div className="md:w-[28%] hover:scale-105 hover:shadow-2xl transition-all duration-300 w-full gap-6 shadow-lg p-6 rounded-xl flex flex-col justify-center" key={item.id}>
                 <p className="font-semibold">{item.text}</p>
                 <div className="flex gap-3 items-center ">
                   <img src={item.img} className="w-14 h-14" alt="" /> 
                   <div className="flex flex-col">
                      <h1 className="font-medium">{item.name}</h1>
                      <p className="text-gray-500">{item.job}</p>
                   </div>
                 </div>   
            </div>
           ))}
          </div>

          <div className="flex gap-2 items-center justify-center">
             <span onClick={() => setText(data)} className={`w-10 h-2 cursor-pointer ${text === data ? "bg-black":"bg-gray-300"} rounded-xl`}></span>
             <span onClick={() => setText(data2)} className={`w-10 h-2 cursor-pointer ${text === data2 ? "bg-black":"bg-gray-300"} rounded-xl`}></span>
             <span onClick={() => setText(data3)} className={`w-10 h-2 cursor-pointer ${text === data3 ? "bg-black":"bg-gray-300"} rounded-xl`}></span>
             <span onClick={() => setText(data4)} className={`w-10 h-2 cursor-pointer ${text === data4 ? "bg-black":"bg-gray-300"} rounded-xl`}></span>
          </div>
        </div>
    </div>
  )
}


export default Testimonials