import React from 'react';

import Chefs from '../ChefSection/Chefs';
import { Button, Card, Carousel, Rating } from 'flowbite-react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const Chef = useLoaderData();
    return (
        <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>

                    <div className='h-full  ' style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/03/01/76/65/360_F_301766534_Nd0WoLqus2TVilLcRQL6OMACiJeEgnWu.jpg')" }}>

                    </div>
                    <div className='h-full' style={{ backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/977/846/535/food-rice-chinese-food-soup-wallpaper-preview.jpg')" }}></div>

                    <div className='h-full' style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/03/24/16/57/360_F_324165757_buAX78dg7TGgjh0pB8aUCwOWRkNejmwA.jpg')" }}>

                    </div>

                </Carousel>
            </div>


            <div className="gap-5 lg:my-14 lg:px-40 px-3 lg:py-5">


                <h2 className='text-center lg:text-4xl  font-bold py-3 my-5 bg-blue-500 text-slate-100 rounded-xl'>Our Talented Chefs</h2>


                <Chefs Chef={Chef}></Chefs>



            </div>

            <div className="gap-5 lg:my-14 lg:px-40 px-3  lg:py-5">
                <h2 className='text-center lg:text-4xl  font-bold py-3 mb-10 bg-blue-500 text-slate-100 rounded-xl'>Our Top Foods</h2>
                <div className='grid lg:grid-cols-3 lg:px-28'>
                    <div className="max-w-sm">
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc="https://www.chewoutloud.com/wp-content/uploads/2022/08/Kung-Pao-Chicken-Horizontal.jpg"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Kung Pao Chicken
                            </h5>

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
                        </Card>
                    </div>
                    <div className="max-w-sm">
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc="https://www.thespruceeats.com/thmb/ewEJ5HEplunVieNXRpxG3gcUxJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetarian-chinese-hot-and-sour-soup-3377997-hero-01-c111b94a32a644bb9056dd0a4dfadce8.jpg"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Hot and Sour Soup
                            </h5>

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
                        </Card>
                    </div>
                    <div className="max-w-sm">
                        <Card
                            className='pb-10'
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc="https://i.ytimg.com/vi/wj24Tb8Lmtc/maxresdefault.jpg"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Mapo Tofu
                            </h5>

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
                        </Card>
                    </div>
                </div>


            </div>

            <div className="gap-5 lg:my-14 lg:px-40 px-3  lg:py-5">
                <h2 className='text-center lg:text-4xl   font-bold py-3 mb-10 mt-5 bg-blue-500 text-slate-100 rounded-xl'>Customer Reviews</h2>

                <div className='grid lg:grid-cols-4 gap-5'>
                    <div className="max-w-sm">
                        <Card>

                            <div className="flex flex-col items-center pb-10">
                                <img
                                    className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                    src="https://www.mouqy.com/wp-content/uploads/2023/02/henry-cavill-in-black-rectangular-glasses.jpg"
                                    alt="Bonnie image"
                                />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                    Clark Kent
                                </h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    I recently tried the new ramen place that opened up in town, and I have to say, it was delicious! The broth was rich and flavorful, and the noodles were perfectly cooked. I ordered the spicy miso ramen and it had just the right amount of heat. The toppings were also really fresh and added a great texture to the dish. The only downside was that the restaurant was a bit small and crowded, but it was worth it for the food. Overall, I would definitely recommend giving this place a try if you're a ramen fan!
                                </span>

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


                            </div>
                        </Card>
                    </div>
                    <div className="max-w-sm">
                        <Card>

                            <div className="flex flex-col items-center pb-10">
                                <img
                                    className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                    src="https://www.looper.com/img/gallery/the-tony-stark-fan-theory-giving-mcu-fans-hope-for-his-return/intro-1615223035.jpg"
                                    alt="Bonnie image"
                                />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                    Tony Stark
                                </h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    I recently tried the new ramen place that opened up in town, and I have to say, it was delicious! The broth was rich and flavorful, and the noodles were perfectly cooked. I ordered the spicy miso ramen and it had just the right amount of heat. The toppings were also really fresh and added a great texture to the dish. The only downside was that the restaurant was a bit small and crowded, but it was worth it for the food. Overall, I would definitely recommend giving this place a try if you're a ramen fan!
                                </span>

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


                            </div>
                        </Card>
                    </div>
                    <div className="max-w-sm">
                        <Card>

                            <div className="flex flex-col items-center pb-10">
                                <img
                                    className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                    src="https://hips.hearstapps.com/hmg-prod/images/thor-1658259662.jpeg"
                                    alt="Bonnie image"
                                />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                    Thor Odin Son
                                </h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    I recently tried the new ramen place that opened up in town, and I have to say, it was delicious! The broth was rich and flavorful, and the noodles were perfectly cooked. I ordered the spicy miso ramen and it had just the right amount of heat. The toppings were also really fresh and added a great texture to the dish. The only downside was that the restaurant was a bit small and crowded, but it was worth it for the food. Overall, I would definitely recommend giving this place a try if you're a ramen fan!
                                </span>

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


                            </div>
                        </Card>
                    </div>
                    <div className="max-w-sm">
                        <Card>

                            <div className="flex flex-col items-center pb-10">
                                <img
                                    className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                    src="https://media.comicbook.com/2015/12/bruce-wayne-grin-bvs-161475-161717.jpg"
                                    alt="Bonnie image"
                                />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                    Bruce Wane
                                </h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    I recently tried the new ramen place that opened up in town, and I have to say, it was delicious! The broth was rich and flavorful, and the noodles were perfectly cooked. I ordered the spicy miso ramen and it had just the right amount of heat. The toppings were also really fresh and added a great texture to the dish. The only downside was that the restaurant was a bit small and crowded, but it was worth it for the food. Overall, I would definitely recommend giving this place a try if you're a ramen fan!
                                </span>

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


                            </div>
                        </Card>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;