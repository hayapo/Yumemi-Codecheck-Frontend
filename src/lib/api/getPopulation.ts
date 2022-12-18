import { Population, PopulationResponse } from "types/apiResponses"
import { AxiosOption } from "./axiosOption"
import axios, { AxiosResponse } from "axios"

export const getPopulation = async (
  prefCode: number
): Promise<Population[] | undefined> => {
  const endpoint = `api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`
  const option = AxiosOption(endpoint)
  const populationResponse: PopulationResponse = await axios(option).then(
    (res: AxiosResponse<PopulationResponse>) => res.data
  )
  try {
    const populations = populationResponse.result.data.find(
      (data) => data.label === "総人口"
    )?.data
    return populations
  } catch {
    throw new Error("Failed to retrieve population data")
  }
}
