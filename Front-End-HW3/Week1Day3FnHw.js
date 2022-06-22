function summation(n) {
    var sum = 0;
    if(n > 0)
    {
      for(i=1; i<=n; i++)
      {
        n = n+i;
      }
      return sum;
    }
  }


  function summationEven(n) {
    var sum = 0;
    if(n > 0)
    {
      for(i=2; i<=n; i=i+2)
      {
        n = n+i;
      }
      return sum;
    }
  }
