import React, { memo, useState } from 'react'

export const MyComponent = () => {
  const [userInfo, setUserInfo] = useState({
    name: ' John ',
    lastname: 'Doe'
  })

  setTimeout(() => {
    setUserInfo({
      ...userInfo,
      name: ' John '
    })
  }, 2000)
  
  return (
    <>
      <DisplayUsername name={userInfo.name} />
      <input 
        type="text"
        value={userInfo.name}
        onChange={e => setUserInfo({
          ...userInfo,
          name: e.target.value
        })}
      />
    </>
  )
}

export const DisplayUsername = memo(props => {
  console.log('只在name发生改变时更新')
  return <h3>{props.name}</h3>
})




// export const MyComponent = () => {
//   const [filter, setFilter] = useState("")
//   const [userCollection, setUserCollection] = useState([])
//   useEffect(() => {
//     fetch(`http://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//       .then(response => response.json())
//       .then(json => setUserCollection(json))
//   }, [filter])
  
//   return (
//     // github  api  shunwuyu   repos   list
//     <div>
//       <input value={filter} onChange={e => setFilter(e.target.value)} />
//       <ul>
//         {
//           userCollection.map((user, index) => {
//             return (
//               <li key={index}>
//                 {user.name}
//               </li>
//             )
//           })
//         }
//       </ul>
//     </div>
//   )
// }






// const setSatisfactionClass = level => {
//   if (level < 100) {
//     return "very-dissatisfied"
//   }
//   if (level < 200) {
//     return "somewhat-dissatisfied"
//   }
//   if (level < 300) {
//     return "neither"
//   }
//   if (level < 400) {
//     return "somewhat-satisfied"
//   }
//   return "very-satisfied"
// }

// const isSameRange = (preValue, nextValue) => {
//   const preValueClass = setSatisfactionClass(preValue.level)
//   const nextValueClass = setSatisfactionClass(nextValue.level)
//   return preValueClass === nextValueClass
// }

// export const FaceComponent = memo(props => {   // memo 缓存组件   
  
//   const { level } = props;
//   return (
//     <div className={setSatisfactionClass(level)}>

//     </div>
//   )
// }, isSameRange)







// export const MyComponent = props => {
//   const [userInfo, setuserInfo] = useState({
//     name: 'John',
//     lastname: 'Doe'
//   })
//   return (
//     <>
//       <h4>{userInfo.name}{userInfo.lastname}</h4>
//       <input type="text"
//         value={userInfo.name}
//         onChange={(e) => setuserInfo({
//           ...userInfo, name: e.target.value
//         })}
//       />
//       <input type="text"
//         value={userInfo.lastname}
//         onChange={(e) => setuserInfo({
//           ...userInfo, lastname: e.target.value
//         })}
//       />
//     </>
//   )
// }


// export const MyComponent = props => {
//   // JSX -> DOM node
//   const [myName, setmyName] = React.useState('John Doe')
//   return (
//     <>
//       <h4>{myName}</h4>
//       <input type="text" value={myName} 
//       onChange={(e) => setmyName(e.target.value)}>

//       </input>
//     </>
//   )
// }

// export const MyComponent = () => {
//   const [username, setusername] = React.useState("");
//   // unmount
//   useEffect(() => {
//     setTimeout(() => {
//       setusername("超")
//     }, 1500)
//   }, [])
//   return (
//     <>
//       <h4>{username}</h4>
//       <input 
//         type="text" 
//         value={username} 
//         onChange={(e) => setusername(e.target.value)} 
//       />
//     </>
//   )
// }

// export const MyComponent = () => {
//   const [visible, setvisible] = useState(false);   // 不是共享状态  用useState
//   return (
//     <>
//       {visible && <MyChildComponent />}
//       <button onClick={() => setvisible(!visible)}>
//         Toggle Child component visibility
//       </button>
//     </>
//   )
// }

// const MyChildComponent = () => {
//   const [userInfo, setuserInfo] = useState({
//     name: 'John',
//     lastname: 'Doe'
//   })
//   useEffect(() => {
//     console.log('called when the component is mounted.');
//     return (
//       () => {
//         console.log('Called on component unmounted, check the [] on the react use effect')
//       }
//     )
//   })
//   return (
//     <div>
//       <h3>
//         {userInfo.name} {userInfo.lastname}
//       </h3>
//       <input 
//         type="text"
//         onChange={e => setuserInfo({...userInfo, name: e.target.value})}
//       />
//     </div>
//   )
// }