import { useBlogPost } from '@docusaurus/theme-common/internal';
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComponent from '@site/src/components/GiscusComponent';
import type BlogPostItemType from '@theme/BlogPostItem';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof BlogPostItemType>;

const BlogPostItemWrapper = (props: Props) => {
  const { metadata, isBlogPostPage } = useBlogPost();

  const { frontMatter } = metadata;
  const { enableComments } = frontMatter;

  return (
    <>
      <BlogPostItem {...props} />
      {enableComments && isBlogPostPage && <GiscusComponent />}
    </>
  );
};

export default BlogPostItemWrapper;
