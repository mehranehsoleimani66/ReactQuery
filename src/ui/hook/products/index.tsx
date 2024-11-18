import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { ProductState } from '../../../type/products/index.type';

export const useGetProduct = ({ searchQuery }: { searchQuery: string }) => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ['product'],
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

export const useDeleteProduct = () => {
  const querySetClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async ({ id }: { id: number }) => {
      const url = `http://localhost:5007/product/${id}`;

      const response = await axios.delete<ProductState[]>(url);
      return response.data;
    },
    onSuccess: (response) => {
      querySetClient.refetchQueries(['product']);
      //querySetClient.setQueriesData([''], null);
    },
    onError: (response) => {},
  });
  return { mutate };
};
