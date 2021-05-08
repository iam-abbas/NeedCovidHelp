import React from 'react';

import { Card, CardBody, Badge } from 'reactstrap';

const LeadItem = ({ data }) => {
	return (
		<Card className='lead-item'>
			<CardBody>
				<div className='d-flex'>
					<h3>{data.itemName}</h3>
					{data.verified ? (
						<Badge color='danger' pill>
							Verified
						</Badge>
					) : null}
				</div>
				<div className='roww'>
					<div className='info-wrapper'>
						<span>Quantity: </span>
						{data.quantity}
					</div>
					<div className='info-wrapper'>
						<span>City: </span>
						{data.city}
					</div>
					<div className='info-wrapper'>
						<span>Contact: </span>
						{data.contact}
					</div>
					<div className='info-wrapper'>{data.verified ? <span>Verified On: {data.verified}</span> : null}</div>
				</div>
				<div className='roww address'>
					<div className='info-wrapper'>
						<span>Address: </span>
						{data.address}
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default LeadItem;
