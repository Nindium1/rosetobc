import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    console.log("Creating admin user...");

    const email = "maingichristine23@gmail.com";
    const password = "NindiumAdmin123!"; // Change this to a secure password
    const name = "Admin User";

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.admin.upsert({
        where: { email },
        update: {},
        create: {
            email,
            password: hashedPassword,
            name,
        },
    });

    console.log("Admin user created:", { email, name });
    console.log("⚠️  Please change the password after first login!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
