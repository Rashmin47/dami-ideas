import env from "@/app/env";
import { Client, Account, Avatars, Databases, Storage } from "appwrite";
import { ST } from "next/dist/shared/lib/utils";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) // Your API Endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID); // Your project ID

const account = new Account(client);

const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

export { client, databases, account, avatars, storage };
