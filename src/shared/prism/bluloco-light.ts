import type { PrismTheme } from 'prism-react-renderer';

// Bluloco Light Italic (uloco.theme-bluloco-light) tokenColors를
// prism-react-renderer의 PrismTheme 구조로 추출한 코드블럭 테마.
const blulocoLight: PrismTheme = {
  plain: {
    color: '#383a42',
    backgroundColor: '#f9f9f9',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'cdata'],
      style: { color: '#a0a1a7', fontStyle: 'italic' },
    },
    {
      types: ['doctype', 'punctuation', 'entity'],
      style: { color: '#7a82da' },
    },
    {
      types: ['operator'],
      style: { color: '#7a82da' },
    },
    {
      types: ['keyword', 'atrule', 'keyword-control'],
      style: { color: '#0098dd', fontStyle: 'italic' },
    },
    {
      types: ['boolean', 'builtin', 'important'],
      style: { color: '#0098dd' },
    },
    {
      types: ['number', 'unit'],
      style: { color: '#ce33c0' },
    },
    {
      types: ['constant', 'symbol'],
      style: { color: '#823ff1' },
    },
    {
      types: ['string', 'char', 'attr-value', 'regex'],
      style: { color: '#c5a332' },
    },
    {
      types: ['function', 'method'],
      style: { color: '#23974a' },
    },
    {
      types: ['class-name', 'maybe-class-name', 'namespace'],
      style: { color: '#d52753', fontStyle: 'italic' },
    },
    {
      types: ['tag', 'selector'],
      style: { color: '#275fe4' },
    },
    {
      types: ['attr-name', 'property'],
      style: { color: '#df631c', fontStyle: 'italic' },
    },
    {
      types: ['property-access', 'variable'],
      style: { color: '#a05a48' },
    },
    {
      types: ['parameter'],
      style: { color: '#40b8c5' },
    },
    {
      types: ['url', 'link'],
      style: { color: '#275fe4' },
    },
    {
      types: ['inserted'],
      style: { color: '#23974a' },
    },
    {
      types: ['deleted'],
      style: { color: '#d52753' },
    },
    {
      types: ['changed'],
      style: { color: '#0098dd' },
    },
    {
      types: ['escape', 'char-class'],
      style: { color: '#df631c' },
    },
    {
      types: ['bold'],
      style: { fontWeight: 'bold' },
    },
    {
      types: ['italic'],
      style: { fontStyle: 'italic' },
    },
  ],
};

export default blulocoLight;
