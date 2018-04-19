import { getInitialData } from '../utils/api';
import { receivePolls } from './polls';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';

const AUTHED_ID = 'dan_abramov';

export const handleInitialData = () => async (dispatch) => {
  const { users, polls } = await getInitialData();
  dispatch(receiveUsers(users));
  dispatch(receivePolls(polls));
  dispatch(setAuthedUser(AUTHED_ID));
};
