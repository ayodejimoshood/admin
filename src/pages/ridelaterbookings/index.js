import React from 'react';
import { Row, Col, Card, CardBody, Badge, Button, Input, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import './vehicle/node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import PageTitle from '../../components/PageTitle';

const records = [
    {
        id: 1,
        bookedby: 'Admin',
        bookingnumber: 'CL202012261',
        users: 'Ayodeji Moshood',
        bookeddate: '27-11-2020',
        expectedsourcelocation: 'Landmark Lekki',
        expecteddestinationlocation: 'Lagos Business School, Ibeju-Lekki',
        pilot: 'Ayodeji Moshood',
        pilottype: 'Driver',
        tripdetails: '...',
        status: (<div> <Badge color="success" className="mr-1">completed</Badge> </div>),
    },
    {
        id: 2,
        bookedby: 'Company',
        bookingnumber: 'CL202012262',
        users: 'Ayodeji Moshood',
        bookeddate: '28-11-2020',
        expectedsourcelocation: 'Landmark Lekki',
        expecteddestinationlocation: 'Lagos Business School, Ibeju-Lekki',
        pilot: 'Ayodeji Moshood',
        pilottype: 'Rider',
        tripdetails: '...',
        status: (<div> <Badge color="danger" className="mr-1">canceled by driver</Badge> </div>),
    },
    {
        id: 2,
        bookedby: 'Company',
        bookingnumber: 'CL202012262',
        users: 'Ayodeji Moshood',
        bookeddate: '28-11-2020',
        expectedsourcelocation: 'Landmark Lekki',
        expecteddestinationlocation: 'Lagos Business School, Ibeju-Lekki',
        pilot: 'Ayodeji Moshood',
        pilottype: 'Rider',
        tripdetails: '...',
        status: (<div> <Badge color="danger" className="mr-1">canceled by user</Badge> </div>),
    },
    {
        id: 2,
        bookedby: 'Company',
        bookingnumber: 'CL202012262',
        users: 'Ayodeji Moshood',
        bookeddate: '28-11-2020',
        expectedsourcelocation: 'Landmark Lekki',
        expecteddestinationlocation: 'Lagos Business School, Ibeju-Lekki',
        pilot: 'Ayodeji Moshood',
        pilottype: 'Rider',
        tripdetails: '...',
        status: (<div> <Badge color="secondary" className="mr-1">expired</Badge> </div>),
    }
];

const columns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true,
    },
    {
        dataField: 'bookedby',
        text: 'Booked By',
        sort: true,
    },
    {
        dataField: 'bookingnumber',
        text: 'Booking Number',
        sort: true,
    },
    {
        dataField: 'users',
        text: 'Users',
        sort: true,
    },
    {
        dataField: 'bookeddate',
        text: 'Booked Date',
        sort: false,
    },
    {
        dataField: 'expectedsourcelocation',
        text: 'Expected Source Location',
        sort: true,
    },
    {
        dataField: 'expecteddestinationlocation',
        text: 'Expected Destination Location',
        sort: true,
    },
    {
        dataField: 'pilot',
        text: 'Pilot',
        sort: true,
    },
    {
        dataField: 'pilottype',
        text: 'Pilot Type',
        sort: true,
    },
    {
        dataField: 'tripdetails',
        text: 'Trip Details',
        sort: true,
    },
    {
        dataField: 'status',
        text: 'Status',
        sort: true,
    },
];

const defaultSorted = [
    {
        dataField: 'id',
        order: 'asc',
    },
];

const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <React.Fragment>
        <label className="d-inline mr-1">Show</label>
        <Input type="select" name="select" id="no-entries" className="custom-select custom-select-sm d-inline col-1"
            defaultValue={currSizePerPage}
            onChange={(e) => onSizePerPageChange(e.target.value)}>
            {options.map((option, idx) => {
                return <option key={idx}>{option.text}</option>
            })}
        </Input>
        <label className="d-inline ml-1">entries</label>
    </React.Fragment>
);

const TableWithSearch = () => {
    const { SearchBar } = Search;
    const { ExportCSVButton } = CSVExport;

    return (
        <Card>
            <CardBody>

                <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={records}
                    columns={columns}
                    search
                    exportCSV={{ onlyExportFiltered: true, exportAll: false }}>
                    {props => (
                        <React.Fragment>
                            <Row>
                                <Col>
                                    <SearchBar {...props.searchProps} />
                                </Col>
                                <Col className="text-right">
                                    <ExportCSVButton {...props.csvProps} className="btn btn-primary">
                                        Export CSV
                                    </ExportCSVButton>
                                </Col>
                            </Row>

                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                defaultSorted={defaultSorted}
                                pagination={paginationFactory({ sizePerPage: 5, sizePerPageRenderer: sizePerPageRenderer, sizePerPageList: [{ text: '5', value: 5, }, { text: '10', value: 10 }, { text: '25', value: 25 }, { text: 'All', value: records.length }] })}
                                wrapperClasses="table-responsive"
                            />
                        </React.Fragment>
                    )}
                </ToolkitProvider>
            </CardBody>
        </Card>
    );
};

const RideLaterBookings = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            // { label: 'Tables', path: '/tables/advanced' },
                            { label: 'Ride Later Bookings', path: '/ridelaterbookings', active: true },
                        ]}
                        title={'Ride Later Bookings'}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <TableWithSearch />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default RideLaterBookings;
