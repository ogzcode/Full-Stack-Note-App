import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../context/useAuth";
import { Card, Button } from "react-bootstrap";

import { FaTrash } from "react-icons/fa";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function Home() {
    const { user, notes, setNotes, deleteNote } = useAuth();
    const token = cookies.get("TOKEN");

    async function getData() {
        const config = {
            method: "get",
            url: "http://localhost:3000/auth",
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        };

        await axios(config)
            .then(response => {
                setNotes(response.data.user.notes);
                console.log(result.data.user.notes);
            })
            .catch(e => {
                e = new Error();
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="p-5 d-flex gap-5 flex-wrap justify-content-center">
            {
                notes.length > 0 && notes.map((d, i) => (
                    <Card style={{ width: '18rem' }} key={i}>
                        <Card.Body>
                            <Card.Title>{d.title ? d.title : `Card note ${i + 1}`}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "12px" }}>{d.date ? d.date : "18.10.2023"}</Card.Subtitle>
                            <Card.Text >
                                {
                                    d.content ? d.content : "Some quick example text to build on the card title and make up the bulk of the card's content."
                                }
                            </Card.Text>
                            <Button variant="outline-danger" className="btn-sm" onClick={() => deleteNote(i)}><FaTrash /></Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    );
}

export default Home;