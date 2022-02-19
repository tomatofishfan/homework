import type { NextPage } from 'next'
import router from 'next/router'
import { useEffect } from 'react'

const Home: NextPage = () => {
  useEffect(() => {
    router.push('/demo')
  }, [])

  return (
    <div>
      Home Page!
    </div>
  )
}

export default Home
