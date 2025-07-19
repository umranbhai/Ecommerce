import React from 'react'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
const AddToCard = ({ product }) => {
    const { id, colors } = product
    const [color, setColor] = useState(colors[0])
    return (
        <div>
            <p className='text-lg font-bold flex items-center my-2'>Colors:
                {colors.map((curColor, index) => {
                    return (
                        <button key={index} style={{ backgroundColor: curColor }} className={color === curColor ? 'w-6 h-6 rounded-full mx-1 cursor-pointer flex items-center justify-center' : 'w-6 h-6 rounded-full mx-1 opacity-25 cursor-pointer'}
                            onClick={() => setColor(curColor)}
                        >
                            {color === curColor && <FaCheck className='text-white text-xs' />}
                        </button>

                    )
                })}
            </p>
        </div >
    )
}

export default AddToCard