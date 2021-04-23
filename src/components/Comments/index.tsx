import React from 'react'
import styles from './index.module.scss';

export const Comments: React.VFC = () => (
    <div className={styles.root}>
      <ul>
        <li>
          <div>名前</div>
          <div>日時</div>
          <button type="button">編集</button>
          <button type="button">削除</button>
          <div>内容</div>
        </li>
        <li>
          <div>名前</div>
          <div>日時</div>
          <button type="button">編集</button>
          <button type="button">削除</button>
          <div>内容</div>
        </li>
        <li>
          <div>名前</div>
          <div>日時</div>
          <button type="button">編集</button>
          <button type="button">削除</button>
          <div>内容</div>
        </li>
        <li>
          <div>名前</div>
          <div>日時</div>
          <button type="button">編集</button>
          <button type="button">削除</button>
          <div>内容</div>
        </li>
      </ul>
    </div>
  )

