import React from 'react'
import Book from './Book'

const BookShelf = (props) => (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {props.books.map((book,index)=> (
                            <li key={index}><Book book={book} onSelect={props.selectBook}/></li>
                        ))}
                    </ol>
                </div>
            </div>
        )
export default BookShelf