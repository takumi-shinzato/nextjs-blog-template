## はじめ方

下記コマンドで立ち上げ

```bash
docker-compose up -d
docker-compose exec app bash
```

```bash
yarn install
yarn dev
```

[http://localhost:3000](http://localhost:3000) で実行結果を確認

## envファイル作成
.env.localファイルを作成し、下記のようにAPI_KEYを設定
```
API_KEY=xxxxxxxxxx
```

## microCMS側の準備
下記のようなAPIをMicroCMSで作成

**endpoint : article**
| フィールドID | 表示名 | 種類 |
| - | - | - |
| title | タイトル | テキストフィールド |
| category | カテゴリ | コンテンツ参照 |
| body | 本文 | リッチエディタ |

**endpoint : category**
| フィールドID | 表示名 | 種類 |
| - | - | - |
| title | カテゴリ名 | テキストフィールド |