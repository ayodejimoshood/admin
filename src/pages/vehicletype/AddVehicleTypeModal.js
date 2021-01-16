import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroupAddon, Label, FormGroup, CustomInput } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';

class AddVehicleTypeModal extends Component {
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
                        <Button className='btn btn-primary' onClick={() => this.openModalWithSize('lg')}>Add Vehicle Type</Button>
                    </div>
                </Col>
                {/* Start Modal */}
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.state.className}
                    size={this.state.size}>
                    <ModalHeader toggle={this.toggle}>Add Vehicle Type</ModalHeader>
                    <ModalBody>
                        <AvForm>
                            <Row>
                                <Col xl={6}>
                                    <AvGroup>
                                        <Label for="vehicletype">Vehicle Type</Label>
                                        <Select
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            options={[
                                                { value: 'basic', label: 'Basic' },
                                                { value: 'luxurious', label: 'Luxurious' },
                                                { value: 'bike', label: 'Bike' },
                                                { value: 'minivan', label: 'Minivan' },
                                                { value: 'bus', label: 'Bus' },
                                            ]} required></Select>
                                    </AvGroup>
                                </Col>

                                {/* vehicle category */}
                                <Col xl={6}>
                                    <AvGroup required>
                                        <Label for="vehiclecategory">Vehicle Category</Label>
                                        <Select
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            options={[
                                                { value: 'luxe', label: 'Luxé' },
                                                { value: 'express', label: 'Express' },
                                            ]} required></Select>
                                    </AvGroup>
                                </Col>

                                {/* Location */}
                                <Col xl={6}>
                                    <AvGroup>
                                        <Label for="location">Location</Label>
                                        <Select
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            options={[
                                                { value: 'lagos', label: 'Lagos' },
                                                { value: 'abia', label: 'Abia' },
                                            ]} required></Select>
                                    </AvGroup>
                                </Col>

                                {/* Price Per Miles (₦) */}
                                <Col xl={6}>
                                    <AvField name="pricepermiles" label="Price Per Miles (₦)" type="text" required />
                                </Col>

                                {/* Price Per Min (₦) */}
                                <Col xl={6}>
                                    <AvField name="pricepermin" label="Price Per Minute (₦)" type="text" required />
                                </Col>

                                {/* Minimum Fare */}
                                <Col xl={6}>
                                    <AvField name="basefare" label="Minimum Fare (₦)" type="text" required />
                                </Col>

                                {/* Base Fare */}
                                <Col xl={6}>
                                    <AvField name="basefare" label="Base Fare (₦)" type="text" required />
                                </Col>

                                {/* Commission (%) */}
                                <Col xl={6}>
                                    <AvField name="commission" label="Commission (%)" type="text" required />
                                </Col>

                                {/* Rider Cancellation Time Limit in Minutes */}
                                <Col xl={6}>
                                    <AvField name="ridercancellationtimelimit" label="Rider Cancellation Time Limit" type="text" required />
                                </Col>

                                {/* Rider Cancellation Charges */}
                                <Col xl={6}>
                                    <AvField name="ridercancellationcharges" label="Rider Cancellation Charges (₦)" type="text" required />
                                </Col>

                                {/* Waiting Time Limit In Minute */}
                                <Col xl={6}>
                                    <AvField name="ridercancellationcharges" label="Waiting Time Limit In Minute" type="text" required />
                                </Col>

                                {/* Waiting Charges */}
                                <Col xl={6}>
                                    <AvField name="ridercancellationcharges" label="Waiting Charges (₦)" type="text" required />
                                </Col>

                                {/* In-Transit Waiting Fee Per Minute */}
                                <Col xl={6}>
                                    <AvField name="ridercancellationcharges" label="In-Transit Waiting Fee Per Minute (₦)" type="text" required />
                                </Col>

                                {/* Person Capacity */}
                                <Col xl={6}>
                                    <Label for="exampleFile">Person Capacity</Label>
                                    <Select
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        options={[
                                            { value: '1', label: '1' },
                                            { value: '2', label: '2' },
                                            { value: '3', label: '3' },
                                            { value: '4', label: '4' },
                                            { value: '5', label: '5' },
                                        ]} required></Select>
                                </Col>

                                {/* Vehicle Type Image */}
                                <Col lg={6}>
                                    <FormGroup>
                                        <Label for="exampleFile">Vehicle Type Image - Black &amp; White</Label>
                                        <Input type="file" name="file" id="exampleFile" required />
                                    </FormGroup>
                                </Col>

                                <Col lg={6}>
                                    <FormGroup>
                                        <Label for="exampleFile">Vehicle Type Image - Colored</Label>
                                        <Input type="file" name="file" id="exampleFile" required />
                                    </FormGroup>
                                </Col>

                                {/* Peak Time Surcharge */}
                                <Col xl={6}>
                                    <Row>
                                        <Col>
                                            <AvGroup>
                                                <label>Peak Time Surcharge</label>
                                                <CustomInput
                                                    type="switch"
                                                    id="PeakTimeSurchargeSwitch"
                                                    name="customSwitch"
                                                    label="On/Off"
                                                />
                                            </AvGroup>
                                        </Col>
                                        <Col>
                                            <AvGroup>
                                                <label>Night Charges</label>
                                                <CustomInput
                                                    type="switch"
                                                    id="NightChargeSwitch"
                                                    name="customSwitch"
                                                    label="On/Off"
                                                />
                                            </AvGroup>
                                        </Col>
                                    </Row>
                                </Col>

                                {/* Order */}
                                <Col xl={3}>
                                    <AvGroup>
                                        <Label for="exampleFile">Order</Label>
                                        <Select
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            options={[
                                                { value: '1', label: '1' },
                                                { value: '2', label: '2' },
                                                { value: '3', label: '3' },
                                            ]} required></Select>
                                    </AvGroup>
                                </Col>

                                {/* Status */}
                                <Col xl={3}>
                                    <AvGroup>
                                        <Label for="exampleFile">Status</Label>
                                        <Select
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            options={[
                                                { value: 'verified', label: 'Verified' },
                                                { value: 'pending', label: 'Pending' },
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

export default AddVehicleTypeModal;