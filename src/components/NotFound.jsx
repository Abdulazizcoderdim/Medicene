
const NotFound = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="flex flex-col gap-10 justify-center items-center">
            <h1 className="text-black font-bold text-8xl">Page not found, 😔</h1>
            <a className="bg-gray-800 text-white p-3 font-medium" href="/">Go Home</a>
        </div>
    </div>
  )
}

export default NotFound