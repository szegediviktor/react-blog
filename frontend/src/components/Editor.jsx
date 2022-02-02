import { useState } from "react";

// payload amit el akarunk küldeni. paramnál használjuk
// arrownál az asny kulcsszó a zárójelek elé kerül
// Flat arrow function:  const xy = () => {}

// ?. ---> optional chaining operátor--> Ha nem létezik a mögötte lévő kifejezés akkor null lesz
// ?? ---> nullish coalsing - ha null vagy undefined akkor null lesz a kifejezés értéke.

const Editor = (props) => {
    const [title, setTitle] = useState(props?.blogpost?.title ?? "");
    const [body, setBody] = useState(props?.blogpost?.body ?? "");
    const [author, setAuthor] = useState(props?.blogpost?.author ?? "");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };
    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // validáció, ha bármelyik mező üres, azonnal kiugrik.
        if (title === "" || body === "" || author === "") {
            return;
        }

        const payload = { title: title, author: author, body: body };

        //  kiürítem a mezőket:
        setTitle("");
        setBody("");
        setAuthor("");

        props.onSave(payload);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="title of blogpost"
                value={title}
                onChange={handleTitleChange}
            />
            <input
                type="text"
                placeholder="author of blogpost"
                value={author}
                onChange={handleAuthorChange}
            />
            <textarea
                placeholder="body of blogpost"
                onChange={handleBodyChange}
                value={body}
            />
            <button type="submit" disabled={props.loading}>
                {props.loading ? "Loading..." : "Save"}
            </button>
        </form>
    );
};

// loading === true ? true : false ----> loading ? true : false ----> loading

export default Editor;
