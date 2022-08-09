/**
 * useState 
 * 快速使用
 * 1.导入useState函数react
 * 2.执行这个函数并且传入初始值，必须在函数组件中
 * 3.[数据，修改数据的方法]
 * 4.使用数据，修改数据
 * 
 * 状态的读取和修改
 * const [count, setCount] = useState(0)
 * 1.useState传过来的参数作为count的初始值
 * 2.[count, setCount] 这里的写法是一个解构赋值，useState返回值是一个数组。
 *   名字可以自定义，保持语义化；不可以换顺序，第一个参数就是数据状态，第二个参数就是修改数据的方法
 * 3.setCount函数，作用用来修改count，依旧保持不能直接修改原值，而是生成一个新值替换原值
 * setCount（基于原值计算得到的新值）
 * 4.count和setCount是一对，是绑在一起的，setCount只能用来修改对应的count值
 * 
 * 组件的更新
 * 当调用setCount的时候，更新过程
 * 1.首次渲染
 * 首次渲染的时候，组件 内部的代码会被执行一次
 * 其中useState也会跟着执行，这里重点注意，初始值只在首次渲染时生效
 * 
 * 2.更新渲染  setCount都会更新
 *  app组件会再次渲染，这个函数会再次执行
 * useState再次执行，得到的新的count值，而不是0，是修改之后的1，模板会用新值渲染
 * 
*/

import { useState } from "react";

import React from 'react'

export default function Demo() {
    const [count, setCount] = useState(0)
    const [flag, setFlag] = useState(true)
    const [list, setList] =useState([])
    function test(){
        setCount(count+1)
        setFlag(true)
        
    }

    return (
        <div>
            <button onClick={test}>{count}</button>
        </div>
    )
}
