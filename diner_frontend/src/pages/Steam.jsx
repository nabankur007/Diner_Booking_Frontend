import React from 'react';  
import { motion } from 'framer-motion';  

const Steam = () => {  
    return (  
        <motion.div  
            className="absolute w-24 h-24 bg-white rounded-full opacity-60 animate-steam"  
            initial={{ opacity: 0 }}  
            animate={{ opacity: 1 }}  
            exit={{ opacity: 0 }}  
            transition={{ duration: 1 }}  
        />  
    );  
};  

export default Steam;  