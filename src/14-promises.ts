import axios from 'axios';

(async () => {
  function delay(time: number): Promise<boolean> {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(true), time);
    });

    return promise;

    // return new Promise((resolve) => {
    //   setTimeout(() => resolve(true), time);
    // });
  }

  function getProducts(): Promise<any> {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAsync(): Promise<any> {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  //const rta = await delay(2000);
  //console.log(rta);

  const products = await getProductsAsync();
  console.log(products);
})();
