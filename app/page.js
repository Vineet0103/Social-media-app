import PostCard from "@/components/PostCard";
import Layout from "../components/Layout.js";
import PostForm from "@/components/PostForm";


export default function Home() {
  return (
   <Layout>
    <PostForm/>
    <PostCard/>
   </Layout>
  );
}
