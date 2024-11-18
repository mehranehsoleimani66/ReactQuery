import { ProductState } from '../../type/products/index.type';

interface ItemProps {
  product: ProductState;
}

const Item: React.FC<ItemProps> = ({ product }) => {
  const { name } = product;
  return (
    <section className="border p-2 rounded-lg flex flex-col gap-4">
      {name}
    </section>
  );
};
export default Item;
