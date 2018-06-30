import React from 'react'
import styled, { css } from 'react-emotion'

const Footer = styled('div')`
  display: grid;
  grid-template-areas:
    'main main box-a'
    'main main box-b';

  .main {
    grid-area: main;
  }
  .box-a {
    grid-area: box-a;
  }
  .box-b {
    grid-area: box-b;
    clip-path: inset(0 20% 0 0);
    //margin: -75px;
  }
  .sidebox {
    width: 200px;
    overflow: hidden;
    transition: all 1.2s 0s ease;

    :hover {
      // transform: translateX(-200px) scale(2);
      transform: translate3d(-200px, 0, 0);
    }
  }
`

//   < div class="crop" >
//     <img src="..." alt="...">
// </div>
// CSS:

// .crop {
//   width: 200px;
//   height: 150px;
//   overflow: hidden;
// }

// .crop img {
//   width: 400px;
//   height: 300px;
//   margin: -75px 0 0 - 100px;
// }

export default () => (
  <Footer>
    <div className="main">
      <img src="https://source.unsplash.com/random/400x400" />
    </div>
    <div className="sidebox box-a">
      <img src="https://source.unsplash.com/random/200x200" />
    </div>
    <div className="sidebox box-b">
      <img src="https://source.unsplash.com/random/510x200" />
    </div>
  </Footer>
)
