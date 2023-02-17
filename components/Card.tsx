const Card = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div className='max-w-md max-h-64 rounded overflow-y-auto shadow-lg card-bg dark:text-stone-700'>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl text-center mb-2 md:text-2xl'>
          {title}
        </div>
        <ul className='list-disc pl-4'>
          {skills.map((skill) => (
            <li key={skill} className='mb-2 md:text-lg'>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Card
