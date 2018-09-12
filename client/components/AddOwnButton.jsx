import React from 'react'

export default function AddOwnButton(props) {

   let activeWordsClass = (props.activeAdd === 'words') ? 'active' : ''
   let activePlacesClass = (props.activeAdd === 'places') ? 'active' : ''

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="button-container">
                        <button className={`btn-words ${activeWordsClass}`}  onClick={(e) => this.props.showAddWord('words')}>Add a word</button>
                        <button className={`btn-places ${activePlacesClass}`}   onClick={(e) => this.props.showAddWord('places')}>Add a place name</button>
                    </div>
                </div>
            </div>
        </div>
    )
}