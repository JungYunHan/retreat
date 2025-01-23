import {
  FinalAnswerCell,
  FinalAnswerContainer,
  FinalAnswerInput,
  FinalAnswerNumberBox,
  Layout,
  PuzzleContainer,
  PuzzleGreyCell,
  PuzzleInput,
  PuzzleNumberText,
  PuzzleWhiteCell,
  QuizTitle,
  SubmitButtonContainer,
} from '@/pages/QuizPage/index.styled.ts'
import { ChangeEvent, useEffect, useState } from 'react'
import { columnMap, crosswordAnswers, rowMap } from '@/constants/crossword.ts'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/common/Button.tsx'
import { Modal } from '@/components/common/Modal.tsx'

const QuizPage = () => {
  const navigate = useNavigate()

  const [inputs, setInputs] = useState<Record<number, string>>({
    1: '',
    2: '',
    3: '',
    4: '',
    7: '',
    8: '',
    9: '',
    13: '',
    16: '',
    20: '',
    25: '',
    28: '',
    32: '',
    37: '',
    40: '',
    43: '',
    44: '',
    45: '',
    46: '',
    52: '',
    55: '',
    64: '',
    65: '',
    67: '',
    69: '',
    70: '',
    71: '',
    77: '',
    82: '',
    86: '',
    89: '',
    90: '',
    91: '',
    92: '',
    94: '',
    95: '',
    96: '',
    98: '',
    99: '',
    100: '',
    101: '',
    104: '',
    110: '',
    116: '',
    117: '',
    128: '',
  })
  const [finalAnswerInputs, setFinalAnswerInputs] = useState<
    Record<number, string>
  >({
    1: '',
    2: '',
    3: '',
    4: '',
  })
  const [isAllAnswerCorrectModalOpen, setIsAllAnswerCorrectModalOpen] =
    useState(false)
  const [isCrosswordAnswerWrongModalOpen, setIsCrosswordAnswerWrongModalOpen] =
    useState(false)
  const [isFinalAnswerWrongModalOpen, setIsFinalAnswerWrongModalOpen] =
    useState(false)

  useEffect(() => {
    const crossword = localStorage.getItem('crossword')
    const finalAnswer = localStorage.getItem('finalAnswer')

    if (crossword) {
      setInputs(JSON.parse(crossword))
    }
    if (finalAnswer) {
      setFinalAnswerInputs(JSON.parse(finalAnswer))
    }
  }, [])

  const handlePuzzleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setInputs({
      ...inputs,
      [name]: value.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/g, ''),
    })

    localStorage.setItem(
      'crossword',
      JSON.stringify({
        ...inputs,
        [name]: value.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/g, ''),
      }),
    )
  }

  const isFirstRowCorrect = rowMap['firstRow'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })
  const isSecondRowCorrect = rowMap['secondRow'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })
  const isThirdRowCorrect = rowMap['thirdRow'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })
  const isFourthRowCorrect = rowMap['fourthRow'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })
  const isFifthRowCorrect = rowMap['fifthRow'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })
  const isSixthRowCorrect = rowMap['sixthRow'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })
  const isSeventhRowCorrect = rowMap['seventhRow'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })
  const isEighthRowCorrect = rowMap['eighthRow'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })
  const isNinthRowCorrect = rowMap['ninthRow'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })
  const isFirstColumnCorrect = columnMap['firstColumn'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })
  const isSecondColumnCorrect = columnMap['secondColumn'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })
  const isThirdColumnCorrect = columnMap['thirdColumn'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })
  const isFourthColumnCorrect = columnMap['fourthColumn'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })
  const isFifthColumnCorrect = columnMap['fifthColumn'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })
  const isSixthColumnCorrect = columnMap['sixthColumn'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })
  const isSeventhColumnCorrect = columnMap['seventhColumn'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })
  const isEighthColumnCorrect = columnMap['eighthColumn'].every((key) => {
    return inputs[key] !== undefined && inputs[key] === crosswordAnswers[key]
  })

  const handleFinalAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFinalAnswerInputs({
      ...finalAnswerInputs,
      [name]: value.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/g, ''),
    })
  }

  const handleFinalAnswerSubmit = () => {
    const finalAnswer = Object.values(finalAnswerInputs).join('')
    if (
      isFirstRowCorrect &&
      isSecondRowCorrect &&
      isThirdRowCorrect &&
      isFourthRowCorrect &&
      isFifthRowCorrect &&
      isSixthRowCorrect &&
      isSeventhRowCorrect &&
      isEighthRowCorrect &&
      isNinthRowCorrect &&
      isFirstColumnCorrect &&
      isSecondColumnCorrect &&
      isThirdColumnCorrect &&
      isFourthColumnCorrect &&
      isFifthColumnCorrect &&
      isSixthColumnCorrect &&
      isSeventhColumnCorrect &&
      isEighthColumnCorrect &&
      finalAnswer === '아도나이'
    ) {
      setIsAllAnswerCorrectModalOpen(true)
    } else if (
      isFirstRowCorrect &&
      isSecondRowCorrect &&
      isThirdRowCorrect &&
      isFourthRowCorrect &&
      isFifthRowCorrect &&
      isSixthRowCorrect &&
      isSeventhRowCorrect &&
      isEighthRowCorrect &&
      isNinthRowCorrect &&
      isFirstColumnCorrect &&
      isSecondColumnCorrect &&
      isThirdColumnCorrect &&
      isFourthColumnCorrect &&
      isFifthColumnCorrect &&
      isSixthColumnCorrect &&
      isSeventhColumnCorrect &&
      isEighthColumnCorrect &&
      finalAnswer !== '아도나이'
    ) {
      setIsFinalAnswerWrongModalOpen(true)
    } else {
      setIsCrosswordAnswerWrongModalOpen(true)
    }
  }

  const handleAllAnswerCorrectModalClose = () => {
    localStorage.setItem('finalAnswer', JSON.stringify(finalAnswerInputs))
    setIsAllAnswerCorrectModalOpen(false)
    navigate('/updown')
  }

  const handleCrosswordAnswerWrongModalClose = () => {
    setIsCrosswordAnswerWrongModalOpen(false)
  }

  const handleFinalAnswerWrongModalClose = () => {
    setIsFinalAnswerWrongModalOpen(false)
  }

  return (
    <Layout>
      <QuizTitle>가로 세로 퍼즐</QuizTitle>
      <PuzzleContainer>
        {/* 1 번째 행 */}
        <PuzzleWhiteCell $correct={isFirstRowCorrect || isFirstColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_1'}>1.ㄱ.a</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['1']}
            name={'1'}
            id={'puzzle_1'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isFirstRowCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_2'}>2</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['2']}
            name={'2'}
            id={'puzzle_2'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isFirstRowCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_3'}>3</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['3']}
            name={'3'}
            id={'puzzle_3'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isFirstRowCorrect || isSecondColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_4'}>4.b</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['4']}
            name={'4'}
            id={'puzzle_4'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>5</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>6</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isSecondRowCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_7'}>7.ㄴ</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['7']}
            name={'7'}
            id={'puzzle_7'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isSecondRowCorrect || isThirdColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_8'}>8.c</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['8']}
            name={'8'}
            id={'puzzle_8'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isSecondRowCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_9'}>9</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['9']}
            name={'9'}
            id={'puzzle_9'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>10</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>11</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>12</PuzzleNumberText>
        </PuzzleGreyCell>

        {/* 2 번째 행 */}
        <PuzzleWhiteCell $correct={isFirstColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_13'}>13</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['13']}
            name={'13'}
            id={'puzzle_13'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>14</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>15</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isSecondColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_16'}>16</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['16']}
            name={'16'}
            id={'puzzle_16'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>17</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>18</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>19</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isThirdColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_20'}>20</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['20']}
            name={'20'}
            id={'puzzle_20'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>21</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>22</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>23</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>24</PuzzleNumberText>
        </PuzzleGreyCell>

        {/* 3 번째 행 */}
        <PuzzleWhiteCell $correct={isFirstColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_25'}>25</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['25']}
            name={'25'}
            id={'puzzle_25'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>26</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>27</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isSecondColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_28'}>28</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['28']}
            name={'28'}
            id={'puzzle_28'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>29</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>30</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>31</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isThirdColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_32'}>32</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['32']}
            name={'32'}
            id={'puzzle_32'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>33</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>34</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>35</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>36</PuzzleNumberText>
        </PuzzleGreyCell>

        {/* 4 번째 행 */}
        <PuzzleWhiteCell $correct={isFirstColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_37'}>37</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['37']}
            name={'37'}
            id={'puzzle_37'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>38</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>39</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isSecondColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_40'}>40</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['40']}
            name={'40'}
            id={'puzzle_40'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>41</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>42</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isThirdRowCorrect || isFourthColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_43'}>43.ㄷ.d</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['43']}
            name={'43'}
            id={'puzzle_43'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isThirdRowCorrect || isThirdColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_44'}>44</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['44']}
            name={'44'}
            id={'puzzle_44'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isThirdRowCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_45'}>45</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['45']}
            name={'45'}
            id={'puzzle_45'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isThirdRowCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_46'}>46</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['46']}
            name={'46'}
            id={'puzzle_46'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>47</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>48</PuzzleNumberText>
        </PuzzleGreyCell>

        {/* 5 번째 행 */}
        <PuzzleGreyCell>
          <PuzzleNumberText>49</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>50</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>51</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isSecondColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_52'}>52</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['52']}
            name={'52'}
            id={'puzzle_52'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>53</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>54</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isFourthColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_55'}>55</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['55']}
            name={'55'}
            id={'puzzle_55'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>56</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>57</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>58</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>59</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>60</PuzzleNumberText>
        </PuzzleGreyCell>

        {/* 6 번째 행 */}
        <PuzzleGreyCell>
          <PuzzleNumberText>61</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>62</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>63</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isFourthRowCorrect || isSecondColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_64'}>64.ㄹ</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['64']}
            name={'64'}
            id={'puzzle_64'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isFourthRowCorrect || isFifthColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_65'}>65.e</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['65']}
            name={'65'}
            id={'puzzle_65'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>66</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isFourthColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_67'}>67</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['67']}
            name={'67'}
            id={'puzzle_67'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>68</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isFifthRowCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_69'}>69.ㅁ</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['69']}
            name={'69'}
            id={'puzzle_69'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isFifthRowCorrect || isSixthColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_70'}>70.f</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['70']}
            name={'70'}
            id={'puzzle_70'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isFifthRowCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_71'}>71</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['71']}
            name={'71'}
            id={'puzzle_71'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>72</PuzzleNumberText>
        </PuzzleGreyCell>

        {/* 7 번째 행 */}
        <PuzzleGreyCell>
          <PuzzleNumberText>73</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>74</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>75</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>76</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isFifthColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_77'}>77</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['77']}
            name={'77'}
            id={'puzzle_77'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>78</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>79</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>80</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>81</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isSixthColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_82'}>82</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['82']}
            name={'82'}
            id={'puzzle_82'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>83</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>84</PuzzleNumberText>
        </PuzzleGreyCell>

        {/* 8 번째 행 */}
        <PuzzleGreyCell>
          <PuzzleNumberText>85</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isSeventhColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_86'}>86.g</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['86']}
            name={'86'}
            id={'puzzle_86'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>87</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>88</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isSixthRowCorrect || isFifthColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_89'}>89.ㅂ</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['89']}
            name={'89'}
            id={'puzzle_89'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isSixthRowCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_90'}>90</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['90']}
            name={'90'}
            id={'puzzle_90'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isSixthRowCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_91'}>91</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['91']}
            name={'91'}
            id={'puzzle_91'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isSixthRowCorrect || isEighthColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_92'}>92.h</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['92']}
            name={'92'}
            id={'puzzle_92'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>93</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isSeventhRowCorrect || isSixthColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_94'}>94.ㅅ</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['94']}
            name={'94'}
            id={'puzzle_94'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isSeventhRowCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_95'}>95</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['95']}
            name={'95'}
            id={'puzzle_95'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isSeventhRowCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_96'}>96</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['96']}
            name={'96'}
            id={'puzzle_96'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>

        {/* 9 번째 행 */}
        <PuzzleGreyCell>
          <PuzzleNumberText>97</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell
          $correct={isEighthRowCorrect || isSeventhColumnCorrect}
        >
          <PuzzleNumberText htmlFor={'puzzle_98'}>98.ㅇ</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['98']}
            name={'98'}
            id={'puzzle_98'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isEighthRowCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_99'}>99</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['99']}
            name={'99'}
            id={'puzzle_99'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isEighthRowCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_100'}>100</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['100']}
            name={'100'}
            id={'puzzle_100'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isEighthRowCorrect || isFifthColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_101'}>101</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['101']}
            name={'101'}
            id={'puzzle_101'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>102</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>103</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isEighthColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_104'}>104</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['104']}
            name={'104'}
            id={'puzzle_104'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>105</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>106</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>107</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>108</PuzzleNumberText>
        </PuzzleGreyCell>

        {/* 10 번째 행 */}
        <PuzzleGreyCell>
          <PuzzleNumberText>109</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isSeventhColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_110'}>110</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['110']}
            name={'110'}
            id={'puzzle_110'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>111</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>112</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>113</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>114</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>115</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isNinthRowCorrect || isEighthColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_116'}>116.ㅈ</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['116']}
            name={'116'}
            id={'puzzle_116'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isNinthRowCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_117'}>117</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['117']}
            name={'117'}
            id={'puzzle_117'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>118</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>119</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>120</PuzzleNumberText>
        </PuzzleGreyCell>

        {/* 11 번째 행 */}
        <PuzzleGreyCell>
          <PuzzleNumberText>121</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>122</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>123</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>124</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>125</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>126</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>127</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isEighthColumnCorrect}>
          <PuzzleNumberText htmlFor={'puzzle_128'}>128</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['128']}
            name={'128'}
            id={'puzzle_128'}
            autoComplete={'off'}
            onChange={handlePuzzleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>129</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>130</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>131</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>132</PuzzleNumberText>
        </PuzzleGreyCell>
      </PuzzleContainer>

      <FinalAnswerContainer>
        <FinalAnswerCell>
          <FinalAnswerNumberBox htmlFor={'final_1'}>1</FinalAnswerNumberBox>
          <FinalAnswerInput
            type={'text'}
            maxLength={1}
            value={finalAnswerInputs['1']}
            name={'1'}
            id={'final_1'}
            autoComplete={'off'}
            onChange={handleFinalAnswerChange}
          />
        </FinalAnswerCell>
        <FinalAnswerCell>
          <FinalAnswerNumberBox htmlFor={'final_2'}>2</FinalAnswerNumberBox>
          <FinalAnswerInput
            type={'text'}
            maxLength={1}
            value={finalAnswerInputs['2']}
            name={'2'}
            id={'final_2'}
            autoComplete={'off'}
            onChange={handleFinalAnswerChange}
          />
        </FinalAnswerCell>
        <FinalAnswerCell>
          <FinalAnswerNumberBox htmlFor={'final_3'}>3</FinalAnswerNumberBox>
          <FinalAnswerInput
            type={'text'}
            maxLength={1}
            value={finalAnswerInputs['3']}
            name={'3'}
            id={'final_3'}
            autoComplete={'off'}
            onChange={handleFinalAnswerChange}
          />
        </FinalAnswerCell>
        <FinalAnswerCell>
          <FinalAnswerNumberBox htmlFor={'final_4'}>4</FinalAnswerNumberBox>
          <FinalAnswerInput
            type={'text'}
            maxLength={1}
            value={finalAnswerInputs['4']}
            name={'4'}
            id={'final_4'}
            autoComplete={'off'}
            onChange={handleFinalAnswerChange}
          />
        </FinalAnswerCell>
      </FinalAnswerContainer>
      <SubmitButtonContainer>
        <Button onClick={handleFinalAnswerSubmit}>제출</Button>
      </SubmitButtonContainer>

      {isAllAnswerCorrectModalOpen && (
        <Modal onOverlayClick={handleAllAnswerCorrectModalClose}>
          <div>정답입니다.</div>
        </Modal>
      )}

      {isCrosswordAnswerWrongModalOpen && (
        <Modal onOverlayClick={handleCrosswordAnswerWrongModalClose}>
          <div>가로 세로 퍼즐을 다 풀어주세요!</div>
        </Modal>
      )}

      {isFinalAnswerWrongModalOpen && (
        <Modal onOverlayClick={handleFinalAnswerWrongModalClose}>
          <div>틀렸습니다. 다시 입력해주세요.</div>
        </Modal>
      )}
    </Layout>
  )
}

export default QuizPage
