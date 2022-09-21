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
        <!-- <form> -->
        <input
          placeholder="Input your email here"
          pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
          required
        />
        <NuxtLink to="/access"><button>Send my code</button></NuxtLink>
        <!-- </form> -->
      </main>
    </div>

    <div class="right">
      <img
        src="../assets/indoor-shot-good-looking-curly-haired-woman-makes-face-plam-closes-eyes-laughs-positively-smiles-broadly-has-happy-talk-with-friend-enjoys-caffeine-beverage-morning-dressed-casually 1.png"
        alt="Mail-Logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
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

main input {
  height: 40px;
  font-family: "Karla", sans-serif;
  width: 90%;
  padding-left: 8px;
  letter-spacing: 1px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border: none;
  color: #fff;
  font-size: 16px;
}

.focusing {
  font-weight: bold;
}

input:focus {
  border: 1px solid #365899;
  border-radius: 3px;
  transition: 0.9s;
  color: #12213d;
  font-weight: bold;
}

main button {
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

main button:hover {
  transform: scale(0.91);
  cursor: pointer;
  transition: 0.3s;
}

.right {
  display: flex;
  height: 100vh;
}

.right img {
  width: 34rem;
}
</style>
