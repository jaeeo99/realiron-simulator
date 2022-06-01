import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div``;
const LogoArea = styled.div``;
const MenuArea = styled.div``;

const MenuLabel = styled.h5``;
const MenuButton = styled.button``;

const Sidebar = () => {
  return <Wrapper className='w-full h-full flex flex-col'>
    <LogoArea className='h-20 flex items-center justify-center'>
      <h1 className='font-bold'>Realiron simulator</h1>
    </LogoArea>
    <MenuArea className='p-2'>
      <MenuLabel className='mt-6 mb-4 lg:mb-3 indent-2 font-medium text-slate-200'>
        League Of Leagends
      </MenuLabel>
      <Link href='/lol/champions'>
        <MenuButton 
          type='button' 
          className='block box-border w-full px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 text-left'>
          Champions
        </MenuButton>
      </Link>
      <Link href='/lol/items'>
        <MenuButton 
          type='button' 
          className='block box-border w-full px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 text-left'>
          Items
        </MenuButton>
      </Link>
      <MenuLabel className='mt-8 mb-4 lg:mb-3 indent-2 font-medium text-slate-200'>
        Teamfight Tactics
      </MenuLabel>
      <Link href='/tft/champions'>
        <MenuButton 
          type='button' 
          className='block box-border w-full px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 text-left'>
          Champions
        </MenuButton>
      </Link>
      <Link href='/tft/items'>
        <MenuButton 
          type='button' 
          className='block box-border w-full px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 text-left'>
          Items
        </MenuButton>
      </Link>
    </MenuArea>
  </Wrapper>;
}

export default Sidebar;