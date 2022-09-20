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
        <h3>
          Yayyy! <img src="../assets/horn.png" width="40px" height="40px" /> We
          just sent your access code to your inbox
        </h3>

        <p>
          <span> Copy & paste the access code </span> here to confirm your
          email.
        </p>

        <input placeholder="Paste or input access code here" />
        <div class="buttons">
          <button class="first-button" @click="showModal = true">
            Verify my code
          </button>
          <button class="second-button">There is no code in my inbox</button>
        </div>
      </main>
    </div>

    <div class="right" v-if="!showModal">
      <img
        src="../assets/handsome-young-african-man-holding-mobile-phone-gesturing-while-standing-against-grey-wall 1.png"
        alt="Mail-Logo"
      />
    </div>

    <Modal v-show="showModal" />
  </div>
</template>

<script>
import Modal from "~/components/Modal.vue";

export default {
  name: "Access",
  components: { Modal },
  data() {
    return {
      showModal: false,
    };
  },
};
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
  gap: 10px;
  width: 500px;
}

main h3 {
  font-weight: 700;
  font-size: 2rem;
  line-height: 44px !important;
  background: -webkit-linear-gradient(-48deg, #4480b1 -30%, #365899 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Karla", sans-serif;
}

main p {
  font-size: 0.875rem;
  font-family: "Karla", sans-serif;
  line-height: 22px !important;
  width: 300px;
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
  width: 400px;
}

.buttons {
  display: flex;
  flex-direction: row;
  margin-top: 16px;
}

.first-button {
  width: 8rem;
  text-decoration: none;
  border: none;
  background: linear-gradient(-48deg, #0dcbe5 -30%, #365899 60%) !important;
  color: #fff;
  padding: 12px 16px;
  border-radius: 4px;
  font-family: "Karla", sans-serif;
  font-size: 0.75rem;
}

.first-button:hover {
  transform: scale(0.91);
  cursor: pointer;
  transition: 0.3s;
}

.second-button {
  width: 12rem;
  text-decoration: none;
  border: none;
  background: #ffffff;
  padding: 12px 16px;
  border-radius: 4px;
  font-family: "Karla", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #365899;
}

.second-button:hover {
  transform: scale(0.91);
  transition: 0.3s;
  cursor: pointer;
}

.right {
  display: flex;
  /* height: 98.7vh; */
}

.right img {
  width: 550px;
  z-index: -4;
}
</style>
