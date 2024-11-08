import { API_URL } from '@config/apiConfig';

/**
 * Fetches a list of users from the API.
 *
 * @async
 * @function fetchUsers
 * @param {number} page - The page number to fetch.
 * @param {number} [results=10] - The number of users to fetch per page.
 * @returns {Promise<Array<User>>} - A promise that resolves to an array of user objects.
 * @throws {Error} Will throw an error if the request fails.
 *
 */

/**
 * @typedef {Object} User
 * @property {string} gender - The gender of the user.
 * @property {Object} name - The name object containing title, first name, and last name.
 * @property {string} name.title - The title of the user (e.g., Mr, Ms).
 * @property {string} name.first - The first name of the user.
 * @property {string} name.last - The last name of the user.
 * @property {Object} location - The location object containing address information.
 * @property {Object} location.street - The street object containing street name and number.
 * @property {number} location.street.number - The street number of the user's address.
 * @property {string} location.street.name - The street name of the user's address.
 * @property {string} location.city - The city of the user's address.
 * @property {string} location.state - The state of the user's address.
 * @property {string} location.country - The country of the user's address.
 * @property {(number|string)} location.postcode - The postcode of the user's address.
 * @property {Object} location.coordinates - The geographic coordinates.
 * @property {string} location.coordinates.latitude - The latitude of the user's location.
 * @property {string} location.coordinates.longitude - The longitude of the user's location.
 * @property {Object} location.timezone - The timezone information of the user's location.
 * @property {string} location.timezone.offset - The timezone offset (e.g., "+2:00").
 * @property {string} location.timezone.description - The timezone description.
 * @property {string} email - The email address of the user.
 * @property {Object} login - The login details of the user.
 * @property {string} login.uuid - The unique identifier for the user.
 * @property {string} login.username - The username of the user.
 * @property {string} login.password - The password of the user.
 * @property {string} login.salt - The salt used in password hashing.
 * @property {string} login.md5 - The MD5 hash of the password.
 * @property {string} login.sha1 - The SHA-1 hash of the password.
 * @property {string} login.sha256 - The SHA-256 hash of the password.
 * @property {Object} dob - The date of birth of the user.
 * @property {string} dob.date - The date of birth in ISO format.
 * @property {number} dob.age - The age of the user.
 * @property {Object} registered - The registration details of the user.
 * @property {string} registered.date - The registration date in ISO format.
 * @property {number} registered.age - The years since registration.
 * @property {string} phone - The phone number of the user.
 * @property {string} cell - The cell phone number of the user.
 * @property {Object} id - The identification information of the user.
 * @property {string} id.name - The ID type or name (e.g., "NSS").
 * @property {?string} id.value - The ID value, which may be null.
 * @property {Object} picture - The profile pictures of the user in different sizes.
 * @property {string} picture.large - URL to the large-sized profile picture.
 * @property {string} picture.medium - URL to the medium-sized profile picture.
 * @property {string} picture.thumbnail - URL to the thumbnail-sized profile picture.
 * @property {string} nat - The nationality of the user.
 */

export const fetchUsers = async (page, results = 5) => {
    const response = await fetch(`${API_URL}?results=${results}&page=${page}`);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data.results;
};
