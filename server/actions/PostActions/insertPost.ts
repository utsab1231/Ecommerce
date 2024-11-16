import { db } from "@/server/index";
import { postTable, createPost } from "@/server/schema";

export async function InsertPost(data: createPost) {
  try {
    const res = await db.insert(postTable).values(data);
    return res;
  } catch (error) {
    return error;
  }
}
