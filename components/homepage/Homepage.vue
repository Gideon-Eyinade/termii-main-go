<template>
  <div class="container">
    <Navbar />

    <main>
      <section class="display">
        <h3>Never get frustrated thinking of what to write in the mail.</h3>
        <p>
          Your go-to tool to access email templates for any and every scenario.
        </p>
        <!-- <button>Sign up for free!</button> -->

        <NuxtLink to="/signup" class="signup">Sign up for free!</NuxtLink>
      </section>

      <section class="image-display">
        <img src="../../assets/woman-phone.jpg" alt="Mail-Logo" />
      </section>
    </main>

    <section class="bottom">
      <p>You can access 4000+ easily editable email templates</p>
    </section>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "Homepage",
  components: { Navbar },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* gap: 3rem; */
  width: 100vw;
  /* background: green; */
  justify-content: flex-start;
}

main {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  margin: 0;
  /* gap: 15rem; */
  width: 100%;
  height: calc(100vh - 240px);
  /* background: yellow; */
}

.display {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  width: 21rem;
  /* margin-top: 40px; */
  margin-left: 4.375rem;
}

.display h3 {
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 40px !important;
  color: #365899;
  font-family: "Karla", sans-serif;
}

.display p {
  font-size: 0.875rem;
  font-family: "Karla", sans-serif;
  line-height: 20px !important;
  width: 17rem;
}

.signup {
  width: 8rem;
  text-decoration: none;
  border: none;
  background: linear-gradient(-48deg, #0dcbe5 -30%, #365899 60%) !important;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-family: "Karla", sans-serif;
  font-size: 0.75rem;
}

.signup:hover {
  transform: scale(0.91);
  cursor: pointer;
  transition: 0.3s;
}

.image-display {
  width: 50%;
  height: 100%;
}

.image-display img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index: 22; */
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 100%;
  height: 14rem;
  /* padding: 20rem auto; */
}

.bottom p {
  font-family: "Karla", sans-serif;
  font-weight: bold;
  line-height: 22px !important;
  width: 250px;
}
</style>
