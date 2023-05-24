import React from 'react';
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { IoLogoGameControllerB } from 'react-icons/io';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Platform } from '../hooks/usePlatforms';

interface Props{
	platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {

	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		ios: MdPhoneIphone,
		andriod: FaAndroid,
		web: BsGlobe,
		other: IoLogoGameControllerB
	}

  return (
	<HStack marginY={1}>
		{platforms.map(platform => <Icon key={platform.id} as={iconMap[platform.slug] || iconMap['other']} color='gray.500' />)}
	</HStack>
  )
}

export default PlatformIconList