// Generating different userString each time
import {v4 as uuidv4} from 'uuid';
export let randomUserString = uuidv4();


/**
 * Authenticate Page
 * ===========================================
 */
// Login data 
export const EMAIL_USERNAME_AUTH = "Kikotestsecure@gmail.com";
export const PASSWORD_USERNAME_AUTH = 'Kiko123@'
// Invalid data 
export const Invalid_EMAIL_AUTH = 'sifdsdbb@m.com';
export const Invalid_PASSWORD_AUTH = 'Kdsssdssd4';
// Error messages
export const ERROR_MESSAGE_InvalidEmailAndPassword = 'Грешно потребителско име или парола. Моля, опитайте отново.';
export const ERROR_MESSAGE_MissingPassword = 'Моля, попълнете вашата парола';
export const ERROR_MESSAGE_MissingEmailUsername = 'Моля, попълнете вашия email';

/**
 * Dashboard Page
 * ===========================================
 */
export const LOGOUT_MESSAGE = 'Вие излязохте от акаунта си.';

/**
 * Items Page
 * ===========================================
 */
 export const PRICE_ITEM = '10';
 export const PRICE_EDIT_ITEM = '1230';
 export const QUANTITY_ITEM = '1';
 export const MESSAGE_ITEM_ADDED = 'Артикулът е добавен успешно.';
 export const MESSAGE_ITEM_EXIST = 'Вече сте добавили артикул с това име.';
 export const MESSAGE_DELETE_ALL_ITEMS = 'Все още нямате добавени артикули.';
 export const MESSAGE_SAVE_CHANGING_ITEM = 'Информацията е редактирана успешно.';

/**
 * Clients Page
 * ===========================================
 */
 export const MESSAGE_ADDED_CLIENT = 'Клиентът е добавен успешно.'
 export const MESSAGE_EDIT_CLIENT = 'Информацията е редактирана успешно.'
 

