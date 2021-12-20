import React from 'react'
import '../App.css'



function Card({click, name, image}) {

    function importAll(r) {
        let images = {};
         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
       }
       const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
       console.log(images['caitlyn.jpeg']['default']);

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img onClick={() => click(name)} src={images[image]['default']} alt="" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
