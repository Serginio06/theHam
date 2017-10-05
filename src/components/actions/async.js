
import dataJSON from './../../data/data.json';
import feedbackJSON from './../../data/feedback.json';

// export const asyncMoreNews = (quantity) => dispatch => {
//
//     setTimeout (()=> {
//         // fetch ('./usersData.json').then (resp=> {
//         // fetch ('./data/data.json').then (resp =>resp.json ()).then (resp=> {
//
//             // console.log('resp',resp);
//
//             dispatch ({
//                 type: "GET-MORE-NEWS",
//                 payload: quantity
//             });
//
//         // });
//
//     }, 0)
// };


export const asyncGetInitNews = () => dispatch => {
    
    // console.log('dataJSON=', dataJSON);

    setTimeout (()=> {
        // fetch ('./build/data/data.json').then (resp =>resp.json ()).then (resp=> {
            dispatch ({
                type: "GET-INIT-NEWS",
                // payload: resp
                payload: dataJSON
            });
        // });

    }, 0)
};


export const asyncGetInitFeedback = () => dispatch => {

    setTimeout (()=> {
        // fetch ('./build/data/feedback.json').then (resp =>resp.json ()).then (resp=> {
            dispatch ({
                type: "GET-INIT-FEEDBACK",
                // payload: resp
                payload: feedbackJSON
            })
        // });
    }, 0)
};


