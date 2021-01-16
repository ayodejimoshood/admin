import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroupAddon, Label, FormGroup, CustomInput } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';

class AddTaxiModal extends Component {
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
                        <Button className='btn btn-primary' onClick={this.toggle}>Add Taxi</Button>
                    </div>
                </Col>
                {/* Start Modal */}
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.state.className}
                    size={this.state.size}>
                    <ModalHeader toggle={this.toggle}>Add Taxi</ModalHeader>
                    <ModalBody>
                        <AvForm onSubmit={this.handleSubmit}>
                            <AvField name="taxiname" label="Taxi Name" type="text" required />
                            <FormGroup>
                                <Label for="companyname">Company Name</Label>
                                <Select
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    options={[
                                        { value: 'fczmedia', label: 'FCzMedia' },
                                        { value: 'vickoandsons', label: 'Vico &amp; Sons' },
                                    ]} required></Select>
                            </FormGroup>
                            <FormGroup>
                                <Label for="driversname">Drivers Name</Label>
                                <Select
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    options={[
                                        { value: 'ayo', label: 'Ayodeji Moshood' },
                                        { value: 'victor', label: 'Victor Stephen' },
                                    ]} required></Select>
                            </FormGroup>
                            <FormGroup>
                                <div className="form-group" required>
                                    <label>Registeration Date &amp; Time</label> <br />
                                    <Flatpickr value={new Date()} options={{enableTime: true}}
                                        onChange={date => { console.log(date) }}
                                        className="form-control" required />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFile">Document</Label>
                                <Input type="file" name="file" id="exampleFile" required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFile">Verification Status</Label>
                                <Select
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    options={[
                                        { value: 'ongoing', label: 'Ongoing' },
                                        { value: 'pending', label: 'Pending' },
                                        { value: 'verified', label: 'Verified' },
                                    ]} required></Select>
                            </FormGroup>
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

export default AddTaxiModal;