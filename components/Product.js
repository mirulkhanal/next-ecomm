import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/index.module.css';
const Product = ({ product }) => {
  return (
    <div className={`card ${styles.card}`}>
      <div className='card-image'>
        <Image
          src={product.mediaURL}
          alt={product.name}
          height={400}
          width={400}
        />
        <span className='card-title'>{product.name}</span>
      </div>
      <div className='card-content'>
        <p>{product.description}</p>
      </div>
      <div className='card-action'>
        <Link href='#'>
          <a>Add to cart</a>
        </Link>
      </div>
    </div>
  );
};

export default Product;
