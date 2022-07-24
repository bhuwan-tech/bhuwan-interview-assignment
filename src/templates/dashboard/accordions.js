import { Button, Card, Accordion } from "react-bootstrap";
export const Accordions = () => {
    return (
        <>
            <Card className="dahsboard-accordion">
                <Card.Body>
                    {/* Title */}
                    <div className="flex-title">
                        <h4 className="text-muted">Lorem Ipsum</h4>
                        <span className="material-icons">edit</span>
                    </div>

                    <Accordion defaultActiveKey="1">
                        {/* Accordion 1 */}
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                {" "}
                                <span className="count bg-warning text-warning">
                                    8
                                </span>
                                Lorem ipsum
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Accordion 2 */}
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <span className="count bg-danger text-danger">
                                    2
                                </span>
                                Lorem ipsum
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Accordion 3 */}
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <span className="count bg-success text-success">
                                    0
                                </span>
                                Lorem ipsum
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    {/* Button */}
                    <Button
                        variant="outline-primary"
                        className="mt-3 w-100 text-start"
                    >
                        Lorem Ipsum
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};
