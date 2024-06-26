import { faker } from "@faker-js/faker";
import Hello from "remote/Hello";

setTimeout(() => {
  const body = document.querySelector("body");



  body.appendChild(Hello);
}, 3000);

  const name = faker.person.fullName();
const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.innerText = "Hello From Shell!" + name;

body.appendChild(h1);