import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
	<Card borderRadius={10} overflow='hidden'>
		<Skeleton height='200px' width='300px'/>
		<CardBody>
			<SkeletonText />
		</CardBody>
	</Card>
  )
}

export default GameCardSkeleton