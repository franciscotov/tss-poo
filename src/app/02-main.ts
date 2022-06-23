import { ProductMemoryService } from "./services/product-memory.service";


const productService = new ProductMemoryService();

productService.create({
  title: 'producto1',
  price: 100,
  description: 'description',
  categoryId: 12,
  images: []
});

const products = productService.getAll()
console.log(products);

const productId = products[0].id;

productService.update(productId, {
  title: 'cambiar nombre'
});

const rta = productService.findOne(productId);
console.log(rta);
