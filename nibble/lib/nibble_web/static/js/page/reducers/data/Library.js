import {
  LIBRARY_FETCH,
  LIBRARY_FETCH_FAILED,
  LIBRARY_FETCH_SUCCESS,
  LIBRARY_FETCH_CANCEL,
} from '../../constants/actionTypes';

const initialState = {
  header: {
      title: 'Catálogo Digital',
      subtitle: 'Some really cool text about how cool it is',
      image: {
        desktop: '/images/book-1200.jpg',
      },
    },
  books:
  [
    {
      title: 'Making Things Happen',
      author: 'Elizabeth Murphy',
      editorial: 'Sector',
      id: '1',
      image: '/images/image8.jpg',
      genre: [
        'comedia',
        'terror',
      ],
    },
    {
      title: 'Welcome to Night Vale',
      author: 'Joseph Fink & Jeffrey Crannor',
      editorial: 'International',
      id: '2',
      image: '/images/image11.jpg',
      genre: [
        'novela',
      ],
    },
    {
      title: 'Paper Towns',
      author: 'John Green',
      editorial: 'Self-Publish',
      id: '3',
      image: '',
      genre: [
        'comedy',
        'terror',
        'romance',
      ],
    },
    {
      title: 'The Cat in the Hat',
      author: 'Dr. Seuss',
      editorial: 'Sector',
      id: '4',
      image: '/images/image6.jpg',
      genre: [
        'comedy',
      ],
    },
  ],
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case LIBRARY_FETCH:
      return {
        ...state,
      };
    case LIBRARY_FETCH_FAILED:
      return {
        ...state,
      };
    case LIBRARY_FETCH_CANCEL:
      return {
        ...state,
      };
    case LIBRARY_FETCH_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
