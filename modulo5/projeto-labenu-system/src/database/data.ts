import { IClassroomDB, MODULE } from "../models/classroom";
import { THobbie } from "../models/hobbies";
import { IStudentsDB} from "../models/students";
import { TStudenthobbies } from "../models/studentsHobbie";


export const students: IStudentsDB[] = [
    {
      id: "1",
      name: "Suzy",
      email: "suzy@gmail.com",
      birthdate:new Date("1974/10/22"),
      classroom_id: "1",
    },
    {
        id: "2",
        name: "Luigi",
        email: "Luigi@gmail.com",
        birthdate: new Date("2004/02/28"),
        classroom_id: "2"
    },
    {
        id: "3",
        name: "Samael",
        email: "samael@gmail.com",
        birthdate: new Date("1980/05/29"),
        classroom_id: "3"
    }
]

export const classrooms: IClassroomDB[] = [
    {
        id: "1",
        name: "Aragon",
        module: MODULE.MODULO_5
    },
    {
        id: "2",
        name: "Freire",
        module: MODULE.NOT_STARTED
    },
    {
        id: "3",
        name: "Alves",
        module: MODULE.MODULO_2
    }
]

export const hobbies: THobbie[] = [
    {
        id: "01",
        title: "Assistir séries"
    },
    {
        id: "02",
        title: "Leitura"
    },
    {
        id: "03",
        title: "Jogar vídeo-game"
    }
]

export const studentHobbies: TStudenthobbies[] = [
    {
        student_id: "1",
        hobbie_id: "02"
    }
] 