import { Button } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';

const Home = () => {
        
    const notify = () => toast("Wow so easy!");


    return (
        <div className=' w-full bg-[#ededed] p-2 h-full max-h-screen overflow-hidden'>
            hello world
            <Button onClick={notify} colorScheme='blue'>Button</Button>
        </div>
    )
}

export default Home