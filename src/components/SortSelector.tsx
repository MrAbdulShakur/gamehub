import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
	onSelectSortOrder: (sorter: string) => void;
	sortOrder: string | null;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }:Props) => {
	const sortOrders = [
		{ value: '', label: 'Relevance'},
		{ value: '-added', label: 'Date added'},
		{ value: 'name', label: 'Name'},
		{ value: '-released', label: 'Release date'},
		{ value: '-metacritic', label: 'Popularity'},
		{ value: '-rating', label: 'Average rating'}
	]
  return (
	<Menu>
		<MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: {sortOrders.find(so => so.value === sortOrder)?.label || 'Relevance'}</MenuButton>
		<MenuList>
			{ sortOrders.map(sortOrder => <MenuItem onClick={() => onSelectSortOrder(sortOrder.value)} key={sortOrder.value} value={sortOrder.value}>{sortOrder.label}</MenuItem>)}
		</MenuList>
	</Menu>
  )
}

export default SortSelector