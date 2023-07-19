import React, {useState} from 'react'

function Contact() {
    const [isClick, setIsClick] = useState(false)
  return (
    <div>
        <header>Mon composant contact</header>
        <label htmlFor="name">Name</label>

        <button role="button" onClick={() => setIsClick(true)}>Cliquer ici !</button>

            {isClick && 
                <div>Merci d'avoir cliqué</div>
            }
    </div>
  )
}

export default Contact