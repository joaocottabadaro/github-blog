import { useLocation, useNavigate } from 'react-router-dom'
import { PostType } from '../../types'
import {
  ArrowLeft,
  ArrowSquareOut,
  GithubLogo,
  LinkedinLogo,
  User,
} from 'phosphor-react'
import ReactMarkdown from 'react-markdown'

export function Post() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const post: PostType = state
  console.log('🚀 ~ file: index.tsx:15 ~ Post ~ post:', post)
  return (
    <>
      <div className="flex bg-profile flex-col max-w-4xl w-full p-8 gap-8 -mt-20">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between mb-5">
            <a
              className="flex  justify-center gap-2 text-primary"
              onClick={() => navigate('/')}
            >
              <ArrowLeft /> Voltar
            </a>
            <a
              href={post?.html_url}
              className="flex  items-center justify-items-center gap-1 text-primary uppercase"
            >
              Github <ArrowSquareOut size={20} />
            </a>
          </div>

          <h2 className="text-title text-3xl font-bold capitalize mb-5">
            {post?.title}
          </h2>

          <div className="flex gap-6">
            <a
              href={post?.html_url}
              className="flex items-center justify-items-center gap-1 text-baseText"
            >
              <GithubLogo fontSize={20} />
              {post?.title}
            </a>
            <a
              href={'https://www.linkedin.com/in/joao-cotta-badaro/'}
              className="flex items-center justify-items-center gap-1 text-baseText"
            >
              <LinkedinLogo fontSize={20} />
              {post?.title}
            </a>
            <a className="flex items-center justify-items-center gap-1 text-baseText">
              <User fontSize={20} />
              {post?.score} Score
            </a>
          </div>
        </div>
      </div>

      <ReactMarkdown>{post.body}</ReactMarkdown>
    </>
  )
}
