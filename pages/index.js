import ProductList from './products';
import axios from 'axios';
import styles from '../styles/index.module.css';
const Home = ({ products }) => {
  return (
    <div className={styles.products}>
      <ProductList products={products} />
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await axios.get('http://localhost:3000/api/products');

  return {
    props: {
      products: response.data,
    },
  };
};
export default Home;
