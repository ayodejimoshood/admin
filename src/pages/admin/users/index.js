import React from 'react';
import { Row, Col, Card, CardBody, Button, Input, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import './vehicle/node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import AddAdminUsersModal from './AddAdminUsersModal';
import PageTitle from '../../../components/PageTitle';
import EditAdminUsersModal from './EditAdminUsersModal';
import DeleteAdminUsersModal from './DeleteAdminUsersModal';

const records = [
    {
        id: 1,
        adminfirstname: 'Ayodeji',
        adminlastname: 'Moshood',
        email: 'amoshood@fczmedia.com',
        phone: '07060460216',
        role: 'Super Administrator',
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditAdminUsersModal/>
            &nbsp;
            <DeleteAdminUsersModal/>
        </div>),
    },
    {
        id: 2,
        adminfirstname: 'Ayodeji',
        adminlastname: 'Moshood',
        email: 'amoshood@fczmedia.com',
        phone: '07060460216',
        role: 'Dispatcher Admin',
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditAdminUsersModal/>
            &nbsp;
            <DeleteAdminUsersModal/>
        </div>),
    },
    {
        id: 3,
        adminfirstname: 'Ayodeji',
        adminlastname: 'Moshood',
        email: 'amoshood@fczmedia.com',
        phone: '07060460216',
        role: 'Billing Admin',
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditAdminUsersModal/>
            &nbsp;
            <DeleteAdminUsersModal/>
        </div>),
    },
    {
        id: 4,
        adminfirstname: 'Ayodeji',
        adminlastname: 'Moshood',
        email: 'amoshood@fczmedia.com',
        phone: '07060460216',
        role: 'Ticket Admin',
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditAdminUsersModal/>
            &nbsp;
            <DeleteAdminUsersModal/>
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
        dataField: 'adminfirstname',
        text: 'First Name',
        sort: true,
    },
    {
        dataField: 'adminlastname',
        text: 'Last Name',
        sort: true,
    },
    {
        dataField: 'email',
        text: 'Email',
        sort: true,
    },
    {
        dataField: 'phone',
        text: 'Phone',
        sort: true,
    },
    {
        dataField: 'role',
        text: 'Role',
        sort: false,
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
                                <AddAdminUsersModal/>
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

const Tables = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            // { label: 'Users', path: '/users/taxiusers' },
                            { label: 'Admin Users', path: '/users', active: true },
                        ]}
                        title={'Admin Users'}
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

export default Tables;
