function Services() {
    return (
        <div className="services-container flex flex-wrap justify-between  mx-auto text-center bg-white p-4">
            <div className="services-header bg-gray-200 lg:w-[32%] w-full p-4 rounded-lg shadow-md">
                <h2>Service 1</h2>
                <p>Description of Service 1</p>
            </div>
            <div className="services-header bg-gray-200 lg:w-[32%] w-full lg:p-4 rounded-lg shadow-md">
                <div className="services-header mb-3 bg-gray-200 w-[100%] p-4 rounded-lg lg:shadow-md">
                    <h2>Service 1</h2>
                    <p>Description of Service 1</p>
                </div>
                <div className="services-header bg-gray-200 w-[100%] p-4 rounded-lg lg:shadow-md">
                    <h2>Service 2</h2>
                    <p>Description of Service 2</p>
                </div>
            </div>
            <div className="services-header bg-gray-200 lg:w-[32%] w-full p-4 rounded-lg shadow-md">
                <h2>Service 3</h2>
                <p>Description of Service 3</p>
            </div>
        </div>
    );
}

export default Services;
