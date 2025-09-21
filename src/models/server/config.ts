import { env } from "process";
import { Avatars, Client, Databases, Storage, Users } from "node-appwrite";

let client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) // Your API Endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
  .setKey(process.env.APPWRITE_APIKEY); // Your secret API key

const users = new Users(client);
const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

export { client, databases, users, avatars, storage };
