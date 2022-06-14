import kittenContact from './KittenContact.png'

const MyProjects = () => {
  return (
    <div>
      <img src = {kittenContact} className = 'pic_one' alt = 'Kitten Contact'/>
      <div className = 'text_one_background'> 
        <text>
          Something
        </text>
        <a href = 'https://github.com/pangj130/Kitten-Gacha' className = 'link_one'>Codebase</a>
      </div>
      <img src = {kittenContact} className = 'pic_one_test' alt = 'Kitten Contact'/> 
    </div>
  )
}

export default MyProjects