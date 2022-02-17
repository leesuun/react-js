import React, { PureComponent,memo } from "react";


// class 
// class Try extends PureComponent{
//   render() {
//         const {tryInfo} = this.props
//         return (
//             <li>
//                 <div>{tryInfo.try}</div>
//                 <div>{ tryInfo.result}</div>
//           </li>
            
//         )
//     }
// }

// hooks

const Try = memo(({ tryInfo }) => {
         return (
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
          </li>
            
        )
})


/*
  tryInfo props객체는 부모에서 변경해야한다.
  예외사항의 경우 state로 변경해서 바꿔야한다.
  const [result,setResult] = useState()  --> hooks
  state ={}  --> class
*/

export default Try;