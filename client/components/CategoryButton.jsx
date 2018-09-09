import React from 'react'

export default function CategoryButton(props) {

   let activeWordsClass = (props.activeCategory === 'words') ? 'active' : ''
   let activePlacesClass = (props.activeCategory === 'places') ? 'active' : ''

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <button className={`btn-words ${activeWordsClass}`}  onClick={(e) => props.onChange('words')}>Words</button>
                    <button className={`btn-places ${activePlacesClass}`}   onClick={(e) => props.onChange('places')}>Places</button>
                </div>
            </div>
        </div>
    )
}