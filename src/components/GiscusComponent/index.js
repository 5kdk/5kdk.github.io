import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

const GiscusComponent = () => {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="5kdk/5kdk.github.io"
      repoId="R_kgDOJyJw5g"
      category="General"
      categoryId="DIC_kwDOJyJw5s4CXpth" // E.g. id of "General"
      mapping="url" // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="ko"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
};
export default GiscusComponent;
