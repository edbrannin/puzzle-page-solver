import React, { Component } from 'react'
const WORDS = require('./words.json')


const getAnswers = ({ length, letters, shape }) => {
  if (!length || !letters || letters.length === 0) {
    return [];
  }
  const characterClass = `[${letters}]`
  const pattern = shape ? shape.replace(/\./g, characterClass) : characterClass.repeat(length)

  console.log('pattern', pattern)
  const regex = new RegExp(`^${pattern}$`)
  console.log('regex:', regex)
  return WORDS.filter(word => regex.test(word))
}

class CrosswordClue extends Component {
  constructor(props) {
    super(props)
    this.lengthRef = React.createRef()
    this.lettersRef = React.createRef()
    this.shapeRef = React.createRef()
    this.state = {}
  }

  solve = () => {
    const length = Number(this.lengthRef.current.value)
    const letters = this.lettersRef.current.value || 'qwertyuiopasdfghjklzxcvbnm'
    const shape = this.shapeRef.current.value || '.'.repeat(length)

    const answers = getAnswers({
      length,
      letters,
      shape,
    })

    this.setState({ answers })
  }

  render() {
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '1em',
        fontSize: '2em',
      }}>
        <div>
          <label>
          Length
            <input type="number" ref={this.lengthRef} defaultValue={8} />
          </label>
        </div>
        <div>
          <label>
          Letters
            <input ref={this.lettersRef} />
          </label>
        </div>
        <div>
          <label>
          Shape
            <input ref={this.shapeRef} />
          </label>
        </div>
        <div>
          <input type="submit" onClick={this.solve} value="Solve" />
        </div>       
        {this.state.answers && (
          <ul style={{
            gridAutoColumns: 'min-content',
            gridTemplateColumns: 'repeat( auto-fill, minmax(5em, 1fr) )',
            display: 'grid',
            gridGap: '2em',
          }}>
            {this.state.answers.map(answer => (
              <div>{answer}</div>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default CrosswordClue