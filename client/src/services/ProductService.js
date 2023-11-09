import api from "./api";

const list = () => api.get(api.url.products).then((res) => res.data);

const ProductService ={
    list
};

export default ProductService;