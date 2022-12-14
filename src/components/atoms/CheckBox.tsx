type Props = React.ComponentProps<"input"> & {
  label: string
}

export const CheckBox: React.FC<Props> = ({ label, ...props }) => {
  return (
    <label>
      <input {...props} type="checkbox" />
      <span>{label}</span>
    </label>
  )
}
