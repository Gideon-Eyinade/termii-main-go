<template>
  <div class="container">
    <div class="left"></div>

    <div class="right">
      <div class="logo">
        <img
          src="https://termii.com/assets/images/logo.png"
          alt="logo"
          data-src="https://termii.com/assets/images/logo.png"
          data-src-retina="https://termii.com/assets/images/logo.png"
          width="155px"
          height="auto"
        />
      </div>
      <main>
        <h3>Create a password</h3>
        <p>
          Your email has been confirmed. Now set your
          <span> 8 characters (minimum) </span> password to create your account
        </p>
        <input placeholder="Input your email here" />
        <input placeholder="Input your password" />
        <input placeholder="Confirm your password" />
        <button>Create my account</button>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
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

.right {
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

main span {
  font-weight: 600;
  font-size: 1rem;

  color: inherit;
  -webkit-box-decoration-break: clone;
  background: -webkit-linear-gradient(-48deg, #4480b1 -30%, #365899 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Karla", sans-serif;
}

main input {
  height: 40px;
  font-family: "Karla", sans-serif;
}
main button {
  width: 8rem;
  text-decoration: none;
  border: none;
  background: linear-gradient(-48deg, #0dcbe5 -30%, #365899 60%) !important;
  color: #fff;
  padding: 8px 20px;
  border-radius: 4px;
  font-family: "Karla", sans-serif;
  font-size: 0.75rem;
}

.left {
  display: flex;
  background: linear-gradient(-48deg, #0dcbe5 -30%, #365899 60%) !important;
  width: 100%;
  /* height: 98.7vh; */
}

.right img {
  width: 550px;
}
</style>
