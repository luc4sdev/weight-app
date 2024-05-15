import ReactPlayer from "react-player";

interface VideoProps {
    videoFinished: boolean
    handleVideoFinished: () => void
}
export function Video({ videoFinished, handleVideoFinished }: VideoProps) {



    return (
        <div className='w-full bg-zinc-950 aspect-video'>

            <ReactPlayer
                width="100%"
                height="100%"
                controls
                playing={!videoFinished}
                onEnded={handleVideoFinished}
                url="https://www.youtube.com/watch?v=9Gx4UVvXY0E&ab_channel=Lacadstin"
            />


        </div>
    )
}