import React from 'react'
import Dashboard from '../Component/Dashboard'

const newDashboard = () => {
  return (
    <div>

        <Dashboard/>
    </div>
  )
}

export default newDashboard

// export async function getServerSideProps(context) {
//   const session = await getSession(context)
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       }
//     }
//   }
//   return {
//     props:{
//       session
//     }
//   }
// }