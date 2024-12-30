import React, { useContext } from 'react'
import Card from './Card'
import { ConText } from './ContextProvider'

export default function Home() {
    let {api} = useContext(ConText)
  return (
    <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3'>
      {
        api.map(x => <Card x={x}></Card>)
      }
    </div>
  )
}
