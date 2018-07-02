import React from 'react'
import { CircleLoader } from 'react-spinners'
import Loader from 'react-loader-spinner'

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <h1>Spinners</h1>
        <CircleLoader
          color={'#123abc'} 
          loading={this.state.loading} 

        />
        <Loader type="Oval" color="#c5d" height={80} width={80}/>
      </div>
    )
  }
}

export default AwesomeComponent