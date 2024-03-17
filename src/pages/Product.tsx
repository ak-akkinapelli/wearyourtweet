import styles from '../styles/product.module.scss';
import {Grid} from 'rsuite'
const Product = () => {
  return (
    <Grid className={styles.productContainer}>
      <section className={styles.customization}></section>
      <section className={styles.productDetails}>
        <div>
            <h3>The one and only custom made piece in the world, only for you</h3>
            <p>We use H&M tshirts only at the moment</p>
        </div>
      </section>
    </Grid>
  );
};
export default Product;
