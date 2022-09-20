<template>
  <header>
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

    <menu>
      <p>Products</p>
      <p>Pricing</p>
      <p>Blog</p>
    </menu>

    <div class="register">
      <div><button class="login">Login</button></div>
      <div>
        <NuxtLink to="/signup" class="signup">Signup</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

header {
  display: flex;
  align-content: center;
  justify-content: space-around;
  gap: 1rem;
  margin: 2.5rem auto;
  width: 100%;
  /* margin-left: 8rem; */
}

.logo {
  display: flex;
  /* align-content: center; */
  justify-content: flex-start;
  margin-top: -0.625rem;
  cursor: pointer;
  /* margin-left: 15px; */
}

.logo:hover {
  transform: scale(0.91);
  transition: 0.3s;
  cursor: pointer;
}

menu {
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  gap: 7rem;
  font-family: "Karla", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  margin-right: 4rem;
}

menu p:hover {
  transform: scale(0.9);
  transition: 0.3s;
  cursor: pointer;
  color: #365899;
  font-weight: 600;
}

.register {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  gap: 0.875rem;
  margin-left: 1.25rem;
}

.login {
  text-decoration: none;
  border: none;
  background: #fff;
  font-family: "Karla", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #365899;
}

.login:hover {
  transform: scale(0.91);
  transition: 0.3s;
  cursor: pointer;
}

.signup {
  text-decoration: none;
  border: none;
  background: linear-gradient(-48deg, #0dcbe5 -30%, #365899 60%) !important;
  color: #fff;
  padding: 8px 25px;
  border-radius: 4px;
  font-family: "Karla", sans-serif;
  font-size: 0.875rem;
}

.signup:hover {
  color: #365899;
  cursor: pointer;
  transition: 0.3s;
}
</style>
