import { createAction } from '@reduxjs/toolkit';

export const addArticles = createAction('ADD_ARTICLES');
export const removeArticles = createAction('REMOVE_ARTICLES');
export const updateArticles = createAction('UPDATE_ARTICLES');

export default function reducer(state = [], action) {
    switch (action.type) {
        case addArticles.type:
            let stateCopy = {...state};
            stateCopy[action.payload.countryCode] = {
                articles: action.payload.articles,
                updatedAt: new Date().toISOString() // CACHE
            };
            return stateCopy;

        case removeArticles.type:
            return state.filter((task) => task.countryCode !== action.payload.countryCode);

        default:
            return state;
    }
}
