import React, {useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);//Dont select any file by default
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg', 'image/gif'];//Allowed file types, we only want to allow images and maybe videos

    const changeHandler = (e) => {
        let selected = e.target.files[0];//Select a file to upload
        
        if (selected && types.includes(selected.type)) {//Check if file selected and it's allowed file type, and update the state
            setFile(selected);
            setError('');//Reset the error if user selected correct file type
        } else {//Reset state back to normal if file type was not allowed
            setFile(null);
            setError('Please select an image file(png, jpeg, gif)');
        }
    }

    return (//Select a file to upload. Only show progress bar if file has a value
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;