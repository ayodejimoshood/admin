import React from 'react';
import { Row, Col, Card, CardBody, Button, Input, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import './vehicle/node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Link } from 'react-router-dom';

import PageTitle from '../../../components/PageTitle';

const records = [
    {
        id: 1,
        packagename: '1hr 10kms',
        rentaltotalprice: '50',
        rentalmiles: '50',
        rentalhour: '1',
        rentaltotalprice: '50',
        additionalpricepermiles: '1',
        additionalpricepermin: '1',
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <Link className="btn btn-primary" to='/rentalpackages/view'>View</Link>
        </div>),
    },
    {
        id: 2,
        packagename: '2hr 10kms',
        rentaltotalprice: '50',
        rentalmiles: '50',
        rentalhour: '1',
        rentaltotalprice: '50',
        additionalpricepermiles: '1',
        additionalpricepermin: '1',
        action: '',
    }
];

const columns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true,
    },
    {
        dataField: 'packagename',
        text: 'Package Name',
        sort: true,
    },
    {
        dataField: 'rentaltotalprice',
        text: 'Rental Total Price (NGN)',
        sort: true,
    },
    {
        dataField: 'rentalmiles',
        text: 'Rental Miles',
        sort: true,
    },
    {
        dataField: 'rentalhour',
        text: 'Rental Hour',
        sort: true,
    },
    {
        dataField: 'additionalpricepermiles',
        text: 'Additional Price Per Miles',
        sort: true,
    },
    {
        dataField: 'additionalpricepermin',
        text: 'Additional Price Per Min (NGN)',
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
                                <Col className="text-right">
                                    <Button {...props.csvProps} className="btn btn-primary">
                                        Add New Package
                                    </Button>
                                    &nbsp;
                                    <Link className='button btn-info' className="btn btn-primary" to="/rentalpackages/taxi">
                                        Back To Listing
                                    </Link>
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

const ViewRentalPackages = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Rental Packages', path: '#' },
                            { label: 'Taxi Rentals', path: '/rentalpackage/view', active: true },
                        ]}
                        title={'Taxi - Basic Rental Package Management'}
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

export default ViewRentalPackages;