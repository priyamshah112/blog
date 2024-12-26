import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import BlogHeader from "../Components/BlogHeader";
import { getAllBlogPosts, getAllTopics } from "../Lib/Data";

export const getStaticProps = () => {
  const allBlogs = getAllBlogPosts();
  const allTopics = getAllTopics();
  return {
    props: {
      blogs: allBlogs,
      topics: allTopics,
    },
  };
};

export default function Home({ blogs, topics }) {
  return (
    <>
      <Head>
        <title>Blog 🚀</title>
        <meta name="title" content="Blog 🚀" />
        <meta
          name="description"
          content="Tech blogs and articles on various topics related to Software Development, AI and Blockchain"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blogs.velocast.org/" />
        <meta property="og:title" content="Blog 🚀" />
        <meta
          property="og:description"
          content="Tech blogs and articles on various topics related to Software Development, AI and Blockchain"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/priyamshah112/Velocast/main/Extra/sc.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://blogs.velocast.org/" />
        <meta property="twitter:title" content="Blog 🚀" />
        <meta
          property="twitter:description"
          content="Tech blogs and articles on various topics related to Software Development, AI and Blockchain"
        />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/priyamshah112/Velocast/main/Extra/sc.png"
        />
      </Head>

      <div className="min-h-screen relative bg-white dark:bg-gray-900">
        <Navbar topics={topics} />
        <Header />

        <div className="px-0.5 md:px-7 pb-14 pt-6 mx-auto">
          <div className="flex flex-wrap">
            {blogs &&
              blogs.map(
                (blog) =>
                  blog.data.isPublished && (
                    <BlogHeader
                      key={blog.data.Id}
                      data={blog.data}
                      content={blog.content}
                      readTime={blog.readTime.text}
                    />
                  )
              )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
