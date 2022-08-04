import Loadable from '../../components/Loadable';
import { lazy } from 'react';

const LazyAbout = lazy(() => import('./ViewProduct'));

const ViewProduct = (props) => (
  <Loadable>
    <LazyAbout {...props} />
  </Loadable>
);

export default ViewProduct;
