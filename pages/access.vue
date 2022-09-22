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
        <h3>Yayyy!🎉 We just sent your access code to your inbox.</h3>

        <p>
          <span> Copy & paste the access code </span> here to confirm your
          email.
        </p>

        <input
          placeholder="Paste or input access code here"
          v-model="code"
          id="inputation"
        />

        <div class="buttons">
          <!-- Must be a 5-digit number -->
          <button
            class="first-button"
            @click="validateCode(code.value)"
            :id="this.code == '' ? 'disabling' : ''"
          >
            Verify my code
          </button>
          <NuxtLink to="/signup">
            <button class="second-button">There is no code in my inbox</button>
          </NuxtLink>
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
      code: "",
      showModal: false,
    };
  },
  methods: {
    validateCode() {
      var validRegex = /\b\d{5}\b/g;

      if (this.code == "") {
        alert("Please input code");
        this.code = "";
      } else if (this.code.match(validRegex)) {
        this.showModal = true;
      } else {
        alert("Invalid code, input a 5-digit-number!");
        this.code = "";
      }
    },
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
  width: 400px;
}

main h3 {
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 40px !important;
  color: #365899;
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
  padding-left: 16px;
  letter-spacing: 1px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
}

input:focus {
  border: 1px solid #365899;
  border-radius: 3px;
  transition: 0.9s;
  color: #12213d;
  font-weight: bold;
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

#disabling {
  opacity: 0.5;
}

#disabling:hover {
  transform: none;
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
