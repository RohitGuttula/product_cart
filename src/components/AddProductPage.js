import React from "react";
import axios from 'axios';
//import "Access-Control-Allow-Origin";
import { Formik, Form, Field } from 'formik';
export default class AddProductPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        ProductName:'',
        Quantity:'',
        Price:'',
        errors: {}
        };
      }
      handleValidation() {    
      
        let ProductName = this.state.ProductName;
        let Quantity=this.state.Quantity;  
        let Price=this.state.Price;
        let errors = {};
        let formIsValid = true;
    
        //Name
        if (!ProductName) {
          formIsValid = false;
          errors["ProductName"] = "Cannot be empty";
        }
        if (!Quantity) {
          formIsValid = false;
          errors["Quantity"] = "Cannot be empty";
        }
        if (!Price) {
          formIsValid = false;
          errors["Price"] = "Cannot be empty";
        }
        this.setState({ errors: errors });
        return formIsValid;
      }
      changeHandler=(e)  =>{
        this.setState({
          [e.target.name]: e.target.value
      })
        
    }
      submitHandler = (e) => {
        e.preventDefault()
        if (this.handleValidation()) {
          alert("Form submitted");
        
        axios.post(' http://localhost:3001/products', this.state)
        .then(response => {
            console.log(response)
        })}
        else {
          alert("Form has errors.");
        }
    }
      
      render() {    
          return (
            <div>
             
            <form onSubmit={this.submitHandler.bind(this)}>
              <label for="ProductName">Product Name</label><br></br>
                  <input
                    name="ProductName"
                    type="text"
                    onChange={this.changeHandler}
                    value={this.state.ProductName}
                    id="ProductName"
                    />
              <span style={{ color: "red" }}>{this.state.errors["ProductName"]}</span>
              <br />   
                            
                  
                
                  <br />
                  <label for="Quantity">Quantity</label><br></br>
                  <input
                    name="Quantity"
                    type="text"
                    onChange={this.changeHandler}
                    value={this.state.Quantity}
                    />
                       <span style={{ color: "red" }}>{this.state.errors["Quantity"]}</span>
                    <br />
                    <label for="Price">Price</label><br></br>
                    <input
                      name="Price"
                      type="text"
                      onChange={this.changeHandler}
                      value={this.state.Price}
                      />
                    
                    <span style={{ color: "red" }}>{this.state.errors["Price"]}</span>
                    <br />
                   
                    <br />
               <button>submit</button>
               </form>
                </div>
           
  )
        }
      }
  
  
       
