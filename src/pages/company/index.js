// @flow
import React from 'react';
import { Row, Col, Card, CardBody, Badge, Input, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
// 
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
// 
import PageTitle from '../../components/PageTitle';
import EditCompanyModal from './EditCompanyModal';
import DeleteCompanyModal from './DeleteCompanyModal';
import AddCompanyModal from './AddCompanyModal';

const records = [
    {
        id: 1,
        company: 'Deloitte',
        driver: 'Ayodeji Moshood',
        email: 'amoshood@fczmedia.com',
        view: 'document',
        status: (<div> <Badge color="success" className="mr-1">verified</Badge> </div>),
        phone: '+234-706-046-0216',
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
                <EditCompanyModal/>
                &nbsp;
                <DeleteCompanyModal/>
        </div>),
    },
    {
        id: 2,
        company: 'GTBank',
        driver: 'Ayodeji Moshood',
        email: 'amoshood@fczmedia.com',
        view: 'document',
        status: (<div> <Badge color="success" className="mr-1">verified</Badge> </div>),
        phone: '+234-706-046-0216',
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
                <EditCompanyModal/>
                &nbsp;
                <DeleteCompanyModal/>
        </div>),
    },
    {
        id: 3,
        company: '7up Bottling Company',
        driver: 'Ayodeji Moshood',
        email: 'amoshood@fczmedia.com',
        view: 'document',
        status: (<div> <Badge color="success" className="mr-1">verified</Badge> </div>),
        phone: '+234-706-046-0216',
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
                <EditCompanyModal/>
                &nbsp;
                <DeleteCompanyModal/>
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
        dataField: 'company',
        text: 'Company',
        sort: false,
    },
    {
        dataField: 'driver',
        text: 'Driver',
        sort: false,
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
        dataField: 'view',
        text: 'View/Edit Documents',
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
                                <div>
                                    <Col xl={12} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} classNamexx="text-right">
                                        <ExportCSVButton {...props.csvProps} className="btn btn-primary">
                                            Export CSV
                                        </ExportCSVButton>
                                        
                                        <AddCompanyModal/>
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

const Company = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col>
                    <PageTitle
                        breadCrumbItems={[
                            // { label: 'Company', path: '/company' },
                            { label: 'Company', path: '/company', active: true },
                        ]}
                        title={'Company'}
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

export default Company;
