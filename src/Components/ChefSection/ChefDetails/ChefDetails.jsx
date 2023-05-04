
import React, { useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { FaHeart, FaThumbsUp } from 'react-icons/fa';
import { Rating } from 'flowbite-react';
import { key } from 'localforage';
import { ToastContainer, toast } from 'react-toastify';



const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const [marked , setMarked] = useState()
    const { name, likes, num_recipes, picture, years_experience, bio, recipe } = chefDetails;
    // console.log(recipe)
    const handleFavorite =()=>{
        toast('This food is your favorite');
    
       
    }

    return (
        <div>
            <ToastContainer></ToastContainer>
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

            <div className='my-24'>
                <h2 className='text-3xl text-center font-bold my-10'>Special Recipes</h2>
                {
                    recipe.map(n =>
                       

                        <div className="flex gap-10 px-96 my-16 ">

                            <img className='w-1/2 rounded-2xl ' src={n.image_url} alt="" />

                            <div className=''>
                                <h3 className="text-2xl font-bold text-gray-500 dark:text-white">Name: <span className='text-gray-800'>{n.name}</span></h3>
                                <p className="text-lg font-semibold text-gray-500 dark:text-white mt-2"> Ingredients: {n.ingredients.map((n, key) => <li key={key} className='ml-2 mt-1 text-gray-800 '>{n}</li>)}</p>
                                <p className="text-xl font-bold text-gray-500 mt-2 dark:text-white"> Instructions: <span className='text-lg  font-semibold text-gray-700'>{n.cooking_method}</span></p>
                                {

                                    <Rating className='mt-2'>
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star filled={false} />
                                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        4.95 out of 5
                                    </p>
                                </Rating>
                                }
                                

                               <button className=""   onClick={handleFavorite} > <FaHeart className='text-2xl mt-2 '></FaHeart></button>

                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );

};

export default ChefDetails;