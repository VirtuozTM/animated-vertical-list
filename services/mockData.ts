import { faker } from "@faker-js/faker";

faker.seed(100);

const data = [...Array(30)].map(() => ({
  key: faker.string.uuid(),
  title: faker.music.artist(),
  image: faker.image.urlLoremFlickr({
    width: 150,
    height: 300 * 1.4,
    category: "cat",
  }),
  bg: faker.color.rgb(),
  description: faker.lorem.sentences({ min: 3, max: 6 }),
  author: {
    name: faker.person.fullName(),
    avatar: faker.image.avatarGitHub(),
  },
}));

export type Item = (typeof data)[number];
export default data;
