import init from '../../helpers/dbConn';
// import Product from '../../models/Product';
import Maker from '../../helpers/maker';

init();
const productRoutes = async (req, res) => {
  // const products = await Product.find();
  const products = new Maker().productList(20);
  res.status(200).send(products);
};
export default productRoutes;
