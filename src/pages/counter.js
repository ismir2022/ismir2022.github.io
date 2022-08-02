import React from "react"

class Counter extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }
    render() {
        return <div >
            <p>current: {this.state.count}</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })} >PLUS</button>
            <button onClick={() => this.setState({ count: this.state.count - 1 })} >MINUS</button>
                   
        </div>
    }
}

export default Counter;

// import React from 'react'
// import {useState} from 'react'

// const Counter = () => {
//     const [count,setCount] = useState(0);
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={setCount(count+1)}>Plus</button>
//       <button onClick={setCount(count-1)}>Minus</button>
//     </div>
//   )
// }

// export default Counter;
