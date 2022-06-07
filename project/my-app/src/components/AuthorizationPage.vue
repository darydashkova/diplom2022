<template>
  <div class="autorization-page">
    <div class="autorization-page__title">Авторизация</div>
    <img src="../assets/magnit.svg" class="autorization-page__image" />
    <div class="autorization-page-auth">
      <div class="autorization-page-auth__container">
        <div class="autorization-page-auth__container-title">Логин</div>
        <input v-model="login" />
      </div>
      <div class="autorization-page-auth__container">
        <div class="autorization-page-auth__container-title">Пароль</div>
        <input v-model="pass" type="password" />
      </div>
    </div>
    <div v-if="error">
      <div v-if="error.error">Неверный логин и/или пароль</div>
      <div v-if="error.empty">Введите логин и пароль</div>
    </div>
    <button class="autorization-page__go" @click="go()">Войти</button>
  </div>
</template>


<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const login = ref("");
    const pass = ref("");
    const error = ref({
      error: false,
      empty: false,
    });
    const keys = Object.keys(error.value);
    const router = useRouter();
    const keysFalse = () => {
      for (let property of keys) {
        error.value[property] = false;
      }
    };
    const go = () => {
      keysFalse();
      if (login.value.length === 0 && pass.value.length === 0) {
        console.log("pusto");
        error.value.empty = true;
      } else {
        if (login.value === "kurinov" && pass.value === "qwerty") {
          router.push("/main");
        } else {
          error.value.error = true;
        }
      }
    };
    return {
      login,
      pass,
      go,
      error,
      keysFalse,
      keys,
    };
  },
};
</script>

<style lang="scss">
.autorization-page {
  position: relative;
  &__title {
    padding-top: 100px;
    background: linear-gradient(
      182.15deg,
      #ff0000 23.53%,
      rgba(0, 0, 0, 0.46) 159.98%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 550;
    font-size: 66px;
    line-height: 97px;
    text-fill-color: transparent;
    text-decoration: none;
    user-select: none;
    text-align: center;
  }
  &__image {
    position: absolute;
    top: 68px;
    width: 100px;
    left: 82px;
  }
  &-auth {
    display: flex;
    justify-content: center;
    padding-top: 40px;
    flex-direction: column;
    &__container {
      margin-top: 36px;
      &-title {
        font-weight: 400;
        font-size: 36px;
        line-height: 36px;
        user-select: none;
      }
      input {
        margin-top: 8px;
        height: 48px;
        border: 1px solid #aaaaaa;
        border-radius: 47px;
        width: 100%;
        max-width: 300px;
        font-size: 26px;
        padding: 0px 13px;
        user-select: none;
      }
    }
  }
  &__go {
    background: linear-gradient(
      91.38deg,
      #f55e3d -12.67%,
      rgba(148, 148, 148, 0) 151.36%
    );
    border: 1px solid #e6e6e6;
    box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.25);
    border-radius: 24px;
    font-family: "UniversalGroteskRemake";
    padding: 15px 32px;
    font-weight: 400;
    font-size: 20px;
    margin-top: 76px;
  }
}
</style>