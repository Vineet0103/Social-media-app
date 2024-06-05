import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
export default function profile (){
    return (
        <Layout>
            <Card noPadding = {true}>
                <div className="relative overflow-hidden rounded-md">
                    <div className="h-36 overflow-hidden flex justify-center"> 
                    <img src = "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                    </div>
                    <div className="absolute top-24 left-4">
                        <Avatar size = {'big'}></Avatar>
                    </div>
                    <div className="p-4 pb-24">
                        <div className="ml-40">
                            <h1 className="text-3xl font-bold">
                            Vishy Anand
                            </h1>
                            <div className="text-gray-500 leading-4">Chennai,India
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </Layout>
    );
}