import { Provider } from 'react-redux';
import { initStore } from '../src/redux/store';
import '../src/styles/reset.scss';
import '../src/styles/global.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    const store = initStore({});
    return (
      <Provider store={store}>
        <Story />
      </Provider>
    );
  },
];
