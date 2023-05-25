import { useState, useEffect } from "react";
import axios from "axios";

function Home() {

    const [message, setMessage] = useState("");

    useEffect(() => {
        const config = {
            method: "get",
            url: "http://localhost:3000/free-endpoint"
        };

        axios(config)
            .then(result => {
                setMessage(result.data.message);
            })
            .catch(e => {
                e = new Error();
            });
    }, []);
    
    return (
        <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: "100vh" }}>
            <p className="text-primary fs-5 fw-bold">This is home page!</p>
            <p className="text-danger fs-5 fw-bold">{message}</p>
        </div>
    );
}

export default Home;