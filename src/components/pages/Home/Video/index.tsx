import { styled } from '@/libs/stitches'
import { VideoBoxCSS, VideoBoxSectionCSS, VideoCSS } from './styles'

const VideoBoxSection = styled('section', VideoBoxSectionCSS)
const VideoBox = styled('div', VideoBoxCSS)
const Video = styled('div', VideoCSS)

export const HomeVideo = () => {
  return (
    <VideoBoxSection>
      <VideoBox>
        <Video>VIDEO</Video>
      </VideoBox>
    </VideoBoxSection>
  )
}
