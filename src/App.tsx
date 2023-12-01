import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route key={'Home'} element={<Home />} path="/" />,
    <Route
      key={'post'}
      element={<Post />}
      path="post/:postId"
      loader={async ({ params }) => {
        return fetch(`/fake/api/teams/${params.postId}.json`)
      }}
    />,
  ]),
)

export function App() {
  return <RouterProvider router={router} />
}
