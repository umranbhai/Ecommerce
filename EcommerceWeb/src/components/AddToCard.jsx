import React from 'react'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router'
const AddToCard = ({ product }) => {
    const { id, colors, stock } = product
    const [color, setColor] = useState(colors[0])
    const [count, setCount] = useState(1)
    return (
        <div>
            <p className='text-lg font-bold flex items-center my-2'>Colors:
                {colors.map((curColor, index) => {
                    return (
                        <button key={index} style={{ backgroundColor: curColor }} className={color === curColor ? 'w-6 h-6 rounded-full mx-1 cursor-pointer border border-black flex items-center justify-center' : 'w-6 h-6 rounded-full mx-1 opacity-80 border border-black cursor-pointer'}
                            onClick={() => setColor(curColor)}
                        >
                            {color === curColor && <FaCheck className='text-white text-xs' />}
                        </button>

                    )
                })}
            </p>

            <div className="stock-count-container p-4">
                <div className="stock-count flex items-center gap-2">
                    <button className="px-2 border border-gray-200 bg-gray-200 " onClick={() => count > 1 ? setCount(count - 1) : setCount(1)}>-</button>
                    <button className="w-10 text-center">{count}</button>
                    <button className="px-2 border border-gray-200 bg-gray-200" onClick={() => count < stock ? setCount(count + 1) : setCount(stock)}>+</button>
                </div>

            </div>
            <div className="product-button flex flex-wrap gap-2  border-b-2 border-gray-200 p-4">
                <Link to="/cart"><button className="bg-green-500 text-white p-3 rounded">Add to Cart</button></Link>
            </div>
        </div >
    )
}

export default AddToCard