export interface Iheadline {
published_date: string
publisher: {name: string, url: string}
title: string,
url:string
}
export interface IHttpResponse {
    status: string,
    totalResult: number,
    articles: Iheadline[]
}
