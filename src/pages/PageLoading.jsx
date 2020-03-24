import React from 'react'
import Loader from '../components/Loader.jsx'
import './styles/PageLoading.scss'

function PageLoading(props) {
    return(
        <div className="PageLoading">
            <Loader />
        </div>
    )
}

export default PageLoading