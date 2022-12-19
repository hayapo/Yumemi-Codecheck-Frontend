import useSWR from "swr"
import { getPopulation } from "lib/api/getPopulation"
import { Prefecture, PrefecturePopulation } from "types/apiResponses"

export const usePopulations = (prefectures: Prefecture[]) => {
  const { data } = useSWR(
    prefectures.map((pref) => pref.prefCode),
    async (): Promise<PrefecturePopulation[]> =>
      Promise.all(
        prefectures.map(async (pref) => {
          const populations = await getPopulation(pref.prefCode)
          return { ...pref, populations: populations ?? [] }
        })
      )
  )

  return {
    data,
  }
}
