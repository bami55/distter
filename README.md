# distter
DiscordのメッセージをそのままツイートするBOT

## 実行環境にダウンロード
gitでクローンするか、zipでダウンロードするか、好きな方を選択してください。

クローンする場合
```
git clone https://github.com/bami55/distter.git
```

## packageのインストール
npmかyarnでパッケージをインストールしてください。
```
npm install
or
yarn
```

## 設定ファイルの編集
`.env.example`をコピーして`.env`ファイルを新たに作成します。

`.env`ファイルを以下のように編集します。
```
DISCORD_BOT_TOKEN=DiscordのBOTのトークンを設定
DISCORD_CHANNEL_ID=ツイートしたいメッセージが投稿されているDiscordのチャンネルID

# Twitter
TWITTER_CONSUMER_KEY=TWITTER APIのCONSUMER_KEY
TWITTER_CONSUMER_SECRET=TWITTER APIのCONSUMER_SECRET
TWITTER_ACCESS_TOKEN=TWITTER APIのACCESS_TOKEN
TWITTER_ACCESS_TOKEN_SECRET=TWITTER APIのACCESS_TOKEN_SECRET
```

ex)
```
DISCORD_BOT_TOKEN=Hrw.2WfV1RevS53h7q5EMjY3M.XNjg4MzUzMCH2GylDOSvljU3NDIyODY4w
DISCORD_CHANNEL_ID=728121699053590887

# Twitter
TWITTER_CONSUMER_KEY=QHOAAMGYXKcB5IRVzPHx
TWITTER_CONSUMER_SECRET=ehq1gIBtFZAeMpqxsDfGohWfjDsoJVnKTRYDg4wDgaM
TWITTER_ACCESS_TOKEN=621016909-ZoZPTN2GzI8c8Em7Tbz6H1Cv0fnuQ3nw5HB9hdrq
TWITTER_ACCESS_TOKEN_SECRET=4LVruPbJcR7yWUdUDA3uw4HgjO5byhsTyMUXBiawT9
```

## Botアプリケーションの実行
```
node bot.js
or
npm run start
or
yarn start
```
