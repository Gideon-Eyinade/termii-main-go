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

          <div class="append-name">{{ this.email }}</div>
          <input
            type="password"
            v-model="password"
            placeholder="Input your password"
            @change="validatePassword"
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
      <img
        src="../assets/fine-girl.png"
        alt="Mail-Logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: " Register",

  data() {
    return {
      isDisabled: false,
      id: this.$store.state.users.id,
      email: this.$store.state.users.email,
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

    async onSubmit(e) {
      e.preventDefault();

      const users = {
        id: this.id,
        email: this.email,
        password: this.password,
      };

      try {
        const response = await this.$axios.put(
          `http://localhost:9090/users/${this.id}`,
          users
        );
        this.$router.push({ path: "/personalise" });
      } catch (e) {
        console.log("Error updating email");
      }
    },
  },

  mounted() {
    // console.log(this.id);
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
  /* height: 98.7vh; */
}

.right img {
  width: 550px;
}
</style>
