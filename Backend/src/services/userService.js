import { ApiError } from '~/utils/ApiError'
import { slugify } from '~/utils/Formatter'

const createNew = async (reqBody) => {
    try {
        const newUser = {
            ...reqBody,
            slug: slugigy(reqBody.title)
        }

        return newUser
    } catch (error) { throw error }
}

export const userService = {
    createNew
}