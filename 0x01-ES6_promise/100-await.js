import uploadPhoto from "../alx-frontend-javascript/utils.js"
import createUser from "../alx-frontend-javascript/utils.js"

async function asyncUploadUser() {
  try {
    // Call the functions using Promise.all to run them concurrently
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    // Return the response object with the format specified
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If one of the async functions fails, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}
