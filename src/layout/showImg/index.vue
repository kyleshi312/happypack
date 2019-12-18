<template>
    <div>
        <img :src="pic" />
        ---------44444----------
        <img src="../../../static/imgs/logo.png" />
    </div>
</template>
<script>
import pic from '../../../static/imgs/logo.png'
export default {
    data() {
      return {
          pic
      }
    }
}
</script>