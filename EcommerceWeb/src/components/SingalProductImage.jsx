import { useState } from "react"
const SingalProductImage = ({ image = [] }) => {
    const [mainImage, setMainImage] = useState(image[0]?.url);

    return (
        <div className="flex items-center justify-between p-4">
            <div className="lg:w-[25%] w-full">
                {image.map((item, index) => (
                    <figure key={index} className="gallery-image lg:w-[100%] w-[20%] p-1">
                        <img src={item.url} alt={item.filename} onClick={() => setMainImage(item.url)} />
                    </figure>
                ))}
            </div>
            <div className="lg:w-[75%] w-full">
                <img src={mainImage} alt={mainImage} className="lg:w-[100%] w-[80%]" />
            </div>
        </div>
    )
}

export default SingalProductImage