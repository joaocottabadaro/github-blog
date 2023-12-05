import { ArrowSquareOut, GithubLogo, LinkedinLogo, User } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PostType, UserType } from '../../types'
import { DateTime } from 'luxon'
import { useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

export function Home() {
  const [user, setUser] = useState<UserType | null>(null)
  const [posts, setPosts] = useState<PostType[]>([])
  const [query, setQuery] = useState('')

  const userName = 'joaocottabadaro'
  const postName = 'github-blog'

  const navigate = useNavigate()
  const fetchUserData = async () => {
    const urlParms = `/users/${userName}`
    const response = await api.get(urlParms)

    const data = await response.data
    console.log('🚀 ~ file: index.tsx:23 ~ fetchUserData ~ data:', data)
    setUser(data)

    const responsepost = await api.get(`/repos/${userName}/${postName}/issues`)

    console.log(
      '🚀 ~ file: index.tsx:28 ~ fetchUserData ~ responsepost:',
      responsepost,
    )
    setPosts(responsepost.data)
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  const filteredPosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <>
      <div className=" flex bg-profile  max-w-4xl p-8 gap-8 -mt-20">
        <img
          className="w-40 h-40"
          src={user?.avatar_url}
          alt="profile picture"
        />
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <h2 className="text-title text-3xl font-bold capitalize">
              {user?.name}
            </h2>
            <a
              href={user?.html_url}
              className="flex  items-center justify-items-center gap-1 text-primary uppercase"
            >
              Github <ArrowSquareOut size={20} />
            </a>
          </div>

          <p className="text-baseText ">{user?.bio}</p>

          <div className="flex gap-6">
            <a
              href={user?.html_url}
              className="flex items-center justify-items-center gap-1 text-baseText"
            >
              <GithubLogo fontSize={20} />
              {user?.name}
            </a>
            <a
              href={'https://www.linkedin.com/in/joao-cotta-badaro/'}
              className="flex items-center justify-items-center gap-1 text-baseText"
            >
              <LinkedinLogo fontSize={20} />
              {user?.name}
            </a>
            <a className="flex items-center justify-items-center gap-1 text-baseText">
              <User fontSize={20} />
              {user?.followers} Seguidores
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center max-w-4xl mt-20 flex-col gap-3">
        <div className="flex justify-between w-full ">
          <h3>Issues </h3>
          <p> {posts?.length} issues</p>
        </div>
        <input
          type="text"
          className="bg-input p-3"
          placeholder="Buscar conteúdo"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <div className="grid grid-cols-2 mt-12 gap-8">
          {filteredPosts?.map((post) => {
            return (
              <div
                onClick={() => navigate(`/post/${post.id}`, { state: post })}
                key={post.id}
                className="bg-post p-8  border-2 border-post hover:border-label"
              >
                <div className="flex justify-between w-full 	">
                  <h2 className="text-title text-xl gap-4  font-bold">
                    {post.title}
                  </h2>

                  <p className="text-sm text-span flex-none">
                    {DateTime.fromISO(new Date(post.created_at).toISOString(), {
                      locale: 'pt',
                    }).toRelative()}
                  </p>
                </div>

                <ReactMarkdown className="mt-5 line-clamp-4 text-ellipsis">
                  {post.body}
                </ReactMarkdown>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
