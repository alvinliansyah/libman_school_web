import React from 'react'
import '../../../../public/Assets/Admin/style.css'

function CardInfoData ({jumlah,judul,progress,waktu}) {
  return (
    <div className="card max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow-sm dark:bg-white-800 dark:border-white-700">
        <div className="jumlah">{jumlah}</div>
        <div className="judul">{judul}</div>
        {/* Progress Bar */}
        <div className="relative pt-1">
          <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-blue-200">
            <div
              style={{width: progress + '%'}}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500 ease-in-out"
            >
              {progress + '%'}
            </div>
          </div>
        </div>
        {/* End of Progress Bar */}
        <div className="waktu">{waktu}</div>
    </div>
  )
}

export default CardInfoData
