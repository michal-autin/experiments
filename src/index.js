import React from 'react'
import ReactDOM from 'react-dom'
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
  { title: 'Home' },
  { title: 'Font Awesome 5' },
  { title: 'Menu Bar' },
  { title: 'futute placeholder' },
  { title: 'futute placeholder 2' },
  { title: 'futute placeholder 3' },
]

function App() {
  const fasize = '2x'
  return (
    <div className="App">
      <Nav menuItems={menuItems} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Footer />
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
          className={cx(
            'fa-layers',
            'fa-fw',
            css`
              background: MistyRose;
            `
          )}
        >
          <FontAwesomeIcon icon={farPlayCircle} size={fasize} border />
          <span className="fa-layers-counter" transform="expand-4 right-4">
            1,419
          </span>
        </span>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
