import { createStore } from 'redux';
const reducer = (previousState = 0, action) => {
	switch (action.type) {
		case 'LIKE':
			return previousState + 1;
		case 'UNLIKE':
			return previousState - 1;
		default:
			return previousState;
	}
}

const store = createStore(reducer);

class Comment extends Component {
	//
	render() {
		return <div>
			纯函数内不能存在任何副作用，包括
			<ul>
				<li>调用系统I/O的api，Date.now()或者Math.random()</li>
				<li>发送网络请求</li>
				<li>在函数体内修改外部变量的值</li>
				<li>使用console.log输出信息</li>
				<li>调用存在副作用的函数</li>
			</ul>
		</div>
	}
}
