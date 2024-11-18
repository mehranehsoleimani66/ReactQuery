import { useQuery } from '@tanstack/react-query';

const Page = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['product'],
    queryFn: () => {
      return true;
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
