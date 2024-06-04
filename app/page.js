import Card from "@/components/Card";
import NavigationCard from "@/components/NavigationCard";
import PostCard from "@/components/PostCard";
import PostForm from "@/components/PostForm";

export default function Home() {
  return (
   <div className="flex mt-4 max-w-4xl mx-auto gap-6">
   <div className = "w-1/3">
    <NavigationCard/>
    </div>
   <div className = "grow">
    <PostForm/>
    <PostCard/>
    </div>
   </div>
  );
}
