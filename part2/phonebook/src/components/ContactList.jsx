import Contact from './Contact'

const ContactList = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.map(person =>
        <Contact key={person.id}
          name={person.name}
          number={person.number}
          onDelete={() => handleDelete(person.id)}
        />
      )}
    </div>
  )
}

export default ContactList