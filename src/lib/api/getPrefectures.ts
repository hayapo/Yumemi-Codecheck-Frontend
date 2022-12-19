import { Prefecture, PrefectureResponse } from "types/apiResponses"
import { AxiosOption } from "lib/api/axiosOption"
import axios, { AxiosResponse } from "axios"

export const getPrefectures = async (): Promise<Prefecture[]> => {
  const endpoint = "api/v1/prefectures"
  const option = AxiosOption(endpoint)
  const response: PrefectureResponse = await axios(option).then(
    (res: AxiosResponse<PrefectureResponse>) => res.data
  )
  return response.result
}
