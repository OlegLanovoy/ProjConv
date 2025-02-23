import { prisma } from "./prisma-client";

async function up() {
  await prisma.convert.createMany({
    data: [
      { title: "usd", currency: 1 },
      { title: "eur", currency: 0.95 },
      { title: "byn", currency: 3.22 },
      { title: "rub", currency: 90.5 },
      { title: "pln", currency: 3.95 },
      { title: "gbp", currency: 0.82 }, // Фунт стерлингов
      { title: "jpy", currency: 133.5 }, // Японская иена
      { title: "cny", currency: 7.1 }, // Китайский юань
      { title: "cad", currency: 1.35 }, // Канадский доллар
      { title: "aud", currency: 1.52 }, // Австралийский доллар
      { title: "chf", currency: 0.91 }, // Швейцарский франк
      { title: "sek", currency: 10.9 }, // Шведская крона
      { title: "nok", currency: 11.2 }, // Норвежская крона
      { title: "sgd", currency: 1.36 }, // Сингапурский доллар
      { title: "hkd", currency: 7.85 }, // Гонконгский доллар
    ],
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Convert" RESTART IDENTITY CASCADE;`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
