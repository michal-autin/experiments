import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { HashRouter, Route } from 'react-router-dom'
import Spinner from './Pages/Spinner'
import Slider from './Pages/Slider'
import Antd from './Pages/Antd'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faPlayCircle, faSpinner, faCoffee } from '@fortawesome/free-solid-svg-icons'
// far icons have still 'solid' name, for distinction they have to be imported this way
import { faPlayCircle as farPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { css, cx } from 'react-emotion'

import Nav from './Nav'
import Footer from './Footer'

import './styles.css'

function* nr(doReset = false) {
  let nr = 1
  while (true) {
    if (doReset) nr = 1
    yield nr++
  }
}

var ngen = nr()
function n() {
  return ngen.next().value
}

const menuItems = [
  { title: 'Home', link: '/', exact: true },
  { title: 'Font Awesome 5', link: '/fontawesome' },
  { title: 'Menu Bar', link: '/menubar' },
  { title: 'Spinners', link: '/spinners' },
  { title: 'Slider', link: '/slider' },
  { title: 'Antd', link: '/antd' },
]

const Home = () => {
  const fasize = '2x'
  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen! Ole!</h2>
      <div>
        FA: {n()}
        {n()}
        <i className="fas fa-circle fa-2x" />
        {n()}
        <i className="far fa-play-circle fa-2x" />
        {n()}
        <FontAwesomeIcon icon={faCheckSquare} size={fasize} />
        {n()}
        <FontAwesomeIcon icon={faPlayCircle} size={fasize} />
        {n()}
        <FontAwesomeIcon icon={farPlayCircle} size={fasize} color={'green'} />
        {n()}
        <FontAwesomeIcon icon={farPlayCircle} size={fasize} color={'green'} inverse />
        {n()}
        <FontAwesomeIcon icon={farPlayCircle} size={fasize} listItem />
        {n()}
        <FontAwesomeIcon icon={farPlayCircle} size={fasize} color={'red'} rotation={180} />
        {n()}
        <FontAwesomeIcon icon={farPlayCircle} size={fasize} flip={'horizontal'} />
        {n()}
        <FontAwesomeIcon icon={farPlayCircle} size={fasize} spin />
        {n()}
        <FontAwesomeIcon icon={farPlayCircle} size={fasize} pulse />
        {n()}
        <FontAwesomeIcon icon={farPlayCircle} size={fasize} border />
        <p>
          <FontAwesomeIcon icon={farPlayCircle} size="4x" color={'orange'} rotation={90} pull="right" border />
          {n()} Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, non inventore? Id consequuntur
          molestias totam explicabo ullam, nobis saepe facere reiciendis iste veniam, quaerat doloribus illum sequi?
          Assumenda, enim quam.Ratione quam sequi voluptate adipisci reiciendis est atque maxime libero ipsam excepturi
          sint iusto odit eos, repellat minima! Voluptatum, explicabo voluptatibus. A vitae laboriosam reiciendis
          numquam recusandae, dolores omnis ea?
        </p>
        {n()}
        <FontAwesomeIcon icon={faSpinner} transform="shrink-2 left-3" />
        {/* }
          // @todo discover why css is not working
          // @todo discover why it is not working at all
          { */}
        {n()}
        <span
          className={cx({
            'fa-layers': true,
            'fa-fw': true,
            // css`background: MistyRose;`
          })}
        >
          <FontAwesomeIcon icon={farPlayCircle} size={fasize} border />
          <span className="fa-layers-counter" transform="expand-4 right-4">
            1,419
          </span>
        </span>
      </div>
      {/* 
        // @todo why class not working here
        <Footer className={css`display:none;`}/> */}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav menuItems={menuItems} />
        <Route path="/slider" component={Slider} />
        <Route path="/spinners" component={Spinner} />
        <Route path="/antd" component={Antd} />
        <Route path="/" exact component={Home} />
      </div>
    </BrowserRouter>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  rootElement
)
