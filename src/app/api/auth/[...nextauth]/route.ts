import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Here you would typically validate against your database
        // This is a mock example - replace with your actual DB logic
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Add your database logic here
        // const user = await prisma.user.findUnique({
        //   where: { email: credentials.email }
        // });

        // Mock user for example
        const user = {
          id: "1",
          email: "user@example.com",
          password: await bcrypt.hash("password123", 10),
          name: "Test User"
        };

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (isValid) {
          return {
            id: user.id,
            email: user.email,
            name: user.name
          };
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: "/auth/signin",
    signUp: "/auth/register"
  },
  session: {
    strategy: "jwt"
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };