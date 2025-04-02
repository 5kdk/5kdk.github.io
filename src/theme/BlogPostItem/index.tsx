import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import type BlogPostItemType from '@theme/BlogPostItem';
import type { WrapperProps } from '@docusaurus/types';
import Comments from '@site/src/components/Comments';

type Props = WrapperProps<typeof BlogPostItemType>;

const BlogPostItemWrapper = (props: Props) => {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { comments = true } = metadata.frontMatter;

  return (
    <>
      <BlogPostItem {...props} />
      {comments && isBlogPostPage && <Comments />}
    </>
  );
};

export default BlogPostItemWrapper;
