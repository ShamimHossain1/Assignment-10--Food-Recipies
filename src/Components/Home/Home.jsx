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


            <div className="grid grid-cols-12 gap-5 my-14 px-40 py-5">
                <div className=" col-span-3 bg-slate-500 ">
                    <LeftBar></LeftBar>

                </div>
                <div className=" col-span-6">
                    <h2 className='text-center text-4xl font-bold py-3 my-2 bg-blue-500 text-slate-100 rounded-xl'>Our Talented Chefs</h2>
                    <Chefs Chef={Chef}></Chefs>

                </div>
                <div className=" col-span-3 bg-slate-500">
                    <RightBar></RightBar>

                </div>
            </div>

        </div>
    );
};

export default Home;