import { withNextRouter } from 'storybook-addon-next-router';
import { addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { initStore } from '../src/redux/store';
import '../src/styles/reset.scss';
import '../src/styles/global.scss';
import '../src/styles/pagenation.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// createPortalで使用してるoverlayをmountするdivを追加
const overlayRoot = document.createElement('div');
overlayRoot.setAttribute('id', 'overlay');
document.body.append(overlayRoot);

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

/**
 * @see {@link https://storybook.js.org/addons/storybook-addon-next-router|Storybook Addon Next Router}
 */
addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {} // defaults to using addon actions integration, can override any method in the router
  })
);
