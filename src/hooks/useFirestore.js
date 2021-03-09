import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    //Communicate with database and get docs

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')//Order the pictures by the data they been created, and show the newest ones at the top
            .onSnapshot((snap) => {//Fires a callback function every time a change happens
                //Snap object takes a snap of all the files in the database at current time and then display it on the page
                //Everytime an image gets added, snap is notified and updates the page
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});//Get createdAt and url from the database
                });
                setDocs(documents);//Update the documents
            });
        return () => unsub();//Clean up function

    }, [collection])

    return { docs };
}

export default useFirestore;