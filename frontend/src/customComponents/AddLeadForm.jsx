import React from 'react';
import NavigationBar from './NavigationBar';
import { Container, Input, Button, Card, CardBody, FormGroup, Label } from 'reactstrap';

const AddLeadForm = () => {
	return (
		<>
			<NavigationBar />
			<Container className='form-container'>
				<Card className='form-wrapper'>
					<CardBody>
						<h1 className='title' color='danger'>
							Add a new lead
						</h1>
						<form action=''>
							<FormGroup>
								<Label>Item Name</Label>
								<Input type='select'>
									<option value='oxygen'>Oxygen</option>
									<option value='beds'>Hospital Beds</option>
									<option value='plasma'>Plasma</option>
								</Input>
							</FormGroup>
							<FormGroup>
								<Label>Quantity</Label>
								<Input type='number' placeholder='' />
							</FormGroup>
							<FormGroup>
								<Label for='city'>City</Label>
								<Input type='text' id='city' />
							</FormGroup>
							<FormGroup>
								<Label for='state'>State</Label>
								<Input type='select' id='state'>
									<option value=''>State</option>
									<option value=''>Delhi</option>
									<option value=''>Maharashtra</option>
									<option value=''>Andhra Pradesh</option>
									<option value=''>Telengana</option>
								</Input>
							</FormGroup>
							<FormGroup>
								<Label for='contact'>Contact Number</Label>
								<Input type='text' id='contact' />
							</FormGroup>
							<FormGroup>
								<Label for='address'>Address</Label>
								<Input
									type='textarea'
									id='address'
									placeholder='Enter the complete address including district, city, state & pincode'
								/>
							</FormGroup>
							<Button type='submit' color='danger'>
								Submit
							</Button>
							<Button>Cancel</Button>
						</form>
					</CardBody>
				</Card>
			</Container>
		</>
	);
};

export default AddLeadForm;
