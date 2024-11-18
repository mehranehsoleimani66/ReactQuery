import { ProductState } from '../../type/products/index.type';
import Item from './item';

interface ListProps {
  products: ProductState[];
}

const List: React.FC<ListProps> = ({ products }) => {
  return (
    products &&
    products.map((product) => (
      <section className="grid grid-cols-3 gap-4">
        <Item key={product.id} product={product} />
      </section>
    ))
  );
};
export default List;
