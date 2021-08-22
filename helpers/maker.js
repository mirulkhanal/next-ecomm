import faker from 'faker';

class Maker {
  products = [];
  productList(count) {
    for (let i = 0; i < count; i++) {
      this.products.push({
        name: faker.commerce.productName(),
        price: faker.commerce.price(2, 22, 1, '$'),
        mediaURL: faker.image.imageUrl(500, 500, 'business', true, true),
        description: faker.lorem.paragraph(),
      });
    }
    return this.products;
  }
}

export default Maker;
