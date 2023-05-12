import { useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

const DogDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
  const { dogId } = useParams();
  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <Link to={backLinkLocationRef.current}>Back to Collection </Link>
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
