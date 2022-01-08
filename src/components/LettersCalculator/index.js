// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  changeInput = async event => {
    await this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="input" className="label-class">
              Enter the phrase
            </label>
            <br />
            <input
              id="input"
              type="text"
              placeholder="Enter the phrase"
              className="input-class"
              onChange={this.changeInput}
              value={searchInput}
            />
            <div className="count-container">
              <p className="count-text">No.of letters: {searchInput.length}</p>
            </div>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
