import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/userRoutes.js'
import adminRouter from './routes/adminRoutes.js'
import jobRoutes from './routes/jobRoutes.js'
// import morgan from 'morgan'
import studentRoutes from './routes/studentRoutes.js'
import recruiterRoutes from './routes/recruiterRoutes.js'

export const app = express()
//app.use(express.urlencoded({ extended: true }))
app.use(express.json())

await mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected'))
  .catch(console.log)

app.use('/api/v1/users', userRouter)
app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/jobs', jobRoutes)
app.use('/api/v1/students', studentRoutes)
app.use('/api/v1/recruiters', recruiterRoutes)

// const port = process.env.PORT || 3000

// app.listen(port, () =>
//   console.log(`Server running on http://localhost:${port}`)
// )
export * from './schema/index.js'
export default app
