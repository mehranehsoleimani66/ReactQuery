import { ProductState } from '../../type/products/index.type';
import Item from './item';

interface ListProps {
  products: ProductState[];
  refetch: any;
}

const List: React.FC<ListProps> = ({ products, refetch }) => {
  return (
    products &&
    products.map((product) => (
      <section className="grid grid-cols-4 ">
        <Item key={product.id} product={product} refetch={refetch} />
      </section>
    ))
  );
};
export default List;
