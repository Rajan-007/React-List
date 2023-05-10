import React ,{useState} from 'react'

const Hook = () => {
    const [count ,setCount] = useState(0);
  return (
    <div>
      <button onClick = {()=>setCount(count + 1)}>usestate</button>
      <p>{count}</p>
    </div>
  )
}

export default Hook
