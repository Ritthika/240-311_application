import React from 'react'

function MyProfile({data}) {
  return (
    <div>MyProfile
        <p>
            MY NAME IS {data.firstName} {data.lastName}
        </p>
        <img src ={data.imgPic} alt = {data.firstName}></img>
    </div>
  )
}

export default MyProfile