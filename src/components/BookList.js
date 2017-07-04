import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

const BookList = (props) => (
       <div className="list-books">
            <div className="list-books-title">
                <h1>{props.header}</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf title="Currently Reading" books={props.books.filter((book)=> book.shelf === 'currentlyReading')} selectBook={props.selectBook}/>
                    <BookShelf title="Want to Read" books={props.books.filter((book)=> book.shelf === 'wantToRead')} selectBook={props.selectBook}/>
                    <BookShelf title="Read" books={props.books.filter((book)=> book.shelf === 'read')} selectBook={props.selectBook}/>
                </div>
            </div>
            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
)

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    header: PropTypes.string.isRequired,
    selectBook: PropTypes.func.isRequired
}

export default BookList