import { ProductState } from '../../type/products/index.type';
import { useDeleteProduct } from '../../ui/hook/products';

interface ItemProps {
  product: ProductState;
  refetch: any;
}

const Item: React.FC<ItemProps> = ({ product, refetch }) => {
  const { name } = product;
  const { mutate } = useDeleteProduct({ refetch });
  const deleteHandler = () => {
    mutate({ id: product.id });
  };
  return (
    <section className="border p-2 rounded-lg flex flex-col gap-4 w-96">
      {name}
      <button className="bg-red-500 w-200 " onClick={deleteHandler}>
        حذف{' '}
      </button>
    </section>
  );
};

export default Item;
