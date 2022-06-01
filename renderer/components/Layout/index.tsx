import styled from 'styled-components';
import Navigation from './Navigation';
import Sidebar from './Sidebar';

const GridLayout = styled.div`
  grid-template-columns: 220px 1fr; 
  grid-template-rows: 80px 1fr;
  grid-template-areas:
    "side nav"
    "side page";
`;

const NavigationArea = styled.div`
  grid-area: nav;
`;
const SidebarArea = styled.div`
  grid-area: side;
`;
const PageArea = styled.div`
  grid-area: page;
`;

const Layout = (props) => {
  const { children } = props;
  return <GridLayout className='relative grid w-screen h-screen'>
    <NavigationArea className='border-b border-gray-800'>
      <Navigation />
    </NavigationArea>
    <SidebarArea className='border-r border-gray-800'>
      <Sidebar />
    </SidebarArea>
    <PageArea className='overflow-y-scroll'>
      {children}
    </PageArea>
  </GridLayout>
};

export default Layout;