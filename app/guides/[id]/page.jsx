import PodcastDetails from "./PodcastDetails"

export async function generateStaticParams(){
    const res = await fetch('https://www.mycalldevcp.co.uk/api/podcasts/')

    const podcasts = await res.json()

        return podcasts.map((podcast) => ({
            id: podcast.id   
    }))
}

async function getPodcast(id) {
    const res = await fetch('https://www.mycalldevcp.co.uk/api/podcast/'+ id, {
        next: {
            revalidate: 30
        }
    })
    const data = await res.json()
    
    return data
}

export default async function Podcast({ params }) {

    const podcast = await getPodcast(params.id)
     
  return (
    <main>
        <div>
            <PodcastDetails PodcastDetails={podcast} />
        </div>
    </main>
  )
}
