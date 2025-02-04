export const Child = ({sendDataToParent}) => {

    const handleClick = () =>{
        sendDataToParent("MY name is Abhishek Yadav");
    }

  return (
    <div>
        <h1>Hello EveryOne!</h1>
        <button onClick={handleClick}>Click me To Print</button>
    </div>
  )
}
