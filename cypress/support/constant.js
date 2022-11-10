
/**
 * FAKER DATA
 * ===========================================
 */
import { faker } from '@faker-js/faker';

export let randomName = faker.name.firstName('male');
export let randomEditName = faker.name.middleName('male');

export let randomProductName = faker.commerce.product();
export let randomEmail = faker.internet.email();
export let randomIntPrice = faker.datatype.number();
export let randomFloatPrice = faker.datatype.float();


/**
 * Authenticate Page
 * ===========================================
 */
// Login data 
export const EMAIL_USERNAME_AUTH = "Kikotestsecure@gmail.com";
export const PASSWORD_USERNAME_AUTH = 'Kiko123@';
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
 export const MESSAGE_ITEM_ADDED = 'Артикулът е добавен успешно.';
 export const MESSAGE_ITEM_EXIST = 'Вече сте добавили артикул с това име.';
 export const MESSAGE_DELETE_ALL_ITEMS = 'Все още нямате добавени артикули.';
 export const MESSAGE_SAVE_CHANGING_ITEM = 'Информацията е редактирана успешно.';

/**
 * Clients Page
 * ===========================================
 */
 export const MESSAGE_ADDED_CLIENT = 'Клиентът е добавен успешно.';
 export const MESSAGE_EDIT_CLIENT = 'Информацията е редактирана успешно.';
 

