<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="personalised">
        <h3>
          Your account has been created!<img
            src="../assets/horn.png"
            width="40px"
            height="20px"
          />
        </h3>

        <p>
          Personalise your dashboard and get email templates that you need very
          fast and easy in 4 steps.
        </p>
        <NuxtLink to="/register"
          ><button>I want to personalise my dashboard</button></NuxtLink
        >
      </div>
      <NuxtLink to="/" id="link">
        <div class="bottom" id="link-two">
          <span>No, I would manage any dashboard</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
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
    rgba(68, 128, 177, 0.1) 30%
  );
  position: fixed;
  opacity: 0.9;
  z-index: 4;
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

/*
img {
  margin-top: 12px;
} */

.personalised h3 {
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 30px !important;
  color: #12213d;
  font-family: "Karla", sans-serif;
  width: 200px;
  text-align: center;
}

.personalised p {
  font-family: "Karla", sans-serif;
  font-weight: 600;
  line-height: 22px !important;
  width: 320px;
  text-align: center;
  font-size: 0.8rem;
}

.personalised button {
  width: 12.5rem;
  text-decoration: none;
  border: none;
  background: linear-gradient(-48deg, #0dcbe5 -30%, #365899 60%) !important;
  color: #fff;
  padding: 12px 2px;
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

#link {
  text-decoration: none;
}

.bottom {
  margin-bottom: 20px;
  text-align: center;
  text-decoration: none;
}

.bottom span {
  font-family: "Karla", sans-serif;
  font-weight: 600;
  width: 450px;
  font-size: 0.75rem;
  text-decoration: none;
  color: #000;
}

span:hover {
  transform: scale(0.91);
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
}

#link-two:hover {
  transform: scale(0.91);
}
</style>
