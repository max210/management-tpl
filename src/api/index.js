import { get } from './fetch'

export const testApi = data => get('http://localhost:3333/test', data)
