import { ColorRing } from 'react-loader-spinner';
import { LoaderDiv } from './loader.styled';

export const Loader = () => {
  return (
    <LoaderDiv>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </LoaderDiv>
  );
};
