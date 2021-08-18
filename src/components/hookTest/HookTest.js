import {useEffect, useState} from "react";

export default function HookTest() {
    const [name, setName] = useState('moz')
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(1)
    },[count])
    return (<div>
        <div>my name is:{name},点击次数:{count}</div>
        <button onClick={() => {
            setName('z.moz');
            if (count<10) {
                setCount(count + 1)
            }
        }}>点我改名
        </button>
    </div>)
}