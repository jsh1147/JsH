const prettierConfig = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true, // JS와 JSX 구분
  quoteProps: 'consistent', // 표기 방식 통일
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  objectWrap: 'preserve',
  bracketSameLine: false,
  arrowParens: 'always',
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'ignore', // 템플릿 리터럴로 명시
  endOfLine: 'lf',
  singleAttributePerLine: false,
};

export default prettierConfig;
