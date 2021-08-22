import init from '../../helpers/dbConn';
import Product from '../../models/Product';
import Maker from '../../helpers/maker';

init();
const productRoutes = async (req, res) => {
  // const products = await Product.find();
  const products = await Product.find();

  res.send(products);
};
export default productRoutes;

// for (let i = 0; i < products.length; i++) {
//   const product = new Product({
//     name: products[i].name,
//     price: products[i].price,
//     description: products[i].description,
//     mediaURL: products[i].mediaURL,
//   });

//   await product.save();
// }
