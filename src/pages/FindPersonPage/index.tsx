import {
  Layout,
  Image,
  Strong,
  SubText,
  Title,
  TrainImage,
} from '@/pages/FindPersonPage/index.styled.ts'
import Train from '@/assets/images/train.png'
import FinalPicture from '@/assets/images/final-picture.jpeg'
import { useEffect } from 'react'

const FindPersonPage = () => {
  useEffect(() => {
    localStorage.removeItem('crossword')
    localStorage.removeItem('isPlayed')
  }, [])

  return (
    <Layout>
      <Title>사진 찍기</Title>
      <Image src={FinalPicture} />
      <SubText>
        <Strong>목사님, 전도사님, 간사님</Strong>
        <br />
        을 찾아서 셀원 전부가 나오도록 사진을 찍고
        <br />
        메인홀에 있는 진행요원에게 보여주세요!
      </SubText>
      <TrainImage src={Train} />
    </Layout>
  )
}

export default FindPersonPage
