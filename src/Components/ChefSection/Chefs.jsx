import React, { useContext } from 'react';
import ChefCard from './ChefCard';
import { Spinner } from 'flowbite-react';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Chefs = ({ Chef }) => {
    // console.log(Chef)
    const { loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="text-center mt-9 ">
                <Spinner size="xl" aria-label="Center-aligned spinner example" />
            </div>)
    }


    return (
        <div className='grid lg:grid-cols-3 gap-14 lg:px-40 p-5'>

            {
                Chef.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
            }

        </div>
    );
};

export default Chefs;