import React from 'react'
import '../../../../public/Assets/Admin/style.css'

function CardContent ({judul,konten}) {
  return (
    <div className="relative p-4 bg-white border border-white-200 rounded-lg shadow-xl dark:bg-white-800 dark:border-white-700">
	<div className="absolute top-0 left-0 w-full bg-blue-700 rounded-tl-lg rounded-tr-lg text-white py-3 font-semibold z-10">
        <center>{judul}</center>
    </div>
    <br/>
    <br/>
        {konten}
    </div>
  )
}

export default CardContent
