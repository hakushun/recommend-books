/* eslint-disable no-undefined */
import reducer, {
  add,
  remove,
  select,
  toggle,
  selectTags,
  selectIsEditable,
  selectSelectedTags,
  selectPopularTags,
} from '../tags';
import { update } from '../book';
import { initialState } from './_initialState';

describe('Reducer: tags', () => {
  const user = {
    id: '1',
    email: 'sample@sample.com',
    name: 'test user',
  };
  const book = {
    id: '123456',
    title: 'dummy title',
    authors: ['author1', 'author2'],
    description: 'sample description',
    previewLink: 'https://suumo.jp/',
    imageUrl: 'https://suumo.jp/',
    usersHaveRead: [user],
    usersWantRead: [],
    registeredBy: user,
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
    createdAt: 0,
    updatedAt: 0,
  };
  const tags = [
    {
      value: 'Takepepe',
      id: 'takepepe',
    },
    {
      id: 'typescript',
      value: 'TypeScript',
    },
  ];
  const updatePayload = { item: book, tags };
  it('Initial state', () => {
    const result = reducer(undefined, { type: '' });
    expect(result).toEqual({ tags: [], isEditable: false, selected: null });
  });

  it('Action: toggle', () => {
    const action = toggle(true);
    const result = reducer(undefined, action);
    expect(result).toEqual({ tags: [], isEditable: true, selected: null });
  });

  it('Action: add', () => {
    const action = add('dummyTag');
    const result = reducer(undefined, action);
    expect(result).toEqual({
      tags: [{ id: 'dummytag', value: 'dummyTag' }],
      isEditable: false,
      selected: null,
    });
  });

  it('Action: remove last one', () => {
    const action = remove();
    const result = reducer(
      {
        tags: [
          { id: 'dummytag', value: 'dummyTag' },
          { id: 'sampletag', value: 'sampleTag' },
        ],
        isEditable: false,
        selected: null,
      },
      action,
    );
    expect(result).toEqual({
      tags: [{ id: 'dummytag', value: 'dummyTag' }],
      isEditable: false,
      selected: null,
    });
  });

  it('Action: remove target one', () => {
    const action = remove('dummytag');
    const result = reducer(
      {
        tags: [
          { id: 'dummytag', value: 'dummyTag' },
          { id: 'sampletag', value: 'sampleTag' },
        ],
        isEditable: false,
        selected: null,
      },
      action,
    );
    expect(result).toEqual({
      tags: [{ id: 'sampletag', value: 'sampleTag' }],
      isEditable: false,
      selected: null,
    });
  });

  it('Action: update.async.done', () => {
    const action = update.async.done({
      params: updatePayload,
      result: { ...book },
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      tags: [],
      isEditable: false,
      selected: null,
    });
  });

  it('Action: select', () => {
    const action = select('TypeScript');
    const result = reducer(undefined, action);
    expect(result).toEqual({
      tags: [],
      isEditable: false,
      selected: 'TypeScript',
    });
  });
});

describe('Selector: sort', () => {
  const state = {
    ...initialState,
    resources: {
      ...initialState.resources,
      books: {
        books: [
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
                value: 'HTTP',
                id: 'http',
              },
              {
                value: 'Performance',
                id: 'performance',
              },
              {
                id: 'パフォーマンス',
                value: 'パフォーマンス',
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
                value: 'Performance',
                id: 'performance',
              },
              {
                value: 'Web',
                id: 'web',
              },
              {
                value: 'パフォーマンス',
                id: 'パフォーマンス',
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
                value: 'DDD',
                id: 'ddd',
              },
              {
                value: 'ドメイン駆動開発',
                id: 'ドメイン駆動開発',
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
        ],
        page: 0,
        maxResults: 30,
      },
    },
    ui: {
      ...initialState.ui,
      tags: {
        tags: [
          {
            id: 'ci',
            value: 'CI',
          },
          {
            value: 'CD',
            id: 'cd',
          },
          {
            id: 'デプロイ',
            value: 'デプロイ',
          },
          {
            value: 'ビルド',
            id: 'ビルド',
          },
        ],
        isEditable: false,
        selected: null,
      },
    },
  };
  it('selectTags', () => {
    const result = [
      {
        id: 'ci',
        value: 'CI',
      },
      {
        value: 'CD',
        id: 'cd',
      },
      {
        id: 'デプロイ',
        value: 'デプロイ',
      },
      {
        value: 'ビルド',
        id: 'ビルド',
      },
    ];
    expect(result).toEqual(selectTags(state));
  });
  it('selectIsEditable', () => {
    const result = false;
    expect(result).toEqual(selectIsEditable(state));
  });
  it('selectSelectedTags', () => {
    const result = null;
    expect(result).toEqual(selectSelectedTags(state));
  });
  it('selectPopularTags', () => {
    const result = ['Performance', 'パフォーマンス', 'HTTP', 'Web', 'DDD'];
    expect(result).toEqual(selectPopularTags(state));
  });
});
