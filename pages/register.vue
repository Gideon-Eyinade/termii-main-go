<template>
  <div class="container">
    <div class="left">
      <div class="logo">
        <NuxtLink to="/"
          ><img
            src="https://termii.com/assets/images/logo.png"
            alt="logo"
            data-src="https://termii.com/assets/images/logo.png"
            data-src-retina="https://termii.com/assets/images/logo.png"
            width="155px"
            height="auto"
        /></NuxtLink>
      </div>
      <main>
        <h3>Create a password</h3>
        <p>
          Your email has been confirmed. Now set your
          <span> 8 characters (minimum) </span> password to create your account
        </p>
        <form>
          <input id="email" type="email" placeholder="Input your email" />
          <input
            id="password"
            type="password"
            placeholder="Input your password"
            pattern=".{8,}"
          />
          <!-- <input
            v-model="confirmPassword"
            id="confirm-password"
            type="password"
            placeholder="Confirm your password"
          /> -->
          <NuxtLink to="/personalise"
            ><button @click="createAccount">Create my account</button></NuxtLink
          >
        </form>
      </main>
    </div>

    <div class="right">
      <img
        src="../assets/cheerful-teenager-with-toothy-smile-afro-hairstyle-holds-modern-cell-phone-chats-online-with-boyfriend 1.png"
        alt="Mail-Logo"
      />
    </div>
  </div>
</template>

<script setup>
console.log("My app");
// import { onMounted } from "vue";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// const createUserWithEmailPassword = createUserWithEmailAndPassword();
import { createUser } from "../composables/useFirebase";

const createAccount = async () => {
  const email = "geyinade@yahoo.com";
  const password = "123456";

  const credentials = await createUser(email, password);
  console.log(...credentials);
};
// export default {
//   name: "Register",
//   // methods: {
//   //   async credentials(email, password) {
//   //     const credent = await createUser(email, password);
//   //     console.log(credent);
//   //   },
//   // },
//   // mounted() {
//   //   const email = "jhshdhfjhd@mail.com";
//   //   const password = "123456";

//   //   // async credentials(this.email, this.password) {
//   //   //   const credent = await createUser(email, password);
//   //   //   console.log(credent);
//   //   // }
//   //   const credent = createUser(email, password);
//   //   console.log(credent);
//   // },
// };

// onMounted(
//   async () => {
//   const email = "eyinadeg@gmail.com";
//   const password = "123456";

//   const credentials = await createUser(email, password);
//   console.log(credent);
// });
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,300;0,400;0,600;1,300;1,400;1,500&display=swap");

.container {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100vh;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 100px;
  margin-left: 70px;
}

.logo {
  margin-top: 2rem;
}

main {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 400px;
}

main h3 {
  font-weight: 700;
  font-size: 2rem;
  line-height: 44px !important;
  color: inherit;
  -webkit-box-decoration-break: clone;
  background: -webkit-linear-gradient(-48deg, #4480b1 -30%, #365899 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Karla", sans-serif;
}

main p {
  font-size: 0.875rem;
  font-family: "Karla", sans-serif;
  line-height: 22px !important;
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

main span {
  font-weight: 600;
  font-size: 0.875rem;
  color: #365899;
  font-family: "Karla", sans-serif;
}

main input {
  height: 40px;
  font-family: "Karla", sans-serif;
  font-size: 12px;
}

input:hover {
  border: 1px solid #365899;
}

main button {
  width: 10rem;
  /* height: 4rem; */
  text-decoration: none;
  border: none;
  background: linear-gradient(-48deg, #0dcbe5 -30%, #365899 60%) !important;
  color: #fff;
  padding: 14px 20px;
  border-radius: 4px;
  font-family: "Karla", sans-serif;
  font-size: 0.75rem;
  margin-top: 16px;
}

main button:hover {
  cursor: pointer;
  transition: 0.3s;
  transform: scale(0.91);
}

.right {
  display: flex;
  /* height: 98.7vh; */
}

.right img {
  width: 550px;
}
</style>
