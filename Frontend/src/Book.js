import React, { Component } from 'react'
import {Table} from 'react-bootstrap';

export class Book extends Component {

    constructor(props){
        super(props);
        this.state={books:[]}
    }
    refreshList(){
        fetch("https://localhost:44305/api/Books")
        .then(response => response.json())
        .then(data => {
            this.setState({books:data})
        })   
    }

    componentDidMount(){
        this.refreshList();
    }

    render() {
        const {books} = this.state;
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>authore</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book=>
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.description}</td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Book
