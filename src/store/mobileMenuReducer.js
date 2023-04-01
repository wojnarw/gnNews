import { createAction } from '@reduxjs/toolkit';
 
export const togleMobileMenu = createAction('TOGGLE_MOBILE_MENU');

const initialState = false;

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case togleMobileMenu.type:
            return !state

        default:
            return state;
    }
}
