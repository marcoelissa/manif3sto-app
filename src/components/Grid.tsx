import React from 'react'

const Grid = () => {
  return (
    <div className="grid w-full h-[calc(100%-2px-13vh)] grid-cols-[45%_27.5%_27.5%] grid-rows-[45%_10%_45%]">
      <div className="col-start-1 col-end-2 row-start-1 row-end-4 bg-slate-800" />
      <div className="col-start-2 col-end-3 row-start-1 row-end-3 bg-slate-700" />
      <div className="col-start-2 col-end-3 row-start-3 row-end-4 bg-slate-600" />
      <div className="col-start-3 col-end-4 row-start-1 row-end-2 bg-slate-500" />
      <div className="col-start-3 col-end-4 row-start-2 row-end-4 bg-slate-400" />
    </div>
  )
}

export default Grid
