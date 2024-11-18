import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ProductState } from '../../../type/products/index.type';

export const useGetProduct = ({ searchQuery }: { searchQuery: string }) => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ['product', { query: searchQuery }],
    queryFn: async () => {
      const url = searchQuery
        ? `http://localhost:5007/product?name=${searchQuery}`
        : `http://localhost:5007/product`;
      const response = await axios.get<ProductState[]>(url);
      return response.data;
    },
    initialData: [],
  });
  return { data, isError, isLoading, refetch };
};
