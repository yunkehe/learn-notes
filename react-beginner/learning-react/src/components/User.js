function User(props) {
  return <div>{props.name}</div>
}

import PropTypes from 'prop-types'

class User extends Component {
  static defatultProps = {
    name: 'heke',
    age: 31,
	}

	propTypes: {
		name: PropTypes.string.isRequired,
		age: PropTypes.number,
	}

  render() {
    return <div>{this.props.name}</div>
  }
}

class Child extends Componet{
	static contextTypes = {
		text: PropTypes.String
	}

	render() {
		return <div>{ this.context.text }</div>
	}
}

class Ancenstor extends Component {
	static childContextTypes = {
		text: PropTypes.string
	}

	getChildContext() {
		return {text: 'yahan'}
	}
}


// 高阶组件 就是 接受组件 并且返回组件的组卷
// 1. 调用传入的组件
// 2. 继承传入的组件

// react中 ref的用法
class User extends Component {
	componentDidMount() {
		$(this.textInput).autocomplete();
		// 获取子组件的完整 DOM
		ReactDOM.findDOMNode(this.child);
	}

	render() {
		return <input type="text" ref={ (input) => this.textInput = input}></input>
	}

	render() {
		// 不过滤XSS 设置html
		return <div dangerouslySetInnerHTML={__html: '<a>yanhaijing.com</a>' }></div>
	}

}
