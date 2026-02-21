import React from 'react'
import { useParams } from 'react-router-dom'

const SomeCourses = () => {
  return (
    <div>
      {useParams().id} Courses
    </div>
  )
}

export default SomeCourses
