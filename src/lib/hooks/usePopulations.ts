import { useEffect, useState } from "react"
import { getPopulation } from "lib/api/getPopulation"
import { Prefecture, PrefecturePopulation } from "types/apiResponses"

export const usePopulations = (prefectures: Prefecture[]) => {
  const [prefecturePopulations, setPrefecturePopulation] = useState<
    PrefecturePopulation[]
  >([])

  useEffect(() => {
    ;async () => {
      const data = await Promise.all(
        prefectures.map(async (pref) => {
          const populations = await getPopulation(pref.prefCode)
          return { ...pref, populations: populations ?? [] }
        })
      )
      setPrefecturePopulation(data)
    }
  }, [prefectures])
  return prefecturePopulations
}
