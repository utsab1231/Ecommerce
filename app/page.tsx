import { FetchPost } from "@/server/actions/PostActions/fetchPost";
import SeedData from "@/server/seed/seedData";
import Image from "next/image";

export default async function Home() {
  const data = await FetchPost();
  return <h1 className="bg-red-400">{Date.now()}</h1>;
}
