import React from 'react'

const Product = (props) => {
    const { title, image, lprice } = props.items; 
    const imgstyle= {
        width: "200px",
    }
    return (
        <div>
            {title.replace(/(<([^>]+)>)/ig,"")}
            <img src={image} style={imgstyle}/>
            최저가: {lprice}
        </div>
    )
}

export default Product
