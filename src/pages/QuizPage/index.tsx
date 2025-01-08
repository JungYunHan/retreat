import {
  Layout,
  PuzzleContainer,
  PuzzleGreyCell,
  PuzzleInput,
  PuzzleNumberText,
  PuzzleWhiteCell,
  QuizTitle,
} from './index.styled.ts'
import { useEffect, useState } from 'react'
import {
  columnMap,
  crosswordAnswers,
  rowMap,
} from '../../constants/crossword.ts'

const QuizPage = () => {
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

  useEffect(() => {
    const crossword = localStorage.getItem('crossword')
    if (crossword) {
      setInputs(JSON.parse(crossword))
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })

    localStorage.setItem(
      'crossword',
      JSON.stringify({ ...inputs, [name]: value }),
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

  return (
    <Layout>
      <QuizTitle>가로 세로 퍼즐</QuizTitle>
      <PuzzleContainer>
        {/* 1 번째 행 */}
        <PuzzleWhiteCell $correct={isFirstRowCorrect || isFirstColumnCorrect}>
          <PuzzleNumberText>1.ㄱ.a</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['1']}
            name={'1'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isFirstRowCorrect}>
          <PuzzleNumberText>2</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['2']}
            name={'2'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isFirstRowCorrect}>
          <PuzzleNumberText>3</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['3']}
            name={'3'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isFirstRowCorrect || isSecondColumnCorrect}>
          <PuzzleNumberText>4.b</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['4']}
            name={'4'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>5</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>6</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isSecondRowCorrect}>
          <PuzzleNumberText>7.ㄴ</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['7']}
            name={'7'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isSecondRowCorrect || isThirdColumnCorrect}>
          <PuzzleNumberText>8.c</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['8']}
            name={'8'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isSecondRowCorrect}>
          <PuzzleNumberText>9</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['9']}
            name={'9'}
            onChange={handleInputChange}
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
          <PuzzleNumberText>13</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['13']}
            name={'13'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>14</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>15</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isSecondColumnCorrect}>
          <PuzzleNumberText>16</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['16']}
            name={'16'}
            onChange={handleInputChange}
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
          <PuzzleNumberText>20</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['20']}
            name={'20'}
            onChange={handleInputChange}
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
          <PuzzleNumberText>25</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['25']}
            name={'25'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>26</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>27</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isSecondColumnCorrect}>
          <PuzzleNumberText>28</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['28']}
            name={'28'}
            onChange={handleInputChange}
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
          <PuzzleNumberText>32</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['32']}
            name={'32'}
            onChange={handleInputChange}
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
          <PuzzleNumberText>37</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['37']}
            name={'37'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>38</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>39</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isSecondColumnCorrect}>
          <PuzzleNumberText>40</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['40']}
            name={'40'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>41</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>42</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isThirdRowCorrect || isFourthColumnCorrect}>
          <PuzzleNumberText>43.ㄷ.d</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['43']}
            name={'43'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isThirdRowCorrect || isThirdColumnCorrect}>
          <PuzzleNumberText>44</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['44']}
            name={'44'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isThirdRowCorrect}>
          <PuzzleNumberText>45</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['45']}
            name={'45'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isThirdRowCorrect}>
          <PuzzleNumberText>46</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['46']}
            name={'46'}
            onChange={handleInputChange}
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
          <PuzzleNumberText>52</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['52']}
            name={'52'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>53</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>54</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isFourthColumnCorrect}>
          <PuzzleNumberText>55</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['55']}
            name={'55'}
            onChange={handleInputChange}
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
          <PuzzleNumberText>64.ㄹ</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['64']}
            name={'64'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isFourthRowCorrect || isFifthColumnCorrect}>
          <PuzzleNumberText>65.e</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['65']}
            name={'65'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>66</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isFourthColumnCorrect}>
          <PuzzleNumberText>67</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['67']}
            name={'67'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>68</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isFifthRowCorrect}>
          <PuzzleNumberText>69.ㅁ</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['69']}
            name={'69'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isFifthRowCorrect || isSixthColumnCorrect}>
          <PuzzleNumberText>70.f</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['70']}
            name={'70'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isFifthRowCorrect}>
          <PuzzleNumberText>71</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['71']}
            name={'71'}
            onChange={handleInputChange}
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
          <PuzzleNumberText>77</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['77']}
            name={'77'}
            onChange={handleInputChange}
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
          <PuzzleNumberText>82</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['82']}
            name={'82'}
            onChange={handleInputChange}
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
          <PuzzleNumberText>86.g</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['86']}
            name={'86'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>87</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>88</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isSixthRowCorrect || isFifthColumnCorrect}>
          <PuzzleNumberText>89.ㅂ</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['89']}
            name={'89'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isSixthRowCorrect}>
          <PuzzleNumberText>90</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['90']}
            name={'90'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isSixthRowCorrect}>
          <PuzzleNumberText>91</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['91']}
            name={'91'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isSixthRowCorrect || isEighthColumnCorrect}>
          <PuzzleNumberText>92.h</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['92']}
            name={'92'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>93</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isSeventhRowCorrect || isSixthColumnCorrect}>
          <PuzzleNumberText>94.ㅅ</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['94']}
            name={'94'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isSeventhRowCorrect}>
          <PuzzleNumberText>95</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['95']}
            name={'95'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isSeventhRowCorrect}>
          <PuzzleNumberText>96</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['96']}
            name={'96'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>

        {/* 9 번째 행 */}
        <PuzzleGreyCell>
          <PuzzleNumberText>97</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell
          $correct={isEighthRowCorrect || isSeventhColumnCorrect}
        >
          <PuzzleNumberText>98.ㅇ</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['98']}
            name={'98'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isEighthRowCorrect}>
          <PuzzleNumberText>99</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['99']}
            name={'99'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isEighthRowCorrect}>
          <PuzzleNumberText>100</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['100']}
            name={'100'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isEighthRowCorrect || isFifthColumnCorrect}>
          <PuzzleNumberText>101</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['101']}
            name={'101'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>102</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleGreyCell>
          <PuzzleNumberText>103</PuzzleNumberText>
        </PuzzleGreyCell>
        <PuzzleWhiteCell $correct={isEighthColumnCorrect}>
          <PuzzleNumberText>104</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['104']}
            name={'104'}
            onChange={handleInputChange}
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
          <PuzzleNumberText>110</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['110']}
            name={'110'}
            onChange={handleInputChange}
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
          <PuzzleNumberText>116.ㅈ</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['116']}
            name={'116'}
            onChange={handleInputChange}
          />
        </PuzzleWhiteCell>
        <PuzzleWhiteCell $correct={isNinthRowCorrect}>
          <PuzzleNumberText>117</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['117']}
            name={'117'}
            onChange={handleInputChange}
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
          <PuzzleNumberText>128</PuzzleNumberText>
          <PuzzleInput
            type={'text'}
            maxLength={1}
            value={inputs['128']}
            name={'128'}
            onChange={handleInputChange}
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
    </Layout>
  )
}

export default QuizPage
