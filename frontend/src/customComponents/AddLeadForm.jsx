import React from 'react';
import NavigationBar from './NavigationBar';
import { Container, Input, Button, Card, CardBody, FormGroup, Label } from 'reactstrap';
import { statesList } from 'sampleData';

class AddLeadForm extends React.Component {
	state = {
		itemName: 'oxygen',
		quantity: 0,
		state: 'Andaman & Nicobar',
		number: '',
		address: '',
	};

	handleSubmit(event) {
		event.preventDefault();
		if (this.formValidate()) {
			console.log(this.state);
		}
	}

	handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}

	formValidate() {
		if (this.state.number.length !== 10) {
			alert('Phone number must be 10 digits long');
			return false;
		}

		return true;
	}

	render() {
		return (
			<>
				<NavigationBar />
				<Container className='form-container'>
					<Card className='form-wrapper'>
						<CardBody>
							<h1 className='title' color='danger'>
								Add a new lead
							</h1>
							<form onSubmit={this.handleSubmit.bind(this)}>
								<FormGroup>
									<Label for='itemName'>Item Name</Label>
									<Input 
										type='select' 
										name='item name' 
										id='itemName' 
										onChange={this.handleChange.bind(this)}
									>
										<option value='oxygen'>Oxygen</option>
										<option value='beds'>Hospital Beds</option>
										<option value='plasma'>Plasma</option>
									</Input>
								</FormGroup>
								<FormGroup>
									<Label for='quantity'>Quantity</Label>
									<Input
										required
										type='number'
										name='quantity'
										id='quantity'
										placeholder='Enter the quantity in number of units or liters'
										min={1}
										onChange={this.handleChange.bind(this)}
									/>
								</FormGroup>
								<FormGroup>
									<Label for='state'>State</Label>
									<Input 
										required 
										type='select' 
										name='state' 
										id='state' 
										onChange={this.handleChange.bind(this)}
									>
										{statesList.map((el, index) => {
											return (
												<option value={el} key={index}>
													{el}
												</option>
											);
										})}
									</Input>
								</FormGroup>
								<FormGroup>
									<Label for='contact'>Contact Number</Label>
									<Input
										required
										type='number'
										name='contact number'
										id='number'
										placeholder='Enter a 10 digit phone number'
										onChange={this.handleChange.bind(this)}
									/>
								</FormGroup>
								<FormGroup>
									<Label for='address'>Address</Label>
									<Input
										required
										type='textarea'
										name='address'
										id='address'
										placeholder='Enter the complete address including district, city, state & pincode'
										onChange={this.handleChange.bind(this)}
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
	}
}
export default AddLeadForm;
