<template>
  <div class="header">
    <div class="header__tabs">
      <img
        class="header__tabs-logo"
        src="../../assets/magnit.svg"
        @click="emitPage()"
      />
      <ul>
        <li
          v-for="(nav, index) in navigate"
          :key="index"
          class="tab"
          :class="{ active_tab: nav[1] }"
          @click="activeTab(index)"
        >
          {{ nav[0] }}
        </li>
      </ul>
    </div>
    <div class="header-info">
      <span class="header-info__name"> Куринов Алексадр Юрьевич</span>
      <div
        class="header-info__menu"
        :class="{ 'header-info__menu_active': isActive }"
      >
        <div class="header-info__menu-main">
          <img src="../../assets/avatar.svg" />
          <svg
            width="14"
            height="24"
            viewBox="0 0 14 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="activeMenu(isActive)"
          >
            <path
              d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807609 11.0711 0.807609 10.4853 1.3934L0.93934 10.9393ZM3 10.5H2V13.5H3V10.5Z"
              fill="white"
            />
          </svg>
        </div>
        <div v-if="isActive" class="menu">
          <span>Мой профиль</span>
          <span>Настройки</span>
          <span>Контакты</span>
          <span>Выход</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: {},
  setup(props, { emit }) {
    const isActive = ref(false);
    const navigate = ref([
      ["Табели", false],
      ["Задачи", false],
      ["Поддержка", false],
      ["Вопросы", false],
    ]);
    const activeMenu = (elem) => {
      isActive.value = !elem;
    };
    const activeTab = (index) => {
      for (let i = 0; i < navigate.value.length; i++) {
        navigate.value[i][1] = false;
      }
      navigate.value[index][1] = true;

      emitPage(navigate.value[index][0]);
    };
    const emitPage = (name) => {
      if (name) {
        emit("clickTab", name);
      } else {
        emit("clickTab", "main");
      }
      if (!name) {
        for (let i = 0; i < navigate.value.length; i++) {
          navigate.value[i][1] = false;
        }
      }
    };
    return {
      activeMenu,
      isActive,
      navigate,
      activeTab,
      emitPage,
    };
  },
};
</script>
<style lang="scss">
.header {
  background-color: black;
  display: flex;
  justify-content: space-between;
  &__tabs {
    display: flex;
    align-items: center;
    &-logo {
      margin: 10px 15px;
      cursor: pointer;
    }
    ul {
      list-style: none;
      display: flex;
      .tab {
        margin-left: 5px;
        padding: 4px 10px;
        cursor: pointer;
        color: white;
      }
      .active_tab {
        color: black;
        background-color: white;
        border-radius: 81px;
      }
    }
  }

  &-info {
    display: flex;
    align-items: center;
    margin-right: 40px;
    position: relative;

    &__name {
      margin-right: 38px;
    }
    &__menu {
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: 83px;
      padding-right: 12px;
      transition: 0.3s;
      &-main {
        display: flex;
        align-items: center;
      }
      img {
        margin-right: 17px;
        width: 37px;
      }
      svg {
        transition: 0.3s;
        cursor: pointer;
      }
      .menu {
        position: absolute;
        bottom: -119px;
        background: #ffffff;
        border: 1px solid #dedede;
        border-radius: 17px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        width: 116px;
        span {
          padding-bottom: 5px;
          cursor: pointer;
        }
      }
    }
    &__menu_active {
      background-color: white;
      transition: 0.3s;
      svg {
        transform: rotate(90deg);
        transition: 0.3s;
        path {
          fill: black;
        }
      }
    }
  }
}
</style>