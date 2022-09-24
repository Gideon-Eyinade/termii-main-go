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

        <form @submit="onSubmit">
          <!-- <input
            id="email"
            type="email"
            v-model="email"
            placeholder="Input your email"
          /> -->

          <div class="append-check">
            <div class="append-name">
              {{ email }}
            </div>
            <div class="append-checkmark">
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
            type="password"
            v-model="password"
            placeholder="Input your password"
          />

          <input
            v-model="confirmPassword"
            id="confirm-password"
            type="password"
            placeholder="Confirm your password"
          />

          <input
            type="submit"
            class="buton"
            :id="this.password == '' ? 'disabling' : ''"
            value="Create my account"
          />
        </form>
      </main>
    </div>

    <div class="right">
      <img src="../assets/fine-girl.jpg" alt="Mail-Logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: " Register",

  data() {
    return {
      isDisabled: false,
      uid: this.$store.state.users.uid,
      email: localStorage.getItem("email"),
      password: "",
    };
  },

  //
  methods: {
    validatePassword() {
      var validRegex =
        /(?=^.{8,32}$)(?=(?:.*?\d){1})(?=.*[a-z])(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%*()_+^&]*$/;

      if (this.password == null || this.password == "") {
        alert("Please input password");
        this.password = "";
      } else if (this.password.match(validRegex)) {
      } else {
        alert(
          "Invalid password, enter a minimum of 8 characters with at least 1 number and 1 special character!"
        );
        this.password = "";
      }
    },

    // async onSubmit(e) {
    //   e.preventDefault();

    //   const users = {
    //     uid: this.uid,
    //     email: this.email,
    //     password: this.password,
    //   };

    //   try {
    //     const response = await this.$axios.put(
    //       `http://localhost:9090/users/${this.id}`,
    //       users
    //     );
    //     this.$router.push({ path: "/personalise" });
    //   } catch (e) {
    //     console.log("Error updating email");
    //   }
    // },

    async onSubmit(e) {
      // this.$store.commit(state, response);
      e.preventDefault();

      const users = {
        email: this.email,
        password: this.password,
      };

      try {
        const response = await this.$fire.auth.createUserWithEmailAndPassword(
          // "SET_USER",
          this.email,
          this.password
        );
      } catch (e) {
        console.log(`Error creating account": ${e}`);
      }

      this.$router.push({ path: "/personalise" });
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

.append-check {
  display: flex;
  /* justify-content: center; */
}

.append-name {
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
  text-align: center;
  display: flex;
  align-content: center;
  padding-top: 10px;
  border: 1px solid #365899;
  font-weight: bold;
}

.append-checkmark {
  margin-top: 8px;
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
  stroke: #365899;
  stroke-dasharray: 72px, 72px;
  stroke-dashoffset: 72px;
  animation: success-circle-outline 300ms ease-in-out 800ms forwards;
  opacity: 0;
}

.success-circle-fill {
  fill: #365899;
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

.buton {
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

.buton:hover {
  cursor: pointer;
  transition: 0.3s;
  transform: scale(0.91);
}

#disabling {
  opacity: 0.5;
}

#disabling:hover {
  transform: none;
}

.right {
  display: flex;
  width: 50%;
  /* height: 98.7vh; */
}

.right img {
  width: 100%;
  object-fit: cover;
}
</style>
