<template>
  <div id="main">
    <b-container class="bv-example-row">
      <b-row >
        <b-col class="cl1"><LeftNav/></b-col>
        <b-col class="cl2" cols="8"></b-col>
        <b-col class="cl3"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LeftNav from "@/components/LeftNav";
export default {
  name: "HomePage",
  components: {
    LeftNav
  }
};
</script>
<style>
.bv-example-row{
  margin-top: 20px;
  border: indigo;
}

.cl2 {
  background-color:lavender ;
}
.cl3 {
  background-color:lightgray ;
}
</style>
