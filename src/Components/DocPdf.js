import React from "react";
import ReactToPrint from "react-to-print";
import Highlighter from "react-highlight-words";


class TextComponent extends React.PureComponent {
  
  render() {
    const doc = this.props.doc;
    const phrase = this.props.phrase;
    return (
    <div id="screenFiller">
      {/* {this.props.doc} */}
      <Highlighter
      highlightClassName="YourHighlightClass"
      // searchWords={["and", "or", "the"]}
      searchWords={[phrase]}
      autoEscape={true}
      textToHighlight={doc}
    />
    </div>
    )
  }
}
  
export class DocPdf extends React.PureComponent {
    componentRef = null;
  
    constructor(props) {
      super(props);
  
      this.state = {
        isLoading: false,
        text: "old boring text"
      };
    }
  
    setComponentRef = (ref) => {
      this.componentRef = ref;
    };
  
    reactToPrintContent = () => {
      return this.componentRef;
    };
  
    reactToPrintTrigger = () => {
      // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
      // to the root node of the returned component as it will be overwritten.
  
      // Bad: the `onClick` here will be overwritten by `react-to-print`
      // return <button onClick={() => alert('This will not work')}>Print this out!</button>;
  
      // Good
      return <button>Generate a PDF</button>;
    };
  
    render() {
      return (
        <div>
          <ReactToPrint
            content={this.reactToPrintContent}
            documentTitle="NewHighlightedDoc"
            removeAfterPrint
            trigger={this.reactToPrintTrigger}
          />
          {this.state.isLoading && (
            <p className="indicator">onBeforeGetContent: Loading...</p>
          )}
          <div>
          <TextComponent doc={this.props.doc} phrase={this.props.phrase} ref={this.setComponentRef} />
          </div>
        </div>
      );
    }
  }
  