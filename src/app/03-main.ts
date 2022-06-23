import { ProductHttpService } from "./services/product-http.service";

(async () =>{
  const productService = new ProductHttpService();

  try {
    console.log('-----');
    const products = await productService.getAll();
    console.log(products.length)
    console.log(products.map(item => item.price));

    const productId = products[0].id;
    await productService.update(productId, {
      price: 100000,
      title: 'neuevo titulo',
      description: 'nueva des'
    });
    const product = await productService.findOne(productId);
    console.log(product, 'product')
  } catch (error) {

  }
})();
