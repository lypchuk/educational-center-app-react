import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, Routes} from "react-router-dom";
import myHeader from "./components/myHeader/myHeader.tsx";
import MyHeader from "./components/myHeader/myHeader.tsx";
import CategoriesList from "./components/categories/list/CategoriesList.tsx";
import CreateCategory from "./components/categories/create/CreateCategory.tsx";
import CoursesList from "./components/courses/list/CoursesList.tsx";
import CreateCourse from "./components/courses/create/CreateCourse.tsx";
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <Routes>
            <Route path="/">
                {/*<Route index element={<MyHeader />} />*/}
                <Route path={"/categorieslist"} element={<CategoriesList />} />
                <Route path={"/courseslist"} element={<CoursesList />} />
                <Route path={"/addcourse"} element={<CreateCourse />} />
                <Route path={"/addcategory"} element={<CreateCategory />} />
                {/*//<Route path={"main"} element={<MyHeader />} />*/}
            </Route>

        </Routes>
    </>
  )
}

export default App
