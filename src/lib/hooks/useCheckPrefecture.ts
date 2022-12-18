import { getPrefectures } from "lib/api/getPrefectures"
import { mockPrefectureResponse } from "lib/api/mockPrefectureResponse"
import { useCallback, useEffect, useState } from "react"
import { CheckPrefecture, Prefecture } from "types/apiResponses"

export const useCheckPrefecture = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
  const [checkPrefectures, setCheckPrefectures] = useState<CheckPrefecture[]>(
    []
  )

  useEffect(() => {
    const getPref = async () => {
      const res = await getPrefectures()
      setPrefectures(res)
    }
    getPref()
    if (typeof prefectures === "undefined") return
    const initCheck: CheckPrefecture[] = prefectures.map((pref) => ({
      ...pref,
      checked: false,
    }))
    setCheckPrefectures(initCheck)
  }, [prefectures])

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
