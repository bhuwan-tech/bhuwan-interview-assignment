import { React, useState } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
export const EditableDetails = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <>
            <Card className="mb-2">
                <Card.Body>
                    <div className="flex-title">
                        {/* Title */}
                        <h4 className="text-muted">Lorem Ipsum</h4>
                        <span
                            className="material-icons"
                            onClick={() => setToggle(!toggle)}
                        >
                            edit
                        </span>
                    </div>

                    {/* Editable Form */}
                    <Form
                        className={`dashboard-form ${
                            toggle === true && "non-editable"
                        }`}
                    >
                        <Row className="g-3 border-bottom">
                            {/* Field 1 Grid */}
                            <Col>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label className="text-muted">
                                        Lorem Ipsum
                                    </Form.Label>
                                    <Row className="g-3 d-flex align-items-center border-end">
                                        <Col xs={2} md={1} lg={2}>
                                            <span className="material-icons">
                                                pin_invoke
                                            </span>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                type="text"
                                                value="Lorem Ipsum"
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>

                            {/* Field 2 Grid */}
                            <Col>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label className="text-muted">
                                        Lorem Ipsum
                                    </Form.Label>
                                    <Row className="g-1 d-flex align-items-center">
                                        <Col xs={2} md={1} lg={2}>
                                            <span className="material-icons">
                                                schedule
                                            </span>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                type="text"
                                                value="Lorem Ipsum"
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="g-3">
                            {/* Field 3 Grid */}
                            <Col>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label className="text-muted">
                                        Lorem Ipsum
                                    </Form.Label>
                                    <Row className="g-3 d-flex align-items-center border-end">
                                        <Col xs={2} md={1} lg={2}>
                                            <span className="material-icons">
                                                person_outline
                                            </span>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                type="text"
                                                value="Lorem Ipsum"
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>

                            {/* Field 4 Grid */}
                            <Col>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label className="text-muted">
                                        Lorem Ipsum
                                    </Form.Label>
                                    <Row className="g-1 d-flex align-items-center">
                                        <Col xs={2} md={1} lg={2}>
                                            <span className="material-icons">
                                                settings_backup_restore
                                            </span>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                type="text"
                                                value="Lorem Ipsum"
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};
