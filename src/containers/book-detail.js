import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {

  render(){
    if(!this.props.activeBook){
      return <div> Select a Book </div>
    }
    return(
      <div className="col-sm-4">
        <h2>Book </h2>
        <h4>Title: {this.props.activeBook.title}</h4>
        <span>Pages:{this.props.activeBook.pages}</span>
      </div>
    )

  }
}

function mapStateToProps(state){
  return{
    activeBook: state.activeBook
  }
}
export default connect(mapStateToProps)(BookDetail);
