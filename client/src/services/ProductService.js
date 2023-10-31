import api from "./api";

const list = () => api.get(api.url.products).then((res) => res.data);

const productService ={
    list,
};

export default productService;