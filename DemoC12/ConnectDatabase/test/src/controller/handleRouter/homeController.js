const fs = require('fs');
const productService = require('../../service/productService')
const cookie = require('cookie');

class HomeController {
    getProductsHtml = (products, indexHtml) => {
        let productsHtml = ''
        products.map((product, index) => {
            productsHtml += `
            <tr>
                <th scope="row">${product.id_product}</th>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.name_category}</td>
                <td><a type="button" class="btn btn-outline-info" href="/edit/${product.id_product}">Sửa</a></td>
                <td><button type="button" class="btn btn-outline-danger">Xóa</button></td>
            </tr>
            `
        })
        indexHtml = indexHtml.replace('{products}', productsHtml);
        return indexHtml;
    }
    showIndex = (req, res) => {
        fs.readFile('./view/index.html', 'utf-8', async (err, indexHtml) => {
            let cookies = cookie.parse(req.headers.cookie || '');
            console.log(cookies.user)
            let products = await productService.findAll();
            indexHtml = this.getProductsHtml(products, indexHtml);
            res.write(indexHtml);
            res.end();
        })
    }

    editProduct = (req, res, id) => {
        console.log(id);
    }

    addProduct = (req, res) => {
        if (req.method === 'GET') {

        } else {

        }
    }
    login = (req, res) => {
        res.setHeader('Set-Cookie', cookie.serialize('user', JSON.stringify({name: 'linh'}), {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7 // 1 week
        }))
        // res.writeHead(301, {location: '/home'})
        res.end();
    }
}

module.exports = new HomeController();