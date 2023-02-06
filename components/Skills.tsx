const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <div className='p-6 h-2/4'>
      <h3 className='text-2xl font-medium text-white text-center'>Skills</h3>
      <div className='flex flex-wrap'>
        {skills.map((skill) => (
          <div key={skill} className='w-1/2 my-2 p-2 bg-gray-200'>
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
