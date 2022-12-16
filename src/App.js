import React, {useState} from "react";
import AddCategory, {} from './componentes/AddCategory';
import GifGrid from './componentes/GifGrid'

const App = () => {

    const [categorias, setCategorias] = useState(['One Punch'])

    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategorias = {setCategorias}/>
            <hr/>
        <ol>
            {
                categorias.map(categorias =>
                <GifGrid 
                    categoria={categorias}
                    key={categorias}
                />
                )
            }
        </ol>

        </>
    )


}

export default App