import { useEffect, useState } from "react"
import { getPrefectures } from "lib/api/getPrefectures"
import { PrefectureCheckBox } from "components/molecules/PrefectureCheckBox"
import { Prefecture } from "types/apiResponses"
import PrefectureSelectStyles from "styles/PrefectureSelect.module.css"

export const PrefectureSelect = ({ ...props }) => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
  useEffect(() => {
    getPrefectures().then((res) => setPrefectures(res))
  }, [])

  return (
    <div className={PrefectureSelectStyles.prefectureselect}>
      {prefectures.map((pref) => (
        <PrefectureCheckBox key={pref.prefCode} prefecture={pref} {...props} />
      ))}
    </div>
  )
}
