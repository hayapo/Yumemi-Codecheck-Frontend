import { getPrefectures } from "lib/api/getPrefectures"
import useSWR from "swr"

export const usePrefecture = () => {
  const { data } = useSWR("/api/v1/prefectures", getPrefectures)
  return data
}
