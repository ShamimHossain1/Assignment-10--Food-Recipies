import React from 'react';
import LeftBar from '../LeftBar/LeftBar';
import RightBar from '../Rightbar/RightBar';
import Chefs from '../ChefSection/Chefs';
import { Carousel } from 'flowbite-react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const Chef = useLoaderData();
    return (
        <div>
            <div className="h-96">
                <Carousel>
                    
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                        alt="..."
                    />
                </Carousel>
            </div>


            <div className="gap-5 my-14 lg:px-40 py-5">
               
                
                    <h2 className='text-center text-4xl font-bold py-3 my-5 bg-blue-500 text-slate-100 rounded-xl'>Our Talented Chefs</h2>
                    
                    
                    <Chefs Chef={Chef}></Chefs>

              
                
            </div>

        </div>
    );
};

export default Home;