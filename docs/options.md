---
id: options
title: Options
---

Prettier ships with a handful of customizable format options, usable in both the CLI and API.

## Print Width

Specify the line length that the printer will wrap on.

> **For readability we recommend against using more than 80 characters:**
>
> In code styleguides, maximum line length rules are often set to 100 or 120. However, when humans write code, they don't strive to reach the maximum number of columns on every line. Developers often use whitespace to break up long lines for readability. In practice, the average line length often ends up well below the maximum.
>
> Prettier, on the other hand, strives to fit the most code into every line. With the print width set to 120, prettier may produce overly compact, or otherwise undesirable code.
>
> See the [print width rationale](rationale.md#print-width) for more information.

| Default | CLI Override          | API Override        |
| ------- | --------------------- | ------------------- |
| `80`    | `--print-width <int>` | `printWidth: <int>` |

(If you don't want line wrapping when formatting Markdown, you can set the [Prose Wrap](#prose-wrap) option to disable it.)

## Tab Width

Specify the number of spaces per indentation-level.

| Default | CLI Override        | API Override      |
| ------- | ------------------- | ----------------- |
| `2`     | `--tab-width <int>` | `tabWidth: <int>` |

## Tabs

Indent lines with tabs instead of spaces.

| Default | CLI Override | API Override      |
| ------- | ------------ | ----------------- |
| `false` | `--use-tabs` | `useTabs: <bool>` |

(Tabs will be used for _indentation_ but Prettier uses spaces to _align_ things, such as in ternaries.)

## Semicolons

Print semicolons at the ends of statements.

Valid options:

- `true` - Add a semicolon at the end of every statement.
- `false` - Only add semicolons at the beginning of lines that [may introduce ASI failures](rationale.md#semicolons).

| Default | CLI Override | API Override   |
| ------- | ------------ | -------------- |
| `true`  | `--no-semi`  | `semi: <bool>` |

## Indent chains

Put or disable indents at the start of chained calls.

Valid options:

- `true` - Put indents at the start of chained calls.
- `false` - Disable indents at the start of chained calls.

| Default | CLI Override         | API Override           |
| ------- | -------------------- | ---------------------- |
| `true`  | `--no-indent-chains` | `indentChains: <bool>` |

## Quotes

Use single quotes instead of double quotes.

Notes:

- JSX quotes ignore this option – see [jsx-single-quote](#jsx-quotes).
- If the number of quotes outweighs the other quote, the quote which is less used will be used to format the string - Example: `"I'm double quoted"` results in `"I'm double quoted"` and `"This \"example\" is single quoted"` results in `'This "example" is single quoted'`.

See the [strings rationale](rationale.md#strings) for more information.

| Default | CLI Override     | API Override          |
| ------- | ---------------- | --------------------- |
| `false` | `--single-quote` | `singleQuote: <bool>` |

## Quote Props

Change when properties in objects are quoted.

Valid options:

- `"as-needed"` - Only add quotes around object properties where required.
- `"consistent"` - If at least one property in an object requires quotes, quote all properties.
- `"preserve"` - Respect the input use of quotes in object properties.

| Default       | CLI Override                                    | API Override                                    |
| ------------- | ----------------------------------------------- | ----------------------------------------------- |
| `"as-needed"` | `--quote-props <as-needed|consistent|preserve>` | `quoteProps: "<as-needed|consistent|preserve>"` |

## JSX Quotes

Use single quotes instead of double quotes in JSX.

| Default | CLI Override         | API Override             |
| ------- | -------------------- | ------------------------ |
| `false` | `--jsx-single-quote` | `jsxSingleQuote: <bool>` |

## Trailing Commas

_Default value changed from `none` to `es5` in v2.0.0_

Print trailing commas wherever possible when multi-line. (A single-line array, for example, never gets trailing commas.)

Valid options:

- `"es5"` - Trailing commas where valid in ES5 (objects, arrays, etc.)
- `"none"` - No trailing commas.
- `"all"` - Trailing commas wherever possible (including function arguments). This requires node 8 or a [transform](https://babeljs.io/docs/plugins/syntax-trailing-function-commas/).

| Default | CLI Override                      | API Override                      |
| ------- | --------------------------------- | --------------------------------- |
| `"es5"` | `--trailing-comma <es5|none|all>` | `trailingComma: "<es5|none|all>"` |

## Object curly spacing

Put or disable spaces between object curly braces (similar to the corresponding eslint option).

Valid options:

- `true` - Example: `{ foo: bar }`.
- `false` - Example: `{foo: bar}`.

| Default | CLI Override                | API Override                 |
| ------- | --------------------------- | ---------------------------- |
| `true`  | `--no-object-curly-spacing` | `objectCurlySpacing: <bool>` |

## JSX Brackets

Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).

Valid options:

- `true` - Example:

<!-- prettier-ignore -->
```jsx
<button
  className="prettier-class"
  id="prettier-id"
  onClick={this.handleClick}>
  Click Here
</button>
```

- `false` - Example:

<!-- prettier-ignore -->
```jsx
<button
  className="prettier-class"
  id="prettier-id"
  onClick={this.handleClick}
>
  Click Here
</button>
```

| Default | CLI Override              | API Override                 |
| ------- | ------------------------- | ---------------------------- |
| `false` | `--jsx-bracket-same-line` | `jsxBracketSameLine: <bool>` |

## Arrow Function Parentheses

_First available in v1.9.0, default value changed from `avoid` to `always` in v2.0.0_

Include parentheses around a sole arrow function parameter.

Valid options:

- `"always"` - Always include parens. Example: `(x) => x`
- `"avoid"` - Omit parens when possible. Example: `x => x`

| Default    | CLI Override                    | API Override                    |
| ---------- | ------------------------------- | ------------------------------- |
| `"always"` | `--arrow-parens <always|avoid>` | `arrowParens: "<always|avoid>"` |

At first glance, avoiding parentheses may look like a better choice because of less visual noise.
However, when Prettier removes parentheses, it becomes harder to add type annotations, extra arguments or default values as well as making other changes.
Consistent use of parentheses provides a better developer experience when editing real codebases, which justifies the default value for the option.

## Range

Format only a segment of a file.

These two options can be used to format code starting and ending at a given character offset (inclusive and exclusive, respectively). The range will extend:

- Backwards to the start of the first line containing the selected statement.
- Forwards to the end of the selected statement.

These options cannot be used with `cursorOffset`.

| Default    | CLI Override          | API Override        |
| ---------- | --------------------- | ------------------- |
| `0`        | `--range-start <int>` | `rangeStart: <int>` |
| `Infinity` | `--range-end <int>`   | `rangeEnd: <int>`   |

## Align object properties

Align colons in multiline object literals (not applied with any of the JSON parsers).

| Default | CLI Override                | API Override                    |
| ------- | --------------------------- | ------------------------------- |
| `false` | `--align-object-properties` | `alignObjectProperties: <bool>` |

## break long method chains

Break method chains with more than 3 method calls, like Prettier 1.x.

| Default | CLI Override                 | API Override                    |
| ------- | ---------------------------- | ------------------------------- |
| `false` | `--break-long-method-chains` | `breakLongMethodChains: <bool>` |

## Space before function parentheses

Put a space before function parenthesis in all declarations (similar to the corresponding eslint option). (Default is to put a space before function parenthesis for untyped anonymous functions only.)

| Default | CLI Override                    | API Override                       |
| ------- | ------------------------------- | ---------------------------------- |
| `false` | `--space-before-function-paren` | `spaceBeforeFunctionParen: <bool>` |

## Generator star spacing

Put spaces around the star (`*`) in generator functions (before and after - similar to the corresponding eslint option). (Default is after only.)

| Default | CLI Override               | API Override                   |
| ------- | -------------------------- | ------------------------------ |
| `false` | `--generator-star-spacing` | `generatorStarSpacing: <bool>` |

## Yield star spacing

Put spaces around the star (`*`) in `yield*` expressions (before and after - similar to the corresponding eslint option). (Default is after only.)

| Default | CLI Override           | API Override               |
| ------- | ---------------------- | -------------------------- |
| `false` | `--yield-star-spacing` | `yieldStarSpacing: <bool>` |

## break before else

Always add a line break before else.

| Default | CLI Override          | API Override              |
| ------- | --------------------- | ------------------------- |
| `false` | `--break-before-else` | `breakBeforeElse: <bool>` |

## Formatting of import statements

Formatting of import statements, may be `oneline` to avoid conflict with VSCode "Organize Imports" feature.

Valid options:

- `"auto"` - automatic formatting, like Prettier
- `"oneline"` - keep import statements on one line

| Default  | CLI Override                                         | API Override                                         |
| -------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `"auto"` | <code>--import-formatting <auto&#124;oneline></code> | <code>importFormatting: "<auto&#124;oneline>"</code> |

## HTML void element tags

Format void HTML elements as void tags.

| Default | CLI Override       | API Override           |
| ------- | ------------------ | ---------------------- |
| `false` | `--html-void-tags` | `htmlVoidTags: <bool>` |

## Array bracket spacing

Put spaces between array brackets (similar to the corresponding eslint option). Status: experimental, with limited testing.

| Default | CLI Override              | API Override                  |
| ------- | ------------------------- | ----------------------------- |
| `false` | `--array-bracket-spacing` | `arrayBracketSpacing: <bool>` |

## CSS paren spacing

Put spaces between parens in CSS, WordPress style. Status: experimental, with limited testing.

| Default | CLI Override          | API Override              |
| ------- | --------------------- | ------------------------- |
| `false` | `--css-paren-spacing` | `cssParenSpacing: <bool>` |

## Computed property spacing

Put spaces between computed property brackets (similar to the corresponding eslint option). Status: experimental, with limited testing.

| Default | CLI Override                  | API Override                      |
| ------- | ----------------------------- | --------------------------------- |
| `false` | `--computed-property-spacing` | `computedPropertySpacing: <bool>` |

## Offset ternary expressions

Indent and align ternary expression branches more consistently with "Standard JS" (similar to the corresponding eslint option).

| Default | CLI Override                   | API Override                       |
| ------- | ------------------------------ | ---------------------------------- |
| `false` | `--offset-ternary-expressions` | `offsetTernaryExpressions: <bool>` |

## Space after unary operator symbols

Put spaces after unary operator symbols, except in the middle of `!!` (similar to the corresponding eslint option). Status: experimental, with limited testing.

| Default | CLI Override        | API Override            |
| ------- | ------------------- | ----------------------- |
| `false` | `--space-unary-ops` | `spaceUnaryOps: <bool>` |

## Spaces in parens

Print spaces in between parens, WordPress style (similar to the corresponding eslint option). Not recommended in combination with the default `arrowParens: "always"` option. Status: experimental, with limited testing.

| Default | CLI Override        | API Override            |
| ------- | ------------------- | ----------------------- |
| `false` | `--space-in-parens` | `spaceInParens: <bool>` |

## Template curly spacing

Put spaces between template curly brackets (similar to the corresponding eslint option). Status: experimental, with limited testing.

| Default | CLI Override               | API Override                   |
| ------- | -------------------------- | ------------------------------ |
| `false` | `--template-curly-spacing` | `templateCurlySpacing: <bool>` |

## Type angle bracket spacing

Put spaces between type angle brackets. Status: experimental, with limited testing.

| Default | CLI Override                   | API Override                      |
| ------- | ------------------------------ | --------------------------------- |
| `false` | `--type-angle-bracket-spacing` | `typeAngleBracketSpacing: <bool>` |

## Type bracket spacing

Put spaces between type brackets. Status: experimental, with limited testing.

| Default | CLI Override             | API Override                 |
| ------- | ------------------------ | ---------------------------- |
| `false` | `--type-bracket-spacing` | `typeBracketSpacing: <bool>` |

## export curly spacing

Put or disable spaces between export curly braces.

| Default | CLI Override                | API Override                 |
| ------- | --------------------------- | ---------------------------- |
| `true`  | `--no-export-curly-spacing` | `exportCurlySpacing: <bool>` |

## import curly spacing

Put or disable spaces between import curly braces.

| Default | CLI Override                | API Override                 |
| ------- | --------------------------- | ---------------------------- |
| `true`  | `--no-import-curly-spacing` | `importCurlySpacing: <bool>` |

## GraphQL curly spacing

Put or disable spaces between curly braces for GraphQL.

| Default | CLI Override                 | API Override                  |
| ------- | ---------------------------- | ----------------------------- |
| `true`  | `--no-graphql-curly-spacing` | `graphqlCurlySpacing: <bool>` |

## YAML curly spacing

Put or disable spaces between brackets / curly braces for YAML.

| Default | CLI Override                | API Override                 |
| ------- | --------------------------- | ---------------------------- |
| `true`  | `--no-yaml-bracket-spacing` | `yamlBracketSpacing: <bool>` |

## Type curly spacing

Put or disable spaces between type curly braces.

| Default | CLI Override              | API Override               |
| ------- | ------------------------- | -------------------------- |
| `true`  | `--no-type-curly-spacing` | `typeCurlySpacing: <bool>` |

## Parser

Specify which parser to use.

Prettier automatically infers the parser from the input file path, so you shouldn't have to change this setting.

Both the `babel` and `flow` parsers support the same set of JavaScript features (including Flow type annotations). They might differ in some edge cases, so if you run into one of those you can try `flow` instead of `babel`. Almost the same applies to `typescript` and `babel-ts`. `babel-ts` might support JavaScript features (proposals) not yet supported by TypeScript, but it's less permissive when it comes to invalid code and less battle-tested than the `typescript` parser.

Valid options:

- `"babel"` (via [@babel/parser](https://github.com/babel/babel/tree/master/packages/babel-parser)) _Named `"babylon"` until v1.16.0_
- `"babel-flow"` (same as `"babel"` but enables Flow parsing explicitly to avoid ambiguity) _First available in v1.16.0_
- `"babel-ts"` (similar to `"typescript"` but uses Babel and its TypeScript plugin) _First available in v2.0.0_
- `"flow"` (via [flow-parser](https://github.com/facebook/flow/tree/master/src/parser))
- `"typescript"` (via [@typescript-eslint/typescript-estree](https://github.com/typescript-eslint/typescript-eslint)) _First available in v1.4.0_
- `"css"` (via [postcss-scss](https://github.com/postcss/postcss-scss) and [postcss-less](https://github.com/shellscape/postcss-less), autodetects which to use) _First available in v1.7.1_
- `"scss"` (same parsers as `"css"`, prefers postcss-scss) _First available in v1.7.1_
- `"less"` (same parsers as `"css"`, prefers postcss-less) _First available in v1.7.1_
- `"json"` (via [@babel/parser parseExpression](https://babeljs.io/docs/en/next/babel-parser.html#babelparserparseexpressioncode-options)) _First available in v1.5.0_
- `"json5"` (same parser as `"json"`, but outputs as [json5](https://json5.org/)) _First available in v1.13.0_
- `"json-stringify"` (same parser as `"json"`, but outputs like `JSON.stringify`) _First available in v1.13.0_
- `"graphql"` (via [graphql/language](https://github.com/graphql/graphql-js/tree/master/src/language)) _First available in v1.5.0_
- `"markdown"` (via [remark-parse](https://github.com/wooorm/remark/tree/master/packages/remark-parse)) _First available in v1.8.0_
- `"mdx"` (via [remark-parse](https://github.com/wooorm/remark/tree/master/packages/remark-parse) and [@mdx-js/mdx](https://github.com/mdx-js/mdx/tree/master/packages/mdx)) _First available in v1.15.0_
- `"html"` (via [angular-html-parser](https://github.com/ikatyang/angular-html-parser/tree/master/packages/angular-html-parser)) _First available in 1.15.0_
- `"vue"` (same parser as `"html"`, but also formats vue-specific syntax) _First available in 1.10.0_
- `"angular"` (same parser as `"html"`, but also formats angular-specific syntax via [angular-estree-parser](https://github.com/ikatyang/angular-estree-parser)) _First available in 1.15.0_
- `"lwc"` (same parser as `"html"`, but also formats LWC-specific syntax for unquoted template attributes) _First available in 1.17.0_
- `"yaml"` (via [yaml](https://github.com/eemeli/yaml) and [yaml-unist-parser](https://github.com/ikatyang/yaml-unist-parser)) _First available in 1.14.0_

[Custom parsers](api.md#custom-parser-api) are also supported. _First available in v1.5.0_

| Default | CLI Override                                    | API Override                                               |
| ------- | ----------------------------------------------- | ---------------------------------------------------------- |
| None    | `--parser <string>`<br />`--parser ./my-parser` | `parser: "<string>"`<br />`parser: require("./my-parser")` |

Note: the default value was `"babylon"` until v1.13.0.

<a name="filepath"></a>

## File Path

Specify the file name to use to infer which parser to use.

For example, the following will use the CSS parser:

```bash
cat foo | prettier --stdin-filepath foo.css
```

| Default | CLI Override                | API Override           |
| ------- | --------------------------- | ---------------------- |
| None    | `--stdin-filepath <string>` | `filepath: "<string>"` |

## Require pragma

_First available in v1.7.0_

Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file. This is very useful when gradually transitioning large, unformatted codebases to prettier.

For example, a file with the following as its first comment will be formatted when `--require-pragma` is supplied:

```js
/**
 * @prettier
 */
```

or

```js
/**
 * @format
 */
```

| Default | CLI Override       | API Override            |
| ------- | ------------------ | ----------------------- |
| `false` | `--require-pragma` | `requirePragma: <bool>` |

## Insert Pragma

_First available in v1.8.0_

Prettier can insert a special @format marker at the top of files specifying that the file has been formatted with prettier. This works well when used in tandem with the `--require-pragma` option. If there is already a docblock at the top of the file then this option will add a newline to it with the @format marker.

| Default | CLI Override      | API Override           |
| ------- | ----------------- | ---------------------- |
| `false` | `--insert-pragma` | `insertPragma: <bool>` |

## Prose Wrap

_First available in v1.8.2_

By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer, e.g. GitHub comment and BitBucket. In some cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out with `"never"`.

Valid options:

- `"always"` - Wrap prose if it exceeds the print width.
- `"never"` - Do not wrap prose.
- `"preserve"` - Wrap prose as-is. _First available in v1.9.0_

| Default      | CLI Override                           | API Override                           |
| ------------ | -------------------------------------- | -------------------------------------- |
| `"preserve"` | `--prose-wrap <always|never|preserve>` | `proseWrap: "<always|never|preserve>"` |

## HTML Whitespace Sensitivity

_First available in v1.15.0_

Specify the global whitespace sensitivity for HTML files, see [whitespace-sensitive formatting] for more info.

[whitespace-sensitive formatting]: https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting

Valid options:

- `"css"` - Respect the default value of CSS `display` property.
- `"strict"` - Whitespaces are considered sensitive.
- `"ignore"` - Whitespaces are considered insensitive.

| Default | CLI Override                                        | API Override                                       |
| ------- | --------------------------------------------------- | -------------------------------------------------- |
| `"css"` | `--html-whitespace-sensitivity <css|strict|ignore>` | `htmlWhitespaceSensitivity: "<css|strict|ignore>"` |

## Vue files script and style tags indentation

_First available in v1.19.0_

Whether or not to indent the code inside `<script>` and `<style>` tags in Vue files. Some people (like [the creator of Vue](https://github.com/prettier/prettier/issues/3888#issuecomment-459521863)) don’t indent to save an indentation level, but this might break code folding in your editor.

Valid options:

- `"false"` - Do not indent script and style tags in Vue files.
- `"true"` - Indent script and style tags in Vue files.

| Default | CLI Override                    | API Override                      |
| ------- | ------------------------------- | --------------------------------- |
| `false` | `--vue-indent-script-and-style` | `vueIndentScriptAndStyle: <bool>` |

## End of Line

_First available in v1.15.0, default value changed from `auto` to `lf` in v2.0.0_

For historical reasons, there exist two common flavors of line endings in text files.
That is `\n` (or `LF` for _Line Feed_) and `\r\n` (or `CRLF` for _Carriage Return + Line Feed_).
The former is common on Linux and macOS, while the latter is prevalent on Windows.
Some details explaining why it is so [can be found on Wikipedia](https://en.wikipedia.org/wiki/Newline).

When people collaborate on a project from different operating systems, it becomes easy to end up with mixed line endings in a shared git repository.
It is also possible for Windows users to accidentally change line endings in a previously committed file from `LF` to `CRLF`.
Doing so produces a large `git diff` and thus makes the line-by-line history for a file (`git blame`) harder to explore.

If you want to make sure that your entire git repository only contains Linux-style line endings in files covered by Prettier:

1. Ensure Prettier’s `endOfLine` option is set to `lf` (this is a default value since v2.0.0)
1. Configure [a pre-commit hook](precommit.md) that will run Prettier
1. Configure Prettier to run in your CI pipeline using [`--check` flag](cli.md#--check). If you use Travis CI, set [the `autocrlf` option](https://docs.travis-ci.com/user/customizing-the-build#git-end-of-line-conversion-control) to `input` in `.travis.yml`.
1. Add `* text=auto eol=lf` to the repo's `.gitattributes` file.
   You may need to ask Windows users to re-clone your repo after this change to ensure git has not converted `LF` to `CRLF` on checkout.

All modern text editors in all operating systems are able to correctly display line endings when `\n` (`LF`) is used.
However, old versions of Notepad for Windows will visually squash such lines into one as they can only deal with `\r\n` (`CRLF`).

Valid options:

- `"lf"` – Line Feed only (`\n`), common on Linux and macOS as well as inside git repos
- `"crlf"` - Carriage Return + Line Feed characters (`\r\n`), common on Windows
- `"cr"` - Carriage Return character only (`\r`), used very rarely
- `"auto"` - Maintain existing line endings
  (mixed values within one file are normalised by looking at what's used after the first line)

| Default | CLI Override                      | API Override                     |
| ------- | --------------------------------- | -------------------------------- |
| `"lf"`  | `--end-of-line <lf|crlf|cr|auto>` | `endOfLine: "<lf|crlf|cr|auto>"` |
