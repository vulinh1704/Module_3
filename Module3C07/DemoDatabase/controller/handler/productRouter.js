const fs = require('fs');
const productService = require('D:\\JavaScript\\Module3\\DemoDatabase\\service\\productService.js');
class ProductRouter {
     static getHtmlProducts(products, indexHtml) {
        let tbody = ''
        products.map((product, index) => {
            tbody += `<tr>
      <th scope="col">${index}</th>
      <th scope="col">${product.name}</th>
      <th scope="col">${product.price}</th>
      <th scope="col"><a href="./product/edit/${product.id}" class="btn btn-info">Edit</a></th>
      <th scope="col"><a href="./product/delete/${product.id}" class="btn btn-info">Delete</a></th>
      </tr>`
        })
        indexHtml = indexHtml.replace('{products}', tbody);
        return indexHtml;
    }

    static showHome(req, res) {
        fs.readFile('./views/index.html', 'utf-8', async (err, indexHtml) => {
            if (err) {
                console.log(err);
            } else {
                let products = await productService.getProducts();
                indexHtml = ProductRouter.getHtmlProducts(products, indexHtml);
                res.writeHead(200, 'text/html');
                res.write(indexHtml);
                res.end();
            }
        })
    }
}

module.exports =ProductRouter;