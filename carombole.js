function carombole()
{

  var x = 0.0;
  var y = 0.0;
  var slopeDegree = 0;

  var resultsArray = new Array();
  var numberOfResults = 0;
  var numberOfValidResults = 0;
  var resultSum = 0;
  var numberOfInfiniteBanks = 0;
  var precision = 0.01;

  while (x<1.0)
  {
    while(y<1.0)
    {
      while (slopeDegree < 360)
      {
        var result =  getNumberOfBounces(x,y,slopeDegree, precision, 0);

        if(result == 999)
        {
          numberOfInfiniteBanks++;
        }
        else{
          resultSum += result;
          numberOfValidResults++;
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

  return resultSum/numberOfValidResults;
  console.log("Result: "+resultSum/numberOfValidResults);
  console.log("ResultSum: "+resultSum);
  console.log("numberOfValidResults: "+numberOfValidResults);
  console.log("numberOfInfiniteBanks: "+numberOfInfiniteBanks);

}

function getNumberOfBounces(x, y, slopeDegree, precision, tries)
{
  if(tries > 300)
  {
    return 999;
  }
  var xLocal = x;
  var yLocal = y;
  var stepSize = precision;
  var numberOfBounces = 0;
  var slope = Math.tan(slopeDegree * Math.PI / 180);
  if(isInAPocket(xLocal,yLocal))
  {
    numberOfBounces = Math.floor(Math.abs(Math.floor(x/4))+Math.abs(Math.floor(y/3)));
    return numberOfBounces;
  }
  else{
    //update the location
    xLocal = x+(stepSize)
    yLocal = y+(stepSize*slope);
    tries++;

    return getNumberOfBounces(xLocal,yLocal,slopeDegree, precision, tries);
  }

  
}

function isInAPocket(x, y)
{
  if((Math.abs(x%1) < 0.03) && (Math.abs(y%1)<0.03))
  {
    return true;
  }
  else{
    return false;
  }

}
