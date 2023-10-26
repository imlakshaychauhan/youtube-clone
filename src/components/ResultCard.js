import React from 'react'

const ResultCard = () => {
  return (
    <div className="h-fit p-2 ml-10 mt-5 rounded-lg flex">
      <div>
        <img
          className="rounded-xl w-[28rem] h-[15rem]"
          src="https://i.ytimg.com/vi/6GxXehkPyBs/mqdefault.jpg"
          alt=""
        />
      </div>
      <div className="ml-5 w-[80rem]">
        <p className="font-semibold text-[20px]">
          Leke Prabhu Ka Naam Song | Tiger 3, Salman Khan, Katrina Kaif, Pritam,
          Arijit Singh, Nikhita,Amitabh
        </p>
        <div className="mt-3 flex items-center">
          <img
            className="w-7 h-7"
            alt="Logo"
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          />
          <p className=" ml-2 font-semibold">YRF</p>
        </div>
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis
          pharetra dictum.
        </p>
      </div>
    </div>
  )
}

export default ResultCard