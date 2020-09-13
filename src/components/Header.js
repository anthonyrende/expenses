import React from 'react'
import { Arwes } from 'arwes'


const Header = () => {
    // const resources = {
    //     bg: '../images/background.jpg',
    //     pattern: '../images/glow.png',
    // };
    return (
        <Arwes >
        <div style={{ padding: 20 }}>
            <Header animate>
                <h1 style={{ margin: 0 }}>Expenses</h1>
            </Header>
        </div>
    </Arwes>
    )
}

export default Header
