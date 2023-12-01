import { ArrowSquareOut, GithubLogo, Storefront, User } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

export function Home() {
  const [user, setUser] = useState(null)
  const fetchUserData = async () => {
    const response = await api.get('users/joaocottabadaro')

    const data = await response.data
    console.log('🚀 ~ file: index.tsx:11 ~ fetchUserData ~ data:', data)
    setUser(data)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className="bg-background h-screen">
      <div className="bg-hero bg-cover bg-center h-96 w-full" />
      <div className="flex flex-col container justify-center items-center">
        <div className=" flex bg-profile  max-w-4xl p-8 gap-8 -mt-20">
          <img
            className="w-40 h-40"
            src={user?.avatar_url}
            alt="profile picture"
          />
          <div className="flex flex-col justify-between">
            <div className="flex justify-between">
              <h2 className="text-title text-3xl font-bold capitalize">
                Cameron Williamson
              </h2>
              <a className="flex  items-center justify-items-center gap-1 text-primary uppercase">
                Github <ArrowSquareOut size={20} />
              </a>
            </div>

            <p className="text-baseText ">
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>

            <div className="flex gap-6">
              <a className="flex items-center justify-items-center gap-1 text-baseText">
                <GithubLogo fontSize={20} />
                cameronwll
              </a>
              <a className="flex items-center justify-items-center gap-1 text-baseText">
                <Storefront fontSize={20} />
                cameronwll
              </a>
              <a className="flex items-center justify-items-center gap-1 text-baseText">
                <User fontSize={20} />
                32 Seguidores
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center max-w-4xl mt-20 flex-col gap-3">
          <div className="flex justify-between w-full ">
            <h3>Publicações </h3>
            <p> 6 publicações</p>
          </div>
          <input
            type="text"
            className="bg-input p-3"
            placeholder="Buscar conteúdo"
          />
          <div className="grid grid-cols-2 mt-12 gap-8">
            <div className="bg-post p-8  border-2 border-post hover:border-label">
              <div className="flex justify-between w-full 	">
                <h2 className="text-title text-xl gap-4  font-bold">
                  JavaScript data types and data structures
                </h2>
                <p className="text-sm text-span flex-none">Há 1 dia</p>
              </div>
              <p className="mt-5 line-clamp-4 text-ellipsis">
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages
              </p>
            </div>

            <div className="bg-post p-8  border-2 border-post hover:border-label">
              <div className="flex justify-between w-full 	">
                <h2 className="text-title text-xl gap-4  font-bold">
                  JavaScript data types and data structures
                </h2>
                <p className="text-sm text-span flex-none">Há 1 dia</p>
              </div>
              <p className="mt-5 line-clamp-4 text-ellipsis">
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
