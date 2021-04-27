import React, { Component } from 'react'
import {Table} from 'react-bootstrap';


export class Produit extends Component {

    constructor(props){
        super(props);
        this.state={produits:[]}
    }

    refreshList(){
        fetch("https://localhost:44318/api/produits")
        .then(response => response.json())
        .then(data => {
            this.setState({produits:data})
        })   
    }

    componentDidMount(){
        this.refreshList();
    }


    render() {
        const {produits} = this.state;
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produits.map(produit=>
                        <tr key={produit.id}>
                            <td>{produit.id}</td>
                            <td>{produit.nameProduit}</td>
                            <td>{produit.prixProduit}</td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Produit
