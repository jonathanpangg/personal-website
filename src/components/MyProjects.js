import kittenContact from './KittenContact.png'

const MyProjects = () => {
  return (
    <div className = 'outer'>
      <img src = {kittenContact} className = 'pic_one' alt = 'Kitten Contact'/>
      <img src = {kittenContact} className = 'pic_one_test' alt = 'Kitten Contact'/>
      <div className = 'text_one_background'> 
        <text>
          Something
        </text>
        <a href = 'https://github.com/pangj130/Kitten-Gacha' className = 'link_one'>Codebase</a>
      </div>
    </div>
  )
}

export default MyProjects