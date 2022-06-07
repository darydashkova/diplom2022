<template>
  <div class="calendar-page">
    <div class="calendar-page__job">
      <button class="button-default" v-if="isStart && !isWait" @click="clickButton('isStart',isStart )">
        <svg
          width="10"
          height="14"
          viewBox="0 0 18 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 11L0.75 21.3923L0.75 0.607696L18 11Z" fill="#C4C4C4" />
        </svg>
        Старт
      </button>
      <div v-if="!isStart && isClose" class="calendar-page__job-buttons">
        <button class="button-default button-default_right " @click="clickButton('isWait',isWait )">
          <svg
            width="10"
            height="14"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 11L0.75 21.3923L0.75 0.607696L18 11Z" fill="#C4C4C4" />
          </svg>
          Пауза
        </button>
        <button class="button-default" @click="clickButton('isClose',isClose )">
          <svg
            width="10"
            height="14"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 11L0.75 21.3923L0.75 0.607696L18 11Z" fill="#C4C4C4" />
          </svg>
          Завершить
        </button>
      </div>
      <div class="calendar-page__job-info">
        <div class="calendar-page__job-info-ls calendar-page__job-info_position">
          <span>Время последнего начала: </span>
          <span class="calendar-page__job-info-ls_mh">{{ dataNow }}</span>
        </div>
        <div class="calendar-page__job-info-ls  calendar-page__job-info_position ">
          <span>Время за работой</span>
          <span class="calendar-page__job-info-ls_mh"> {{ dataNow }}</span>
        </div>
        <div class="calendar-page__job-info-j calendar-page__job-info_position">
          <span>Без компьютера</span>
          <span class="calendar-page__job-info-ls_mh"> {{ dataNow }}</span>
        </div>
        <div class="calendar-page__job-info-data calendar-page__job-info_position">
          <span>Текущая дата и время:</span>
         <span class="calendar-page__job-info-ls_mh"> {{ dataNow }}</span>
        </div>
      </div>
    </div>
    <div class="calendar-page__calendar">
      <vue-cal hide-view-selector :time="false" active-view="month" xsmall>
        <i slots="arrow-prev" aria-hidden="true" class="v-icon material-icons">
          arrow_back</i
        >
        <i slots="arrow-next" aria-hidden="true" class="v-icon material-icons">
          arrow_forward</i
        >
      </vue-cal>
    </div>
  </div>
</template>
<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import { ref, computed } from "vue";

export default {
  components: { VueCal },
  setup() {
    const isStart = ref(true);
    const isWait = ref(false);
    const isClose = ref(false);
    const dataNow = ref(new Date().toLocaleString());
    const calcDate = () => {
      dataNow.value = computed(() => new Date().toLocaleString());
    };
    const clickButton = (name, item) => {
      console.log(item)
      const nameConst = ref(eval(name));
      nameConst.value = !item;
      if(name!='isClose'){
        isClose.value=true;
      }
      else{
         isStart.value=true;
      }
    }
    setInterval(calcDate, 1000);

    return {
      isStart,
      isWait,
      dataNow,
      calcDate,
      clickButton,
      isClose
    };
  },
};
</script>
<style lang="scss">
.calendar-page {
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: auto auto;
  grid-column-gap: 100px;
  &__job {
    max-width: 409px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #bebebe;
    padding: 10px 30px;
      transition: width 5s ease-in-out;
    &-info{
      &_position{
display: flex;
flex-direction: column;
      }
      &-ls{
        &_mh{
          min-height: 30px;
          padding-top: 10px;
        }
      }
    }
    &-buttons{
      display: flex;
    
    }
  }
  &__calendar {
    max-width: 540px;
  }
}
</style>