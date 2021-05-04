// import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import React, { useState } from 'react'
import axios from 'axios'


function AddProduit() {

    const [Produit, setProduct] = useState('')
    const [prix, setPrix] = useState('')



    function handleSubmit(){
        // axios.post('https://localhost:44318/api/Produits/', {Produit, prix} )
        // .then(response => {
        //     console.log(response)
        // })
        fetch("https://localhost:44318/api/Produits",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                produit: Produit
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result)
        },
        (error)=>{
            alert('Failed')
        })
    }


    return (
        <>
        <div class="modal fade" id="AddProduct" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label class="col-form-label">Add products:</label>
                    <input type="text" class="form-control" onChange={(e) => setProduct(e.target.value)} />
                </div>
                <div class="form-group">
                    <label class="col-form-label">Price:</label>
                    <input type="text" class="form-control" onChange={(e) => setPrix(e.target.value)}/>
                </div>

                <div class="form-group">
                    <button type='submit' className='btn btn-primary'>ADD</button>
                </div>
            </form>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
        </>













        
    )
}

export default AddProduit





// ________________________________________________
//         <div className="container">
//         <Modal
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//             >
//             <Modal.Header clooseButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                     Add Department
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Row>
//                     <Col sm={6}>
//                         <h1>{product}</h1>
//                         <Form onSubmit={handleSubmit}>
//                             <Form.Group controlId="nameProduit">
//                                 <Form.Label>Name Produit</Form.Label>
//                                 <Form.Control type="text" name="nameProduit" onChange={(e) => {setProduct(e.target.value)}} required 
//                                 placeholder="name Produit"/>
//                             </Form.Group>

//                             <Form.Group controlId="prixProduit">
//                                 <Form.Label>Prix Produit</Form.Label>
//                                 <Form.Control type="text" name="prixProduit" onChange={(e) => {setPrix(e.target.value)}} required 
//                                 placeholder="Prix Produit"/>
//                             </Form.Group>

//                             <Form.Group>
//                                 <Button variant="primary" type="submit">
//                                     Add Produit
//                                 </Button>
//                             </Form.Group>
//                         </Form>
//                     </Col>
//                 </Row>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="danger">Close</Button>
//             </Modal.Footer>
//             </Modal>
//         </div>












//     constructor(props){
//         super(props);
//         this.handleSubmit=this.handleSubmit.bind(this);
//     }


//     handleSubmit(event){
//         event.preventDefault();
//         fetch('https://localhost:44318/api/Produits/',{
//             method:'POST',
//             headers:{
//                 'Accept':'application/json',
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 id:null,
//                 nameProduit:event.target.nameProduit.value,
//                 prixProduit:event.target.prixProduit.value
//             })
//         })
//         .then(res=>res.json())
//         .then((result)=>{
//             alert(result);
//         },
//         (error)=>{
//             alert('Failed');
//         })
//     }



//     render() {
//         return (
//             <div className="container">
//             <Modal
//                 {...this.props}
//                 size="lg"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered
//                 >
//                 <Modal.Header clooseButton>
//                     <Modal.Title id="contained-modal-title-vcenter">
//                         Add Department
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Row>
//                         <Col sm={6}>
//                             <Form onSubmit={this.handleSubmit}>
//                                 <Form.Group controlId="nameProduit">
//                                     <Form.Label>Name Produit</Form.Label>
//                                     <Form.Control type="text" name="nameProduit" required 
//                                     placeholder="name Produit"/>
//                                 </Form.Group>

//                                 <Form.Group controlId="prixProduit">
//                                     <Form.Label>Prix Produit</Form.Label>
//                                     <Form.Control type="text" name="prixProduit" required 
//                                     placeholder="Prix Produit"/>
//                                 </Form.Group>

//                                 <Form.Group>
//                                     <Button variant="primary" type="submit">
//                                         Add Produit
//                                     </Button>
//                                 </Form.Group>
//                             </Form>
//                         </Col>
//                     </Row>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="danger" onClick={this.props.onHide}>Close</Button>
//                 </Modal.Footer>
//                 </Modal>
//             </div>
//         )
//     }
// }

// export default AddProduit


/*
import React, { Component } from 'react'
import ReactDOM from 'react-dom';


export class AddProduit extends Component {
    constructor(props){
        super(props);
        this.state={
            message:''
        };
    }
    onCreateProduit=()=>{
        let produitInfo={
            Name:this.refs.nameProduit.value,
            prix:this.refs.prixProduit.value
        };

        fetch('https://localhost:44318/api/Produits/',{
            method:'Create'
        })
    }


    render() {
        return (
            <div>
                <h2>Enter produit Details</h2>
                <p>
                    <label>Produit name: <input type="text" ref="nameProduit"/> </label>
                </p>
                <p>
                    <label>Produit prix: <input type="text" ref="prixProduit"/> </label>
                </p>
                <button onClick={this.onCreateProduit}>Add</button>
            </div>
        )
    }
}

export default AddProduit
*/