import { createAction } from '@reduxjs/toolkit';
 
export const toggleView = createAction('TOGGLE_VIEW');

const initialState = "panels";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case toggleView.type:
            return state === "list" ? "panels" : "list";

        default:
            return state;
    }
}
