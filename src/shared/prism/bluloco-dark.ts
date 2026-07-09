import type { PrismTheme } from 'prism-react-renderer';

// Bluloco Dark Italic (uloco.theme-bluloco-dark) tokenColors를
// prism-react-renderer의 PrismTheme 구조로 추출한 코드블럭 테마.
const blulocoDark: PrismTheme = {
  plain: {
    color: '#abb2bf',
    backgroundColor: '#282c34',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'cdata'],
      style: { color: '#636d83', fontStyle: 'italic' },
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
      style: { color: '#10b1fe', fontStyle: 'italic' },
    },
    {
      types: ['boolean', 'builtin', 'important'],
      style: { color: '#10b1fe' },
    },
    {
      types: ['number', 'unit'],
      style: { color: '#ff78f8' },
    },
    {
      types: ['constant', 'symbol'],
      style: { color: '#9f7efe' },
    },
    {
      types: ['string', 'char', 'attr-value', 'regex'],
      style: { color: '#f9c859' },
    },
    {
      types: ['function', 'method'],
      style: { color: '#3fc56b' },
    },
    {
      types: ['class-name', 'maybe-class-name'],
      style: { color: '#ff6480', fontStyle: 'italic' },
    },
    {
      types: ['namespace'],
      style: { color: '#ff839b' },
    },
    {
      types: ['tag', 'selector'],
      style: { color: '#3691ff' },
    },
    {
      types: ['attr-name', 'property'],
      style: { color: '#ff936a', fontStyle: 'italic' },
    },
    {
      types: ['property-access', 'variable'],
      style: { color: '#ce9887' },
    },
    {
      types: ['parameter'],
      style: { color: '#8bcdef' },
    },
    {
      types: ['url', 'link'],
      style: { color: '#3691ff' },
    },
    {
      types: ['inserted'],
      style: { color: '#3fc56b' },
    },
    {
      types: ['deleted'],
      style: { color: '#ff6480' },
    },
    {
      types: ['changed'],
      style: { color: '#10b1fe' },
    },
    {
      types: ['escape', 'char-class'],
      style: { color: '#ff936a' },
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

export default blulocoDark;
