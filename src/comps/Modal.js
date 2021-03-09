import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
    
    const handleClick = (e) => {//Once you click outside of the image on the backdrop, set state back to null so image will close from fullscreen
        //Check if we are clicking on image instead of the background of the image, and therefore do not close the image
        if(e.target.classList.contains('backdrop')){//Image does not contain class of backdrop, but background does
            setSelectedImg(null);
        }
    }

    return(//Close image fullscreen view
        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
        >
            <motion.img src={selectedImg} alt="Open piсture in fullscreen" 
                initial={{ y: "-100vh" }}//Take it off the screen by view port height 100
                animate={{ y: 0 }}//Bring it down when image pops up
            />
        </motion.div>
    )
}

export default Modal;