import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from '../components/Loading'
import BookInfo from '../components/BookInfo'



const ProductDetail = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const [book, setBook] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:3004/books/${id}`)
            .then((response) => setBook(response.data))
            .catch((error) => {

                console.log(error.response.status)

                /* navigate özelliğinde virgül sonrası options gönderebiliyoruz. */
                navigate('/undefined',{state:error.response.status})
                
            })

    }, [id])

    return (

        <div className='cardDetail'>
            {!book ? (<Loading/>) : (
            <>
            <div className='d-flex justify-content-space-between m-5'>
                <div className='md-6 shadow'>
                    <img src={book.image} alt="" className='rounded shadow' />
                </div>
                <div className='md-6 m-3'>
                    <h1 className='m-3 text-decoration-underline'>{book.title}</h1>
                    <BookInfo title={"Yazar"} value={book.author}/>
                    <BookInfo title={"Çıkış Yılı"} value={book.year}/>
                    <BookInfo title={"Sayfa Sayısı"} value={book.page}/>
                    <h4 className='description m-3'>Okuyucu yorumu: {book.desc}</h4>                    
                </div>
            </div>
            </>
            )}
        </div>
    )
}

export default ProductDetail