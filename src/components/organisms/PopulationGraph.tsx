import { usePopulations } from "lib/hooks/usePopulations"
import { Prefecture } from "types/apiResponses"
import { Graph } from "components/molecules/Graph"

type Props = {
  prefectures: Prefecture[]
}

export const PopulationGraph: React.FC<Props> = ({ prefectures }) => {
  const { data } = usePopulations(prefectures)

  return <Graph prefecturePopulations={data ?? []} />
}
