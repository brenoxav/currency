import { useParams } from 'react-router';

const Currency = () => {
  const { code } = useParams();

  return (
    <main>
      Details page for
      {code}
    </main>
  );
};

export default Currency;
