import { fetchContacts } from 'Api/Api';
import * as contactActions from './actions';

export const fetch = () => async dispath => {
  dispath(contactActions.fetchContactsRequest());
  try {
    const contacts = await fetchContacts();
    dispath(contactActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispath(contactActions.fetchContactsError(error));
  }
};
