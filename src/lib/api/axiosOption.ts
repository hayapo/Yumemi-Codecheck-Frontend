import { AxiosRequestConfig } from "axios"

const baseUrl = "https://opendata.resas-portal.go.jp"

export const AxiosOption = (endpoint: string): AxiosRequestConfig => {
  const option: AxiosRequestConfig = {}

  // APIエンドポイントを設定
  option.baseURL = baseUrl
  option.url = endpoint

  // メソッドを設定
  option.method = "GET"

  // options.headersはundefinedの可能性がある
  if (option.headers === undefined) {
    option.headers = {}
  }
  // API-KEYを設定
  option.headers["X-API-KEY"] = process.env.NEXT_PUBLIC_RESAS_API_KEY

  return option
}
