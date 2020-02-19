import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

function Availability() {
  return (
    <React.Fragment>
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          <pre>  Hack Security</pre>
        </Typography>
        <Button color="black">View Availability</Button>
        <Button color="inherit">Upload Schedule</Button>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
    <Box align="center" p={10}>
      <table border="1" cellspacing="10px" cellpadding="10px" bgcolor="#cacde6">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>5-11</td>
            <td>-</td>
            <td>5-11</td>
            <td>5-11</td>
            <td>-</td>
            <td>5-11</td>
            <td>5-11</td>
          </tr>
          <tr>
            <td>2</td>
            <td>10-6</td>
            <td>8-7</td>
            <td>-</td>
            <td>9-6</td>
            <td>10-6</td>
            <td>8-7</td>
            <td>-</td>
          </tr>
          <tr>
            <td>3</td>
            <td>5-11</td>
            <td>-</td>
            <td>5-11</td>
            <td>5-11</td>
            <td>-</td>
            <td>5-11</td>
            <td>5-11</td>
          </tr>
          <tr>
            <td>4</td>
            <td>10-6</td>
            <td>8-7</td>
            <td>-</td>
            <td>9-6</td>
            <td>10-6</td>
            <td>8-7</td>
            <td>-</td>
          </tr>
          <tr>
            <td>5</td>
            <td>5-11</td>
            <td>-</td>
            <td>5-11</td>
            <td>5-11</td>
            <td>-</td>
            <td>5-11</td>
            <td>5-11</td>
          </tr>
          <tr>
            <td>6</td>
            <td>10-6</td>
            <td>8-7</td>
            <td>-</td>
            <td>9-6</td>
            <td>10-6</td>
            <td>8-7</td>
            <td>-</td>
          </tr>
          <tr>
            <td>7</td>
            <td>5-11</td>
            <td>-</td>
            <td>5-11</td>
            <td>5-11</td>
            <td>-</td>
            <td>5-11</td>
            <td>5-11</td>
          </tr>
          <tr>
            <td>8</td>
            <td>10-6</td>
            <td>8-7</td>
            <td>-</td>
            <td>9-6</td>
            <td>10-6</td>
            <td>8-7</td>
            <td>-</td>
          </tr>
          <tr>
            <td>9</td>
            <td>5-11</td>
            <td>-</td>
            <td>5-11</td>
            <td>5-11</td>
            <td>-</td>
            <td>5-11</td>
            <td>5-11</td>
          </tr>
          <tr>
            <td>10</td>
            <td>10-6</td>
            <td>8-7</td>
            <td>-</td>
            <td>9-6</td>
            <td>10-6</td>
            <td>8-7</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </Box>
  </React.Fragment>
  )
}

export default Availability;