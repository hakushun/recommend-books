import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BookList, Props } from '../BookList';

export default {
  title: 'molecules/BookList',
  component: BookList,
} as Meta;

const Template: Story<Props> = (args) => <BookList {...args} />;

export const Default = Template.bind({});
const books = [
  {
    usersHaveRead: [
      {
        name: '中野駿',
        id: '315X13qvz7N847FJPYpDg6KLUMz1',
        email: 'shun.nakano@nijibox.co.jp',
      },
    ],
    registeredBy: {
      email: 'shun.nakano@nijibox.co.jp',
      id: '315X13qvz7N847FJPYpDg6KLUMz1',
      name: '中野駿',
    },
    title: 'ハイパフォーマンスブラウザネットワーキング',
    authors: ['イリヤグリゴリク'],
    previewLink:
      'http://books.google.co.jp/books?id=-HCKoAEACAAJ&dq=%E3%83%8F%E3%82%A4%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6&hl=&cd=1&source=gbs_api',
    id: '-HCKoAEACAAJ',
    usersWantRead: [],
    createdAt: 1619336569848,
    description:
      '本書は「ブラウザ」に関連する、インターネットで使用される様々なネットワーク技術をまとめたものです。WebSocketやHTTP/2.0やWebRTCのように最新ブラウザで簡単に動作する新しい技術から、そのような技術の土台となるTCPやUDPやトランスポート層についてまで幅広くカバーします。',
    imageUrl:
      'https://books.google.com/books/content?id=-HCKoAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    tags: [
      {
        value: 'Takepepe',
        id: 'takepepe',
      },
      {
        id: 'typescript',
        value: 'TypeScript',
      },
    ],
    updatedAt: 1619336569848,
  },
  {
    usersHaveRead: [
      {
        id: '315X13qvz7N847FJPYpDg6KLUMz1',
        name: '中野駿',
        email: 'shun.nakano@nijibox.co.jp',
      },
    ],
    imageUrl:
      'https://books.google.com/books/content?id=0WbkswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    registeredBy: {
      name: '中野駿',
      email: 'shun.nakano@nijibox.co.jp',
      id: '315X13qvz7N847FJPYpDg6KLUMz1',
    },
    updatedAt: 1619336571489,
    usersWantRead: [],
    createdAt: 1619336571489,
    id: '0WbkswEACAAJ',
    title: 'Webフロントエンドハイパフォーマンスチューニング',
    authors: ['久保田光則'],
    description:
      'ブラウザのレンダリングのしくみから計測と最適なチューニングまで、速さのための基礎知識と実践技術をあますことなく解説。',
    tags: [
      {
        value: 'Takepepe',
        id: 'takepepe',
      },
      {
        id: 'typescript',
        value: 'TypeScript',
      },
    ],
    previewLink:
      'http://books.google.co.jp/books?id=0WbkswEACAAJ&dq=%E3%83%8F%E3%82%A4%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6&hl=&cd=3&source=gbs_api',
  },
  {
    registeredBy: {
      email: 'shun.nakano@nijibox.co.jp',
      id: '315X13qvz7N847FJPYpDg6KLUMz1',
      name: '中野駿',
    },
    title: 'エリック・エヴァンスのドメイン駆動設計',
    updatedAt: 1619336658180,
    description:
      'ドメイン駆動設計の定番書 問題解決にフォーカスした設計パターン 「この本は、思慮深いソフトウェア開発者全員の必携書である。」 ---Kent Beck 氏推薦 「Eric が見事にとらえたのは、熟練のオブジェクト設計者が常々用いてきた設計プロセスの一部でありながら、グループとして見ると、この業界の他の人々へうまく伝えられずにいたものだ。 これまで我々は、この知識を断片的には提供してきた。 しかし、ドメインロジックを構築するための原理をまとめ上げ、体系化したことはなかった。本書は重要である。」 ---『Enterprise Java Programming with IBM WebSphere』の著者 Kyle Blown氏 推薦 ソフトウェア開発コミュニティでは、ドメインモデリングがソフトウェア設計の中心であることが広く認められてきています。ドメインモデルを通して、ソフトウェア開発者は豊富な機能を表現し、それをユーザの要求に本当の意味で応えるソフトウェアの実装に移すことができます。しかし、明らかに重要であるにもかかわらず、効果的なドメインモデリングをどのようにソフトウェア開発プロセスに組み入れるかを説明する、実用的なリソースはほとんど存在しませんでした。ドメイン駆動設計はこの要求に応えるものです。これは具体的な技術についての本ではなく、読者にドメイン駆動設計への体系的なアプローチを提示するものです。設計のベストプラクティスの応用的なセット、経験に基づくテクニック、さらに、複雑なドメインに直面するソフトウェアプロジェクトにおける開発を容易にする基本原則を紹介する一冊です。 【原書タイトル】Domain-Driven Design: Tackling Complexity in the Heart of Software 本書で学べること チームメンバー全員に同じ言語で会話をさせる モデルと実装をより深く結びつける ポイントとなる特徴を、モデルにおいてはっきりさせる ドメインオブジェクトのライフサイクルを管理する 安全に結合できるドメインコードを入念に作成する 複雑なコードを明白で予測できるものにする ドメインビジョン声明文を記述する 複雑なドメインのコアを蒸留する モデルに必要な、暗黙的な概念を掘り出す アナリシスパターンを適用する デザインパターンをモデルに関係づける 巨大なシステムでモデルの整合性を維持する 同じプロジェクトで複数のモデルが共存できるようにする 大規模な構造によりシステムを構成する モデリングのブレイクスルーを認識して、それに対応する ※本電子書籍は同名出版物を底本とし作成しました。記載内容は印刷出版当時のものです。 ※印刷出版再現のため電子書籍としては不要な情報を含んでいる場合があります。 ※印刷出版とは異なる表記・表現の場合があります。予めご了承ください。 ※プレビューにてお手持ちの電子端末での表示状態をご確認の上、商品をお買い求めください。 (翔泳社)',
    id: '0sWli5U2kXwC',
    authors: ['エリック・エヴァンス'],
    imageUrl:
      'https://books.google.com/books/content?id=0sWli5U2kXwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    createdAt: 1619336658179,
    tags: [
      {
        value: 'Takepepe',
        id: 'takepepe',
      },
      {
        id: 'typescript',
        value: 'TypeScript',
      },
    ],
    previewLink:
      'http://books.google.co.jp/books?id=0sWli5U2kXwC&printsec=frontcover&dq=%E3%83%AC%E3%82%AC%E3%82%B7%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E3%81%8B%E3%82%89%E3%81%AE&hl=&cd=10&source=gbs_api',
    usersWantRead: [
      {
        name: '中野駿',
        email: 'shun.nakano@nijibox.co.jp',
        id: '315X13qvz7N847FJPYpDg6KLUMz1',
      },
    ],
    usersHaveRead: [],
  },
];
Default.args = {
  books,
  pageCount: 1,
  isLoading: false,
  handleReact: action('handleReact'),
  handlePagenate: action('handlePagenate'),
};
