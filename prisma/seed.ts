import { PrismaClient } from "../src/generated/prisma/client";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
	// create temp users
	const user1 = await prisma.user.upsert({
		where: { name: "Serega", id: 2 },
		update: {},
		create: {
			name: "Serega",
		},
	});

	console.log({ user1 });
}

// execute the main function
main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		// close Prisma Client at the end
		await prisma.$disconnect();
	});
