import { Card } from "react-bootstrap";
export const ActionCard = () => {
    return (
        <>
            <Card className="action-card">
                <Card.Body>
                    <span className="material-icons">restore</span>
                    <Card.Title className="text-muted">Lorem ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};
