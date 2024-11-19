import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Убедитесь, что этот URI хранится в .env
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // В разработке создаем новый клиент для каждого запроса
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // В продакшене используем единственный клиент
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
