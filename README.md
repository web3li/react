## 一、Hook简介
Hook是React 16.8的新增特性，可以在不编写class的情况下使用state，以及其他的React特性。

### class组件的不足
1、组件之间难以复用状态逻辑
2、复杂组件难以理解
3、使用class导致学习成本变高

## 二、Hook基础
### Hook使用注意事项
1、Hook不能在class组件中使用
2、只能在函数最外层调用Hook。不要在循环、条件判断或者子函数中调用
3、只能在React的函数组件调用Hook,不要在其他的javascript函数中调用