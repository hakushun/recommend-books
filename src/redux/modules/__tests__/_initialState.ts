import { RootState } from '../reducers';

export const initialState: RootState = {
  resources: {
    user: {
      user: null,
      isLoading: false,
    },
    book: {
      item: {
        id: '',
        title: '',
        authors: [],
        description: '',
        previewLink: '',
        imageUrl: '',
        usersHaveRead: [],
        usersWantRead: [],
        usersStocked: [],
        registeredBy: null,
        tags: [],
        createdAt: 0,
        updatedAt: 0,
      },
      isLoading: false,
    },
    books: {
      books: [],
      page: 0,
      maxResults: 30,
    },
    comment: {
      item: {
        id: '',
        content: '',
        author: null,
        createdAt: 0,
        updatedAt: 0,
      },
      isLoading: false,
    },
    comments: {
      comments: [],
    },
    searchResults: {
      searchResults: [],
      totalItems: 0,
      maxResults: 20,
      currentPage: 0,
      isLoading: false,
    },
  },
  ui: {
    searchResult: {
      id: '',
      volumeInfo: {
        authors: [],
        description: '',
        imageLinks: {
          thumbnail: '',
        },
        title: '',
        previewLink: '',
      },
    },
    modal: {
      registerDialog: false,
    },
    search: {
      searchword: '',
    },
    sort: {
      key: 'new',
    },
    tags: {
      tags: [],
      isEditable: false,
      selected: null,
    },
    display: {
      layout: 'card',
    },
  },
};
