import axios from "axios";



class ProductService{
getAllProdct(){
    return axios.get("http://localhost:3001/product").then (res=>res.data);
}
}
export default new ProductService();

