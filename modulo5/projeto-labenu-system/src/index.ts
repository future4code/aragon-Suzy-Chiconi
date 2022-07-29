import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PingController } from './endpoints/PingController'
import { StudentController } from './endpoints/StudentController'
import { ClassroomController } from './endpoints/ClassroomControler'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

const pingController = new PingController()
const classroomController = new ClassroomController()
const studentController = new StudentController()


app.get("/ping", pingController.ping)


app.get("/classrooms", classroomController.getAllClassrooms)

// Endpoint 1) Cria turma
app.post("/classrooms", classroomController.createClassroom)

// Endpoint 2) Buscar turmas ativas
app.get("/classrooms/actives", classroomController.getAtiveClasses)

// Endpoint 3) Mudar turma de módulo
app.put("/classrooms/:classroomId", classroomController.changeModuleClassroom)

// Endpoint 4) Criar estudante
app.post("/students", studentController.createStudent)

// Endpoint 5) Buscar estudantes a partir do seu nome
app.get("/students", studentController.getAllStudents)

// Endpoint 6) Editar estudante de turma
app.put("/students/:id", studentController.editClassStudent)

// Endpoint 7) Exibir todas as pessoas pertencentes a uma turma
app.get("/students/:id", studentController.getStudentsClass)