// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headsCount: 0,
    tailsCount: 0,
  }

  onClickButtom = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImg = ''
    let updateHeadCount = headsCount
    let updateTailsCount = tailsCount

    if (toss === 0) {
      tossImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      updateHeadCount += 1
    } else {
      tossImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      updateTailsCount += 1
    }

    this.setState({
      url: tossImg,
      headsCount: updateHeadCount,
      tailsCount: updateTailsCount,
    })
  }

  ontotalCount = () => {
    const {headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return totalCount
  }

  render() {
    const {url, headsCount, tailsCount} = this.state
    const totalCount = this.ontotalCount()
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="img" src={url} alt="toss result" />
          <div className="center">
            <button
              type="button"
              className="button"
              onClick={this.onClickButtom}
            >
              Toss Coin
            </button>
          </div>
          <div className="count">
            <p className="para">Total: {totalCount} </p>
            <p className="para">Heads: {headsCount} </p>
            <p className="para">Tails: {tailsCount} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
