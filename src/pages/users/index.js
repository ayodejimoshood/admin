import React from 'react';
import { Row, Col, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, toggle, Input, UncontrolledButtonDropdown, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import './vehicle/node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import AddUsersModal from './AddUsersModal';

import PageTitle from '../../components/PageTitle';
import EditUsersModal from './EditUsersModal';
import DeleteUsersModal from './DeleteUsersModal';

const records = [
    {
        id: 1,
        // age: 32,
        name: 'Ayodeji Moshood',
        email: 'amoshood@fczmedia.com',
        accounttype: 'Luxé Users',
        phone: '+234-706-046-0216',
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditUsersModal/>
            &nbsp;
            <DeleteUsersModal/>
        </div>),
    },
    {
        id: 2,
        // age: 32,
        name: 'Ayodeji Moshood',
        email: 'amoshood@fczmedia.com',
        accounttype: 'Express Users',
        phone: '+234-706-046-0216',
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditUsersModal/>
            &nbsp;
            <DeleteUsersModal/>
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
        dataField: 'name',
        text: 'Name',
        sort: true,
    },
    {
        dataField: 'email',
        text: 'Email',
        sort: true,
    },
    {
        dataField: 'phone',
        text: 'Phone Number',
        sort: false,
    },
    {
        dataField: 'accounttype',
        text: 'Account Type',
        sort: true,
    },
    {
        dataField: 'action',
        text: 'Action',
        sort: true,
    },
    // {
    //     dataField: 'company',
    //     text: 'Company',
    //     sort: false,
    // },
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
                {/* <h4 className="header-title mt-0 mb-1">Users Data</h4>
                <p className="sub-header">This table allows search and export data in CSV format</p> */}

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
                                <AddUsersModal/>
                                
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

const Users = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            // { label: 'Users', path: '/users/taxiusers' },
                            { label: 'Users', path: '/users', active: true },
                        ]}
                        title={'Users Management'}
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

export default Users;
