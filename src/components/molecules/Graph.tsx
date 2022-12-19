import { useMemo } from "react"
import * as Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { PrefecturePopulation } from "types/apiResponses"

type Props = {
  prefecturePopulations: PrefecturePopulation[]
}

/* 現在の年から30年前までの人口構成推移を表示する */
const LATEST_YEAR = new Date().getFullYear()
const OLDEST_YEAR = LATEST_YEAR - 30

/* HightChartsのOption */
const options: Highcharts.Options = {
  chart: {
    type: "line",
  },
  lang: {
    noData: "都道府県を選択してください",
  },
  title: {
    text: "人口推移",
  },
  xAxis: {
    title: {
      text: "年",
    },
  },
  yAxis: {
    title: {
      text: "人口数",
    },
  },
  accessibility: {
    enabled: false,
  },
}

/* HightChartsグラフを返すコンポーネント */
export const Graph: React.FC<Props> = ({ prefecturePopulations }) => {
  const series = useMemo(() => {
    if (prefecturePopulations.length === 0) {
      return [{ data: [], showInLegend: false }]
    }

    return prefecturePopulations.map(
      (pref): Partial<Highcharts.SeriesOptionsType> => ({
        id: pref.prefCode.toString(),
        index: pref.prefCode,
        name: pref.prefName,
        data: pref.populations
          .filter(
            (population) =>
              OLDEST_YEAR <= population.year && population.year <= LATEST_YEAR
          )
          .map((population) => [population.year, population.value]),
        showInLegend: true,
      })
    )
  }, [prefecturePopulations])

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"chart"}
      options={{ ...options, series }}
    />
  )
}
