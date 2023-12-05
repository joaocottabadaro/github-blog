import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './pages/Post'
import DefaultLayout from './DefaultLayouts/DefaultLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route key={'Home'} element={<Home />} path="/" />,
      <Route key={'post'} element={<Post />} path="post/:id" />,
    </Route>,
  ),
)

export function App() {
  return <RouterProvider router={router} />
}
