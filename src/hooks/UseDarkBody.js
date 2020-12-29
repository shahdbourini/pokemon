import { useEffect } from 'react'

function UseGreyBody() {
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#FDFDFD'

    return () => {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000000'
    }
  })
}

export default UseGreyBody;