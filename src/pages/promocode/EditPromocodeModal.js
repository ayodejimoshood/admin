import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroupAddon, Label, FormGroup, CustomInput } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';

class EditPromocodeModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
        this.openModalWithSize = this.openModalWithSize.bind(this);
        this.openModalWithClass = this.openModalWithClass.bind(this);
    }

    /**
     * Show/hide the modal
     */
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    };

    /**
     * Opens large modal
     */
    openModalWithSize = size => {
        this.setState({ size: size, className: null });
        this.toggle();
    };

    /**
     * Opens modal with custom class
     */
    openModalWithClass = className => {
        this.setState({ className: className, size: null });
        this.toggle();
    };

    render() {
        return (
            <div>
                <Col xl={12}>
                    <div className="button-list">
                        <Button className='btn btn-primary' onClick={() => this.openModalWithSize('lg')}>Edit</Button>
                    </div>
                </Col>
                {/* Start Modal */}
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.state.className}
                    size={this.state.size}>
                    <ModalHeader toggle={this.toggle}>Edit Promocode</ModalHeader>
                    <ModalBody>
                        <AvForm onSubmit={this.handleSubmit}>
                            <Row>
                                {/* First Name */}
                                <Col xs="12" sm="6">
                                    {/* With AvGroup AvInput and AvFeedback to build your own */}
                                    <AvGroup>
                                        <Label for="firstname">Gift Code</Label>
                                        {/* dot notation for the name to access deep values. The shape is also the same in the submit callbacks */}
                                        <AvInput name="firstname" type="text" id="firstname" required />
                                        {/* this only shows when there is an error, use reactstrap's FormFeedback if you want is to always be displayed */}
                                        <AvFeedback>This is an error!</AvFeedback>
                                    </AvGroup>
                                </Col>
                                {/* Last Name */}
                                <Col xs="12" sm="6">
                                    <AvGroup>
                                        <Label for="lastname">Discount</Label>
                                        <AvInput name="lastname" id="lastname" type="text" required />
                                        <AvFeedback>This is an error!</AvFeedback>
                                    </AvGroup>
                                </Col>
                                {/* Company Name */}
                                <Col xs="12" sm="6">
                                    <AvGroup>
                                        <Label for="companyname">Validity</Label>
                                        <AvInput name="companyname" type="text" id="companyname" required />
                                        <AvFeedback>This is an error!</AvFeedback>
                                    </AvGroup>
                                </Col>
                                {/* Activation Date &amp; Time */}
                                <Col xs="12" sm="6">
                                    <div className="form-group" required>
                                        <label>Activation Date &amp; Time</label> <br />
                                        <Flatpickr value={new Date()} options={{enableTime: true}}
                                            onChange={date => { console.log(date) }}
                                            className="form-control" required />
                                    </div>
                                </Col>
                                {/* Expiry Date &amp; Time */}
                                <Col xs="12" sm="6">
                                    <div className="form-group" required>
                                        <label>Expiry Date &amp; Time</label> <br />
                                        <Flatpickr value={new Date()} options={{enableTime: true}}
                                            onChange={date => { console.log(date) }}
                                            className="form-control" required />
                                    </div>
                                </Col>
                                {/* Usage Limit */}
                                <Col xl={6}>
                                    <AvGroup required>
                                        <Label for="exampleFile">Usage Limit</Label>
                                        <Select
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            options={[
                                                { value: '1', label: '1' },
                                                { value: '2', label: '2' },
                                            ]} required></Select>
                                    </AvGroup>
                                </Col>
                                <Col xl={6}>
                                    <AvGroup>
                                        <Label for="exampleFile">Used</Label>
                                        <Select
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            options={[
                                                { value: '0', label: '0' },
                                                { value: '1', label: '1' },
                                                { value: '2', label: '2' },
                                            ]} required></Select>
                                    </AvGroup>
                                </Col>
                                <Col xl={6}>
                                    <AvGroup>
                                        <Label for="exampleFile">System Type</Label>
                                        <Select
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            options={[
                                                { value: 'all', label: 'All' },
                                                { value: 'general', label: 'General' },
                                            ]} required></Select>
                                    </AvGroup>
                                </Col>
                                {/* Status */}
                                <Col xl={6}>
                                    <AvGroup>
                                        <Label for="exampleFile">Status</Label>
                                        <Select
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            options={[
                                                { value: 'pending', label: 'Pending' },
                                                { value: 'expired', label: 'Expired' },
                                                { value: 'verified', label: 'Verified' },
                                            ]} required></Select>
                                    </AvGroup>
                                </Col>
                            </Row>
                            <hr></hr>
                            <Button color="primary" type="submit"> Submit </Button>
                            <Button color="secondary" className="ml-1" onClick={this.toggle}>Cancel</Button>
                        </AvForm>
                    </ModalBody>
                </Modal>
                {/* End Modal */}
            </div>
        );
    }
}

export default EditPromocodeModal;