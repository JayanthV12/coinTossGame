import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {count: 0, heads: 'true', headCount: 0, tailCount: 0}

  onClicking = () => {
    const {headCount, tailCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    const result = tossResult === 0 ? 'true' : 'false'
    const headsEl = result === 'true' ? headCount + 1 : headCount
    const tailEl = result === 'false' ? tailCount + 1 : tailCount

    this.setState(prevState => ({
      count: prevState.count + 1,
      heads: result,
      headCount: headsEl,
      tailCount: tailEl,
    }))
  }

  render() {
    const {count, heads, headCount, tailCount} = this.state

    const imgUrl =
      heads === 'true'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={`${imgUrl}`} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.onClicking}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="para">Total:{count}</p>
            <p className="para">Heads:{headCount}</p>
            <p className="para">Tails:{tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
