import {MongoClient} from "mongodb"

const URI = "mongodb+srv://pymongo:Pedro12272@cluster0.cmbmf5b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(URI)

export const db = client.db("projetoSpotify")