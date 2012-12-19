ExtJS2TypeScript
==================================================

ExtJS(Sencha Touch)をTypeScriptから使うための定義ファイル(.d.ts)を生成するツール

Requires
--------------------------------------------------
- node.js : 0.8
- TypeScript : 0.8.0
- jsduck 

Ubuntuの場合、下記の手順でインストールします

1. `sudo apt-get install npm nodejs`
2. `sudo npm install -g typescript`
3. `sudo gem install jsduck`


Usage
--------------------------------------------------

1. Sencha Touchのディレクトリを指定して、JSON形式のドキュメントを生成します
2. `jsduck sencha-touch/src --builtin-classes --warnings=-no_doc,-dup_member,-link_ambiguous --external XMLHttpRequest --ignore-global --pretty-json --export=full --output jsondocs`
3. ExtJS2TypeScript.tsをコンパイルします
4. `tsc ExtJS2TypeScript.ts`
5. 生成したJSONからTypeScriptの定義ファイルを生成します
6. `node ExtJS2TypeScript.js jsondocs`

Reference
--------------------------------------------------
* https://github.com/zz9pa/extjsTypescript
* https://github.com/stopyoukid/DojoToTypescriptConverter
* https://github.com/soywiz/typescript-node-definitions
* https://github.com/senchalabs/jsduck
* http://linqjs.codeplex.com/
