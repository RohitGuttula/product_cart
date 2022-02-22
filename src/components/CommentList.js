import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component{
        render(){
            var commentNodes= this.props.products.map(comment => (
                <Comment 
                         ProductName={comment.ProductName} 
                         Quantity={comment.Quantity}
                         Price={comment.Price} >   
                </Comment> 
            ));
    return(
     <>
     <table>
     <thead>
         <tr>
             <th>ProductName</th>
             <th>Quantity</th>
             <th>Price</th>
         </tr>
     </thead>
     <tbody>
         {commentNodes}
     </tbody>
     </table>
     </>
    );
}
}