import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/Search'
import BookList from './components/BookList'

class BooksApp extends React.Component {
    state = {
      books: []
    }

    componentDidMount(){
      BooksAPI.getAll().then((books) =>{
        this.setState({books})
      })
    }

    searchBook = (book) => {
        return BooksAPI.search(book).then((books) => books)
    }

    selectBook = (book,shelf) => {
      BooksAPI.update(book,shelf)
      const existingBook = this.state.books.filter(b => b.id !== book.id)
      book.shelf = shelf
      this.setState({books:[...existingBook, book]})
    }

  render() {
    const {books} = this.state
    
    return (
      <div className="app">
        <Route path='/search' render={ () => (
          <Search 
            searchBook={this.searchBook} 
            selectBook={this.selectBook} 
            currentBooks={books}
          />
        )} />
        <Route exact path='/' render={ () => (
          <BookList 
            header='MyReads'
            selectBook={this.selectBook}
            books={books} 
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
