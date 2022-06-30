import { createSelector } from 'reselect';

const getErrorMessages = (state) => state.messages;
const selectErrorMessages = createSelector(getErrorMessages, (messages) => messages);

export { selectErrorMessages };
