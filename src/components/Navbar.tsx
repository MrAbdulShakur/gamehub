import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.webp";
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const Navbar = () => {
  return (
	<HStack padding="15px">
		<Image src={ logo } boxSize="60px"/>
		<SearchInput />
		<ColorModeSwitch />
	</HStack>
  )
}

export default Navbar