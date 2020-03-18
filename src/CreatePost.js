import React from "react";

export default class extends React.Component {
  state = {
    author: "",
    shortDesc: "",
    text: ""
  };

  changeAuthorHandler = (author) => {
    this.setState({...this.state,author});
  }

  changeShortDescHandler = (shortDesc) => {
      this.setState({...this.state,shortDesc});
  }

  changeTextHandler = (text)=>{
      this.setState({...this.state,text});
  }

  onAddClickHandler = () => {
      this.props.addPostHandler({...this.state});
      this.setState({
        author:'',
        shortDesc:'',
        text:''
      });
  }

  render() {
    return (
      <>
        <div className="row col-12">
          <div className="input-field col-6">
            <input 
            id="author" 
            type="text" 
            className="validate" 
            value={this.state.author}
            onChange={(e) => this.changeAuthorHandler(e.target.value)}/>
            <label htmlFor="author">Author</label>
          </div>
        </div>
        <div className="row col-12">
          <div className="input-field col-6">
            <input 
            id="shortDesc" 
            type="text" 
            className="validate" 
            value={this.state.shortDesc}
            onChange={(e) => this.changeShortDescHandler(e.target.value)}/>
            <label htmlFor="shortDesc">Short Description</label>
          </div>
        </div>
        <div className="row col-12">
          <div className="input-field col-6">
            <textarea 
            id="fullText" 
            className="materialize-textarea" 
            value={this.state.text}
            onChange={(e) => this.changeTextHandler(e.target.value)}/>
            <label htmlFor="fullText">Text</label>
          </div>
        </div>
        <div className="row col-12">
          <a class="waves-effect waves-light btn-large" onClick={(e)=>{
              e.preventDefault();
              this.onAddClickHandler();
          }}>Add</a>
        </div>
      </>
    );
  }
}
