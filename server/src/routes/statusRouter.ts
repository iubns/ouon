import express from "express"
import { CurrentStatus } from "../entity/types"
import { userDatabase } from "../model/dataSource"

const router = express.Router()

router.post("/set", async (req, res) => {
  const data = req.body

  const userId = data.userId as number
  const status = data.status as CurrentStatus

  const foundUser = await userDatabase.findOneByOrFail({
    id: userId,
  })

  if (!foundUser) {
    res.send({ result: "error" })
    return
  }

  foundUser.currentStatus = status

  await userDatabase.save(foundUser)
  res.send({ result: "success" })
})

export default router
