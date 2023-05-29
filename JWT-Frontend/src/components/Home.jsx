import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../context/useAuth";
import { Card } from "react-bootstrap";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function Home() {
    const { user, notes, setNotes } = useAuth();
    const token = cookies.get("TOKEN");

    useEffect(() => {
        const config = {
            method: "get",
            url: "http://localhost:3000/auth",
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        };

        axios(config)
            .then(response => {
                setNotes(response.data.user.notes);
                console.log(result.data.user.notes);
            })
            .catch(e => {
                e = new Error();
            });
    }, []);

    return (
        <div className="p-5 d-flex gap-5 flex-wrap">
            {
                [1, 2, 3, 4, 5, 6].map((d, i) => (
                    <Card style={{ width: '18rem' }} key={i}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                ))
            }
            {
                notes.map((d, i) => (
                    <Card style={{ width: '18rem' }} key={i}>
                        <Card.Body>
                            <Card.Title>{d.title ? d.title : `Card note ${i + 1}`}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{d.date ? d.date : "18.10.2023"}</Card.Subtitle>
                            <Card.Text>
                                {
                                    d.note ? d.note : "Some quick example text to build on the card title and make up the bulk of the card's content."
                                }
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    );
}

export default Home;