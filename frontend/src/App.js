import React from 'react';
import 'style.scss';

import ThemeContextWrapper from './components/ThemeWrapper/ThemeWrapper';
import BackgroundColorWrapper from './components/BackgroundColorWrapper/BackgroundColorWrapper';
import NavigationBar from 'customComponents/NavigationBar';
import TabsContainer from 'customComponents/TabsContainer';
import LeadItem from 'customComponents/LeadItem';
import { Container, Button } from 'reactstrap';
import { Scrollbars } from 'rc-scrollbars';

import { itemsList } from 'sampleData';
import SideBar from 'customComponents/SideBar';

class App extends React.Component {
	state = {
		fullList: itemsList,
		displayList: [],
	};

	componentDidMount() {
		this.setState({ displayList: this.state.fullList });
	}

	handleFilters(event) {
		console.log(event.target.value);
		this.setState(prevState => {
			console.log(prevState.displayList);
			let filteredList = prevState.displayList.filter(item => {
				return item.state === event.target.value;
			});

			return { displayList: filteredList };
		});
	}

	handTypeFilter(event) {
		let filteredList = this.state.fullList.filter(item => {
			return item.itemName === event.target.value;
		});
		this.setState({ displayList: filteredList });
	}

	handleSearch(event) {
		var searchValue = event.target.value;
		this.setState(prevState => {
			let filterList = prevState.fullList.filter(el => {
				return el.address.search(new RegExp(searchValue, 'i')) !== -1;
			});
			return { displayList: filterList };
		});
	}

	render() {
		return (
			<ThemeContextWrapper>
				<BackgroundColorWrapper>
					<NavigationBar searchHandler={this.handleSearch.bind(this)} />
					<main>
						<SideBar filterHandler={this.handleFilters.bind(this)} />
						<Scrollbars className='list-container'>
							{this.state.displayList.map((el, index) => {
								return <LeadItem key={index} data={el} />;
							})}
							<Button className='add-btn' color='danger'>
								+
							</Button>
						</Scrollbars>
					</main>
					<TabsContainer typeFilterHandler={this.handTypeFilter.bind(this)} />
				</BackgroundColorWrapper>
			</ThemeContextWrapper>
		);
	}
}

export default App;
