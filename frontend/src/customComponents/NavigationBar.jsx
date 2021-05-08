import React from 'react';

import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Form, FormGroup, Input, Button } from 'reactstrap';

class NavigationBar extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
	render() {
		return (
			<Navbar expand='lg' color='default'>
				<Container>
					<div className='navbar-translate'>
						{/* <NavbarBrand href='#pablo' onClick={e => e.preventDefault()}>
							Navbar
						</NavbarBrand> */}
						<NavbarToggler onClick={this.toggle}>
							<span className='navbar-toggler-bar navbar-kebab'></span>
							<span className='navbar-toggler-bar navbar-kebab'></span>
							<span className='navbar-toggler-bar navbar-kebab'></span>
						</NavbarToggler>
					</div>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav navbar>
							<NavItem active className='app-name'>
								<NavLink to='#pablo'>
									<h2 className='title' color='danger'>
										Fight Covid
									</h2>
								</NavLink>
							</NavItem>
						</Nav>
						<Form inline className='ml-auto'>
							<FormGroup className='no-border'>
								<Input type='text' placeholder='Search' />
							</FormGroup>
							<Button color='primary' className='btn-link btn-icon btn-round'>
								<i className='tim-icons icon-zoom-split'></i>
							</Button>
						</Form>
					</Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default NavigationBar;
