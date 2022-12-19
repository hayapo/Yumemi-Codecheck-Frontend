import useSWR from "swr"
import { getPrefectures } from "lib/api/getPrefectures"

export const usePrefectures = () => {
  const { data } = useSWR("api/v1/prefectures", getPrefectures)
  return { data }
}
