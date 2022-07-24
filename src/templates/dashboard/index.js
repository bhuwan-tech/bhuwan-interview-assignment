import { ActionCard } from "./card";
import { Widget } from "./widget";
import { Accordions } from "./accordions";
import { EditableDetails } from "./editableDetails";
import { Button, Container, Row, Col } from "react-bootstrap";
const Dashboard = () => {
    return (
        <>
            <Container fluid>
                <div className="wrapper">
                    {/* Page Title */}
                    <div className="title">
                        <Row className="d-flex justify-content-between align-items-center">
                            <Col md={6} sm={6}>
                                <h6>Dashboard</h6>
                            </Col>

                            <Col md={6} sm={6} className="title-btn">
                                <Button
                                    variant="outline-primary"
                                    className="me-2"
                                >
                                    Lorem Ipsum
                                </Button>
                                <Button variant="primary">Lorem Ipsum</Button>
                            </Col>
                        </Row>
                    </div>

                    <Row className="g-2 mt-2">
                        <Col md={12} lg={3}>
                            <EditableDetails />
                            <Accordions />
                        </Col>
                        <Col md={12} lg={9}>
                            {/* widget section */}
                            <Row className="g-2 mb-2">
                                {/* widget 1 */}
                                <Col>
                                    <Widget />
                                </Col>

                                {/* widget 2 */}
                                <Col>
                                    <Widget />
                                </Col>
                            </Row>

                            {/* Action Card section */}
                            <Row className="g-2 row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                {/* Action Card */}
                                <Col>
                                    <ActionCard />
                                </Col>

                                {/* Action Card */}
                                <Col>
                                    <ActionCard />
                                </Col>

                                {/* Action Card */}
                                <Col>
                                    <ActionCard />
                                </Col>

                                {/* Action Card */}
                                <Col>
                                    <ActionCard />
                                </Col>

                                {/* Action Card */}
                                <Col>
                                    <ActionCard />
                                </Col>

                                {/* Action Card */}
                                <Col>
                                    <ActionCard />
                                </Col>

                                {/* Action Card */}
                                <Col>
                                    <ActionCard />
                                </Col>

                                {/* Action Card */}
                                <Col>
                                    <ActionCard />
                                </Col>

                                {/* Action Card */}
                                <Col>
                                    <ActionCard />
                                </Col>

                                {/* Action Card */}
                                <Col>
                                    <ActionCard />
                                </Col>

                                {/* Action Card */}
                                <Col>
                                    <ActionCard />
                                </Col>

                                {/* Action Card */}
                                <Col>
                                    <ActionCard />
                                </Col>

                                {/* Action Card */}
                                <Col>
                                    <ActionCard />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default Dashboard;
