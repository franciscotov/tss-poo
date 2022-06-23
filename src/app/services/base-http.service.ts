import axios from "axios";
import { UpdateProductDto } from "../dtos/product.dto";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

/**
 * tambien podemos usar tipados dinamicos en classes
 */
export class BaseHttpService<TypeClass> {
  // private data: TypeClass[] = [];

  constructor(
    protected url: string
  ){}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url)
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.getAll();

(async()=> {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);

  const rta = await productService.getAll();
  console.log(rta.length);
  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'titulo'
  })

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);

  const rta1 = await categoryService.getAll();
  console.log(rta1.length);
  // categoryService.update<Category['id'], UpdateProductDto>(1, {
  //   title: 'titulo'
  // })
})();
