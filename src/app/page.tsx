import TokenboundAccount from '@/components/TokenboundAccount'

const Home = () => {
  return (
    <div className="relative mx-auto aspect-square h-screen overflow-hidden">
      <iframe src="https://www.outreach.space/" width="100%" height="100%" />
      <TokenboundAccount />
    </div>
  )
}

export default Home
