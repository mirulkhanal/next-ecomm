// import Maker from '../../../helpers/maker';
import Product from '../../../models/Product';

const getProductById = async (req, res) => {
  const product = await Product.findById({ _id: `${req.query.pid}` });
  res.send(product);
};

export default getProductById;
