import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Avatar, Button, Paper, Divider } from '@mui/material';

const Home = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); // time in seconds
  const timerRef = useRef(null);

  // Format time to HH:MM:SS
  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs} : ${mins} : ${secs}`;
  };

  // Start timer
  const CheckIn = () => {
    setIsCheckedIn(true);
    timerRef.current = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
  };

  // Stop timer
  const CheckOut = () => {
    setIsCheckedIn(false);
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current); // Cleanup on unmount
  }, []);

  return (
    <Box sx={{ pt: 12, px: 3, backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      {/* Background Banner */}
      <Box
        sx={{
          height: "200px",
          backgroundImage: 'url(https://images.unsplash.com/photo-1606788075761-5b1cceeb5b18)',
          backgroundSize: "cover",
          borderRadius: 2,
        }}
      />

      <Box sx={{ display: 'flex', gap: 2, mt: -10 }}>
        {/* Left Check-in Card */}
        <Paper sx={{ p: 2, width: 280, textAlign: 'center' }}>
          <Avatar sx={{ width: 80, height: 80, mx: 'auto' }} />
          <Typography variant="h6">Pawan Kumar</Typography>
          <Typography color={isCheckedIn ? "green" : "gray"}>
            {isCheckedIn ? 'In' : 'Out'}
          </Typography>
          <Typography variant="h5" sx={{ my: 1 }}>
            {formatTime(elapsedTime)}
          </Typography>
          <Button
            variant="outlined"
            color={isCheckedIn ? 'error' : 'success'}
            onClick={isCheckedIn ? CheckOut : CheckIn}
          >
            {isCheckedIn ? 'Check-out' : 'Check-in'}
          </Button>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2">Department Members</Typography>
          <Typography variant="caption">No Data Found</Typography>
        </Paper>

        {/* Right Content */}
        <Box flex={1}>
          {/* Tabs Section */}
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
              {['Activities', 'Feeds', 'Profile', 'Approvals', 'Leave', 'Attendance', 'Time Logs', 'Timesheets', 'Jobs', 'Files', 'Career History'].map(label => (
                <Typography
                  key={label}
                  sx={{
                    cursor: 'pointer',
                    fontWeight: label === 'Activities' ? 'bold' : 'normal',
                    borderBottom: label === 'Activities' ? '2px solid blue' : 'none',
                  }}
                >
                  {label}
                </Typography>
              ))}
            </Box>
            <Box sx={{ mt: 1 }}>
              <Typography variant="body1"><strong>Good Afternoon Pawan Kumar</strong></Typography>
              <Typography variant="body2">Have a productive day!</Typography>
            </Box>
          </Paper>

          {/* Work Schedule Section */}
          <Paper sx={{ p: 2, mt: 2 }}>
            <Typography variant="h6">Work Schedule</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>01-Jun-2025 - 07-Jun-2025</Typography>
            <Paper sx={{ p: 2, backgroundColor: "#f1f1f1", mb: 2 }}>
              <Typography>General: 9:00 AM - 6:00 PM</Typography>
              <Typography sx={{ color: "gray", fontSize: 12, mt: 1 }}>Wed 04 - 05:24 Hrs</Typography>
            </Paper>
            <Typography color="orange">You are yet to submit your time logs today!</Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
