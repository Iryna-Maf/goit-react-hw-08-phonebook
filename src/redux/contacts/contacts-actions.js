import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetch/request');
export const fetchContactsSucces = createAction('contacts/fetch/succes');
export const fetchContactsError = createAction('contacts/fetch/error');

export const addContactRequest = createAction('contacts/add/request');
export const addContactSucces = createAction('contacts/add/succes');
export const addContactError = createAction('contacts/add/error');

export const delContactRequest = createAction('contacts/del/request');
export const delContactSucces = createAction('contacts/del/succes');
export const delContactError = createAction('contacts/del/succes');
