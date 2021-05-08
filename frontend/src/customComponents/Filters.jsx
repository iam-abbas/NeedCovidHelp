import React from 'react';

import { FormGroup, Label, Input } from 'reactstrap';

const Filters = () => {
	return (
		<div>
			<FormGroup>
				<Label for='city-filter'></Label>
				<Input type='select' name='city' id='city-filter'></Input>
			</FormGroup>
			<FormGroup>
				<Label for='-filter'></Label>
				<Input type='select' name='city' id='city-filter'></Input>
			</FormGroup>
		</div>
	);
};

export default Filters;
