import api from "./api";

const get=(id)=> api.get(`${api.url.productdetail}/${id}`).then((res)=> res.data);
const ProductDetail ={
    get
};

export default ProductDetail;