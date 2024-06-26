import { faker } from "@faker-js/faker";

const name = faker.person.fullName();

const h2 = document.createElement("h2");
h2.innerText = "Hello From Remote!" + " " + name;

export default h2;
