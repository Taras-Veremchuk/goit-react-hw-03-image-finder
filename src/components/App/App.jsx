import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import Searchbar from '../Searchbar';
import { Ap, HelloMessage } from './App.styled';
import ImageGallery from 'components/ImageGallery/ImageGallery';

class App extends React.PureComponent {
  state = {
    loading: false,
    value: '',
    images: null,
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      this.loadData();
    }
  }
  // == Request method ==
  loadData = () => {
    this.setState({ loading: true });
    const KEY = '34864361-70a0af8bc93c899dccf6f4508';
    const perPage = 12;
    const URL = `https://pixabay.com/api/?q=${this.state.value}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
    fetch(URL)
      .then(data => {
        if (data.ok) {
          return data.json();
        }
      })
      .then(images => {
        this.setState(prevstate => ({
          images: [...(prevstate.images || []), ...images.hits],
          loading: false,
          error: null,
        }));
      })
      .catch(error => console.error(error));
  };

  // == Searchbar method ==
  handleFormSubmit = value => {
    this.setState({ value: value, images: null, page: 1, totalHits: 0 });
  };

  // == Button Load More ==
  onLoadMoreClick = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  //== Render ==
  render() {
    const { value, images, page, loading } = this.state;
    return (
      <Ap>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {!value && <HelloMessage>Hello! Find what you like</HelloMessage>}
        {loading && <Loader />}
        {images && (
          <ImageGallery
            value={value}
            images={images}
            page={page}
            loading={loading}
            onLoadMoreClick={this.onLoadMoreClick}
          />
        )}
        <ToastContainer autoClose={3000} />
      </Ap>
    );
  }
}
export default App;
