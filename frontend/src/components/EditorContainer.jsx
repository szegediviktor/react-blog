// hálózati kéréseket manageli és az adott blogbejegyzésért felel

import { useState } from "react";
import Editor from "./Editor";

// crate function backendre POST-olok adatot
const postBlogpost = async (payload) => {
    const url = "http://localhost:3000/posts";
    const body = JSON.stringify(payload);
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body,
    });

    const data = await response.json();
    return data;
};

//  Update function ---> backenden lévő adatot módosítom
const putBlogpost = async (id, payload) => {
    const url = "http://localhost:3000/posts/" + id;
    const body = JSON.stringify(payload);
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body,
    });

    const data = await response.json();
    return data;
};

const EditorContainer = (props) => {
    const [loading, setLoading] = useState(false);

    const handleSave = async (payload) => {
        setLoading(true);

        if (props.blogpost) {
            await putBlogpost(props.blogpost.id, payload);
        } else {
            await postBlogpost(payload);
        }

        setLoading(false);
    };

    return (
        <Editor
            blogpost={props.blogpost}
            onSave={handleSave}
            loading={loading}
        />
    );
};

export default EditorContainer;
