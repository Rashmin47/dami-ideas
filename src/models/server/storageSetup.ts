import { IndexType, Permission } from "node-appwrite";
import { questionAttachmentBucket, db } from "../name";
import { storage } from "./config";

export default async function getOrCreateStorage() {
  try {
    await storage.getBucket(questionAttachmentBucket);
    console.log("Storage Connected.");
    // Creating attributes and Indexes
  } catch (error) {
    try {
      await storage.createBucket(
        questionAttachmentBucket,
        questionAttachmentBucket,
        [
          Permission.read("any"),
          Permission.read("users"),
          Permission.create("users"),
          Permission.update("users"),
          Permission.delete("users"),
        ],
        false,
        undefined,
        undefined,
        ["jpg", "png", "gif", "jpeg", "webp", "heic"],
      );
      console.log("Storage Created.");
      console.log("Storage Connected.");
    } catch (error) {
      console.log("Error Creating storage", error);
    }
  }
}
