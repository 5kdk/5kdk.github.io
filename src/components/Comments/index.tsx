import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

const Comments = () => {
  const { colorMode } = useColorMode();

  return (
    <div>
      <Giscus
        id="comments"
        repo="5kdk/5kdk.github.io"
        repoId="R_kgDOJyJw5g"
        category="General"
        categoryId="DIC_kwDOJyJw5s4CXpth"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme={colorMode === "dark" ? "dark_tritanopia" : "light_tritanopia"}
        lang="ko"
        loading="lazy"
      />
    </div>


  );
};
export default Comments;
