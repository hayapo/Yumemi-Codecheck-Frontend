import { useCheckPrefecture } from "lib/hooks/useCheckPrefecture"
import { PrefectureCheckBox } from "components/molecules/PrefectureCheckBox"
import { Prefecture } from "types/apiResponses"
import PrefectureSelectStyles from "styles/PrefectureSelect.module.css"
import { useEffect, useMemo } from "react"

type Props = {
  setCheckedPrefectures: (prefecture: Prefecture[]) => void
}

export const PrefectureSelect: React.FC<Props> = ({
  setCheckedPrefectures,
  ...props
}) => {
  const { checkPrefectures, toggleCheck } = useCheckPrefecture()

  const checkedPrefectures = useMemo(
    () => checkPrefectures.filter((pref) => pref.checked === true),
    [checkPrefectures]
  )

  useEffect(() => {
    setCheckedPrefectures(checkedPrefectures)
  }, [setCheckedPrefectures, checkedPrefectures])

  return (
    <div className={PrefectureSelectStyles.prefectureselect}>
      {checkPrefectures.map((pref) => (
        <PrefectureCheckBox
          key={pref.prefCode}
          prefecture={pref}
          changeCheckState={toggleCheck}
          {...props}
        />
      ))}
    </div>
  )
}
