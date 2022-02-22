import  axios  from 'axios';
export default class CommentApi{
    static getAllComponents(cb){
        axios.get('http://localhost:3001/products')
                 .then(response=>{
                    cb(response.data)
                 .catch(error => {throw error});
                 })
    }
}