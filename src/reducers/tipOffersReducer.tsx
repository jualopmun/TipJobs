import { useReducer } from "react";
import { TipJob } from "../models";


export const TIP_OFFER_ACTION_TYPES = {
    ADD_TIP_OFFER: 'ADD_TIP_OFFER',
    MODIFY_TIP_OFFER: 'MODIFY_TIP_OFFER',
  };

  const UDPATE_ACTION_TIP_OFFER = {
    [TIP_OFFER_ACTION_TYPES.ADD_TIP_OFFER]: (state: TipJob[], action: {payload: TipJob}) => {
      const newTipJob = [
        ...state,
        { ...action.payload},
      ]
        return newTipJob;
    },
    [TIP_OFFER_ACTION_TYPES.MODIFY_TIP_OFFER]: (state: TipJob[], action: {payload: TipJob}) => {
        const { id } = action.payload;
        const getTipJobInList = state.findIndex((tipJob) => tipJob.id === id);

        if(getTipJobInList >= 0) {
          const addNewTipJob = [
            ...state.slice(0, getTipJobInList),
            { ...action.payload},
            ...state.slice(getTipJobInList + 1)
          ]

            
        return addNewTipJob;
        } else {
            throw console.error('Tips not found');
        }
    }
  }

  const tipJobReducer = (state: TipJob[], action: { type: string; payload: TipJob}): TipJob[] => {
    const { type: actionType } = action
    const updateState = UDPATE_ACTION_TIP_OFFER[actionType]
    return updateState ? updateState(state, action) : state
  }

  export function useTipJobReducer() {
    const [state, dispatch] = useReducer(tipJobReducer, []);

    const addNewTipJob = (tipJob: TipJob) => dispatch({
        type: TIP_OFFER_ACTION_TYPES.ADD_TIP_OFFER,
        payload: tipJob
    }); 

    const modifyTipJob = (tipJob: TipJob) => dispatch({
        type: TIP_OFFER_ACTION_TYPES.MODIFY_TIP_OFFER,
        payload: tipJob
    }); 
    return {
        state, 
        addNewTipJob, 
        modifyTipJob
    };
}