<!-- 渲染函数 -->
<!-- 当组合式 API 与模板一起使用时，setup() 钩子的返回值是用于暴露数据给模板当我们使用渲染函数时，可以直接把渲染函数返回： -->
<!-- //文档 https://cn.vuejs.org/guide/extras/render-function.html#custom-directives -->
<script lang="tsx">
  export default {
    setup() {
      return () => <div>hellossss</div>
    }
  }
</script>