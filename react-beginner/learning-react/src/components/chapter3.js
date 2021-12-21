// redux应用架构基础
import { Component } from 'react'

export default class Chapter3 extends Component {
  deleteOneItem() {
    let item = {
      id: 0,
      book: 'Learn React',
      available: true,
      note: 13
    }

    let newItem = Object.keys(item).reduce((obj, key) => {
      if (key !== 'note') {
        return { ...obj, [key]: item[key] }
      }
      return obj
    }, {})
  }

  render() {
    return (
      <div>
        <p>函数式编程两个重要概念：共享和不可变性</p>
        <p></p>
      </div>
    )
  }
}
