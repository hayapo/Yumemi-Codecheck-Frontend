import { CheckBox } from "components/atoms/CheckBox"
import { CheckPrefecture } from "types/apiResponses"

type Props = {
  prefecture: CheckPrefecture
  changeCheckState: (prefCode: number) => void
}

export const PrefectureCheckBox: React.FC<Props> = ({
  prefecture,
  changeCheckState,
  ...props
}) => {
  return (
    <div>
      <CheckBox
        key={prefecture.prefCode}
        label={prefecture.prefName}
        onClick={() => changeCheckState(prefecture.prefCode)}
        {...props}
      />
    </div>
  )
}
