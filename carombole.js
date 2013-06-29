
function carombole()
{

  var x = 0.0;
  var y = 0.01;
  var slopeDegree = 0;

  var resultsArray = new Array();
  var numberOfResults = 0;
  var resultSum = 0;
  var numberOfInfiniteBanks = 0;

  while (x<1.0)
  {
    while(y<1.0)
    {
      while (slopeDegree < 360)
      {
        var result =  getNumberOfBounces(x,y,slopeDegree, 0);

        if(result == 999)
        {
          numberOfInfiniteBanks++;
        }
        else{
          resultSum += result;
        }
        numberOfResults += 1;

        slopeDegree += 1;
      }
      slopeDegree = 0;
      y+=0.01;
    }
    //reset y, increment x
    y=0.0;
    x+= 0.01;
  }

  return resultSum/numberOfResults;

}

function getNumberOfBounces(x,y,slopeDegree, tries)
{
  if(tries > 30)
  {
    return 999;
  }
  var xLocal = x;
  var yLocal = y;
  var stepSize = 0.1;
  var numberOfBounces = 0;
  var slope = Math.tan(slopeDegree);
  if(isInAPocket(xLocal,yLocal))
  {
    numberOfBounces = Math.floor(x%2+y);
    return numberOfBounces;
  }
  else{
    //update the location
    xLocal = x+(stepSize)
    yLocal = y+(stepSize*slope);
    tries++;

    return getNumberOfBounces(xLocal,yLocal,slopeDegree, tries);
  }

  
}

function isInAPocket(x, y)
{
  if((x%1 == 0) && (y%1==0))
  {
    return true;
  }
  else{
    return false;
  }

}
