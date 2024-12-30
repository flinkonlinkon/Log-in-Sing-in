import React, { useContext } from 'react'
import { ConText } from './ContextProvider'

export default function Card({x}) {
    let {api} = useContext(ConText)
let {id,type,title,tmdb_id,tmdb_type,imdb_id,season_number,poster_url,source_release_date,source_id,source_name,is_original} = x

  return (
    
        
      <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={poster_url}
      alt={title} />
  </figure>
  <div className="card-body">
    
    <h2 className="card-title">{title}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    
  )
}
