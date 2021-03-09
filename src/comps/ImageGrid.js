import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';//Css animations

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');
    console.log(docs);

    return(
        <div className="img-grid">
            { docs && docs.map(doc => (//Show the pictures on the screen
                <motion.div className="img-wrap" key={doc.id}//motion is a css animation class
                    layout//Animate the layout change once image is added
                    whileHover={{ opacity: 1 }}//Change opacity once hovering over image
                    onClick={() => setSelectedImg(doc.url)}//On click, open the image into fullscreen
                >
                    <motion.img src={doc.url} alt="uploaded pic"
                        initial={{ opacity: 0}}//Start at opacity 0
                        animate={{ opacity: 1}}//Animate to opacity 1
                        transition={{ delay: 1}}
                    />
                </motion.div>
            ))}
        </div>
    )

}

export default ImageGrid;