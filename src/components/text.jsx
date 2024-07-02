import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {

    const [edit, setEdit] = useState(false)
    const [val, setVal] = useState("Double Click me")
    return(
        <div>
            <Draggable>
                {
                    edit ? (
                        <input onDoubleClick={() => setEdit(false)} value={val} onChange={(e) => setVal(e.target.value)} />
                    ) : <p onDoubleClick={() => setEdit(true)}>{val}</p>
                }
            </Draggable>
        </div>
    )
}

export default Text