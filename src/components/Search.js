import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import debounce from 'debounce'
import Book from './Book'


class Search extends Component{
    state = {
        books:[]
    }

    shouldComponentUpdate(nextProps,nextState){
       return this.state !== nextState ? true : false
    }

    searchBook = debounce((book) => {
        book = book.trim()
        if(!book){
                this.setState({books:[]})
        }else{
            this.props.searchBook(book).then((books) => {
                if(books && books.error){
                    this.setState({books:[]})                    
                }else{
                    this.setState({books})
                }
            })
        }
    },300)


    render(){
        const {books} = this.state
        return (
           <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onKeyUp={(e) => this.searchBook(e.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                    {books && books.map((book,index)=> (
                        <li key={index}><Book book={book} onSelect={this.props.selectBook}/></li>
                    ))}
              </ol>
            </div>
          </div>
        )
    }
}

export default Search