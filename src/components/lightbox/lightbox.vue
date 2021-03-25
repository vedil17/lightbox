<template>
  <div class="lightbox" v-if="image" @click="close">
    <transition :name="transition">
      <lightbox-image :image="image" :key="image"></lightbox-image>
    </transition>
    <div class="lightbox__close" @click="close"></div>
    <div class="lightbox__btn lightbox__next" @click.stop.prevent="next"></div>
    <div class="lightbox__btn lightbox__prev" @click.stop.prevent="prev"></div>
  </div>
</template>

<script>
import './LightboxDirective'
import LightboxImage from './LightboxImage'
import store from './LightboxStore'

export default {
  name: 'lightbox',
  components: { LightboxImage },
  data () {
    return {
      state: store.state,
      direction: 'next'
    }
  },
  methods: {
    close () {
      store.close()
    },
    next () {
      this.direction = 'enter'
      store.next()
    },
    prev () {
      this.direction = 'next'
      store.prev()
    }
  },
  computed: {
    image () {
      if (this.state.index !== false) {
        return this.state.images[this.state.index]
      }
    },
    transition () {
      return 'lightbox-' + this.direction
    }
  }
}
</script>

<style src="./lightbox.css"></style>
