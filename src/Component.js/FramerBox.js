import React from "react";
import {motion} from 'framer-motion';


const FramerBox =()=>{
    return (
        <motion.div
        initial={{ opacity:0, y: -20 }}
        animate ={{opacity: 1, y: 0}}
        transition={{duration: 3}}
        className="box"
        >
        hello,framer motion
        </motion.div>

    );
};

export default FramerBox;