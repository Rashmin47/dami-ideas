import { IndexType, Permission } from "node-appwrite";
import { voteCollection, db } from "../name";
import { databases } from "./config";

export default async function createVoteCollection() {
  // create collection
  await databases.createCollection(db, voteCollection, voteCollection, [
    Permission.read("any"),
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);
  console.log("Vote Collection is Created.");
  // Creating attributes and Indexes
  await Promise.all([
    databases.createStringAttribute(db, voteCollection, "votebyId", 50, true),
    databases.createEnumAttribute(
      db,
      voteCollection,
      "type",
      ["answer", "question"],
      true,
    ),
    databases.createEnumAttribute(
      db,
      voteCollection,
      "voteStatus",
      ["upvoted", "downvoted"],
      true,
    ),
    databases.createStringAttribute(db, voteCollection, "typeId", 50, true),
  ]);
  console.log("Vote Attributes Created");
}
