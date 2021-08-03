<template>
  <Loading :active="isLoading"></Loading>
  <div class="productDetail">
    <div class="container">
      <div class="row d-flex align-items-center">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#/">首頁</a></li>
            <li class="breadcrumb-item"><a href="#/products">商品列表</a></li>
            <li class="breadcrumb-item active fw-bold" aria-current="page">
              {{ product.data.title }}
            </li>
          </ol>
        </nav>
        <div class="col-lg-6">
          <img :src="product.data.imageUrl" alt="" />
        </div>
        <div class="col-lg-6">
          <h2 class="fw-bold mt-lg-0 mt-2">{{ product.data.title }}</h2>
          <hr class="bg-dark" />
          <h4 class="category d-inline-block text-white">{{ product.data.category }}</h4>
          <div class="price text-end mt-5">
            <del>NT ${{ product.data.origin_price }}</del>
            <span class="fs-4 text-primary ms-2 fw-bold">NT ${{ product.data.price }}</span>
          </div>
          <select class="form-select my-3" v-model="product.data.num" aria-label="Default select example">
            <option :value="num" v-for="num in 10" :key="num">
              選購{{ num }}{{ product.data.unit }}
            </option>
          </select>
          <div class="btn d-flex justify-content-between">
            <a href="#/products" class="btn-custom2 hvr-shutter-out-horizontal my-2"
              ><i class="bi bi-reply-fill"></i>繼續購物</a
            >
            <a href="#" @click.prevent="addCart(product.data.id)" class="btn-custom hvr-bounce-to-right my-2"
              ><i class="bi bi-cart"></i>加入購物車</a
            >
          </div>
        </div>
      </div>
      <div class="row my-3">
        <div class="col">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link fw-bold active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                商品說明
              </button>
              <button
                class="nav-link fw-bold"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                購物須知
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              {{product.data.content}}
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              每次購物滿 599 元以上免外送費，未達 599 元 需加付 80 元外送費。
              出單時間為 1-2小時。
            </div>
          </div>
        </div>
      </div>
      <div class="maybeLike">
      <div class="row my-5">
      <h2 class="fw-bold text-primary mb-3">猜你可能會喜歡</h2>
      <div class="col">
      <swiper
            :space-between="10"
            loop
            :autoplay='{
              delay:5000
            }'
            :breakpoints='{
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              }
            }'
           >
            <swiper-slide v-for="item in maybeProduct.data" :key="item.id" @click="goProduct(item.id)">
                <img :src="item.imageUrl" alt="" />
                <div class="imgHover">
                <h3 class="fw-bold text-primary">More</h3>
                </div>
            </swiper-slide>
          </swiper>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import { reactive, ref } from '@vue/reactivity'
import { inject, onMounted } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
import { useSweetalert2 } from '../composition-api'
SwiperCore.use([Navigation, Pagination, Autoplay])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const product = reactive({
      data: {}
    })
    const isLoading = ref(false)
    const products = reactive({
      data: []
    })
    const maybeProduct = reactive({
      data: []
    })
    const route = useRoute()
    const router = useRouter()
    const axios = inject('axios')
    const mitt = inject('mitt')
    const getProducts = () => {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products/all`
      axios.get(api).then(res => {
        products.data = res.data.products
        setTimeout(() => {
          products.data.forEach(item => {
            if (item.category === product.data.category) {
              maybeProduct.data.push(item)
            }
          })
        }, 100)
      })
    }
    const getDetail = (id) => {
      id = route.params.id
      isLoading.value = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/product/${id}`
      axios.get(api).then(res => {
        product.data = res.data.product
        isLoading.value = false
        getProducts()
        product.data.num = 1
      })
    }
    const addCart = (id) => {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      isLoading.value = true
      const data = {
        product_id: id,
        qty: product.data.num
      }
      axios.post(api, { data: data }).then(res => {
        useSweetalert2(res)
        mitt.emit('update-cart')
        getDetail()
        isLoading.value = false
      })
    }
    const goProduct = (id) => {
      router.push(`/product/${id}`)
      setTimeout(() => {
        getDetail()
      }, 10)
    }
    onMounted(() => {
      getDetail()
    })
    return {
      addCart,
      goProduct,
      product,
      maybeProduct,
      isLoading
    }
  }
}
</script>
