import * as services from "../services"
import { interalServerError, badRequest } from "../middlewares/handle_errors"

export const insertData = async (req, res) => {
    try {
        const response = await services.insertData()
        return res.status(200).json(response)

    } catch (error) {
        return interalServerError(res)
    }
}