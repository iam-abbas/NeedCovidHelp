import React from 'react';
import 'style.scss';

import ThemeContextWrapper from './components/ThemeWrapper/ThemeWrapper';
import BackgroundColorWrapper from './components/BackgroundColorWrapper/BackgroundColorWrapper';
import NavigationBar from 'customComponents/NavigationBar';
import TabsContainer from 'customComponents/TabsContainer';
import LeadItem from 'customComponents/LeadItem';
import { Container, Button } from 'reactstrap';
import { Scrollbars } from 'rc-scrollbars';

import { sampleData } from 'sampleData';
import SideBar from 'customComponents/SideBar';

class App extends React.Component {
	state = {
		displayData: sampleData,
	};

	render() {
		return (
			<ThemeContextWrapper>
				<BackgroundColorWrapper>
					<NavigationBar />
					<main>
						<SideBar />
						<Scrollbars className='list-container'>
							{this.state.displayData.map((el, index) => {
								return <LeadItem key={index} data={el} />;
							})}
							<Button className='add-btn' color='danger'>
								+
							</Button>
						</Scrollbars>
					</main>
					<TabsContainer />
				</BackgroundColorWrapper>
			</ThemeContextWrapper>
		);
	}
}

export default App;
