import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface ProductState {
  id: number;
  name: string;
  description: string;
  year_of_creation: number;
  rating: number;
  views: number;
  country: string;
  price: number;
}

const Page = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const url = `http://localhost:5007/product`;
      const response = await axios.get<ProductState>(url);
      console.log(response.data);
      return response.data;
    },
  });
  return (
    <div>
      {isLoading && <>loading .....</>}
      {isError && <>error is happening</>}{' '}
    </div>
  );
};
export default Page;
