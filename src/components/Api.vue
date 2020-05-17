<template>
  <ul v-if="posts && posts.length">
    <li v-for="post of posts" :key="post.id">
      <p><strong>{{post.date}}</strong></p>
      <p>{{post.temperatureC}}</p>
      <p>{{post.summary}}</p>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name : "Api",
      posts: []
    }
  },

  // lấy dữ liệu khi component được tạo thành công
  created() {
    axios.get(`http://be.local.vn/WeatherForecast`)
        .then(response => {
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
  }
}
</script>