import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div>
      <div>Contacts</div>
      <Link to={'/contacts/authorities'}>Authorities Contact </Link>
      <Link to={'/contacts/mentors'}>Mentors Contacts </Link>
    </div>
  )
}

export default Contact
