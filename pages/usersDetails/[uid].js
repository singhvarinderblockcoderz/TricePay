import React from 'react'


import UserDetails from '../../Component/Users/UserDetails'


const editUser= ({id}) => {
  return (
    <div>
     <UserDetails id={id}/>
    </div>
  )
}
export default editUser;

export async function getServerSideProps(context){
  let {params} = await context;
  let id = await params.uid;
  console.log(id,"to check the id of the user")
  return {
    props:{
      id
    }
  }
}
