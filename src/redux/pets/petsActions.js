import { createAction } from "@reduxjs/toolkit";


// pending (запрос в процессе)
export const fetchPetsRequest = createAction('pets/fetchPetsRequest');
// fulfilled (успешный запрос)
export const fetchPetsSuccess = createAction('pets/fetchPetsSuccess');
// rejected (запрос с ошибкой)
export const fetchPetsError = createAction('books/fetchPetsError');