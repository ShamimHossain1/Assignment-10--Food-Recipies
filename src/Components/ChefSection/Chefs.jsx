import React from 'react';
import ChefCard from './ChefCard';

const Chefs = ({Chef}) => {
    // console.log(Chef)
    return (
        <div className='grid grid-cols-2 gap-5 p-5'>

            {
                Chef.map(chef=><ChefCard chef={chef}></ChefCard>)
            }
            
        </div>
    );
};

export default Chefs;