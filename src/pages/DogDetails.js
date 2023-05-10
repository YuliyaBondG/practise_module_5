import { Link, Outlet, useParams } from 'react-router-dom';

const DogDetails = () => {
  const { dogId } = useParams();
  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <ul>
        <li>
          <Link to="subbreeds">Subbreed</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default DogDetails;
