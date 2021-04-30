import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SearchResultList, Props } from '..';

export default {
  title: 'molecules/SearchResultList',
  component: SearchResultList,
} as Meta;

const Template: Story<Props> = (args) => <SearchResultList {...args} />;

export const Default = Template.bind({});

const searchResults = [
  {
    id: 'U4O3DwAAQBAJ',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/U4O3DwAAQBAJ',
    volumeInfo: {
      title: '実践TypeScript',
      authors: ['吉井健文'],
      description:
        '※この商品はタブレットなど大きいディスプレイを備えた端末で読むことに適しています。また、文字だけを拡大することや、文字列のハイライト、検索、辞書の参照、引用などの機能が使用できません。 本書は、TypeScriptの「型システム」に関する知識を体系的に学ぶための一冊です。TypeScriptやJavaScriptで、ある程度のアプリケーションを作った経験がある人を対象としているため、アプリケーション構築に必要なノウハウなどは提供していません。TypeScriptの型システムにフォーカスし、その基礎からフレームワークと連携した活用方法まで、より深く解説しています。 本書を読めば「TypeScriptは、スピーディーに品質の高いサービスを開発する上では欠かせない最高のパートナー」だということがわかるはずです。よいライブラリを使えば自動的によいアプリケーションが作れるわけではないように、型定義も個人の力量とアイディアが重要です。本書は、そういった「型定義」のスキルアップを目指すには最適の一冊です。',
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/content?id=U4O3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      previewLink:
        'http://books.google.co.jp/books?id=U4O3DwAAQBAJ&pg=PA7&dq=%E5%AE%9F%E8%B7%B5TypeScript&hl=&cd=1&source=gbs_api',
    },
  },
  {
    id: 'U4O3DwAAQBAJ',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/U4O3DwAAQBAJ',
    volumeInfo: {
      title: '実践TypeScript',
      authors: ['吉井健文'],
      description:
        '※この商品はタブレットなど大きいディスプレイを備えた端末で読むことに適しています。また、文字だけを拡大することや、文字列のハイライト、検索、辞書の参照、引用などの機能が使用できません。 本書は、TypeScriptの「型システム」に関する知識を体系的に学ぶための一冊です。TypeScriptやJavaScriptで、ある程度のアプリケーションを作った経験がある人を対象としているため、アプリケーション構築に必要なノウハウなどは提供していません。TypeScriptの型システムにフォーカスし、その基礎からフレームワークと連携した活用方法まで、より深く解説しています。 本書を読めば「TypeScriptは、スピーディーに品質の高いサービスを開発する上では欠かせない最高のパートナー」だということがわかるはずです。よいライブラリを使えば自動的によいアプリケーションが作れるわけではないように、型定義も個人の力量とアイディアが重要です。本書は、そういった「型定義」のスキルアップを目指すには最適の一冊です。',
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/content?id=U4O3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      previewLink:
        'http://books.google.co.jp/books?id=U4O3DwAAQBAJ&pg=PA7&dq=%E5%AE%9F%E8%B7%B5TypeScript&hl=&cd=1&source=gbs_api',
    },
  },
  {
    id: 'U4O3DwAAQBAJ',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/U4O3DwAAQBAJ',
    volumeInfo: {
      title: '実践TypeScript',
      authors: ['吉井健文'],
      description:
        '※この商品はタブレットなど大きいディスプレイを備えた端末で読むことに適しています。また、文字だけを拡大することや、文字列のハイライト、検索、辞書の参照、引用などの機能が使用できません。 本書は、TypeScriptの「型システム」に関する知識を体系的に学ぶための一冊です。TypeScriptやJavaScriptで、ある程度のアプリケーションを作った経験がある人を対象としているため、アプリケーション構築に必要なノウハウなどは提供していません。TypeScriptの型システムにフォーカスし、その基礎からフレームワークと連携した活用方法まで、より深く解説しています。 本書を読めば「TypeScriptは、スピーディーに品質の高いサービスを開発する上では欠かせない最高のパートナー」だということがわかるはずです。よいライブラリを使えば自動的によいアプリケーションが作れるわけではないように、型定義も個人の力量とアイディアが重要です。本書は、そういった「型定義」のスキルアップを目指すには最適の一冊です。',
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/content?id=U4O3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      previewLink:
        'http://books.google.co.jp/books?id=U4O3DwAAQBAJ&pg=PA7&dq=%E5%AE%9F%E8%B7%B5TypeScript&hl=&cd=1&source=gbs_api',
    },
  },
];

Default.args = {
  isLoading: false,
  searchResults,
  handleSelect: action('handleSelect'),
};
