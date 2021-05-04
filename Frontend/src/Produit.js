import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {Table,ButtonToolbar,Button} from 'react-bootstrap';
import AddProduit from './AddProduit';



function Produit() {
    const [produits, setProduits] = useState([])
    const [addModalShow, setAddModalShow] = useState(false)

    function refreshList() {
        axios.get("https://localhost:44318/api/produits")
        .then(response => {
            setProduits(response.data)
            console.log(response)
        })  
    }
    
    useEffect(() => {
        refreshList()
    }, [])



    return (
        <div>
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>prix</th>
                        <th>option</th>
                    </tr>
                </thead>
                <tbody>
                    {produits.map((produit, key) => (
                    <tr key={key}>
                        <td>{produit.id}</td>
                        <td>{produit.nameProduit}</td>
                        <td>{produit.prixProduit}</td>
                        <td>
                        Edit/Delete
                        </td>
                    </tr>
                    ))}
                </tbody>
            </Table>

            <AddProduit />
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#AddProduct">Add Product</button>


            
            {/* <ButtonToolbar>
                <Button variant='primary'
                    onClick={() => this.setState({ addModalShow: true })}>
                    Add Produit</Button>

                <AddProduit show={this.state.addModalShow}
                    onHide={addModalClose} />
            </ButtonToolbar> */}
        </div>

    )

}

export default Produit



// export class Produit extends Component {

//     constructor(props){
//         super(props);
//         this.state={produits:[],addModalShow: false}
//     }

//     refreshList(){
//         fetch("https://localhost:44318/api/produits")
//         .then(response => response.json())
//         .then(data => {
//             this.setState({produits:data})
//         })   
//     }

//     componentDidMount(){
//         this.refreshList();
//     }


//     render() {
//         let addModalClose = () => this.setState({ addModalShow: false });
//         const {produits} = this.state;
//         return (
//             <div>
//                 <Table className="mt-4" striped bordered hover size="sm">
//                     <thead>
//                         <tr>
//                             <th>id</th>
//                             <th>name</th>
//                             <th>prix</th>
//                             <th>option</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {produits.map(produit=>
//                         <tr key={produit.id}>
//                             <td>{produit.id}</td>
//                             <td>{produit.nameProduit}</td>
//                             <td>{produit.prixProduit}</td>
//                             <td>
//                             Edit/Delete
//                             </td>
//                         </tr>
//                         )}
//                     </tbody>
//                 </Table>
//                 <ButtonToolbar>
//                     <Button variant='primary'
//                         onClick={() => this.setState({ addModalShow: true })}>
//                         Add Produit</Button>

//                     <AddProduit show={this.state.addModalShow}
//                         onHide={addModalClose} />
//                 </ButtonToolbar>
//             </div>

//         )
//     }
// }

// export default Produit
