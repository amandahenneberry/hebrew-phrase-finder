import React from 'react'
import Results from './Results'

export class NewPhrase extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      phraseSubmit: false,
      enteredPhrase: ''
    }
    this.pastePhrase = this.pastePhrase.bind(this)
  }


  pastePhrase(e){
    const phrase = e.target.querySelector(
      'input[type="phrase"]').value;
    this.setState({
      phraseSubmit: true,
      enteredPhrase: phrase
    });
  }
 
render(){
    console.log(this.props)
  const enterPhrase = (
    <form onSubmit={this.pastePhrase}>
      <input className="phrase" type="phrase" placeholder='enter the phrase...'/>
      <input type='submit' />
    </form>
  )
  return (
    <div>
      <h3>{this.state.phraseSubmit ? '' : 'Enter the PHRASE to search for:' }</h3>
      <div>{this.state.phraseSubmit ? (
        <div>
            <p>Phrase submitted <img src="/check.png" width="15"/></p>
            <div>
                <Results doc={this.props.doc} phrase={this.state.enteredPhrase} />
            </div>
        </div>
      ):(
        <div>
            {enterPhrase}
        </div>
      )}</div>
    </div>
  )

}
}

export default NewPhrase