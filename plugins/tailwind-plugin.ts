import type { LoadContext, Plugin } from '@docusaurus/types';

export default function tailwindPlugin(
  context: LoadContext,
  options?: unknown
): Plugin {
  return {
    name: 'tailwind-plugin',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(require('@tailwindcss/postcss'));
      return postcssOptions;
    },
  };
}
