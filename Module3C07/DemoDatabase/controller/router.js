const ProductRouter = require('./handler/productRouter');
const handler = {
    'home': ProductRouter.showHome,
};

module.exports = handler