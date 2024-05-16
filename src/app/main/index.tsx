import { Grid } from '@radix-ui/themes';
import SidebarWrapper from '../../containers/sidebar-wrapper';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <>
      <Grid columns="200px 1fr" gap="3">
        <SidebarWrapper />
        <Outlet />
      </Grid>
    </>
  );
}

export default Main;
