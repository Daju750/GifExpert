import GifGridItem from './GifGridItem'
import UseFetchGifs from '../hooks/UseFetchGifs'
import { useState } from 'react'

const GifGrid = ({ categoria }) => {
    const [offset, setOffset] = useState(0)
    const { data: images, loading, pagination } = UseFetchGifs(categoria, offset)

    const nextGifs = () => {
        setOffset(offset + 10)
    }
    const previosGifs = () => {
        setOffset(offset - 10)
    }
    
    return (
        <>
            <h3>{categoria}</h3>
            {images.length > 0 &&
                <>
                    <p>Total Gifs {pagination.total_count}</p>
                    <p>Offset: {offset}</p>
                </>
            }
            {loading && <p>Cargardo</p>}
            <div className="card-grid">

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
            {images.length > 0 &&
                <>
                    <button onClick={nextGifs}>+</button>
                    <button onClick={previosGifs}>-</button>
                </>
            }

        </>
    )
}

export default GifGrid;