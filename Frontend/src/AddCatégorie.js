import React, { Component } from 'react'

export class AddCatégorie extends Component {

    async postData(){
        try{
            let result = await fetch('',{
                method:'post',
                mode:'no-cors',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json',
                },
                body:JSON.stringify({

                })
            });
            
        }catch(e){
            console.log(e)
        }
    }

    render() {
        return (
            <div>
                <button></button>
            </div>
        )
    }
}

export default AddCatégorie
