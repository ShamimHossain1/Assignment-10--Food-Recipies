import React from 'react';

import Chefs from '../ChefSection/Chefs';
import { Button, Carousel } from 'flowbite-react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const Chef = useLoaderData();
    return (
        <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    
                <div className='h-full' style={{ backgroundImage:  "url('https://t4.ftcdn.net/jpg/03/01/76/65/360_F_301766534_Nd0WoLqus2TVilLcRQL6OMACiJeEgnWu.jpg')" }}>
                   <Link className='flex justify-center mt-56' to='/login'><Button> Get Started</Button></Link>
                </div>
                <div className='h-full' style={{  backgroundImage:  "url('https://c4.wallpaperflare.com/wallpaper/977/846/535/food-rice-chinese-food-soup-wallpaper-preview.jpg')" }}>
                   <Link className='flex justify-center mt-56'  to='/login'><Button> Get Started</Button></Link>
                </div>
                <div className='h-full' style={{ backgroundImage:  "url('https://t4.ftcdn.net/jpg/03/24/16/57/360_F_324165757_buAX78dg7TGgjh0pB8aUCwOWRkNejmwA.jpg')" }}>
                   <Link className='flex justify-center mt-56' to='/login'><Button> Get Started</Button></Link>
                </div>
                    
                   
                </Carousel>
            </div>


            <div className="gap-5 lg:my-14 lg:px-40 px-3 lg:py-5">
               
                
                    <h2 className='text-center lg:text-4xl  font-bold py-3 my-5 bg-blue-500 text-slate-100 rounded-xl'>Our Talented Chefs</h2>
                    
                    
                    <Chefs Chef={Chef}></Chefs>

              
                
            </div>

        </div>
    );
};

export default Home;