const homeController = require('./handleRouter/homeController')
const router = {
    "home" : homeController.showIndex,
    "edit" : homeController.editProduct,
    "add" : homeController.addProduct,
    "": homeController.login
}

module.exports = router