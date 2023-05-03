import { Card, Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import { AuthContext } from '../../AuthProviders/AuthProviders';


const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { name, likes, num_recipes, picture, years_experience, bio } = chefDetails;
   


    return (







        <div className='grid grid-cols-2 gap-24 mt-16 px-80 '>

           
            <div>
                <img className='rounded-xl' src={picture} alt="" />
            </div>
            <div>
                <div className="grid gap-3 mt-20">

                    <h5 className="text-xl font-bold tracking-tight text-gray-500 dark:text-white">
                        Chef Name : <span className='text-2xl text-gray-700'>{name}</span>
                    </h5>
                    <h5 className="text-lg font-bold tracking-tight text-gray-500 dark:text-white">
                        Number of Recipes : <span className='text-xl text-gray-700'>{num_recipes}</span>
                    </h5>
                    <h5 className="text-lg font-bold tracking-tight text-gray-500 dark:text-white">
                        Experience : <span className='text-xl text-gray-700'>{years_experience} Years</span>
                    </h5>

                    <p className="text-lg font-bold tracking-tight text-gray-500 dark:text-white">
                        About: <span className=' text-base font-semibold text-gray-500'>{bio}</span>
                    </p>
                    <p className="text-lg font-bold tracking-tight flex items-center gap-2 text-gray-500 dark:text-white">
                        <FaThumbsUp className='text-blue-600'></FaThumbsUp>  {likes} people Like this Chef
                    </p>

                </div>
            </div>
        </div>
    );

};

export default ChefDetails;