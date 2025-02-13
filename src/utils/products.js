// All logic of products store
import productsListArray from '../database/products.json';

export const loadInitialProducts = () => {
    // creo una variable de localstorage para almacenar los productos
    const savedProducts = localStorage.getItem('products');
    // si hay datos existentes, usarlos, de lo contrario que comience con la lista inicial de productos
    return savedProducts ? JSON.parse(savedProducts) : productsListArray;
}

// para guardar los productos en el localstorage - pasar la lista de productos por argumento -
export const saveProducts = (products) => {
    localStorage.setItem('products', JSON.stringify(products))
};

export const deleteProduct = (products, productId) => {
    const filteredProducts = products.filter((product) => product.id !== productId);
    return filteredProducts;
}

export const updateProduct = (products, productId, productName, price, brand, stock, URLImage, description) => {
    return products.map((product) => {
        if(product.id === productId) {
            //product.images.push(URLImage)
            return {
                ...product,
                title : productName,
                price : price,
                brand : brand,
                stock : stock,
                thumbnail : URLImage,
                description : description
            }
        }
        return product; //En caso de no haber cambios
    });
}