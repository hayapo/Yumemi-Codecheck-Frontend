import { CheckBox } from "components/atoms/CheckBox"
import { Prefecture } from "types/apiResponses"

type Props = {
  prefecture: Prefecture
}

export const PrefectureCheckBox: React.FC<Props> = ({
  prefecture,
  ...props
}) => {
  return (
    <div>
      <CheckBox
        key={prefecture.prefCode}
        label={prefecture.prefName}
        {...props}
      />
    </div>
  )
}
