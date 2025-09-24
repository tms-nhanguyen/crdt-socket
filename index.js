import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import expressWs from 'express-ws'
// @ts-expect-error import directly from dist folder
import { setupWSConnection } from '@y/websocket-server/utils'

const { app } = expressWs(express())
const port = process.env.PORT || 3333

app.use(express.json())

app.ws('/', (ws, req) => {
    setupWSConnection(ws, req, { docName: 'public' })
})

app.listen(port, () => {
    console.log(`express server started on ${port}`)
})