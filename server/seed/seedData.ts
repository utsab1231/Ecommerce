"use server";
import { InsertPost } from "../actions/PostActions/insertPost";

export default async function main() {
  try {
    await InsertPost({
      title: "Animal",
    });
    console.log("Post inserted");
  } catch (err) {
    console.error(err);
  }
}
