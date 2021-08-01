<template>
  <Loading :active="isLoading"></Loading>
  <div class="finalOrder">
    <div class="banner bg-cover" v-if="!order.data.is_paid"></div>
    <div class="bannerSuccess bg-cover" v-else>
    <section class="d-flex flex-column align-items-center py-5">
      <h1 class="fw-bold text-white fs-7">訂單完成</h1>
      <p class="fw-bold text-white fs-2">謝謝您的訂購 !</p>
      <p class="fw-bold text-white fs-2">訂單預計在1 ~ 2個小時內送達。</p>
    </section>
    </div>
    <div class="container my-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-7">
          <div class="information text-center">
            <h2 class="fw-bold">訂單資訊</h2>
            <hr class="bg-dark" style="opacity: 1" />
            <ul class="list-unstyled">
              <li class="d-flex justify-content-between mb-1">
                <span class="fs-5 fw-bold">顧客姓名</span>
                <span class="fs-5 fw-bold">{{ order.data.user.name }}</span>
              </li>
              <li class="d-flex justify-content-between mb-1">
                <span class="fs-5 fw-bold">電子信箱</span>
                <span class="fs-5 fw-bold">{{ order.data.user.email }}</span>
              </li>
              <li class="d-flex justify-content-between mb-1">
                <span class="fs-5 fw-bold">聯絡方式</span>
                <span class="fs-5 fw-bold">{{ order.data.user.tel }}</span>
              </li>
              <li class="d-flex justify-content-between">
                <span class="fs-5 fw-bold">送達地址</span>
                <span class="fs-5 fw-bold">{{ order.data.user.address }}</span>
              </li>
            </ul>
            <hr />
            <ul class="list-unstyled">
              <li class="d-flex justify-content-between mb-1">
                <span class="fs-5 fw-bold">付款金額</span>
                <span class="fs-5 fw-bold">${{ Math.round(order.data.total + 80) }}</span>
              </li>
              <li class="d-flex justify-content-between">
                <span class="fs-5 fw-bold">付款狀態</span>
                <span class="fs-5 fw-bold text-danger" v-if="!order.data.is_paid"
                  >尚未付款</span
                >
                <span class="fs-5 fw-bold text-success" v-else>付款完成</span>
              </li>
            </ul>
            <hr />
            <div class="btn d-flex justify-content-between" v-if="!order.data.is_paid">
              <a
                href="#"
                class="btn-custom2 hvr-shutter-out-horizontal"
                @click.prevent="goIndex"
                ><i class="bi bi-reply-fill"></i>回首頁</a
              >
              <a href="#" class="btn-custom hvr-bounce-to-right" @click.prevent="pay(order.data.id)"
                >確認付款</a
              >
            </div>
            <div class="btn text-center" v-else>
              <a
                href="#"
                class="btn-custom2 hvr-shutter-out-horizontal"
                @click.prevent="goIndex"
                ><i class="bi bi-reply-fill"></i>回首頁</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router'
import { inject, onMounted } from '@vue/runtime-core'
export default {
  setup () {
    const order = reactive({
      data: []
    })
    const isLoading = ref(false)
    const route = useRoute()
    const router = useRouter()
    const axios = inject('axios')
    const getOrder = id => {
      isLoading.value = true
      id = route.params.id
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order/${id}`
      axios.get(api).then(res => {
        isLoading.value = false
        order.data = res.data.order
      })
    }
    const pay = id => {
      isLoading.value = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/pay/${id}`
      axios.post(api).then(res => {
        order.data.is_paid = true
        isLoading.value = false
      })
    }
    const goIndex = () => {
      router.push('/')
    }

    onMounted(() => {
      getOrder()
    })

    return {
      goIndex,
      order,
      pay,
      isLoading
    }
  }
  /* data () {
    return {
      order: [],
      isLoading: false
    }
  },
  methods: {
    getOrder (id) {
      id = this.$route.params.id
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order/${id}`
      this.$http.get(api).then((res) => {
        this.isLoading = false
        this.order = res.data.order
      })
    },
    pay (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/pay/${id}`
      this.$http.post(api).then((res) => {
        this.order.is_paid = true
        this.isLoading = false
      })
    },
    goIndex () {
      this.$router.push('/')
    }
  },

  created () {
    this.getOrder()
  } */
}
</script>
