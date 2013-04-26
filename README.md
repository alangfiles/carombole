carombole
=========

How many banks does it take for a ball to fall.


//imagine a pool table as a series of grids.

def henrySimulator():
  stepsize = 0.001;
  initialLocation = array([0,0])
  inPocket = false;

  for angle in range(0,90):
    ammountOfBanks = 0;
    ballLocation = (0,0);
    while !inPocket:
      ballLocation = ballRolls(ballLocation, angle);
      inPocket = isInPocket(ballLocation);
      if bankedOffWall(ballLocation):
        ammountOfBanks += 1
    print ammountOfBanks;



def ballRolls(currentLocation, angle):
  newLocation = array([0,0]);
  stepSize = 0.001;
  newLocation[0] = currentLocation[0] + stepSize;
  newLocation[1] = currentLocation[1] + math.tan(angle)*stepSize;
  return newLocation;


def isInPocket(location):
  if (location[0]%1 == 0) || location[1]%1 == 0 :
    return true;
  else:
    return false;

def bankedOffWall(ballLocation):
  if ballLocation[0]/3 > 1:
    return true
  if ballLocation[1]/2 > 1:
    return true
  return false
