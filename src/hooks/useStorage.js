import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
    const[progress, setProgress] = useState(0);//Progress of the upload
    const[error, setError] = useState(null);//Errors from the upload
    const[url, setUrl] = useState(null);//Image url that we get back from storage after image is fully uploaded

    useEffect(() => {
        //Every time we have a new file, run this function to upload that file
        // References
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');//Access the collection of uploaded images

        storageRef.put(file).on('state_changed', (snap) => {//Upload the file to the reference
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; //Formula for percentage
            setProgress(percentage);
        }, (err) => {//Fire if there is an error with the upload
            setError(err);
        }, async () => {
            //Find a file we just uploaded, get download url and store it in the url variable
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt })//createdAt is time stamp that specifices when file was created, so we can order it by date
            setUrl(url);
        })
    }, [file]);

    return { progress, url, error}
} 

export default useStorage;