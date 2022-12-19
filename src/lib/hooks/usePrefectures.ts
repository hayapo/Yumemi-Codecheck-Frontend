import useSWR from "swr"
import { getPrefectures } from "lib/api/getPrefectures"

/* 都道府県情報を使用するためのカスタムフック */
export const usePrefectures = () => {
  const { data } = useSWR("api/v1/prefectures", getPrefectures)
  return { data }
}
