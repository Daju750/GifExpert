import { useState, useEffect } from "react";
import getGifs from '../helpers/getGifs'

const useFetchGifs = (categoria, offset) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
        pagination: {
            count: 0,
            offset: 0,
            total_count: 0,
        }
    })

    useEffect(() => {
        getGifs(categoria, offset).then(({ pagination, gifs }) => {
            setState({
                data: gifs,
                pagination,
                loading: false
            })
        })
    }, [categoria, offset])

    return state;
}

export default useFetchGifs