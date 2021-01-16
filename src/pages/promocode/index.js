import React from 'react';
import { Row, Col, Card, CardBody, Badge, Button, Input, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import './vehicle/node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import DeletePromocodeModal from './DeletePromocodeModal';
import EditPromocodeModal from './EditPromocodeModal';
import AddPromocodeModal from './AddPromocodeModal';

const records = [
    {
        id: 1,
        giftcode: '7YRABC',
        discount: '50.00%',
        validity: 'permanent',
        activationdate: '06-01-2021',
        expirydate: '30-01-2021',
        usagelimit: '2',
        used: '0',
        systemtype: 'Deliver All',
        status: (<div> <Badge color="success" className="mr-1">Verified</Badge> </div>),
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditPromocodeModal/>
            <DeletePromocodeModal/>
        </div>),
    },
    {
        id: 2,
        giftcode: '7YRABC',
        discount: '50.00%',
        validity: 'permanent',
        activationdate: '06-01-2021',
        expirydate: '30-01-2021',
        usagelimit: '2',
        used: '0',
        systemtype: 'Deliver All',
        status: (<div> <Badge color="success" className="mr-1">Verified</Badge> </div>),
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditPromocodeModal/>
            <DeletePromocodeModal/>
        </div>),
    },
    {
        id: 3,
        giftcode: '7YRABC',
        discount: '50.00%',
        validity: 'permanent',
        activationdate: '06-01-2021',
        expirydate: '30-01-2021',
        usagelimit: '2',
        used: '0',
        systemtype: 'General',
        status: (<div> <Badge color="success" className="mr-1">Verified</Badge> </div>),
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditPromocodeModal/>
            <DeletePromocodeModal/>
        </div>),
    },
    {
        id: 4,
        giftcode: '7YRABC',
        discount: '50.00%',
        validity: 'permanent',
        activationdate: '06-01-2021',
        expirydate: '30-01-2021',
        usagelimit: '2',
        used: '0',
        systemtype: 'General',
        status: (<div> <Badge color="success" className="mr-1">Verified</Badge> </div>),
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditPromocodeModal/>
            <DeletePromocodeModal/>
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
        dataField: 'giftcode',
        text: 'Gift Code',
        sort: true,
    },
    {
        dataField: 'discount',
        text: 'Discount',
        sort: true,
    },
    {
        dataField: 'validity',
        text: 'Validity',
        sort: true,
    },    
    {
        dataField: 'activationdate',
        text: 'Activation Date',
        sort: true,
    },
    {
        dataField: 'expirydate',
        text: 'Expiry Date',
        sort: false,
    },
    {
        dataField: 'usagelimit',
        text: 'Usage Limit',
        sort: true,
    },
    {
        dataField: 'used',
        text: 'Used',
        sort: true,
    },
    {
        dataField: 'systemtype',
        text: 'System Type',
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
                                        <AddPromocodeModal/>
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

const Promocode = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Promocode', path: '/promocode', active: true },
                        ]}
                        title={'Promocode Management'}
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

export default Promocode;