import React, { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    console.log("Effect triggered.")
  }, [])

  return (
    <div>
      Home
    </div>
  )
}
