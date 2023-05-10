import PropTypes from 'prop-types';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';
import { GalleryList } from '../ImageGallery/ImageGallery.styled';

const ImageGalleryItem = ({ array, onClickImg }) => {
  return (
    <GalleryList>
      {array.map(({ id, webformatURL, largeImageURL, tags, total }) => (
        <GalleryItem
          key={id}
          onClick={() => {
            onClickImg(largeImageURL, tags);
          }}
        >
          <GalleryImage src={webformatURL} alt="text" />
        </GalleryItem>
      ))}
    </GalleryList>
  );
};
export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  array: PropTypes.array,
  onClickImg: PropTypes.func,
};
