import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate('/')
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ height: '3.4rem', textAlign: 'center' }}>
        Something Went Wrong!
      </h1>
      <button type='button' onClick={navigateHandler}>
        Back to Home
      </button>
    </div>
  )
}

export default Error
