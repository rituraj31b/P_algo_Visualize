import React from 'react'
import './Legends.css'

const Legends = ({algo}) => {
    return (
        <div className='legends'>
            {/* indicating color box for compare*/}
            <div className='key'> 
                <span className='sq compare'></span> Compare
            </div>
             {/* indicator for sorting color */}
            <div className='key'> 
                <span className='sq sorted'></span> Sorted
            </div>
            {/* indicating color box for swapping operation*/}
            <div className='key'> 
                <span className='sq swap'></span> {algo !== 'mergeSort' ? 'Swapping' : 'Taken From Auxillary array'}
            </div>
        </div>
    )
}

export default Legends
