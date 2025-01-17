import express from "express"
import { hasPermission } from "../../../util"
import { PermissionType } from "../../../entity/types"
import { userDatabase } from "../../../model/dataSource"
const router = express.Router()

router.post("/deposit-processing", async (req, res) => {
  const token = req.header("token")
  if (false === (await hasPermission(token, PermissionType.deposit))) {
    res.sendStatus(401)
    return
  }

  const data = req.body
  const userId = data.userId

  const foundUser = await userDatabase.findOneBy({
    id: userId,
  })

  if (!foundUser) {
    res.send({ result: "error!" })
    return
  }

  foundUser.deposit = !foundUser.deposit
  await userDatabase.save(foundUser)
  res.send({ result: "success" })
})

export default router
