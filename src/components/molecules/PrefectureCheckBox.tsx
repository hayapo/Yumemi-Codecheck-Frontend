import { CheckBox } from "components/atoms/CheckBox"
import { CheckPrefecture } from "types/apiResponses"
import PrefectureSelectStyles from "styles/PrefectureSelect.module.css"

type Props = {
  prefectures: CheckPrefecture[]
  onChangeCheck: (prefCode: number) => void
}

/* 全都道府県のチェックボックスコンポーネント */
export const PrefectureCheckBox: React.FC<Props> = ({
  prefectures,
  onChangeCheck,
}) => {
  return (
    <div className={PrefectureSelectStyles.prefectureCheckboxes}>
      {prefectures.map((pref) => (
        <CheckBox
          label={pref.prefName}
          id={`pref_${pref.prefCode}`}
          key={pref.prefCode}
          onChange={() => onChangeCheck(pref.prefCode)}
        />
      ))}
    </div>
  )
}
