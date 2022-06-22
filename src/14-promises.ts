import axios  from "axios";

(async () => {

  function delay (time: number){
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('true');
      }, time);
    })
    return promise;
  }

  async function getProducts(){
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }
  console.log('---'.repeat(10))
  const rta = await delay(3000)
  console.log(rta)

  const products = await getProducts();
  console.log(products)

  const productsv2 = await getProducts();
  console.log(productsv2)
})();
