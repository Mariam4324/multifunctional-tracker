import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import clientPromise from "../../../lib/mongodb"; // Путь к вашему клиенту MongoDB
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export default NextAuth({
  providers: [
    Providers.Credentials({
      // Вы можете настроить собственные поля для авторизации
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db("your-database-name");

        const user = await db.collection("users").findOne({ email: credentials.email });

        if (user && user.password === credentials.password) {
          return user;
        }
        return null;
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    jwt: true,
  },
  callbacks: {
    async session(session, user) {
      session.user.id = user.id;
      return session;
    },
  },
});
