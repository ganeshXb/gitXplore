import React from 'react';
import { RepositoryItem } from './RepositoryItem';

export const Repository = ({repositories}) =>{
    return(
        repositories.map(repository => (
            <RepositoryItem repo={repository} key={repository.id} />
        ))
    )
}