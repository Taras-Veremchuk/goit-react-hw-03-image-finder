export function fetchImage(name) {
  const KEY = '34864361-70a0af8bc93c899dccf6f4508';
  const perPage = 12;
  const URL = `https://pixabay.com/api/?q=${this.props.value}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  return fetch(URL).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      new Error(`${this.props.value}- it doesn't valid value`)
    );
  });
}
