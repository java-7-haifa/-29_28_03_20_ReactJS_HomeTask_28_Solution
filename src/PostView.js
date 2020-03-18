import React from "react";
import LikeCounter from "./LikeCounter";

export default class PostView extends React.Component {
  state = {
    name: '',
    message: ''
  };

  onClickHandler(){
    this.props.addCommentHandler(
        this.props.pid,
        this.state.name,
        this.state.message
      );
      this.setState({name:'',message:''});
  }

  getCountColored(cnt){
      if(cnt === 0){
          return (<span className="text-secondary">{cnt}</span>);
      }else if(cnt > 0){
          return <span className="text-success">{cnt}</span>;
      }else{
        return <span className="text-danger">{cnt}</span>;
      }
  }

  render() {
    return (
      <>
        <h1>{this.props.author}</h1>
        <h2>{this.props.date}</h2>
        <p>{this.props.text}</p>
        <ul>
          {this.props.comments.map(comment => {
            return (
              <li key={comment.id} className="card">
                <h3>{comment.author}</h3>
                <h4>{comment.date}</h4>
                <p>{comment.message}</p>
                {/* <i className="material-icons" onClick={()=>this.props.addLikeHandler(this.props.pid,comment.id, comment.likes - 1)}>thumb_down</i>
                {this.getCountColored(comment.likes)}
                <i className="material-icons" onClick={()=>this.props.addLikeHandler(this.props.pid,comment.id, comment.likes + 1)}>thumb_up</i> */}
                <LikeCounter count={comment.likes} addLikeHandler={(count) => this.props.addLikeHandler(this.props.pid,comment.id,count)}/>
              </li>
            );
          })}
        </ul>
        <hr />
        <input
          className="form-control"
          placeholder="Type your name"
          value={this.state.name}
          onChange={e => this.setState({ ...this.state, name: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Type your message"
          value={this.state.message}
          onChange={e => this.setState({ ...this.state, message: e.target.value })}
        />
        <button
          className="btn btn-primary"
          onClick={() => this.onClickHandler()}
        >
          Send
        </button>
      </>
    );
  }
}
