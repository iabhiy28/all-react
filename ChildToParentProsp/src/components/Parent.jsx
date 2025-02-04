import { useState } from 'react'
import { Child } from './Child'

export const Parent = () => {
    const [data, setData] = useState("");

    const handleChildData = (childData) =>{
        setData(childData);
    }
  return (
    <div>
        {data}
        <Child sendDataToParent ={handleChildData} />
    </div>
  )
}
