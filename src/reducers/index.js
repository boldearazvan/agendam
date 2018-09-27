// const agenda = 'Agenda';
// const calendar = 'Calendar';

function displayContent(content){
    console.log('content: ',content);
    return {
        type: 'DISPLAY_CONTENT',
        payload: content
    }
}


const initialState ={
    displayContent: 'Agenda'
};

function rootReducer(state = initialState, action) {

    console.log('rootReducer initialState: ', state);
    console.log('action: ', action);

    switch (action.type){
        case 'DISPLAY_CONTENT':
            return {...state, displayContent: action.payload}
        default:
            return state;
    }
}

export { displayContent  };

export default rootReducer;

