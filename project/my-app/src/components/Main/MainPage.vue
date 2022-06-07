<template>
  <div class="main-page">
    <HeaderMain @clickTab="showPage" />
    <div v-if="page==='main'" class="calendar_position"><CalendarPage/></div>
    <div v-if="page==='Табели'">Табели</div>
    <div v-if="page==='Задачи'">Задачи</div>
    <div v-if="page==='Поддержка'">Поддержка</div>
    <div v-if="page==='Вопросы'">Вопросы</div>
  </div>
</template>
<script>
import HeaderMain from "./HeaderMain.vue";
import CalendarPage from "./CalendarPage.vue";
import { ref } from "vue";
export default {
  components: { HeaderMain, CalendarPage },
  setup() {
    const page = ref("main");
    const showPage = (name) => {
      page.value = name;
    };
    return {
      page,
      showPage,
    };
  },
};
</script>

<style lang="scss">
.calendar_position{
    display: grid;
    height: calc(100vh - 60px);
    align-items: center;
}
</style>