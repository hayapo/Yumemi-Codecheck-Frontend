import { useCallback, useEffect, useState } from "react"
import { CheckPrefecture } from "types/apiResponses"
import { usePrefectures } from "./usePrefectures"

export const useCheckPrefecture = () => {
  const [checkPrefectures, setCheckPrefectures] = useState<CheckPrefecture[]>(
    []
  )

  const { data } = usePrefectures()

  useEffect(() => {
    if (typeof data === "undefined") return
    const initCheck: CheckPrefecture[] = data.map((pref) => ({
      ...pref,
      checked: false,
    }))
    setCheckPrefectures(initCheck)
  }, [data])

  const toggleCheck = useCallback(
    (prefCode: number) => {
      setCheckPrefectures((currentState) =>
        currentState.map((pref) => {
          if (pref.prefCode === prefCode) {
            return { ...pref, checked: !pref.checked }
          }
          return pref
        })
      )
    },
    [setCheckPrefectures]
  )

  return {
    checkPrefectures,
    toggleCheck,
  }
}
