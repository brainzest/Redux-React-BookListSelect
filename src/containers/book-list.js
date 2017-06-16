import React , {Component} from 'react';
import {connect} from 'react-redux';
//react-redux glues and merges react and redux library
//we use only connect component of the library

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
  //props has 'books' as object which we get
  //from mapStateToProps (also redux application state)
  renderList(){
    return this.props.books.map((book)=>{
      return(
        <li key={book.title} onClick={()=>this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    })
  }
  render(){
    console.log(this.props);
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//Containers are a link between React and redux
//get list of books from array from application state
function mapStateToProps(state){
  //whatever is returned will show up as props
  //inside of BookList
  return{
    books: state.books
  }
}
//if 'state' ever changes it renders component prop automatically
///when application state changes booklist



//Anything returned from this function will end up as props
//on the Booklist Container
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, result should be
  //passed to all reducers
  return bindActionCreators({selectBook:selectBook},dispatch)
}


// 'connect' function takes 'mapStateToProps' and Booklist component and
//return it as a *** Container ****( creates a container) which we need to export

// Promote BookList from a coomponet to container. It needs to know
//about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
