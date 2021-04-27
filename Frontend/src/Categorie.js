import React, { Component } from 'react'
import {Table} from 'react-bootstrap';

export class Categorie extends Component {
    
    constructor(props){
        super(props);
        this.state={categories:[]}
    }

    refreshList(){
        fetch("https://localhost:44318/api/Catégories")
        .then(response => response.json())
        .then(data => {
            this.setState({categories:data})
        })   
    }

    componentDidMount(){
        this.refreshList();
    }

    render() {
        const {categories} = this.state;


        let optionItems = categories.map((categorie) =>
                <option key={categorie.id}>{categorie.nameCatégorie}</option>
        );


        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(categorie=>
                        <tr key={categorie.id}>
                            <td>{categorie.id}</td>
                            <td>{categorie.nameCatégorie}</td>
                            <td>{categorie.imageCatégorie}</td>
                        </tr>
                        )}
                    </tbody>
                </Table>
                <div>
                    <select>
                        {optionItems}
                    </select>
                </div>
            </div>
        )
    }
}

export default Categorie
