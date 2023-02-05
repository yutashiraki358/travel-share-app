# travel-share-app

# DEMO

# Features

# Requirement

# Installation

# Usage

# Note

# Author

- yuta
- yuta.shiraki.eng@gmail.com

# License

# Directory structure

- [React folder structure for enterprise level applications](https://engineering.udacity.com/react-folder-structure-for-enterprise-level-applications-f8384eff162b)

## memo

### components/

- Feature や Page コンポーネントを構成するために最もよく使われる、再利用可能なコンポーネントが含まれています。
- これらのコンポーネントは、ほとんどの場合、副作用のない純粋なものであり、プレゼン用です。

### constants/

- URL や REGEX パターンなど、再利用可能で不変の文字列を格納する。
- ほとんどのプロジェクトでは、インデックスファイル 1 つで十分です。

### contexts/

- コンポーネントのツリーを通してデータを提供するために使用される、再利用可能なコンテキストが含まれています。
- Redux を使用する場合、この直接は必要ないと思われます。

### features/

- 再利用可能な Feature Component が含まれています。Feature Component は Redux にインスパイアされた概念で、機能に必要なすべてのロジックを単一のディレクトリに集約しています。Feature Component は、多くの場合、ローカルまたは共有の他のコンポーネントで構成されています。これは、utils、types、hooks など、すべてのリソースについても同じことが言えます。
- Feature Component は副作用を含むことが多い。
- Redux を使用していて、Store とやり取りする場合、Feature Component は、その機能が表す Redux Store の「スライス」を定義するスライスファイルを含みます。

### layouts/

- 再利用可能な Layout Component が含まれています。Layout Component は、ページのレイアウトを構成するコンポーネントです。app-bar、app-footer、app-side-nav などのコンポーネントをインポートすることが多いでしょう。
- レイアウトが 1 つしかないようなプロジェクトでは、このディレクトリは必要ないかもしれませんし、Layout Component は components ディレクトリに格納することができます。

### hooks/

- 再利用可能な React Hooks が含まれています。

### pages/

- ページコンポーネントが含まれます。各ページコンポーネントはルートと関連付けられています。
- ページコンポーネントは、コンポーネントとフィーチャーコンポーネントをインポートして、ページのコンテンツを構成します。
- ページコンポーネントは、サイドエフェクトを含むことはほとんどなく、代わりにフィーチャーコンポーネントにサイドエフェクトを委譲する必要があります。

### services/

- API と対話するための再利用可能なコードが含まれ、しばしばフックの形で、理想的には React Query や RTK Query のようなサーバーキャッシュツールを利用します。
- これを、コンポーネントに機能を注入するための Angular 的なサービスと勘違いしてはいけない。React はこのシナリオを context と hooks を使って処理します。このディレクトリには、API と対話するためのコードだけを置いてください。
- RTK Query が推奨する、API の定義を一元的に管理することにヒントを得ています。これは、ローカルファーストのルールを意図的に破った唯一の例です。私は API 定義をそれ自身のモジュール機能として考えたい。実際、サービスディレクトリの代わりに features/api ディレクトリを持つことは珍しいことではない。

### styles/

- 再利用可能なスタイルまたはグローバルスタイル。
- コンフィギュレーション、リセット、変数を含む場合があります。

### types/

- TypeScript や Flow を利用したプロジェクトで再利用可能な型です。
- 私はよく、再利用可能な Zod Schemas をこのディレクトリに置き、推論された型をエクスポートします。

### utils/

- 再利用可能なユーティリティ関数。
- これらの関数は常に純粋で、副作用を発生させないものでなければなりません。

### store.ts

- Redux を使用している場合、このファイルですべてのスライスをインポートし、Redux ストアを設定します。
