import React from 'react'

const About = ({user,count}) => {
    console.log("About is re-rendering")
  return (
    <div>
        About
        <div>user in about - {user.name}</div>

        <div>count in about = {count}</div>  {/* now the count will not change here because it will become the dependent functional component which depents on the user.id for the rerendering , that's why we shouldn't use the useMemo at all the places*/}
        
    </div>

  )
}

export default React.memo(About,(prev,next)=>{
    return prev.user.id === next.user.id
})
