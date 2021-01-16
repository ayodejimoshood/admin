import React from 'react';
import { Row, Col, Card, CardBody, Badge, Button, Input, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import './vehicle/node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import AddRidersModal from './AddRidersModal';

import PageTitle from '../../components/PageTitle';
import DeleteRidersModal from './DeleteRidersModal';
import EditRidersModal from './EditRidersModal';

const records = [
    {
        id: 1,
        ridersfirstname: 'Ayodeji',
        riderslastname: 'Moshood',
        company: 'Deloitte',
        email: 'amoshood@fczmedia.com',
        phone: '+1 (823) 532-2427',
        bikecount: 2,
        signupdate: '27-11-2020',
        walletbalance: '₦50,000.00',
        vieweditdoc: 'edit',
        status: (<div> <Badge color="success" className="mr-1">verified</Badge> </div>),
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditRidersModal/>
            <DeleteRidersModal/>
        </div>),
    },
    {
        id: 2,
        ridersfirstname: 'Ayodeji',
        riderslastname: 'Moshood',
        company: 'Kellogs',
        email: 'amoshood@fczmedia.com',
        phone: '+1 (823) 532-2427',
        bikecount: 2,
        signupdate: '27-11-2020',
        walletbalance: '₦32,082.00',
        vieweditdoc: 'edit',
        status: (<div> <Badge color="success" className="mr-1">verified</Badge> </div>),
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditRidersModal/>
            <DeleteRidersModal/>
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
        dataField: 'ridersfirstname',
        text: 'First Name',
        sort: true,
    },
    {
        dataField: 'riderslastname',
        text: 'Last Name',
        sort: true,
    },
    {
        dataField: 'company',
        text: 'Company Name',
        sort: true,
    },
    {
        dataField: 'email',
        text: 'Email Address',
        sort: true,
    },
    {
        dataField: 'phone',
        text: 'Phone Number',
        sort: false,
    },
    {
        dataField: 'bikecount',
        text: 'Bike Count',
        sort: true,
    },
    {
        dataField: 'signupdate',
        text: 'Signup Date',
        sort: false,
    },
    {
        dataField: 'walletbalance',
        text: 'Wallet Balance',
        sort: false,
    },
    {
        dataField: 'vieweditdoc',
        text: 'View/Edit Document(s)',
        sort: false,
    },
    {
        dataField: 'status',
        text: 'Status',
        sort: false,
    },
    {
        dataField: 'action',
        text: 'Action',
        sort: false,
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
                {/* <h4 className="header-title mt-0 mb-1">Search and Export</h4>
                <p className="sub-header">A Table allowing search and export the data in CSV format</p> */}

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
                                <AddRidersModal/>
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

// const TableWithSeletableRows = () => {
//     const selectRow = {
//         mode: 'checkbox',
//         clickToSelect: true,
//         style: { backgroundColor: '#727cf5', color: '#fff' },
//     };

//     return (
//         <Card>
//             <CardBody>
//                 <h4 className="header-title mt-0 mb-1">Multiple Row Selection</h4>
//                 <p className="sub-header">This table allowing selection of multiple rows</p>

//                 <BootstrapTable
//                     bootstrap4
//                     keyField="id"
//                     bordered={false}
//                     data={records}
//                     columns={columns}
//                     pagination={paginationFactory({ sizePerPage: 5, sizePerPageRenderer: sizePerPageRenderer, sizePerPageList: [{ text: '5', value: 5, }, { text: '10', value: 10 }, { text: '25', value: 25 }, { text: 'All', value: records.length }] })}
//                     selectRow={selectRow}
//                     wrapperClasses="table-responsive"
//                 />
//             </CardBody>
//         </Card>
//     );
// };

// const TableWithRowExpand = () => {
//     const expandRow = {
//         renderer: row => (
//             <div>
//                 <p className="mt-2">{`Hello ${row.name}`}</p>
//                 <p>You can render anything here, also you can add additional data on every row object</p>
//                 <p>expandRow.renderer callback will pass the origin row object to you</p>
//             </div>
//         ),
//         showExpandColumn: true,
//         onlyOneExpanding: true,
//         expandHeaderColumnRenderer: ({ isAnyExpands }) => {
//             return isAnyExpands ? <i className='uil uil-minus'></i> : <i className='uil uil-plus'></i>;
//         },
//         expandColumnRenderer: ({ expanded }) => {
//             return expanded ? <i className='uil uil-minus'></i> : <i className='uil uil-plus'></i>;
//         },
//     };

//     return (
//         <Card>
//             <CardBody>
//                 <h4 className="header-title mt-0 mb-1">Expand Row</h4>
//                 <p className="sub-header">Expand row to see more additional details</p>

//                 <BootstrapTable
//                     bootstrap4
//                     keyField="id"
//                     bordered={false}
//                     data={records}
//                     columns={columns}
//                     pagination={paginationFactory({ sizePerPage: 5, sizePerPageRenderer: sizePerPageRenderer, sizePerPageList: [{ text: '5', value: 5, }, { text: '10', value: 10 }, { text: '25', value: 25 }, { text: 'All', value: records.length }] })}
//                     expandRow={expandRow}
//                     wrapperClasses="table-responsive"
//                 />
//             </CardBody>
//         </Card>
//     );
// };

// const CustomToggleList = ({
//     columns,
//     onColumnToggle,
//     toggles
// }) => (
//         <UncontrolledDropdown className="mb-3">
//             <DropdownToggle tag="button" className="btn btn-white">Select Columns <i className='uil uil-angle-down font-size-15 ml-1 align-middle'></i></DropdownToggle>
//             <DropdownMenu>
//                 {columns.map(column => ({
//                     ...column,
//                     toggle: toggles[column.dataField]
//                 }))
//                     .map(column => (
//                         <DropdownItem key={column.dataField} onClick={() => onColumnToggle(column.dataField)}>
//                             {column.toggle && <i className='uil uil-check'></i>}
//                             <span className="ml-2">{column.text}</span>
//                         </DropdownItem>
//                     ))
//                 }
//             </DropdownMenu>
//         </UncontrolledDropdown>
//     );

// const TableWithColumnToggle = () => {

//     return (
//         <Card>
//             <CardBody>
//                 <h4 className="header-title mt-0 mb-1">Toggle Columns</h4>
//                 <p className="sub-header">Show/Hide any column you want</p>

//                 <ToolkitProvider keyField="id" data={records} columns={columns} columnToggle>
//                     {props => (
//                         <div>
//                             <CustomToggleList {...props.columnToggleProps} />
//                             <BootstrapTable
//                                 {...props.baseProps}
//                                 bordered={false}
//                                 pagination={paginationFactory({ sizePerPage: 5, sizePerPageRenderer: sizePerPageRenderer, sizePerPageList: [{ text: '5', value: 5, }, { text: '10', value: 10 }, { text: '25', value: 25 }, { text: 'All', value: records.length }] })}
//                                 wrapperClasses="table-responsive"
//                             />
//                         </div>
//                     )}
//                 </ToolkitProvider>
//             </CardBody>
//         </Card>
//     );
// };

const Riders = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Riders', path: '/riders', active: true },
                        ]}
                        title={'Riders Management'}
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

export default Riders;
