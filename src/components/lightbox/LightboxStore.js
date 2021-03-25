class LightboxStore {

  constructor () {
    this.state = {
      images: [],
      index: false
    }
  }

  addImage (url) {
    return this.state.images.push(url) - 1
  }

  open (index) {
    this.state.index = index
  }

  close () {
    this.state.index = false
  }

  next () {
    this.state.index++
    if (this.state.index >= this.state.images.length) {
      this.state.index = 0
    }
  }

  prev () {
    this.state.index--
    if (this.state.index < 0) {
      this.state.index = this.state.images.length - 1
    }
  }
}

export default new LightboxStore()
