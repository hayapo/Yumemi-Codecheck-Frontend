import { useCheckPrefecture } from "lib/hooks/useCheckPrefecture"
import { PrefectureCheckBox } from "components/molecules/PrefectureCheckBox"
import { Prefecture } from "types/apiResponses"
import { useEffect, useMemo } from "react"

type Props = {
  onChangeCheck: (prefecture: Prefecture[]) => void
}

/* 都道府県選択の最上位コンポーネント */
export const PrefectureSelect: React.FC<Props> = ({ onChangeCheck }) => {
  const { checkPrefectures, toggleCheck } = useCheckPrefecture()

  const checkedPrefectures = useMemo(
    () => checkPrefectures.filter((pref) => pref.checked === true),
    [checkPrefectures]
  )

  useEffect(() => {
    onChangeCheck(checkedPrefectures)
  }, [onChangeCheck, checkedPrefectures])

  return (
    <PrefectureCheckBox
      prefectures={checkPrefectures}
      onChangeCheck={toggleCheck}
    />
  )
}
