<template>
<Loading :active="isLoading"></Loading>
  <div class="products">
    <div class="banner bg-cover"></div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-4">
        <div class="left sticky-top" style="top:85px">
        <div class="accordion accordionCategory my-2" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  商品分類
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul class="list-unstyled fw-bold">
                    <li><a href="#" @click.prevent="category = 'all'" :class="{active: category == 'all'}" >全部</a></li>
                    <li><a href="#" @click.prevent="category = 'burger'" :class="{active: category == 'burger'}">漢堡</a></li>
                    <li><a href="#" @click.prevent="category = 'dessert'" :class="{active: category == 'dessert'}">點心</a></li>
                    <li><a href="#" @click.prevent="category = 'drink'" :class="{active: category == 'drink'}">飲品</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion accordionFilter mt-lg-2 mt-0" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  條件篩選
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <select class="form-select" v-model="selected" aria-label="Default select example">
                    <option value="1">正常排序</option>
                    <option value="2">價格由低到高</option>
                    <option value="3">價格由高到低</option>
                  </select>
                  <div class="input-group mt-2">
                  <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
                  <input type="text" class="form-control" v-model="filterText" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1">
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-4 col-md-6 my-2" v-for="item in filterProduct" :key="item.id">
              <div class="card" @click="productDetail(item)">
                <div class="card-img">
                  <img :src="item.imageUrl" class="card-img-top" alt="" />
                  <ul class="action list-unstyled">
                    <li @click.stop="addCart(item)">
                      <i class="bi bi-cart" ></i>
                      <span>加入購物車</span>
                    </li>
                    <li v-if="favoriteData.data.indexOf(item.id) === -1" @click.stop="addFavorite(item.id)">
                      <i class="bi bi-heart"></i>
                      <span>追蹤商品</span>
                    </li>
                    <li class="active" v-else @click.stop="addFavorite(item.id)">
                      <i class="bi bi-heart"></i>
                      <span>取消追蹤</span>
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div
                    class="card-title d-flex justify-content-between align-items-center"
                  >
                    <p class="fw-bold">{{ item.title }}</p>
                    <span class="badge rounded-pill bg-orange">{{ item.category }}</span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <del>原價 : {{ item.origin_price }}元</del>
                    <p class="text-primary fw-bold">特價 : {{ item.price }}元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { computed, inject, onMounted } from '@vue/runtime-core'
import { useSweetalert, useSweetalert2 } from '../composition-api'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const products = reactive({
      data: []
    })
    const isLoading = ref(false)
    const category = ref('all')
    const selected = ref('1')
    const filterText = ref('')
    const favoriteData = reactive({
      data: JSON.parse(localStorage.getItem('favorite')) || []
    })
    const router = useRouter()
    const mitt = inject('mitt')
    const axios = inject('axios')
    const getProducts = () => {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products/all`
      isLoading.value = true
      axios.get(api).then(res => {
        isLoading.value = false
        products.data = res.data.products
      })
    }
    const addCart = (item) => {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      isLoading.value = true
      const cartData = {
        product_id: item.id,
        qty: 1
      }
      isLoading.value = true
      axios.post(api, { data: cartData }).then(res => {
        useSweetalert2(res)
        mitt.emit('update-cart')
        isLoading.value = false
      })
    }
    const productDetail = (item) => {
      router.push(`/product/${item.id}`)
    }
    const addFavorite = (id) => {
      const followId = favoriteData.data.indexOf(id)
      if (followId === -1) {
        favoriteData.data.push(id)
        useSweetalert('已加入追蹤')
      } else {
        favoriteData.data.splice(followId, 1)
        useSweetalert('已取消追蹤')
      }
      localStorage.setItem('favorite', JSON.stringify(favoriteData.data))
      mitt.emit('update-favorite')
    }
    const filterProduct = computed(() => {
      const newFilter = []
      if (category.value === 'all') {
        return products.data
          .filter(item => {
            return item.title.match(filterText.value)
          })
          .sort((a, b) => {
            if (selected.value === '2') {
              return a.price - b.price
            }
            if (selected.value === '3') {
              return b.price - a.price
            }
          })
      } else if (category.value === 'burger') {
        products.data.forEach(item => {
          if (item.category === '漢堡') {
            newFilter.push(item)
          }
        })
        return newFilter
          .sort((a, b) => {
            if (selected.value === '2') {
              return a.price - b.price
            }
            if (selected.value === '3') {
              return b.price - a.price
            }
          })
          .filter(item => {
            return item.title.match(filterText.value)
          })
      } else if (category.value === 'dessert') {
        products.data.forEach(item => {
          if (item.category === '點心') {
            newFilter.push(item)
          }
        })
        return newFilter
          .sort((a, b) => {
            if (selected.value === '2') {
              return a.price - b.price
            }
            if (selected.value === '3') {
              return b.price - a.price
            }
          })
          .filter(item => {
            return item.title.match(filterText.value)
          })
      } else {
        products.data.forEach(item => {
          if (item.category === '飲品') {
            newFilter.push(item)
          }
        })
        return newFilter
          .sort((a, b) => {
            if (selected.value === '2') {
              return a.price - b.price
            }
            if (selected.value === '3') {
              return b.price - a.price
            }
          })
          .filter(item => {
            return item.title.match(filterText.value)
          })
      }
    })
    onMounted(() => {
      getProducts()
    })

    return {
      isLoading,
      addCart,
      productDetail,
      addFavorite,
      filterProduct,
      category,
      filterText,
      selected,
      favoriteData
    }
  }

}
</script>
