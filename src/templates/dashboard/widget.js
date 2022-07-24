import { Card } from "react-bootstrap";
export const Widget = () => {
    return (
        <>
            <Card className="widget">
                <Card.Body>
                    <Card.Title>
                        {" "}
                        <span>&euro;</span> 0.000.000,00
                    </Card.Title>
                    <Card.Subtitle className="text-muted">
                        Lorem ipsum dolor sit amet
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </>
    );
};
