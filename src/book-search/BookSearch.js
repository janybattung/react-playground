import React, { Component } from 'react';
import SearchArea from './SearchArea';
import BookList from './BookList'

export default class BookSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: "",
            sort: ""
        }
    }
    
    PerformSort = (array) =>{
        if(this.state.sort === "" || this.state.sort === "All")
            return array;
        
         let sortedArray = array.filter(x=>x.volumeInfo.printType.toLowerCase().indexOf(this.state.sort.toLowerCase())!==-1);
         return sortedArray;
    }
    searchBook = (e) => {
        e.preventDefault();
        console.log("submitting");

        const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`
        console.log(this.state.searchField)
        fetch(url)
        .then(response => {
            console.log(response);
            if (response.ok) {
              return response.json();
            }
            throw new Error(response.statusText);
          })
        .then(responseJson => {
            const cleanData = this.cleanData(responseJson);
            this.setState({ books: cleanData})
        }
            )
        .catch(err => {
            console.log('Handling the error here.', err);
        });
    }

    handleSearch = (e) => {
        //console.log(e.target.value);
        this.setState({ searchField: e.target.value})
    }
    handleSort = (e) => {
        this.setState({ sort: e.target.value})
    }

    cleanData =  (data) => {
        console.log(data);
                const cleanedData = data.items.map((book) => {
            if(book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                book.volumeInfo['imageLinks'] = {thumbnail: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fno-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fno-image-available-icon-photo-camera-flat-vector-illustration-image132483141&tbnid=rTUv4JkpGmIAnM&vet=12ahUKEwiF2Mjc07zrAhUhCDQIHc_dCowQMygRegUIARDLAQ..i&docid=VFYzvrl3eeWmeM&w=800&h=800&q=no%20image%20available&ved=2ahUKEwiF2Mjc07zrAhUhCDQIHc_dCowQMygRegUIARDLAQ'}
            }
            return book;
        })
        return cleanedData;
    }
    render() {
        // const sortedBooks = this.state.books.sort
        return(
            <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
                <BookList books={this.PerformSort(this.state.books)} />
            </div>
        )
    }
}
//     constructor(props) {
//     super(props);
//     this.state = {
//         title: '',
//         response: ''
//     }
//     }


//     inputHandler = (event) => {
//         this.setState({
//            title: event.target.value 
//         })
//     }
//     render () {
//     return(
//         <form className='form' onSubmit={this.bookSearch}>
//             <label className='label' htmlFor='query'>Search:</label>
//             <input className='input' type='text' name='query' onChange={this.inputHandler} value={this.state.title} placeholder='i.e. Henry' />
//             <button className='button' type='submit'>Search</button>
//         </form>
//     )
// }
// }