import Comment from './Comment'

export const generated = () => {
  return <Comment
    comment={{
      name: 'John Doe',
      body: 'This is the first comment!',
      createdAt: '2020-01-01',
    }}
  />
}

export default { title: 'Components/Comment' }
