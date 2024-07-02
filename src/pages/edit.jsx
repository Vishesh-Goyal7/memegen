import React, { createRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Text from "../components/text"
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {

    const [params] = useSearchParams()
    const img_url = params.get('url')
    const [count, setCount] = useState(0)
    const memeRef = createRef()

    const addText = () => {
        setCount(count + 1)
    }

    return(
        <div>
            <div style={{width:"400px", border:"3px solid", margin:"25px"}} ref={memeRef}>
                <img src={img_url} alt="funnyMeme" width='200px' />
                {
                    Array(count).fill(0).map(e => (<Text/>))
                }
            </div>
            <Button onClick={addText}>Add Text</Button>
            <Button onClick={() => {exportComponentAsJPEG(memeRef)}} variant="success">Save</Button>
        </div>
    )
}

export default EditPage