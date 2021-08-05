import React from 'react'

export const Footer = () => {
    let footerStyle = {
        margin: "0"
    }
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center py-3">
                Copyright &copy; MyTodosList.com
            </p>
            
        </footer>
    )
}
