
import { fetchData } from "../store/fetchApi.js";
import { Cardproduct } from "../component/cardproduct.js";
import { Carduser } from "../component/Carduser.js";

const cardContainer = document.getElementById("Cardcontainer");

const product = "product";

async function renderData() {
  try {
    const products = await fetchData(product);
    renderProducts(products, cardContainer);
  } catch (error) {
    console.error(error);
  }
}

renderData();

function renderProducts(products, cardContainer) {
  products.forEach((product) => {
    const cardHTML = Cardproduct(product);
    cardContainer.innerHTML += cardHTML;
  });
}


const cardUser = document.getElementById("userContainer");
const user = "user";

async function renderDataUser() {
  try {
    const users = await fetchData(user);
    renderUsers(users, cardUser);
  } catch (error) {
    console.error(error);
  }
}

renderDataUser();

function renderUsers(users, cardUser) {
  users.forEach((user) => {
    const cardHTML =Carduser(user);
    cardUser.innerHTML += cardHTML;
  });
}