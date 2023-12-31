import { Post } from './components/Post';
import { Header } from './components/Header';
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type:'paragraph', content:'Fala galeraa 👋' },
      { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type:'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-09-23 20:13:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Fontan4.png',
      name: 'Eduardo Fontana',
      role: 'Escravo @Foxtrot'
    },
    content: [
      { type:'paragraph', content:'Fala galeraa 👋' },
      { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type:'link', content:'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-09-10 08:13:30'),
  }
];
  
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                id={post.id}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
