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
            <div :class="email == '' ? '' : 'dot-falling'"></div>
          </div>

          <input
            type="submit"
            class="buton"
            value="Send my code"
            :id="email == '' ? 'disabling' : ''"
            
            :disabled="isDisabled"
          />
        </form>

        <!-- </NuxtLink
        > -->
      </main>
    </div>

    <div class="right">
      <img
        src="../assets/curly-haired.png"
        alt="Mail-Logo"
      />
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
    };
  },

  methods: {
    validateEmail() {
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (this.email == null || this.email == "") {
        alert("Please input email");
        this.email = "";
      } else if (this.email.match(validRegex)) {
      } else {
        alert("Invalid email address!");
        this.email = "";
      }
    },

    async onSubmit(e) {
      e.preventDefault();

      const users = {
        email: this.email,
      };

      try {
        let response = await this.$axios.post(
          "http://localhost:9090/users",
          users
        );

        //console.log(response);
        this.$store.commit("changeDetails", response.data);
        this.$router.push({ path: "/access" });
      } catch (e) {
        console.log("Error updating email");
      }
    },

    // animat() {
    //   var validRegex =
    //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //   if (typeof email === "string" && email.includes("@")) {
    //     class===dot-falling;
    //   } else if (this.email === validRegex) {
    //     id = "";
    //   } else {
    //     id = "";
    //   }
    // },

    // validateEmail2(email) {
    //   typeof email === "string" && email.includes("@");
    // },

    // onEmailChange() {},

    // setIsDisabled() {
    //   !this.validateEmail2(this.email);
    // },
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
  height: 97.5vh;
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

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
}
.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}
.checkmark {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
}
.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}
@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
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
  width: 45rem;
}

.right img {
  max-width: 100%;
  max-height: 100%;
}
</style>
