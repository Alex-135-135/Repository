import React, { Component } from 'react';
import { Table } from 'antd';
import AddButton1 from './AddButton1.jsx';
import { data, columns } from '../data.js';

export default class Main extends Component {
	state = {
		data
	}
	handleCreate = (elem) => {
		this.setState({
			data: [
				...this.state.data,
				{
					key: this.state.data.length + 1,
					...elem
				}
			] 
		});
	}
	render () {
		console.log(this.state.data)
		return (
			<div>
			    <Table columns={columns} dataSource={this.state.data} />
			    <AddButton1 onClick={this.handleCreate} />
			</div>
		)
	}
}