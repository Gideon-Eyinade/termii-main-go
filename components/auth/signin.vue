<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="personalised">
        <h3>Your account has been created!</h3>
        <p>
          Personalise your dashboard and get email templates that you need very
          fast and easy in 4 steps.
        </p>
        <NuxtLink to="/register"
          ><button>I want to personalise my dashboard</button></NuxtLink
        >
      </div>
      <NuxtLink to="/">
        <div class="bottom">
          <span>Do not personalised my dashboard</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
};
</script>

<style scoped>
.modal-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
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

.modal {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  /* gap: 400px; */
}

.personalised {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  justify-self: center;
  gap: 1rem;
  margin-bottom: 200px;
}

.personalised h3 {
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 30px !important;
  /* background: -webkit-linear-gradient(-48deg, #4480b1 -80%, #365899 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  color: #365899;
  font-family: "Karla", sans-serif;
  width: 200px;
  text-align: center;
}

.personalised p {
  font-family: "Karla", sans-serif;
  font-weight: 500;
  line-height: 22px !important;
  width: 320px;
  text-align: center;
  font-size: 0.8rem;
}

.personalised button {
  width: 12.5rem;
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

.personalised button:hover {
  transform: scale(0.91);
  cursor: pointer;
  transition: 0.3s;
}

.bottom {
  margin-bottom: 20px;
  text-align: center;
  text-decoration: none;
}
.bottom span {
  font-family: "Karla", sans-serif;
  font-weight: 400;
  width: 450px;
  font-size: 0.75rem;
  text-decoration: none;
}

.bottom span:hover {
  transform: scale(0.9);
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
}
</style>
