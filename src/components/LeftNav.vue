<template>
  <div class="leftNav">
    <h1 class="widget-title">Social Links</h1>
    <div class="social-link">
      <ul>
        <li>
          <a href="#">Personal Page</a>
        </li>
        <li>
          <a href="#">LinkedIn</a>
        </li>
        <li>
          <a href="#">Github</a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
          >Facebook (Fan Page)</a>
        </li>
        <li
          id="menu-item-35"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-35"
        >
          <a
            title="Facebook"
            href="https://www.facebook.com/huyhoang.pham.106"
          >Facebook (Personal Page)</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftNav",
  components: {}
};
</script>
<style>
.leftNav {
  margin: 5px;
  padding-left: 0;
  text-align: left;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
.widget-title{
  font-size: 18px;
}
</style>
