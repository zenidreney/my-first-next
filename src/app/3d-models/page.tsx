import { getAllModels } from "../lib/models"
import type { Model } from "../types"



export default async  function ModelsPages() {
    const data = await getAllModels()
    console.log(data)

    const modelsEl = data.map((model: Model) => <p key = {model.id}>{model.name}</p>)


    return (
        <div>{modelsEl}</div>
    )
}