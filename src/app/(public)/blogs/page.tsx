/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";

const AllBlogsPage = async () => {
  // fetch data with SSR system
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "no-store",
  });
  const { data: blogs } = await res.json();

  return (
    <div className='py-30 px-4 max-w-7xl mx-auto'>
      <h2 className='text-center text-4xl'>All Blogs</h2>
      <div className='grid grid-cols-3 gap-4 mx-auto max-w-6xl'>
        {blogs?.map((blog: any) => (
          <BlogCard key={blogs.id} post={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
