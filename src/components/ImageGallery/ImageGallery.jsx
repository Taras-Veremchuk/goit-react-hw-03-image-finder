import PropTypes from 'prop-types';
import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal';
import Button from 'components/Button/Button';
import { OopsMessage } from 'components/ImageGalleryItem/ImageGalleryItem.styled';

class ImageGallery extends React.Component {
  state = {
    text: '',
    largeImageURL: '',
    showModal: false,
  };
  // == Image ==
  onClickImg = (url, text) => {
    this.toggleModal();
    this.setState({ largeImageURL: url, text: text });
  };
  // == Modal ==
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  // == Render ==
  render() {
    const { showModal, largeImageURL, text } = this.state;
    const { images, loading, onLoadMoreClick } = this.props;
    return (
      <>
        <ImageGalleryItem array={images} onClickImg={this.onClickImg} />
        {images.length > 0 ? (
          loading ? (
            <Loader />
          ) : (
            <Button onClick={onLoadMoreClick} />
          )
        ) : (
          <OopsMessage>
            OOPS...There is no valid answer for your query. Try again
          </OopsMessage>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal} url={largeImageURL} text={text} />
        )}
      </>
    );
  }
}
export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array,
  onLoadMoreClick: PropTypes.func,
  loading: PropTypes.bool,
};
