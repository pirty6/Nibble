export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'

const initialState = {
  locationBeforeTransitions: null
}

export default function (state = initialState, { type, payload } = {}) {
  if (type === LOCATION_CHANGE) {
    return { ...state, locationBeforeTransitions: payload }
  }

  return state
}
