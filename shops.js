const path = require('path');

exports.controllergetshop = ((req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views' , 'shop.html'))
})

exports.getproduct = ((req, res, next) => {
    const productId = req.params.productId;
    console.log(productId);
})