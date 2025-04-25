import DashboardTeacher from "../components/dashboard-teacher.vue"
import CreateTask from "../components/create-task.vue"
import routes from "./user-router"

const router = [
    {
        path: "/dashboardTeacher",
        name: "DashboardTeacher",
        component: DashboardTeacher
    },
    {
        path: "/CreateTask",
        name: "CreateTask",
        component: CreateTask
    },
]

export default router;