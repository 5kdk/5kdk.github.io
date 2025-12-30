import type { LoadContext, Plugin } from '@docusaurus/types';

function tailwindPlugin(context: LoadContext, options?: unknown): Plugin {
  return {
    name: 'tailwind-plugin',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('autoprefixer'),
      ];
      return postcssOptions;
    },
  };
}

export default tailwindPlugin;
