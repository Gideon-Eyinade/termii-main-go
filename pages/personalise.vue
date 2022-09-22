<template>
  <div class="container">
    <div class="content">
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
        <h3>Personal Information</h3>

        <span class="first"> 1/4 </span>
        <span class="second"> Soooo, what should we call you? </span>
        <p>Tell me what to call you in the inbox</p>

        <input v-model="name" placeholder="Your name here" />

        <NuxtLink to="/">
          <button
            :disabled="typeof name === 'string' ? !isDisabled : isDisabled"
            :id="this.name == '' ? 'disabling' : ''"
          >
            Continue
          </button>
        </NuxtLink>
      </main>

      <div class="bottom">
        <NuxtLink to="/" id="link">
          <span>Do not personalised my dashboard</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personalise",
  data() {
    return {
      name: "",
      isDisabled: true,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    to right,
    #ffffff 60%,
    rgba(68, 128, 177) 20%,
    rgba(68, 128, 177, 0.1) 10%
  );

  /* background: linear-gradient(-48deg, #0dcbe5 -30%, #365899 90%) !important; */
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  gap: 50px;
  margin-left: 70px;
  height: 100vh;
}

.logo {
  /* margin-top: 1rem; */
}

main {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  justify-self: center;
  gap: 1rem;
  margin-left: 10px;
}

main h3 {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 30px !important;
  font-family: "Karla", sans-serif;
  /* width: 200px; */
  /* text-align: center; */
}

.first {
  color: #365899;
  font-weight: bold;
  font-size: 12px;
}

.second {
  color: #365899;
  font-weight: bold;
  font-size: 1.8rem;
  width: 300px;
}

main p {
  font-family: "Karla", sans-serif;
  font-weight: 500;
  line-height: 22px !important;
  width: 320px;
  font-size: 0.8rem;
}

input {
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

main button {
  width: 8rem;
  text-decoration: none;
  border: none;
  background: linear-gradient(-48deg, #0dcbe5 -30%, #365899 90%) !important;
  color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  font-family: "Karla", sans-serif;
  font-size: 0.75rem;
  text-align: center;
}

main button:hover {
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

#link {
  text-decoration: none;
  color: #000;
  font-weight: 400;
}

.bottom {
  /* margin-bottom: 20px; */
  text-align: center;
  text-decoration: none;
}

.bottom span {
  font-family: "Karla", sans-serif;
  font-weight: 400;
  width: 450px;
  font-size: 0.8rem;
  text-decoration: none;
  margin-left: 500px;
  margin-top: 600px;
}

.bottom span:hover {
  transform: scale(0.9);
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
}
</style>
