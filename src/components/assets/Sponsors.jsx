import React from 'react'

function Sponsors({img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png",alt="Sponsor logo"}) {
  return (
    <>
    <img src={img_url} alt="" className='sponsors flex items-center justify-between w-20 md:w-40 md:h-fit grayscale' />
    </>
  )
}

export default Sponsors