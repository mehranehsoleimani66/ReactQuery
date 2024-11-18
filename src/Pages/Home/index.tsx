import { useState } from 'react';
import List from '../../components/products/list';
import Error from '../../components/shared/error';
import Loading from '../../components/shared/loading';
import { useGetProduct } from '../../ui/hook/products';

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data, isError, isLoading, refetch } = useGetProduct({
    searchQuery,
  });
  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error />}
      {data && <List products={data} />}
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="rounded p-3 bg-gray-400 mt-2"
      />
    </div>
  );
};
export default Page;
