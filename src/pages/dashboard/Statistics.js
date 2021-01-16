// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import StatisticsChartWidget from '../../components/StatisticsChartWidget';

const Statistics = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Users"
                        title="2100"
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        trend={{
                            textClass: 'text-success',
                            icon: 'uil uil-arrow-up',
                            value: '10.21%'
                        }}></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Riders"
                        title="1065"
                        colors={['#f77e53']}
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        trend={{
                            textClass: 'text-danger',
                            icon: 'uil uil-arrow-down',
                            value: '5.05%'
                        }}></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Drivers"
                        title="11"
                        colors={['#43d39e']}
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        trend={{
                            textClass: 'text-success',
                            icon: 'uil uil-arrow-up',
                            value: '25.16%'
                        }}></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Total Taxi Trips"
                        title="750"
                        colors={['#ffbe0b']}
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        trend={{
                            textClass: 'text-danger',
                            icon: 'uil uil-arrow-down',
                            value: '5.05%'
                        }}></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Total Logistic Trips"
                        title="850"
                        colors={['#ffbe0b']}
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        trend={{
                            textClass: 'text-danger',
                            icon: 'uil uil-arrow-down',
                            value: '5.05%'
                        }}></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Total Bus Trips"
                        title="850"
                        colors={['#ffbe0b']}
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        trend={{
                            textClass: 'text-danger',
                            icon: 'uil uil-arrow-down',
                            value: '5.05%'
                        }}></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Total Taxis"
                        title="103"
                        colors={['#ffbe0b']}
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        trend={{
                            textClass: 'text-danger',
                            icon: 'uil uil-arrow-down',
                            value: '5.05%'
                        }}></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Total Bikes"
                        title="303"
                        colors={['#ffbe0b']}
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        trend={{
                            textClass: 'text-danger',
                            icon: 'uil uil-arrow-down',
                            value: '5.05%'
                        }}></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Total Bus"
                        title="303"
                        colors={['#ffbe0b']}
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        trend={{
                            textClass: 'text-danger',
                            icon: 'uil uil-arrow-down',
                            value: '5.05%'
                        }}></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Total Earnings"
                        title="₦850,000.00"
                        colors={['#ffbe0b']}
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        trend={{
                            textClass: 'text-danger',
                            icon: 'uil uil-arrow-down',
                            value: '5.05%'
                        }}></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Total Wallet Balance"
                        title="₦1,850,000.00"
                        colors={['#ffbe0b']}
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        trend={{
                            textClass: 'text-danger',
                            icon: 'uil uil-arrow-down',
                            value: '5.05%'
                        }}></StatisticsChartWidget>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Statistics;
