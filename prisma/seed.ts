import { Prisma } from '@prisma/client';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

async function up() {
  await prisma.user.createMany({
    data: [
      {
        id: '00024a5a-3ecf-4ea1-ac9e-0cbc62c3e667',
        email: 'user@test.ru',
        password: hashSync('1234567890', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        id: '8ce9c3d7-db9d-4385-bbb1-b4f1c2456906',
        email: 'admin@test.ru',
        password: hashSync('0987654321', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: '00024a5a-3ecf-4ea1-ac9e-0cbc62c3e667',
        totalAmount: 0,
        token: '11111',
      },
      {
        userId: '8ce9c3d7-db9d-4385-bbb1-b4f1c2456906',
        totalAmount: 0,
        token: '222222',
      },
    ],
  });

  await prisma.product.createMany({
    data: [
      {
        name: 'Drift (Stage 5) | Blue Team Leader | Blue Striker | Tomatohead (Crown) | Hybrid (S4) | Skull Trooper ',
        status: 'AVAILABLE',
        imageUrl: [
          '/img/account/first-account-1.jpg',
          '/img/account/first-account-2.jpg',
          '/img/account/first-account-3.jpg',
          '/img/account/first-account-4.jpg',
          '/img/account/first-account-4.jpg',
        ],
        price: 220,
        isNew: true,
        discount: true,
        specifications: {
          items: '43',
          vbaks: '0',
          acclvl: '0',
          pickaxes: '12',
          emotes: '42',
          backblings: '25',
          gliders: '35',
          wraps: '26',
          sprays: '65',
          loadings: '84',
        },
        tags: [
          'Drift',
          'Blue Team Leader',
          'Blue Striker',
          'Tomatohead (Crown)',
          'Hybrid (S4)',
          'Skull Trooper',
        ],
      },
      {
        name: ' Rose Team Leader | Neo Versa | Fade (S3) | Deadpool X-Force | Spider Man | Ravenpool ',
        status: 'AVAILABLE',
        imageUrl: [
          '/img/account/second-account-1.jpg',
          '/img/account/second-account-2.jpg',
          '/img/account/second-account-3.jpg',
          '/img/account/second-account-4.jpg',
          '/img/account/second-account-5.jpg',
        ],
        price: 310,
        isNew: true,
        discount: true,
        specifications: {
          items: '20',
          vbaks: '120',
          acclvl: '0',
          pickaxes: '12',
          emotes: '3',
          backblings: '56',
          gliders: '75',
          wraps: '26',
          sprays: '37',
          loadings: '21',
        },
        tags: [
          'Rose Team Leader',
          'Neo Versa',
          'Fade (S3)',
          'Deadpool X-Force',
          'Spider',
        ],
      },
      {
        name: 'Spider Man | Doctor Strange | Prowler | Polar Peely | The Imagined | Ronin | Krisabelle | Blizzabelle ',
        status: 'AVAILABLE',
        imageUrl: [
          '/img/account/third-account-1.jpg',
          '/img/account/third-account-2.jpg',
          '/img/account/third-account-3.jpg',
          '/img/account/third-account-4.jpg',
          '/img/account/third-account-5.jpg',
        ],
        price: 130,
        isNew: true,
        discount: true,
        specifications: {
          items: '53',
          vbaks: '362',
          acclvl: '36',
          pickaxes: '15',
          emotes: '78',
          backblings: '44',
          gliders: '18',
          wraps: '27',
          sprays: '22',
          loadings: '40',
        },
        tags: [
          'Spider Man',
          'Doctor Strange',
          'Prowler',
          'Polar Peely',
          'The Imagined',
          'Ronin',
          'Krisabelle',
          'Blizzabelle',
        ],
      },
      {
        name: 'NEYMAR JR | DYNAMO | FISHSTICK | JOLTARA | BIRDIE | FOCUS | MANIC | FUSION | ELMIRA | Y0ND3R | X-LORD',
        status: 'AVAILABLE',
        imageUrl: [
          '/img/account/fourth-account-1.jpg',
          '/img/account/fourth-account-2.jpg',
          '/img/account/fourth-account-3.jpg',
          '/img/account/fourth-account-4.jpg',
          '/img/account/fourth-account-5.jpg',
          '/img/account/fourth-account-6.jpg',
          '/img/account/fourth-account-7.jpg',
          '/img/account/fourth-account-8.jpg',
          '/img/account/fourth-account-9.jpg',
        ],
        price: 285,
        isNew: true,
        discount: true,
        specifications: {
          items: '35',
          vbaks: '62',
          acclvl: '2',
          pickaxes: '80',
          emotes: '0',
          backblings: '22',
          gliders: '75',
          wraps: '5',
          sprays: '18',
          loadings: '24',
        },
        tags: [
          'NEYMAR JR',
          'DYNAMO',
          'FISHSTICK',
          'JOLTARA',
          'BIRDIE',
          'FOCUS',
          'MANIC',
          'FUSION',
        ],
      },
      {
        name: 'Prodigy | Khaby Lame | Doom Slayer | Geralt Of Rivia | Arctic Adeline | Sled Ready Guff',
        status: 'AVAILABLE',
        imageUrl: [
          '/img/account/fifth-account-1.jpg',
          '/img/account/fifth-account-2.jpg',
          '/img/account/fifth-account-3.jpg',
          '/img/account/fifth-account-4.jpg',
          '/img/account/fifth-account-5.jpg',
        ],
        price: 250,
        isNew: true,
        discount: true,
        specifications: {
          items: '52',
          vbaks: '70',
          acclvl: '27',
          pickaxes: '38',
          emotes: '0',
          backblings: '22',
          gliders: '47',
          wraps: '61',
          sprays: '74',
          loadings: '50',
        },
        tags: [
          'Prodigy',
          'Khaby Lame',
          'Doom Slayer',
          'Geralt Of Rivia',
          'Arctic Adeline',
          'Sled Ready Guff',
        ],
      },
      {
        name: 'Khaby Lame Gradient Only | Thunder Mega Wave | Clone Trooper | Mizuki | Relik | Triple Threat | Mae ',
        status: 'AVAILABLE',
        imageUrl: [
          '/img/account/sixth-account-1.jpg',
          '/img/account/sixth-account-2.jpg',
          '/img/account/sixth-account-3.jpg',
          '/img/account/sixth-account-4.jpg',
          '/img/account/sixth-account-5.jpg',
        ],
        price: 190,
        isNew: true,
        discount: true,
        specifications: {
          items: '11',
          vbaks: '46',
          acclvl: '8',
          pickaxes: '29',
          emotes: '41',
          backblings: '18',
          gliders: '26',
          wraps: '3',
          sprays: '12',
          loadings: '0',
        },
        tags: [
          'Khaby Lame Gradient Only',
          'Thunder Mega Wave',
          'Clone Trooper',
          'Mizuki',
          'Relik',
          'Triple Threat',
        ],
      },
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
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
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
