import React from 'react';
import { Row, Col, Card, CardBody, Badge, Button, Input, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import './vehicle/node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import PageTitle from '../../components/PageTitle';
import { Link } from 'react-router-dom';
import EditVehicleTypeModal from './EditVehicleTypeModal';
import DeleteVehicleTypeModal from './DeleteVehicleTypeModal';
import AddVehicleTypeModal from './AddVehicleTypeModal';

const records = [
    {
        id: 1,
        vehicletype: 'Basic',
        vehiclecategory: (<div> <Badge color="success" className="mr-1">Luxé</Badge> </div>),
        location: 'Lagos',
        pricepermiles: '1',
        pricepermin: '1',
        basefare: '3',
        commission: '10',
        personcapacity: '5',
        order: '3',
        status: (<div> <Badge color="success" className="mr-1">verified</Badge> </div>),
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditVehicleTypeModal/>
            <DeleteVehicleTypeModal/>
        </div>),
    },
    {
        id: 2,
        vehicletype: 'Luxurious',
        vehiclecategory: (<div> <Badge color="success" className="mr-1">Luxé</Badge> </div>),
        location: 'Lagos',
        pricepermiles: '1',
        pricepermin: '1',
        basefare: '3',
        commission: '10',
        personcapacity: '5',
        order: '3',
        status: (<div> <Badge color="success" className="mr-1">verified</Badge> </div>),
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditVehicleTypeModal/>
            <DeleteVehicleTypeModal/>
        </div>),
    },
    {
        id: 3,
        vehicletype: 'Bike',
        vehiclecategory: (<div> <Badge color="success" className="mr-1">Express</Badge> </div>),
        location: 'Lagos',
        pricepermiles: '1',
        pricepermin: '1',
        basefare: '3',
        commission: '10',
        personcapacity: '5',
        order: '3',
        status: (<div> <Badge color="success" className="mr-1">verified</Badge> </div>),
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditVehicleTypeModal/>
            <DeleteVehicleTypeModal/>
        </div>),
    },
    {
        id: 4,
        vehicletype: 'Minivan',
        vehiclecategory: (<div> <Badge color="success" className="mr-1">Express</Badge> </div>),
        location: 'Lagos',
        pricepermiles: '1',
        pricepermin: '1',
        basefare: '3',
        commission: '10',
        personcapacity: '5',
        order: '3',
        status: (<div> <Badge color="success" className="mr-1">verified</Badge> </div>),
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditVehicleTypeModal/>
            <DeleteVehicleTypeModal/>
        </div>),
    },
    {
        id: 5,
        vehicletype: 'Bus',
        vehiclecategory: (<div> <Badge color="success" className="mr-1">Express</Badge> </div>),
        location: 'Lagos',
        pricepermiles: '1',
        pricepermin: '1',
        basefare: '3',
        commission: '10',
        personcapacity: '5',
        order: '3',
        status: (<div> <Badge color="success" className="mr-1">verified</Badge> </div>),
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditVehicleTypeModal/>
            <DeleteVehicleTypeModal/>
        </div>),
    }
];

const columns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true,
    },
    {
        dataField: 'vehicletype',
        text: 'Vehicle Type',
        sort: true,
    },
    {
        dataField: 'vehiclecategory',
        text: 'Vehicle Category',
        sort: true,
    },
    {
        dataField: 'location',
        text: 'Location',
        sort: true,
    },
    {
        dataField: 'pricepermiles',
        text: 'Price Per Miles (₦)',
        sort: true,
    },
    {
        dataField: 'pricepermin',
        text: 'Price Per Min (₦)',
        sort: true,
    },
    {
        dataField: 'basefare',
        text: 'Base Fare (₦)',
        sort: true,
    },
    {
        dataField: 'commission',
        text: 'Commission',
        sort: true,
    },
    {
        dataField: 'personcapacity',
        text: 'Person Capacity',
        sort: true,
    },
    {
        dataField: 'status',
        text: 'Status',
        sort: true,
    },
    {
        dataField: 'action',
        text: 'Action',
        sort: true,
    }
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
                                <div>
                                    <Col xl={12} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} classNamexx="text-right">
                                        <ExportCSVButton {...props.csvProps} className="btn btn-primary">
                                            Export CSV
                                        </ExportCSVButton>
                                        
                                        <AddVehicleTypeModal/>
                                    </Col>
                                </div>
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

const VehicleType = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            // { label: 'Rental Packages', path: '#' },
                            { label: 'Vehicle Type', path: '/vehicletype', active: true },
                        ]}
                        title={'Vehicle Type Management'}
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

export default VehicleType;