/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
// @ts-ignore
import { Home } from '@mfe/app-home'
// @ts-ignore
import { Layout } from '@mfe/app-layout'
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
