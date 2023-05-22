import { Badge, Text } from '@chakra-ui/react'
import React from 'react'

interface Props{
	score: number
}

const CriticScoreBadge = ({ score }: Props) => {
	const color = score > 90 ? 'green' : score > 50 ? 'yellow' : '';

  return <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>{score}</Badge>
}

export default CriticScoreBadge