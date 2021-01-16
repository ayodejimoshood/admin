import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroupAddon, Label, FormGroup, CustomInput } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';

class AddPromocodeModal extends Component {
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
                        <Button className='btn btn-primary' onClick={() => this.openModalWithSize('lg')}>Add Promocode</Button>
                    </div>
                </Col>
                {/* Start Modal */}
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.state.className}
                    size={this.state.size}>
                    <ModalHeader toggle={this.toggle}>Add Promocode</ModalHeader>
                    <ModalBody>
                        <AvForm>
                            <Row>
                                <Col xl={6}>
                                    <AvField name="vehicletype" label="Gift Card" type="text" required />
                                </Col>
                                <Col xl={6}>
                                    <AvField name="vehiclecategory" label="Discount" type="text" required />
                                </Col>
                                <Col xl={6}>
                                    <AvGroup>
                                        <Label for="exampleFile">Validity</Label>
                                        <Select
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            options={[
                                                { value: 'temporary', label: 'Temporary' },
                                                { value: 'permanent', label: 'Permanent' },
                                            ]} required></Select>
                                    </AvGroup>
                                </Col>
                                <Col xl={6}>
                                    <AvGroup>
                                        <div className="form-group" required>
                                            <label>Activation Date &amp; Time</label> <br />
                                            <Flatpickr value={new Date()} options={{enableTime: true}}
                                                onChange={date => { console.log(date) }}
                                                className="form-control" required />
                                        </div>
                                    </AvGroup>
                                </Col>
                                <Col xl={6}>
                                    <AvGroup>
                                        <div className="form-group" required>
                                            <label>Expiry Date &amp; Time</label> <br />
                                            <Flatpickr value={new Date()} options={{enableTime: true}}
                                                onChange={date => { console.log(date) }}
                                                className="form-control" required />
                                        </div>
                                    </AvGroup>
                                </Col>
                                <Col xl={6}>
                                    <AvField name="usagelimit" label="Usage Limit" type="text" required />
                                </Col>
                                <Col xl={6}>
                                    <AvGroup>
                                        <Label for="exampleFile">System Type</Label>
                                        <Select
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            options={[
                                                { value: 'deliverall', label: 'Deliver All' },
                                                { value: 'general', label: 'General' },
                                            ]} required></Select>
                                    </AvGroup>
                                </Col>
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
                            <Button color="primary" type="submit">
                                Submit
                            </Button>
                            <Button color="secondary" className="ml-1" onClick={this.toggle}>Cancel</Button>
                        </AvForm>
                    </ModalBody>
                </Modal>
                {/* End Modal */}
            </div>
        );
    }
}

export default AddPromocodeModal;