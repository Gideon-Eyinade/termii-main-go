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
      <div id="link">
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

header {
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin: 0;
  width: 100%;
  padding: 2.5rem 3.75rem;
  height: 100px;
}

.logo {
  display: flex;
  justify-content: flex-start;
  margin-top: -0.625rem;
  cursor: pointer;
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
  gap: 11rem;
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
  margin-right: 8.25rem;
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

#link:hover {
  transform: scale(0.91);
  cursor: pointer;
  transition: 0.3s;
}
</style>
