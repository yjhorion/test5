import express from "express"
import { prisma } from "../utils/prisma/index.js"

const router = express.Router()

/* 게시글 작성 */
router.post("/posts", async (req, res, next) => {
    const {title, content} = req.body

    const post = await prisma.posts.create({
        data : {title, content}
    })

    return res.status(201).json({ data: post })
})

/* 게시글 전체 조회 */
router.get("/posts", async (req, res, next) => {
    const post = await prisma.posts.findMany({
        select: {
            id : true,
            title: true,
            content: true
        }
    })
    return res.status(200).json({ data: post })
})

/* 게시글 수정 */
router.put("/posts/:id", async (req, res, next) => {
    const { id } = req.params
    const { title, content } = req.body

    const post = await prisma.posts.update({
        where: { id : +id },
        data : {
            title,
            content,
        }
    })
    return res.status(201).json({ data: post })
})

/* 게시글 삭제 */
router.delete("/posts/:id", async (req, res, next) => {
    const { id } = req.params

    await prisma.posts.delete({
        where : { id : +id }
    })
    return res.status(201).json({ message: "success"})
})


export default router;