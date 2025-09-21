import { IndexType, Permission } from "node-appwrite";
import { answerCollection, db } from "../name";
import { databases } from "./config";

export default async function createAnswerCollection() {
  // create collection
  await databases.createCollection(db, answerCollection, answerCollection, [
    Permission.read("any"),
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);
  console.log("Answer Collection is Created.");
  // Creating attributes and Indexes
  await Promise.all([
    databases.createStringAttribute(db, answerCollection, "title", 100, true),
    databases.createStringAttribute(
      db,
      answerCollection,
      "content",
      10000,
      true,
    ),
    databases.createStringAttribute(db, answerCollection, "authorId", 50, true),
    databases.createStringAttribute(
      db,
      answerCollection,
      "questionId",
      50,
      true,
    ),
  ]);
  console.log("Answer Attributes Created");
}
