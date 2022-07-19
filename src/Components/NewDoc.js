import React from 'react'
import NewPhrase from './NewPhrase';

/**
 * COMPONENT
 */

export class NewDoc extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      docSubmit: false,
      enteredDoc: ''
    }
    this.pasteDoc = this.pasteDoc.bind(this)
  }


  pasteDoc(e){
    const doc = e.target.querySelector(
      'input[type="doc"]').value;
    this.setState({
        docSubmit: true,
        enteredDoc: doc
    });
  }
 
render(){
  const enterDoc = (
    <form onSubmit={this.pasteDoc}>
      <input className="doc" type="doc" placeholder='paste your doc...'/>
      <input type='submit' />
    </form>
  )
  return (
    <div className='doc'>
        {this.state.docSubmit ? (
            <div>
                <div>
                    <p>Document submitted <img src="/check.png" width="15"/></p>
                </div>
                <div><NewPhrase doc={this.state.enteredDoc}/></div>
            </div>
        ) : (
            <div>
                <h3>Copy and Paste the FULL Document you wish to search</h3>
                <p>For Microsoft Word:
                    <ol className='a'>
                        <li>Open your document in Microsoft Word.</li>
                        <li>Select 'Edit' from the main Menu Bar</li>
                        <li>From the dropdown menu, click 'Select All'</li>
                        <li>At his point, all of the text in your document should appear highlighted - check to make sure!</li>
                        <li>Select 'Edit', again, from the main Menu Bar</li>
                        <li>From the dropdown menu, click 'Copy'</li>
                        <li>Return to THIS PAGE in your web browser!</li>
                        <li>Click in the box below, like you're going to type...</li>
                        <li>Select 'Edit' your web browser's main Menu Bar</li>
                        <li>From the dropdown menu, click 'paste'</li>
                        <li>Once your pasted text loads, click the 'submit' button. You may have to wait a moment for the text to load before hitting 'submit'.</li>

                    </ol>
                </p>
                <div>{enterDoc}</div>
            </div>
        )}
    </div>
  )

}
}

export default NewDoc