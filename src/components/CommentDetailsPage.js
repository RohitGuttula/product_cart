import { useParams } from "react-router-dom";



 const CommentDetailsPage = (props) => {


   alert("are you sure you want to view details");
      const { ProductName } = useParams()



      return (
      

         <div><h1> {ProductName} </h1></div>

      );

  };  

  export default CommentDetailsPage;