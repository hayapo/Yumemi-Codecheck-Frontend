# styles

- `pages/index.tsx`の`section`ごとにモジュールを分割する
- `organisms`、`molecules`は同じモジュールでスタイルを当てるが、`atoms`内のコンポーネントのスタイルは別モジュールにする。

## 各モジュールの説明

### `Home.module.css`

ホーム画面に使用しているモジュールで、`pages/index.tsx`でしか使用しない

### `PrefectureSelect.module.css`

都道府県選択セクションのスタイリングをするモジュール。
`components/organisms/PrefectureSelect.tsx`で使用している
