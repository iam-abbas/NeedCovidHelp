import React from 'react';
import { Button } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';

const TabsContainer = ({ typeFilterHandler }) => {
	return (
		<Card className='tabs-container'>
			<Button color='default' value='Oxygen' onClick={typeFilterHandler}>😷 Oxygen</Button>
			<Button color='default' value='Plasma' onClick={typeFilterHandler}>🩸 Plasma</Button>
			<Button color='default' value='Hospital Beds' onClick={typeFilterHandler}>🛏️ Hospital Beds</Button>
		</Card>
	);
};

export default TabsContainer;
