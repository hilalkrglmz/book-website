import React from 'react'

const BookInfo = ({title,value}) => {
  return (
    <div>
        <p>
        {title==="Yazar"? (
            <span className='badge bg-warning m-3'>{title}</span>
        ) : title==="Sayfa Sayısı" ? (<span className='badge bg-success m-3'>{title}</span>):
        <span className='badge bg-primary m-3'>{title}</span>
            
    }
        <span>{value}</span>
        </p>
    </div>
  )
}

export default BookInfo