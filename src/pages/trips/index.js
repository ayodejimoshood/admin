import React from 'react';
import { Row, Col, Card, CardBody, Badge, Button, Input, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import './vehicle/node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

const records = [
    {
        id: 1,
        triptype: (<div> <Badge color="success" className="mr-1">Taxi</Badge> </div>),
        bookedby: 'User',
        bookingnumber: 'CL202012261',
        pickuplocation: 'Landmark Lekki',
        dropofflocation: 'Lagos Business School, Ibeju-Lekki',
        user: 'Ayodeji Moshood',
        pilot: 'Ayodeji Moshood',
        pilottype: (<div> <Badge color="success" className="mr-1">Driver</Badge> </div>),
        tripdate: '27-11-2020',
        company: 'Deloitte',
        fare: '₦567.80',
        vehicletype: 'Basic',
        viewinvoice: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <Link stylexx={{fontSize: '11px'}} className="btn btn-primary" to='/rentalpackages/view'>Invoice</Link>
        </div>),
    },
    {
        id: 2,
        triptype: (<div> <Badge color="success" className="mr-1">Logistics</Badge> </div>),
        bookedby: 'User',
        bookingnumber: 'CL202012262',
        pickuplocation: 'Landmark Lekki',
        dropofflocation: 'Lagos Business School, Ibeju-Lekki',
        user: 'Ayodeji Moshood',
        pilot: 'Ayodeji Moshood',
        pilottype: (<div> <Badge color="success" className="mr-1">Rider</Badge> </div>),
        tripdate: '27-11-2020',
        company: 'sclexpress',
        fare: '₦1520.00',
        vehicletype: 'Bike',
        viewinvoice: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <Link stylexx={{fontSize: '11px'}} className="btn btn-primary" to='/rentalpackages/view'>Invoice</Link>
        </div>),
    },
    {
        id: 3,
        triptype: (<div> <Badge color="success" className="mr-1">Logistics</Badge> </div>),
        bookedby: 'User',
        bookingnumber: 'CL202012263',
        pickuplocation: 'Landmark Lekki',
        dropofflocation: 'Lagos Business School, Ibeju-Lekki',
        user: 'Ayodeji Moshood',
        pilot: 'Ayodeji Moshood',
        pilottype: (<div> <Badge color="success" className="mr-1">Rider</Badge> </div>),
        tripdate: '27-11-2020',
        company: 'sclexpress',
        fare: '₦0.00',
        vehicletype: 'Bike',
        viewinvoice: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <Button stylexx={{fontSize: '11px'}} className="btn btn-danger" to='/rentalpackages/view'>Cancelled</Button>
        </div>),
    },
    {
        id: 4,
        triptype: (<div> <Badge color="success" className="mr-1">Taxi</Badge> </div>),
        bookedby: 'User',
        bookingnumber: 'CL202012264',
        pickuplocation: 'Landmark Lekki',
        dropofflocation: 'Lagos Business School, Ibeju-Lekki',
        user: 'Ayodeji Moshood',
        pilot: 'Ayodeji Moshood',
        pilottype: (<div> <Badge color="success" className="mr-1">Driver</Badge> </div>),
        tripdate: '27-11-2020',
        company: 'Deloitte',
        fare: '₦0.00',
        vehicletype: 'Basic',
        viewinvoice: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <Button stylexx={{fontSize: '11px'}} className="btn btn-danger" to='/rentalpackages/view'>Cancelled</Button>
        </div>),
    },
];

const columns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true,
    },
    {
        dataField: 'triptype',
        text: 'Trip Type',
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
        dataField: 'pickuplocation',
        text: 'Pickup Location',
        sort: true,
    },
    {
        dataField: 'dropofflocation',
        text: 'Drop-off Location',
        sort: false,
    },
    {
        dataField: 'user',
        text: 'User',
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
        dataField: 'tripdate',
        text: 'Trip Date',
        sort: true,
    },
    {
        dataField: 'company',
        text: 'Company',
        sort: true,
    },
    {
        dataField: 'fare',
        text: 'Fare',
        sort: true,
    },
    {
        dataField: 'vehicletype',
        text: 'Vehicle Type',
        sort: true,
    },
    {
        dataField: 'viewinvoice',
        text: 'View Invoice',
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

const Trips = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Trips', path: '/trips', active: true },
                        ]}
                        title={'Trips Management'}
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

export default Trips;