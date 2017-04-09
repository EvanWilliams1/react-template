export const AddProduct = function(myProduct){
    return ({
        type: 'Add_Product',
        value: myProduct
    });
};

export const RemoveProduct = function(myProduct){
    return({
        type: 'Remove_Product',
        value: myProduct
    });
};

export const SetProducts = function(myProducts){
    return({
        type: 'Get_Products',
        value: myProducts
    })
}