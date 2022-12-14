import { useEffect, useState } from "react"
import { SelectPrefecture } from "types/apiResponses"

import { usePrefecture } from "./usePrefecture"

export const useSelectPrefecture = () => {
  const prefectures = usePrefecture()
  const [selectedPrefectures, setSelectedPrefectures] = useState<
    SelectPrefecture[]
  >([])

  useEffect(() => {
    if (typeof prefectures === "undefined") return
    const initSelect: SelectPrefecture[] = prefectures.map((pref) => ({
      ...pref,
      checked: false,
    }))
    setSelectedPrefectures(initSelect)
  }, [prefectures])

  return {
    selectedPrefectures,
  }
}
