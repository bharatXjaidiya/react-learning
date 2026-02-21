import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {
  return (
    <div>
      Courses Detail
      <h1>{useParams().id}</h1>
    </div>
  )
}

export default CoursesDetails
