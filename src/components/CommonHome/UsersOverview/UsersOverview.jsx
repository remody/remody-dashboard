import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { Button } from "reactstrap";

import RangeDatePicker from "../RangeDatePicker";
import Chart from "../Chart/chart";

class UsersOverview extends React.Component {
    constructor(props) {
        super(props);

        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const chartOptions = {
            ...{
                responsive: true,
                legend: {
                    position: "top"
                },
                elements: {
                    line: {
                        tension: 0.3
                    },
                    point: {
                        radius: 0
                    }
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: false,
                            ticks: {
                                callback(tick, index) {
                                    return index % 7 !== 0 ? "" : tick;
                                }
                            }
                        }
                    ],
                    yAxes: [
                        {
                            ticks: {
                                suggestedMax: 45,
                                callback(tick) {
                                    if (tick === 0) {
                                        return tick;
                                    }

                                    return tick > 999
                                        ? `${(tick / 1000).toFixed(1)}K`
                                        : tick;
                                }
                            }
                        }
                    ]
                },
                hover: {
                    mode: "nearest",
                    intersect: false
                },
                tooltips: {
                    custom: false,
                    mode: "nearest",
                    intersect: false
                }
            },
            ...this.props.chartOptions
        };

        const BlogUsersOverview = new Chart(this.canvasRef.current, {
            type: "LineWithLine",
            data: this.props.chartData,
            options: chartOptions
        });

        const buoMeta = BlogUsersOverview.getDatasetMeta(0);
        buoMeta.data[0]._model.radius = 0;
        buoMeta.data[
            this.props.chartData.datasets[0].data.length - 1
        ]._model.radius = 0;

        BlogUsersOverview.render();
    }

    render() {
        const { title } = this.props;
        return (
            <Card small className="h-100">
                <CardHeader
                    className="border-bottom"
                    style={{
                        backgroundColor: "white"
                    }}
                >
                    <h6 className="m-0">{title}</h6>
                </CardHeader>
                <CardBody className="pt-0">
                    <Row className="border-bottom py-2 bg-light">
                        <Col sm="6" className="d-flex mb-2 mb-sm-0">
                            <RangeDatePicker />
                        </Col>
                        <Col>
                            <Button
                                size="sm"
                                className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0 "
                                outline
                                color="secondary"
                            >
                                View Full Report &rarr;
                            </Button>
                        </Col>
                    </Row>
                    <canvas
                        height="120"
                        ref={this.canvasRef}
                        style={{ maxWidth: "100% !important" }}
                    />
                </CardBody>
            </Card>
        );
    }
}

UsersOverview.propTypes = {
    title: PropTypes.string,
    chartData: PropTypes.object,
    chartOptions: PropTypes.object
};

UsersOverview.defaultProps = {
    title: "Users Overview(사용자 이용 수)",
    chartData: {
        labels: Array.from(new Array(30), (_, i) => (i === 0 ? 1 : i)),
        datasets: [
            {
                label: "Current Month",
                fill: "start",
                data: [
                    500,
                    800,
                    320,
                    180,
                    240,
                    320,
                    230,
                    650,
                    590,
                    1200,
                    750,
                    940,
                    1420,
                    1200,
                    960,
                    1450,
                    1820,
                    2800,
                    2102,
                    1920,
                    3920,
                    3202,
                    3140,
                    2800,
                    3200,
                    3200,
                    3400,
                    2910,
                    3100,
                    4250
                ],
                backgroundColor: "rgba(0,123,255,0.1)",
                borderColor: "rgba(0,123,255,1)",
                pointBackgroundColor: "#ffffff",
                pointHoverBackgroundColor: "rgb(0,123,255)",
                borderWidth: 1.5,
                pointRadius: 0,
                pointHoverRadius: 3
            },
            {
                label: "Past Month",
                fill: "start",
                data: [
                    380,
                    430,
                    120,
                    230,
                    410,
                    740,
                    472,
                    219,
                    391,
                    229,
                    400,
                    203,
                    301,
                    380,
                    291,
                    620,
                    700,
                    300,
                    630,
                    402,
                    320,
                    380,
                    289,
                    410,
                    300,
                    530,
                    630,
                    720,
                    780,
                    1200
                ],
                backgroundColor: "rgba(255,65,105,0.1)",
                borderColor: "rgba(255,65,105,1)",
                pointBackgroundColor: "#ffffff",
                pointHoverBackgroundColor: "rgba(255,65,105,1)",
                borderDash: [3, 3],
                borderWidth: 1,
                pointRadius: 0,
                pointHoverRadius: 2,
                pointBorderColor: "rgba(255,65,105,1)"
            }
        ]
    }
};

export default UsersOverview;
