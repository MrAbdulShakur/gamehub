import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.webp";
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput, { Props } from './SearchInput';

const Navbar = ({ onSearch }:Props) => {
  return (
	<HStack padding="15px">
		<Image src={ logo } boxSize="60px"/>
		<SearchInput onSearch={onSearch} />
		<ColorModeSwitch />
	</HStack>
  )
}

export default Navbar