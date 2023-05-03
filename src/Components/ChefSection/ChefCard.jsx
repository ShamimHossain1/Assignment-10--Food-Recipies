import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';

const ChefCard = ({ chef }) => {
    // console.log(chef)

    const {name, picture, years_experience, num_recipes, likes,id  }=chef
    return (
        <div>
            <div className="max-w-sm ">
                <Card
                    className=''
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={picture}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p className="font-semibold text-gray-700 text-lg dark:text-gray-400">
                       *{years_experience} years of experience.
                    </p>
                    <p className="font-semibold flex items-center gap-2 text-gray-700 text-lg dark:text-gray-400">
                       <FaThumbsUp className='text-blue-600'></FaThumbsUp>{likes} people like this chef. 
                    </p>
                    <p className="font-semibold flex items-center justify-between text-xl text-gray-700 dark:text-gray-400">
                       Total {num_recipes} recipes <span><Link to={`/ChefDetails/${id}`}><Button>View Recipes</Button></Link></span>
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default ChefCard;