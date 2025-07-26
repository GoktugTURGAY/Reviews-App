import { ClipLoader } from 'react-spinners';

const Spinner = ({ loading }) => {
  const override = {
    display: 'block',
    margin: '150px auto',
  };

  return (
    <ClipLoader
      color="red"
      loading={loading}
      size={150}
      cssOverride={override}
    />
  );
};

export default Spinner;
