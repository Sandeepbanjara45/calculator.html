const reducer = (count,action) => {
//(state,action)
    // if(action.type === "INC"){
    //     return (state = state + 1);
    // }
    // if (action.type === "DEC") {
    //     // return (state = state -1)
    //     let newNum = 0;
    //     state >= 1 ? (newNum = state -1) : (newNum = 0);
    //     return newNum;
    // }
    // return state;

    switch(action.type){
        case "INC":
            return (count+=1);
        case "DEC":
            let newNum = 0;
            count >= 1 ? (newNum = count - 1): (newNum = 0)
            return newNum;
        default:
            return count;
    }


};

export default reducer;