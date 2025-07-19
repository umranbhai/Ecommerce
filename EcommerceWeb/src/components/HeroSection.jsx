import { Link } from 'react-router';
import { useParentComponent } from '../ParentComponent';


function HeroSection({ myData = [] }) {
    const { name } = myData; // Replace with your brand name or dynamic data
    // const { flex } = useParentComponent();

    return (

        <div className={`home-content lg:flex items-center flex-wrap justify-between p-4`}>
            <div className="hero-section text-start ">
                <h2 className="hero-title text-3xl font-bold">Shop {name} Latest Trends</h2>
                <p className="hero-description">Discover our new collection of stylish and affordable clothing.</p>
                <Link to="/products"><button className="hero-button">Shop Now</button></Link>
            </div>
            <div className="image-gallery lg:w-[50%] w-full">
                {/* Image thumbnails would go here */}
                <img src="../public/hero-section.jpg" alt="Product 1" className="gallery-image" />
            </div>
        </div>
    );
}

export default HeroSection;
