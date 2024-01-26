## Getting Started

First, run the development server:

```bash
docker-compose up -d
docker-compose exec app bash
```

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

.env.localファイルを作成し、下記のようにAPI_KEYを設定
```
API_KEY=xxxxxxxxxx
```

下記のようなAPIをMicroCMSで作成

endpoint : article
| フィールドID | 表示名 | 種類 |
| - | - | - |
| title | タイトル | テキストフィールド |
| category | カテゴリ | コンテンツ参照 |
| body | 本文 | リッチエディタ |

endpoint : category
| フィールドID | 表示名 | 種類 |
| - | - | - |
| title | カテゴリ名 | テキストフィールド |