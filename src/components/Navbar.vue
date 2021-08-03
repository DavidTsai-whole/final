<template>
  <nav class="nav fixed-top bg-orange">
    <div
      class="container-fluid d-flex align-items-center justify-content-between"
    >
      <router-link
        to="/"
        class="h1 fw-bold font-family-indie-flower" :class="{active:idx === 0}"
        >CHILLBURGER</router-link
      >
      <ul class="menu d-lg-flex d-none list-unstyled fw-bold fs-5 mb-0">
        <li>
          <router-link to="/products" :class="{active:idx === 3}"><i class="bi bi-grid-fill"></i> 商品列表</router-link>
        </li>
        <li>
          <router-link to="/about" :class="{active:idx === 2}"><i class="bi bi-chat-dots"></i> 關於我們</router-link>
        </li>
        <li>
          <router-link to="/question" :class="{active:idx === 1}"
            ><i class="bi bi-question-circle"></i> 常見問題</router-link
          >
        </li>
        <!-- <li class="d-lg-none">
          <router-link to="/cart"
            ><i class="bi bi-cart"></i> 購物車<span>
              ({{ cartData.data.length }})</span
            ></router-link
          >
        </li>
        <li class="d-lg-none">
          <router-link to="/favorite"
            ><i class="bi bi-heart-fill"></i> 商品清單<span>
              ({{ favoriteData.data.length }})</span
            ></router-link
          >
        </li> -->
      </ul>
       <ul class="hideSide list-unstyled fw-bold fs-5 mb-0" @click="toggleIcon" :class="{active:isLoading}">
         <li>
          <router-link to="/products"><i class="bi bi-grid-fill"></i> 商品列表</router-link>
        </li>
        <li>
          <router-link to="/about"><i class="bi bi-chat-dots"></i> 關於我們</router-link>
        </li>
        <li>
          <router-link to="/question"
            ><i class="bi bi-question-circle"></i> 常見問題</router-link
          >
        </li>
        <li class="d-lg-none">
          <router-link to="/cart"
            ><i class="bi bi-cart"></i> 購物車<span>
              ({{ cartData.data.length }})</span
            ></router-link
          >
        </li>
        <li class="d-lg-none">
          <router-link to="/favorite"
            ><i class="bi bi-heart-fill"></i> 商品清單<span>
              ({{ favoriteData.data.length }})</span
            ></router-link
          >
        </li>
         </ul>
      <ul class="menu-icon d-lg-flex list-unstyled fs-5 mb-0 d-none">
        <li>
          <router-link to="/cart" :class="{active:idx === 4}"><i class="bi bi-cart"></i></router-link
          ><span class="cartNum" v-if="cartData.data.length !== 0">{{
            cartData.data.length
          }}</span>
        </li>
        <li>
          <router-link to="/favorite" :class="{active:idx === 5}"
            ><i class="bi bi-heart-fill ms-2"></i></router-link
          ><span class="favoriteNum">{{ favoriteData.data.length }}</span>
        </li>
      </ul>
      <span class="d-lg-none text-white ms-auto me-2 zindex-101">Menu</span>
      <div
        class="menu-toggle d-lg-none"
        @click="toggleIcon"
        :class="{active:isLoading}"
      ></div>
      <div class="hideBox" @click="toggleIcon" :class="{show:isLoading}"></div>
    </div>
  </nav>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { inject, onMounted, watch } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

export default {
  setup () {
    const isLoading = ref(false)
    const idx = ref(0)
    const routerArr = ['', 'question', 'about', 'products', 'cart', 'favorite']
    const classList = reactive({
      data: {}
    })
    const cartData = reactive({
      data: []
    })
    const favoriteData = reactive({
      data: JSON.parse(localStorage.getItem('favorite')) || []
    })
    watch(isLoading, () => {
      if (isLoading.value === true) {
        document.body.style['overflow-y'] = 'hidden'
      } else {
        document.body.style['overflow-y'] = 'auto'
      }
    })
    const mitt = inject('mitt')
    const axios = inject('axios')

    const route = useRoute()
    watch(() => route.path, () => {
      routerArr.forEach((item, index) => {
        const rp = route.path.substr(1)
        if (item === rp) {
          idx.value = index
        }
      })
    })
    const toggleIcon = () => {
      isLoading.value = !isLoading.value
    }
    const getCart = () => {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      axios.get(api).then(res => {
        cartData.data = res.data.data.carts
      })
    }

    onMounted(() => {
      getCart()
      mitt.on('update-cart', () => {
        getCart()
      })
      mitt.on('update-favorite', () => {
        favoriteData.data = JSON.parse(localStorage.getItem('favorite')) || []
      })
      mitt.on('pushNavbar', res => {
        classList.data = res
      })
    })
    return {
      isLoading,
      toggleIcon,
      getCart,
      classList,
      favoriteData,
      cartData,
      idx
    }
  }
/*
  data () {
    return {
      classList: {},
      cartData: [],
      favoriteData: JSON.parse(localStorage.getItem('favorite')) || []
    }
  },
  props: ['data'],
  inject: ['mitt'],
  methods: {
    toggleIcon () {
      const menuIcon = this.$refs.menuIcon
      const menu = this.$refs.menu
      menuIcon.classList.toggle('active')
      menu.classList.toggle('active')
    },
    getCart () {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api).then(res => {
        if (res.data.success) {
          this.cartData = res.data.data.carts
        }
      })
    }
  },
  watch: {
    $route (to) {
      if (to.path !== '/') {
        this.classList.bg = 'bg-orange'
        this.classList.text = 'text-primary'
      } else {
        this.classList.bg = ''
        this.classList.text = ''
      }
    }
  },
  mounted () {
    this.getCart()
    this.mitt.on('update-cart', () => {
      this.getCart()
    })
    this.mitt.on('update-favorite', () => {
      this.favoriteData = JSON.parse(localStorage.getItem('favorite')) || []
    })
    this.mitt.on('pushNavbar', res => {
      this.classList = res
    })
  } */
}
</script>
