import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file); //Upload the file
    
    useEffect(() => {//Set file to null and remove progress bar after file has been uploaded
        if (url) {
            setFile(null);
        }
    }, [url, setFile])

    return (
        <motion.div className="progress-bar"
            initial={{ width: 0}}//By default, the width of progress bar is set to 0
            animate={{ width: progress + '%', delay: 0.3 }}//Animate to whatever the progress is
        ></motion.div>//Show the progress bar
    )

}

export default ProgressBar;