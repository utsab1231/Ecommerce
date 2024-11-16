import { db } from "@/server/index";
import { postTable, createPost } from "@/server/schema";

export async function FetchPost() {
  try {
    const res = await db.select().from(postTable);
    return res;
  } catch (error) {
    return error;
  }
}
