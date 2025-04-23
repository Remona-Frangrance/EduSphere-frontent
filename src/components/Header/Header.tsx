import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Button,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { clearToken } from '../../services/authSlice';
import LogoComponent from './LogoSVG';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const token = useSelector((state: RootState) => state.auth.token);
  const userEmail = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Profile menu handlers
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(clearToken());
    handleCloseMenu();
    navigate('/login');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Boards', path: '/boards' },
    { name: 'Contact', path: '/contact' },
  ];

  if (!token) {
    navItems.push({ name: 'Login', path: '/login' });
  }

  console.log('Token:', token);
console.log('User:', userEmail);


  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#fff', color: '#333' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <div style={{ fontWeight: 'bold', fontSize: '1.5rem', cursor: 'pointer' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
            <LogoComponent />
                          Edu<span style={{ color: '#1976d2' }}>Hub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  color="inherit"
                >
                  {item.name}
                </Button>
              ))}

              {token && userEmail?.email && (
                <>
                  <IconButton onClick={handleAvatarClick}>
                    <Avatar sx={{ bgcolor: '#1976d2', width: 32, height: 32 }}>
                      {userEmail.email.charAt(0).toUpperCase()}
                    </Avatar>
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleCloseMenu}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  >
                  
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
              )}
            </div>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton edge="end" color="inherit" onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem
            
              key={item.name}
              component={Link}
              to={item.path}
              onClick={() => setMobileOpen(false)}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
