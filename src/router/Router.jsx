import React from 'react'

export default function Router() {
  return (
    <>
    <Routes>
      <Route path='/' element ={<Navigate to='home' />} />
      <Route path='home' element = {<Home/>}/>
      <Route path='shop' />
      <Route path='cart' />
      <Route path='shop/:id' />
      
    </Routes>
    </>
  )
}
