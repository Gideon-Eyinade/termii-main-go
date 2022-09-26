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
        <h3>Creating your Email! Go! account is too easy!</h3>
        <p>
          <span> Start by inputting your email </span> to get a personalized
          access code to begin your sign up process.
        </p>

        <form @submit="onSubmit">
          <div class="animate">
            <input
              type="email"
              placeholder="Input your email here"
              v-model="email"
              @change="validateEmail"
            />
            <div :class="{ 'dot-falling': isValidating }"></div>
            <div v-if="!isValidated">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="svg-success"
                viewBox="0 0 24 24"
              >
                <g
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                >
                  <circle
                    class="success-circle-outline"
                    cx="12"
                    cy="12"
                    r="11.5"
                  />
                  <circle
                    class="success-circle-fill"
                    cx="12"
                    cy="12"
                    r="11.5"
                  />
                  <polyline
                    class="success-tick"
                    points="17,8.5 9.5,15.5 7,13"
                  />
                </g>
              </svg>
            </div>
          </div>

          <input
            type="submit"
            class="buton"
            value="Send my code"
            :id="email == '' ? 'disabling' : ''"
            :disabled="isDisabled"
          />
        </form>
      </main>
    </div>

    <div class="right">
      <img src="../assets/curly-haired.jpg" alt="Mail-Logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      isDisabled: false,
      id: "",
      email: "",
      password: "mainGo",
      isValidating: false,
      isValidated: true,
    };
  },

  watch: {
    email(newValue, oldValue) {
      var validRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (newValue.length > 2) {
        this.isValidating = false;
        this.isValidated = true;

        if (newValue.match(validRegex)) {
          this.isValidating = false;
          this.isValidated = false;
        } else {
        }
      } else {
        this.isValidating = false;
        this.isValidated = true;
      }
    },
  },

  methods: {
    validateEmail() {
      console.log("here");

      if (this.email.length > 2) {
      }

      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (this.email == null || this.email == "") {
        alert("Please input email");
        this.email = "";
      } else if (this.email.match(validRegex)) {
      } else {
      }
    },

    // async onSubmit(e) {
    //   e.preventDefault();

    //   const users = {
    //     email: this.email,
    //   };

    //   try {
    //     let response = await this.$axios.post(
    //       "http://localhost:9090/users",
    //       users
    //     );

    //

    //     // console.log(response);
    //     this.$store.commit("changeDetails", response.data);
    //     this.$router.push({ path: "/access" });
    //   } catch (e) {
    //     console.log("Error updating email");
    //   }
    // },

    async onSubmit(e) {
      e.preventDefault();
      this.isValidated = !this.isValidated;
      this.isValidating = !this.isValidating;

      const users = {
        email: this.email,
        password: this.password,
      };

      try {
        const response = await this.$fire.auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );

        localStorage.setItem("email", response.user.email);

        const test = localStorage.getItem("email");
      } catch (e) {
        console.log(`Error creating account": ${e}`);
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

  width: 50%;
}

.logo {
  margin-top: 2rem;
}

main {
  display: flex;
  flex-direction: column;
  gap: 28px;
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
  line-height: 20px !important;
  width: 350px;
  font-weight: 400;
}

main span {
  font-weight: 600;
  font-size: 0.875rem;
  color: #4480b1;
  font-family: "Karla", sans-serif;
}

form {
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 400px;
}

.animate {
  display: flex;
  align-items: center;
}

main input {
  height: 40px;
  font-family: "Karla", sans-serif;
  width: 90%;
  padding-left: 16px;
  letter-spacing: 1px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border: none;
  color: #12213d;
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

.dot-falling {
  position: relative;
  left: -9999px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #365899;
  color: #365899;
  box-shadow: 9999px 0 0 0 #365899;
  animation: dotFalling 1s infinite linear;
  animation-delay: 0.1s;
  margin-left: 28px;
}

.dot-falling::before,
.dot-falling::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
}

.dot-falling::before {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #365899;
  color: #365899;
  animation: dotFallingBefore 1s infinite linear;
  animation-delay: 0s;
}

.dot-falling::after {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #365899;
  color: #365899;
  animation: dotFallingAfter 1s infinite linear;
  animation-delay: 0.2s;
}

@keyframes dotFalling {
  0% {
    box-shadow: 9999px -15px 0 0 rgba(152, 128, 255, 0);
  }
  25%,
  50%,
  75% {
    box-shadow: 9999px 0 0 0 #365899;
  }
  100% {
    box-shadow: 9999px 15px 0 0 rgba(152, 128, 255, 0);
  }
}

@keyframes dotFallingBefore {
  0% {
    box-shadow: 9984px -15px 0 0 rgba(152, 128, 255, 0);
  }
  25%,
  50%,
  75% {
    box-shadow: 9984px 0 0 0 #365899;
  }
  100% {
    box-shadow: 9984px 15px 0 0 rgba(152, 128, 255, 0);
  }
}

@keyframes dotFallingAfter {
  0% {
    box-shadow: 10014px -15px 0 0 rgba(152, 128, 255, 0);
  }
  25%,
  50%,
  75% {
    box-shadow: 10014px 0 0 0 #365899;
  }
  100% {
    box-shadow: 10014px 15px 0 0 rgba(152, 128, 255, 0);
  }
}

.svg-success {
  display: inline-block;
  vertical-align: top;
  height: 20px;
  width: 20px;
  opacity: 1;
  overflow: visible;
  margin-left: 6px;
}

@keyframes success-tick {
  0% {
    stroke-dashoffset: 16px;
    opacity: 1;
  }

  100% {
    stroke-dashoffset: 31px;
    opacity: 1;
  }
}

@keyframes success-circle-outline {
  0% {
    stroke-dashoffset: 72px;
    opacity: 1;
  }

  100% {
    stroke-dashoffset: 0px;
    opacity: 1;
  }
}

@keyframes success-circle-fill {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.success-tick {
  fill: none;
  stroke-width: 1px;
  stroke: #ffffff;
  stroke-dasharray: 15px, 15px;
  stroke-dashoffset: -14px;
  animation: success-tick 450ms ease 1400ms forwards;
  opacity: 0;
}

.success-circle-outline {
  fill: none;
  stroke-width: 1px;
  stroke: #81c038;
  stroke-dasharray: 72px, 72px;
  stroke-dashoffset: 72px;
  animation: success-circle-outline 300ms ease-in-out 800ms forwards;
  opacity: 0;
}

.success-circle-fill {
  fill: #81c038;
  stroke: none;
  opacity: 0;
  animation: success-circle-fill 300ms ease-out 1100ms forwards;
}

@media screen and (-ms-high-contrast: active),
  screen and (-ms-high-contrast: none) {
  .success-tick {
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
    animation: none;
    opacity: 1;
  }

  .success-circle-outline {
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
    animation: none;
    opacity: 1;
  }

  .success-circle-fill {
    animation: none;
    opacity: 1;
  }
}

.buton {
  width: 8rem;
  text-decoration: none;
  border: none;
  background: linear-gradient(-48deg, #0dcbe5 -30%, #365899 60%) !important;
  color: #fff;
  padding: 12px 20px;
  border-radius: 4px;
  font-family: "Karla", sans-serif;
  font-size: 0.75rem;
}

#disabling {
  opacity: 0.5;
}

#disabling:hover {
  transform: none;
}

.buton:hover {
  transform: scale(0.91);
  cursor: pointer;
  transition: 0.3s;
}

.right {
  display: flex;
  justify-content: flex-end;
  height: 100vh;
  width: 50%;
}

.right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
