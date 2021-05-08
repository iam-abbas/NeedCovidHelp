import React from 'react';
import { Button } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';

const TabsContainer = () => {
	return (
		<Card className='tabs-container'>
			<Button color='default'>😷 Oxygen</Button>
			<Button color='default'>🩸 Plasma</Button>
			<Button color='default'>🛏️ Hospital Beds</Button>
		</Card>
	);
};

export default TabsContainer;
