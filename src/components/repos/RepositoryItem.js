import React from 'react';

export const RepositoryItem =({repository}) =>{
    return(
        <div className="card">
            <h3>
                <a href={repository.html_url}>{repository.name}</a>
            </h3>
        </div>
    )
}