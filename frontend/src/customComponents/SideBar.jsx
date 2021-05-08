import React from 'react';

import { Card, Input, Label, CardBody, FormGroup } from 'reactstrap';

const SideBar = () => {
	return (
		<Card className='side-bar'>
			<CardBody>
				<h3 className='title'>Filters</h3>
				<form>
					<Label for='state-filter'>State</Label>
					<Input type='select' name='State' id='state-filter'>
						<option value=''>All</option>
						<option value=''>Delhi</option>
						<option value=''>Maharashtra</option>
						<option value=''>Andhra Pradesh</option>
						<option value=''>Telengana</option>
					</Input>
					<Label for='verification'>Verification Status</Label>
					<Input type='select' name='verification status' id='verification'>
						<option value=''>All</option>
						<option value=''>Verified</option>
						<option value=''>Not Verified</option>
					</Input>
				</form>
			</CardBody>
		</Card>
	);
};

export default SideBar;
