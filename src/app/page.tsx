import Title from '@/components/Title'
import Grid from '@/components/Grid'
import Nfts from '@/components/Nfts'

const Home = () => {
  return (
    <div className="h-screen w-full cursor-auto overflow-y-auto overflow-x-hidden">
      <Title />
      <Grid />
      <Nfts />
    </div>
  )
}

export default Home
