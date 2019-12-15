import React from 'react';

export const Header = ({appTitle}) => {
    return (
        <div className="header">
            <h1>{appTitle}</h1>
            <div className="nav">
                <div className="links">
                    <a href="/dashboard/pagea">Page A</a>
                    <a href="/dashboard/pageb">Page B</a>
                    <a href="/dashboard/pagec">Page C</a>
                    <a href="/login">Logout</a>
                </div>
            </div>
        </div>
    )
}