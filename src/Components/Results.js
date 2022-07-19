import React from 'react'

/**
 * COMPONENT
 */

export class Results extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        phraseCount: 0,
        scan:false
    }
    this.count = this.count.bind(this)
  }
  
  count(){
   const doc = this.props.doc;
   const phrase = this.props.phrase;
   const result = doc.split(phrase).length-1;
    this.setState({
        scan: true,
        phraseCount: result
    })
  }

render(){
    console.log(`doc: ${this.props.doc} & phrase: ${this.props.phrase}`)
  return (
    <div>
        {this.state.scan ? (
            <div>
            <div className='doc'>
                <span>---------------------------------------------------------</span>
                <p>Searching document for phrase: <p className='lighter'>'{this.props.phrase}'</p></p>
                <span>---------------------------------------------------------</span>
                </div>
                <div className='lighter'>
                    <strong>Results:</strong>
                <p>Number of times phrase appeared: <strong>{this.state.phraseCount}</strong></p>
                <p>Pages where phrase appeared: <div style={{color:'red'}}>under development</div></p>
                <p>Download a new PDF with the phrase highlighted on each page: <div style={{color:'red'}}>under development</div></p>
                
            </div>
            </div>
        ):(
            <button onClick={this.count}>Search My Document</button>
        )}
        
    </div>
  )

}
}

export default Results