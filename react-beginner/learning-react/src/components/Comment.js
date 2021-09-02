import store from '../store/index.js';
import { Component } from 'react';
class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			likeNumber: 0
		}
	}
	like(type) {
		store.dispatch({ type })

		console.log('拉踩  ', store.getState())

		let likeNumber = store.getState();

		this.setState({
			likeNumber
		})

	}

	render() {
		return <div>
			<button onClick={() => {
				return this.like('LIKE')
			}}>赞👍 { this.state.likeNumber}</button>
			<button onClick={
				() => {
					return this.like('UNLIKE')
				}
			}>踩</button>
		</div>
	}
}

export default Comment;
