import React from 'react'
import 'babel-polyfill'

export default class Home extends React.Component {
  render () {
    return <div onClick={()=>window.alert('hello react SSR!!!')}>hello world</div>
  }
}
