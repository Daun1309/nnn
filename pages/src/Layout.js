import React from 'react'

const Layout = ({children}) => {
    return (
        <div>
            <header></header>
            {children}
            <footer></footer>
        </div>
    )
}

export default Layout