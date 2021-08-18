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
