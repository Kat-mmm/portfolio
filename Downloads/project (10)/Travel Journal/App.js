import React from 'react'
import Header from './components/HeaderBox'
import Main from './components/Main'
import data from './data.js'

export default function App(){
    const locations = data.map(location => {
        return <Main 
            key={location.id}
            {...location}
        />
    })
    return (
        <div>
            <Header />
            {locations}
        </div>
    )
}