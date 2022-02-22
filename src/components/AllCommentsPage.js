import React from "react";
import CommentList from './CommentList';
import CommentApi from '../Data/CommentApi.js';
import { Link } from "react-router-dom";
export default class AllCommentsPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products:[]
        };
    }
    componentDidMount(){
         CommentApi.getAllComponents(data=>this.setState({products: data}));
    } 
   
l
    render(){
        return(
            <>
             <CommentList products={this.state.products}/>
             <br />
             <Link to='/addProduct'>Add Product</Link>
            </>
        );
    }

}