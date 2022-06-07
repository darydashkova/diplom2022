<template>
  <div class="home-page">
    <HeaderHello></HeaderHello>
    <div class="home-page__container">
      <img src="../assets/main-people.svg" class="" />
      <div class="home-page__container-title">
        Система учета рабочего времени
      </div>
      <div class="home-page__container-title">С заботой о людях</div>
      <button @click="goAuth()" class="home-page__container-start">Начать работу</button>
    </div>
  </div>
</template>
<script>
import HeaderHello from "./HeaderHello.vue";
import { useRouter } from "vue-router";
export default {
  components: { HeaderHello },
  setup() {
    const router = useRouter();

    const goAuth = () => {
      router.push("/auth");
    };
    return { goAuth };
  },
};
</script>

<style lang="scss">
.home-page {
  &__container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      width: 100%;
      margin-bottom: 63px;
    }
    &-title {
      font-size: 48px;
      line-height: 48px;
      color: #000000;
      padding-bottom: 36px;
    }
    &-start {
      margin-top: 20px;
      margin-bottom: 30px;
      background: linear-gradient(
        91.38deg,
        #f55e3d -12.67%,
        rgba(148, 148, 148, 0) 151.36%
      );
      border: 1px solid #e6e6e6;
      box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.25);
      border-radius: 24px;
      width: 100%;
      max-width: 353px;
      font-family: "UniversalGroteskRemake";
      padding: 21px 0px;
      font-size: 20px;
      line-height: 20px;
      cursor: pointer;
    }
  }
}
</style>