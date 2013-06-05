Nakineko
========

All files of mini project "Nakineko".

## 成果物（アプリケーション）の概要
Nakinekoは遊んだ人に癒しを与えることが出来るwebアプリケーションです。

Nakinekoは元々Android用アプリケーションとしてYoshiaki Rikitake氏によって開発されました。
それに対して本人の監修の元、以下の機能を追加実装したものが本アプリケーションとなります。

* ネコが暇になると勝手に座る
* ボタンを押すと背景の画像が変わる

これらの機能により、本アプリケーションは、遊んだ人が癒しを得られたり、ネコの挙動を楽しめるといった点で価値があります。

最終的に、本アプリケーションはSNCTのRikitake-Labのホームページのトップページ上で遊べる形として実装されました。

## デプロイ方法
Nakinekoのデプロイには以下に示すツールやサービスを用いました。

* github
  * Nakinekoの実行に必要なファイル一式を、ローカル側からサーバ側へ効率的に複製・移動するのに必要
* git bash
  * Nakinekoの実行に必要なファイル一式を、github上のリモートリポジトリへアップロードするのに必要
* レンタルサーバ
  * ユーザがユビキタスに（ブラウザにURLを入力するだけで いつでも・誰でも・どこからでも）Nakinekoにアクセス出来るために必要
* Tera Term
  * 開発者がレンタルサーバへリモートログインするために必要

Nakinekoのデプロイは以下に示す手順を踏んで行います。

1. github上で、Nakineko用のリモートリポジトリを作成する（既に作成済みの場合は必要なし）
2. git bashを用いて、Nakinekoの実行に必要なファイル一式をgithub上のリモートリポジトリにコミットする
3. Tera Termを用いてレンタルサーバにリモートログインする
4. レンタルサーバ上のNakineko用のフォルダに移動する
5. Nakineko用のフォルダにて、github上のリモートリポジトリの内容をcloneして複製し、ファイル一式を置く

## サンプルURL
Nakinekoアプリケーション単体のURL（純粋にNakinekoのみを楽しめます）  
<http://www.rickylab.com/~shun40/nakineko/>

Rikitake-LabのホームページのURL（ページに埋め込まれた形のNakinekoを楽しめます）  
<http://www.rickylab.com/~shun40/labpage/>
