import React from 'react';
import { Row, Col, Card, CardBody, Badge, Button, Input, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import './vehicle/node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import AddTaxiModal from './AddTaxiModal';
import PageTitle from '../../components/PageTitle';
import EditTaxiModal from './EditTaxiModal';
import DeleteTaxiModal from './DeleteTaxiModal';

const records = [
    {
        id: 1,
        taxiname: 'Toyota Corolla',
        company: 'Deloitte',
        driver: 'Ayodeji Moshood',
        registerationdate: '28/12/2020 • 05:28am',
        vieweditdoc: 'doc',
        status: (<div> <Badge color="success" className="mr-1">verified</Badge> </div>),
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditTaxiModal/>
            &nbsp;
            <DeleteTaxiModal/>
        </div>),
    },
    {
        id: 2,
        taxiname: 'Mercedes Benz c250',
        company: 'Deloitte',
        driver: 'Ayodeji Moshood',
        registerationdate: '28/12/2020 • 05:25am',
        vieweditdoc: 'doc',
        status: (<div> <Badge color="primary" className="mr-1">ongoing</Badge> </div>),
        action: (<div style={{display: 'flex', flexDirectionxx: 'row', justifyContentxx: 'space-between'}}>
            <EditTaxiModal/>
            &nbsp;
            <DeleteTaxiModal/>
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
        dataField: 'taxiname',
        text: 'Taxi Name',

    },
    {
        dataField: 'company',
        text: 'Company Name',
        sort: true,
    },
    {
        dataField: 'driver',
        text: 'Drivers Name',
        sort: true,
    },
    {
        dataField: 'registerationdate',
        text: 'Registeration Date & Time',
        sort: true,
    },
    {
        dataField: 'vieweditdoc',
        text: 'Document(s)',
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
                                <Col className="text-right" >
                                    <ExportCSVButton {...props.csvProps} className="btn btn-primary">
                                        Export CSV
                                    </ExportCSVButton>
                                </Col>
                                <AddTaxiModal/>
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

const Taxis = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Taxi', path: '/taxi', active: true },
                        ]}
                        title={'Taxi Management'}
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

export default Taxis;
