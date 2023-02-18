import { Vortex } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['#FF6101', 'dark', 'orange', '#FF6101', 'dark', 'orange']}
      />
    </LoaderStyled>
  );
};
