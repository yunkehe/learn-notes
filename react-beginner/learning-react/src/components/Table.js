import { Component } from 'react';

function Thead() {
	return 	<thead>
		<tr>
			<th>姓名</th>
			<th>职业</th>
		</tr>
	</thead>
}

function Tbody() {
	return <tbody>
		<tr>
			<td>heke</td>
			<td>程序员</td>
		</tr>
		<tr>
			<td>Jack</td>
			<td>Teacher</td>
		</tr>
	</tbody>
}

class Table extends Component {

	render() {
		return <table>
			<Thead></Thead>
			<Tbody></Tbody>
		</table>
	}
}

export default Table;
