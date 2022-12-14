import { useEffect, useState } from "react"
import { getPrefectures } from "lib/api/getPrefectures"
import { PrefectureCheckBox } from "components/molecules/PrefectureCheckBox"
import { Prefecture } from "types/apiResponses"
import PrefectureSelectStyles from "styles/PrefectureSelect.module.css"
import { mockPrefectureResponse } from "lib/api/mockPrefectureResponse"

export const PrefectureSelect = ({ ...props }) => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
  useEffect(() => {
    const mockPrefectures = mockPrefectureResponse.result
    setPrefectures(mockPrefectures)
    //   getPrefectures().then((res) => setPrefectures(res))
  }, [prefectures])

  return (
    <div className={PrefectureSelectStyles.prefectureselect}>
      {prefectures.map((pref) => (
        <PrefectureCheckBox key={pref.prefCode} prefecture={pref} {...props} />
      ))}
    </div>
  )
}
