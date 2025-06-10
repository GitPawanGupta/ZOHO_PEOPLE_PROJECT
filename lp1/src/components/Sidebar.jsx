// components/Sidebar.jsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import {
  Home,
  BeachAccess,
  EventAvailable,
  AccessTime,
  EmojiEvents,
  Folder,
  MoreHoriz,
  PieChart,
  Star,
} from '@mui/icons-material';

const drawerWidth = 80;

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Leave Tracker', icon: <BeachAccess />, path: '/leave' },
    { text: 'Attendance', icon: <EventAvailable />, path: '/attendance/AttendanceSummary' },
    { text: 'Time Tracker', icon: <AccessTime />, path: '/time' },
    { text: 'Performance', icon: <EmojiEvents />, path: '/performance' },
    { text: 'Files', icon: <Folder />, path: '/file' },
    { text: 'More', icon: <MoreHoriz />, path: '/more' },
    { text: 'Reports', icon: <PieChart />, path: '/reports' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1e2a78',
          color: 'white',
        },
      }}
    >
      {/* Logo */}
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <img
          src="https://static.zohocdn.com/zohopeople/people5/images/ppl_logo.b70dd01cd185414f1793c0a089d331d7.svg"
          alt="Logo"
          style={{ width: 40 }}
        />
      </Box>

      {/* Menu Items */}
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding sx={{ flexDirection: 'column' }}>
            <NavLink
              to={path}
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: 'white',
                width: '100%',
                backgroundColor: isActive ? '#3342a1' : 'transparent',
                borderRadius: 8,
              })}
            >
              <ListItemButton sx={{ display: 'flex', flexDirection: 'column' }}>
                <ListItemIcon sx={{ color: 'white', minWidth: 'auto' }}>{icon}</ListItemIcon>
                <ListItemText
                  primary={text.length > 10 ? text.split(' ')[0] : text}
                  primaryTypographyProps={{
                    fontSize: 12,
                    sx: { textAlign: 'center', color: 'white' },
                  }}
                />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
