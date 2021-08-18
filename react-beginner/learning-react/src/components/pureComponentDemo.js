import { PureComponent } from 'react'

class pureComponentDemo extends Componet {
  shouldComponentUpdate(nextProps, nextState) {
    const { props, state } = this

    function shallowCompare(a, b) {
      return a === b || Object.keys(a).every((k) => a[k] === b[k])
    }

    return shallowCompare(nextProps, props) && shallowCompare(nextState, state)
  }
}

class Demo2 extends PureComponent {}
