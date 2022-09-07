// 函数式组件
// 函数式组件是一种定义自身没有任何状态的组件的方式。它们很像纯函数：接收 props，返回 vnodes。
// 不会触发常规的组件生命周期钩子。
//文档 https://cn.vuejs.org/guide/extras/render-function.html#custom-directives
export const List = {
  render() {
    return (
      <>
        {[1, 2, 3].map((item) => (
          <div>{`No` + item}</div>
        ))}
      </>
    );
  }
};
