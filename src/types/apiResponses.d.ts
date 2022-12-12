export type Prefecture = {
  prefCode: number
  prefName: string
}

export type PrefectureResponse = {
  message: string | null
  result: Prefecture[]
}

export type Population = {
  label: string
  data: {
    year: number
    value: number
    rate: number
  }[]
}

export type PopulationResponse = {
  message: string | null
  result: {
    boundaryYear: number
    data: Population[]
  }
}
