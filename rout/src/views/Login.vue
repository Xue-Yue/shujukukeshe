<template>
  <div>
    <div style="margin-top: 130px; ">
          <logincard></logincard>
    </div>
  </div>
</template>

<script>
import logincard from "../components/login/logincard";
export default {
  name: 'Login',
  components:{
    logincard
  },
  data(){
    return {
      show3:true
    }
  }
}
</script>

<style>

</style>