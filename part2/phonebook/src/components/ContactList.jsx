import Contact from './Contact'

const ContactList = ({ persons }) => {
  return (
    <div>
      {persons.map(person =>
        <Contact key={person.id} name={person.name} number={person.number} />
      )}
    </div>
  )
}

export default ContactList